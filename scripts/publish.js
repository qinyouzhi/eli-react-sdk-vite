const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');

const publishType = 'patch'; // major, minor, patch
const argv = process.argv;
const CI_COMMIT_REF_NAME = argv[2];
const NPM_TOKEN = argv[3];
const GIT_PUSH_TOKEN = argv[4];

// token获取方法：vim ~/.npmrc
const npmrcText = `registry=https://registry.npmjs.org/
home=https://www.npmjs.org
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
`;

async function publish() {
  fs.writeFileSync(path.resolve(os.homedir(), '.npmrc'), npmrcText);
  await execCommand(`npm run release -- --release-as ${publishType} --releaseCommitMessageFormat "chore(release): {{currentTag}} [skip ci] "`);
  await execCommand(`npm publish --tag ${CI_COMMIT_REF_NAME === 'main' ? 'latest' : 'beta'}`);
  await execCommand(`git push https://gitlab-ci-token:${GIT_PUSH_TOKEN}@项目地址.git/ HEAD:${CI_COMMIT_REF_NAME} --follow-tags`);
}

async function execCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(stdout);
    });
  });
}

publish();

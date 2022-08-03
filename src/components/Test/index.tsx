import React, { FC } from 'react';

interface TestProps {
  name: string;
}

const Test: FC<TestProps> = (props: { name: any }) => {
  return <div>{props.name}</div>;
};

export default Test;

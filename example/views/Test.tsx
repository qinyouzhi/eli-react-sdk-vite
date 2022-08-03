import React, { FC } from 'react';
import { Test } from '../../src';

const Question: FC = () => {
  return (
    <div style={{ height: '100%', padding: 10, overflow: 'auto' }}>
      <Test name="hello word" />
    </div>
  );
};

export default Question;

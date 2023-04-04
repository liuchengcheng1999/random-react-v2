import React, { useState } from 'react';
// @ts-ignore
import Input from '../input';

const Demo = () => {
  const [n, setN] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setN(e.target.value);
  };
  return (
    <>
      {n}
      <br />
      <Input value={n} onChange={onChange} />
    </>
  );
};

export default Demo;
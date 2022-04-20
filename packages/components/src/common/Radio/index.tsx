/** @format */

import { Radio as AntDradio } from 'antd';

const Radio: React.FC<{ value: string; children: React.ReactNode }> = ({
  children,
  value,
}) => {
  return <AntDradio value={value}>{children}</AntDradio>;
};

export default Radio;

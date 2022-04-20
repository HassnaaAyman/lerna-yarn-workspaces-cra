/** @format */

import { Input } from 'antd';

const SearchInput: React.FC<{
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}> = ({ handleChange, placeholder }) => {
  return (
    <Input
      name='description'
      type='text'
      style={{ width: '40%' }}
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default SearchInput;

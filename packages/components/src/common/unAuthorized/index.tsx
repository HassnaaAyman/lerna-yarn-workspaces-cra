/** @format */

import React, { FunctionComponent } from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Unauthorized: FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledResult
      status='403'
      title='403'
      subTitle='Sorry, you are not authorized to access this page.'
      extra={
        <Button
          size='large'
          onClick={() => navigate('/login')}
          className='table'
          type='primary'>
          Back To Login
        </Button>
      }
    />
  );
};
export default Unauthorized;

export const StyledResult = styled(Result)`
  .ant-result-extra {
    width: 15%;
    margin: 15px auto;
  }
`;

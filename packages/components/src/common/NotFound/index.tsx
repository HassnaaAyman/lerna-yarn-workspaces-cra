/** @format */

import { FunctionComponent } from 'react';
import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const NotFound: FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Result
      status='404'
      title='404'
      subTitle={'Sorry, the page you visited does not exist.'}
      extra={
        <Button size='large' onClick={() => navigate('/home')} type='primary'>
          Back To Home
        </Button>
      }
    />
  );
};
export default NotFound;

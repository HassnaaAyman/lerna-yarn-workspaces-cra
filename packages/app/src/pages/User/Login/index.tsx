/** @format */

import { GoogleLogin } from 'react-google-login';
import { useNavigate, Navigate } from 'react-router-dom';
import '../../../App.css';

const Login = () => {
  const navigate = useNavigate();
  const isAuthed = !!localStorage.getItem('access_token');

  const handleFailure = (result: any) => {
    console.log({ result });
  };

  const handleLogin = async (googleData: any) => {
    localStorage.setItem('access_token', googleData.accessToken);
    navigate('/');
  };

  if (isAuthed) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello Lucifer</h1>
        <GoogleLogin
          // @ts-ignore
          clientId='1032289596403-3g6c8fgl8otfd8i892blccv8r83jtgdh.apps.googleusercontent.com'
          buttonText='Log in with Google'
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
        />
      </header>
    </div>
  );
};

export default Login;

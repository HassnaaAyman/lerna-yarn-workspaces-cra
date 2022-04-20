/** @format */

import { IconsWrapper, StyledP } from './style';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };
  return (
    <IconsWrapper onClick={handleLogout}>
      <LogoutOutlined style={{ color: 'white' }} />
      <StyledP>Logout</StyledP>
    </IconsWrapper>
  );
};

export default Logout;

/** @format */

import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 6%;
`;

export const StyledP = styled.p`
  color: white;
  margin: 0px;
`;

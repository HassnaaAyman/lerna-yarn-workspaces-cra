/** @format */

import { Card, Row } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 70px auto;
`;

export const StyledCard = styled(Card)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  cursor: pointer;
  text-align: center;
  font-size: 20px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const StyledRow = styled(Row)`
  margin-bottom: 30px;
`;

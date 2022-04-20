/** @format */

import { Table } from 'antd';
import styled from 'styled-components';

export const StyledTable = styled(Table)`
  .ant-table {
    overflow-x: scroll;
  }
  margin-bottom: 40px;
`;

export const ActionsContainer = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

/** @format */

import { Row, Table as AntDTable } from 'antd';
import styled from 'styled-components';

export const Head = styled.h1`
  font-size: 24px;
`;

export const SubHead = styled.small`
  color: #777;
  font-size: 15px;
`;
export const Section = styled.section`
  min-height: 250px;
  margin-right: auto;
  margin-left: auto;
`;

export const BoxInfo = styled.div`
  border-top-color: 495867;
  position: relative;
  border-radius: 3px;
  background: #fff;
  border-top: 3px solid #d2d6de;
  margin-bottom: 20px;
  width: 100%;
`;

export const BoxHeader = styled.div`
  border-bottom: 1px solid #f4f4f4;
  padding: 15px 10px;
  color: #444;
  display: block;
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const BoxTitle = styled.h3`
  line-height: 30px;
  font-size: 18px;
  margin-right: 20px;
`;

export const Boxbody = styled.div`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 10px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Table = styled.table`
width: 100%;
max-width: 100%;
margin-bottom: 20px;
.table>tbody>tr>th{
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
};
.table-striped>tbody>tr:nth-of-type(odd) {
    background-color: #f9f9f9;
}
}
`;

export const TableRow = styled.tr`
  display: table-row;
  .table-striped > tbody > tr:nth-of-type(odd) {
    background-color: #f9f9f9;
  }
`;

export const StyledRow = styled(Row)`
  overflow-x: scroll;
  margin-bottom: 40px;
`;

export const StyledTable = styled(AntDTable)`
  .ant-table {
    overflow-x: scroll;
  }
  margin-bottom: 40px;
`;

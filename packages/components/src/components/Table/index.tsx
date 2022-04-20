/** @format */

import { OrdersData } from '@lucifer/infrastructure/interfaces/orders.interface';

const Table = (props: { tableData: OrdersData }) => {
  const { tableData } = props;

  const returnTableData = () => {
    return Object.entries(tableData).map((e, index) => {
      return (
        <>
          <thead key={index}>
            <tr>
              <th>{e[0]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{e[1]}</td>
            </tr>
          </tbody>
        </>
      );
    });
  };

  return (
    <table className='table table-striped table-hover table-sm'>
      {returnTableData()}
    </table>
  );
};

export default Table;

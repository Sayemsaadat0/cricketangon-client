import React, { FC } from 'react';

export type DashboardTableColumn = {
  title: string;
  dataKey: string;
  row: (data: any, rowIndex: number) => React.ReactNode;
};

export type DashboardTableProps = {
  columns: DashboardTableColumn[];
  data: any[];
  isLoading: boolean;
};

const DashboardTable: FC<DashboardTableProps> = ({ columns, data, isLoading }) => {
  return (
    <div className="overflow-x-auto max-w-full border rounded-[10px] overflow-hidden">
      <div className="w-full">
        <table className="w-full text-left">
          <thead className="sticky z-10 top-0 w-full h-fit bg-oc-primary-1-50">
            <tr className=''>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-3 text-oc-primary-1-500 text-w-paragraph-regular-20 py-3 tableAction  ">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="w-full bg-oc-white-50">
            {!isLoading &&
              data &&
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className='border-b '>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="px-3  text-w-paragraph-regular-20 tableAction py-3  break-words ">
                      {column.row(row, rowIndex)}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        {isLoading && (
          <div className="flex justify-center items-center h-10 my-6">
            <p>Loading...</p>
          </div>
        )}
        {!isLoading && data.length === 0 && (
          <div className="flex justify-center items-center my-6">
            <p>No Data Available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardTable;

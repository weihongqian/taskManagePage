import { IColumn, ITableConfig } from "../interface";

export default function Table(props: any) {
  const { column = [{}], dataSource = [{}] } = props;
  return (
    <table border="5">
      <thead>
        <tr key="heaeder-tr">
          {column.map((item: IColumn) => {
            const { name, width } = item;
            return (
              <th key={name} style={{ width: `${width || 150}px` }}>
                {name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((item: ITableConfig, index: number) => {
          return (
            <tr key={item.id || index}>
              {column.map((headerCode: IColumn) => {
                const { code, cell } = headerCode;
                const value = item[code];
                if (cell) {
                  return <td key={code}>{cell(value, index, item)}</td>;
                }
                return <td key={code}>{value}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

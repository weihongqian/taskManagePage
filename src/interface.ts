export interface IColumn {
  name: string;
  code: string;
  cell?: (value: any, index: number, record: any) => {};
  width?: number;
}

export interface ITableConfig {
  id: number;
  name: string;
  status: string;
}

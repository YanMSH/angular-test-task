export interface  IAllRecords {
  total: number;
  data: IRecord[];
}

export interface IRecord {
  _id: string;
  amount: number;
  type: RecordType;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface IFilteredRecords {
  [key: string]: IRecord[];
}

export type RecordType = 'income' | 'outcome' | 'loan' | 'investment';

import {
  Result,
  YesOrNo,
} from '#/app/appTypes';

export interface DAO<T> {
  getById: (id: string) => Promise<Result<T>>
  getAll: () => Promise<Result<T[]>>
  insert: (data: T) => Promise<YesOrNo>
  update: (data: Partial<T>) => Promise<YesOrNo>
  delete: (id: string) => Promise<YesOrNo>
}

// export interface DAO<T> {
//   getById: (id: string) => Promise<T>
//   getAll: () => Promise<T[]>
//   insert: (data: T) => Promise<void>
//   update: (data: Partial<T>) => Promise<void>
//   delete: (id: string) => Promise<void>
// }

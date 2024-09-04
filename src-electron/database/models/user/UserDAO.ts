import {
  Result,
  YesOrNo,
} from '#/app/appTypes';
import { DAO } from '#/database/DAO';
import { DBConnection } from '#/database/DBConnection';
import { SQliteDB } from '#/database/driver/SQliteDB';
import { sleep } from '#/helpers/sleep';

import { User } from './User';

const defaultUser = new User('1', 'Marcio', 'marcio@gmail.com')
const TABLE = 'users'
export class UserDAO implements DAO<User> {
  private con: SQliteDB

  constructor() {
    // super();
    this.con = DBConnection.getInstance()
  }

  async getById(id: string): Promise<Result<User>> {
    await sleep()
    console.log(id)
    return { ok: defaultUser, err: '' }
  }

  async getAll(): Promise<Result<User[]>> {
    await sleep()
    return { ok: [defaultUser], err: '' }
  }

  async insert({ id, name, email }: User): Promise<YesOrNo> {
    // const row = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
    const stmt = this.con.db.prepare(`INSERT INTO ${TABLE} (id,name,email)`)
    const info = stmt.run(id, name, email);
    console.log(info.changes); // => 1

    await sleep()

    return 'no'
  }

  async update(data: Partial<User>): Promise<YesOrNo> {
    await sleep()
    console.log(data)
    return 'no'
  }

  async delete(id: string): Promise<YesOrNo> {
    await sleep()
    console.log(id)
    return 'no'
  }
}

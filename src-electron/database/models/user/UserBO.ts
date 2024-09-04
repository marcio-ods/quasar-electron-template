import {
  Result,
  YesOrNo,
} from '#/app/appTypes';
import { DAO } from '#/database/DAO';

import { User } from './User';
import { UserDAO } from './UserDAO';

export class UserBO {
  private dao: DAO<User>
  constructor() {
    this.dao = new UserDAO();
  }

  public validate(entity: User) {
    if (typeof entity.email !== 'string' || entity.email.trim() === '')
      throw new Error('Email não informado')
    //
  }

  async getById(id: string): Promise<Result<User>> {
    const user = await this.dao.getById(id)
    if (user.err)
      throw new Error('Email não informado')

    return { ok: user.ok, err: '' }
  }

  async getAll(): Promise<Result<User[]>> {
    const users = await this.dao.getAll()
    if (users.err)
      throw new Error('Usuário não encontrado')

    return { ok: users.ok, err: '' }
  }

  async insert(data: User): Promise<YesOrNo> {
    const res = await this.dao.insert(data)
    if (res === 'no')
      throw new Error('Falha ao criar usuário')
    return 'no'
  }

  async update(data: Partial<User>): Promise<YesOrNo> {
    const res = await this.dao.update(data)
    if (res === 'no')
      throw new Error('Falha ao criar usuário')
    return 'no'
  }

  async delete(id: string): Promise<YesOrNo> {
    const res = await this.dao.delete(id)
    if (res === 'no')
      throw new Error('Falha ao criar usuário')
    return 'no'
  }


}

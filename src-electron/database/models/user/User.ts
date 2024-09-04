export type TUser = {
  id: string
  name: string
  email: string
}

export class User {

  constructor(private _id: string,
    private _name: string,
    private _email: string) {
    // super()
  }

  public get id() {

    return this._id
  }

  public set id(v: string) {
    this._id = v
  }

  public get name() {
    return this._name
  }

  public set name(v: string) {
    this._id = v
  }

  public get email() {
    return this._email
  }

  public set email(v: string) {
    this._id = v
  }

}

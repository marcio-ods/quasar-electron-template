import { SQliteDB } from './driver/SQliteDB';

export class DBConnection {
  // private static con: DBConnection;
  // private static con: string;
  private static con: SQliteDB | undefined = undefined;

  private constructor() {
    // DBConnection.con = ''
  }

  public static getInstance(): SQliteDB {
    if (!this.con) this.con = new SQliteDB()
    return this.con
  }





}

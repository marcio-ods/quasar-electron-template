import {
  DATA_FOLDER,
  DB_FOLDER,
  DB_NAME,
} from '#/config/setup';
// import { join } from 'path';
import { resourcesPath } from '#/helpers/resourcesPath';
import SQlite, { Database } from 'better-sqlite3';

// CREATE TABLE IF NOT EXISTS users('name' varchar, 'email' varchar, 'id' varchar PRIMARY KEY );
const schemas: { table: string, values: string }[] = [{
  table: 'user',
  values: "'name' varchar, 'email' varchar, 'id' varchar PRIMARY KEY"
}, {
  table: 'cats',
  values: "'name' varchar, 'age' number"
},
  // "CREATE TABLE IF NOT EXISTS cats('name' varchar, 'age' number );"

]

export class SQliteDB {
  db: Database

  constructor() {
    this.db = new SQlite(resourcesPath(DATA_FOLDER, DB_FOLDER, DB_NAME), { verbose: console.log });
    this.init()
  }

  private init() {
    this.db.pragma('journal_mode = WAL');

    // const createTable = "CREATE TABLE IF NOT EXISTS users('name' varchar, 'surname' varchar, 'date_of_birth' DATE DEFAULT, 'email' varchar, 'username' varchar PRIMARY KEY, 'password' varchar );"
    // const createTable = "CREATE TABLE IF NOT EXISTS cats('name' varchar, 'age' number );"

    for (const { table, values } of schemas)
      this.db.exec(`CREATE TABLE IF NOT EXISTS ${table}(${values})`);

    // const insert = this.db.prepare('INSERT INTO cats (name, age) VALUES (@name, @age)');

    // const insertMany = this.db.transaction((cats) => {
    //   for (const cat of cats) insert.run(cat);
    // });

    // insertMany([
    //   { name: 'Joey2', age: 2 },
    //   { name: 'Sally2', age: 4 },
    //   { name: 'Junior2', age: 1 },
    // ]);

    // console.log('erroDB')
    // return this
  }



}
// export class SQliteDB {
//   private static db: SQliteDB
//   private constructor() {
//     this.init().catch(e => {
//       console.log('erroDB', e)
//     })
//   }

//   async init() {
//     console.log('erroDB')
//   }

//   static getInstance() {
//     if (this.db === null) this.db = new SQliteDB()
//     return this.db
//   }

// }

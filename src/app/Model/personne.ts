export class Personne {
  id: number;
  name: string;
  firstname: string;
  age: number;
  job: string;
  cin: number;
  path: string;

  constructor(id: number = 0, name: string = '', firstname: string = '',
              age: number = 0, job: string = '', cin: number = 0, path: string = '') {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.job = job;
    this.cin = cin;
    this.path = path;
  }
}


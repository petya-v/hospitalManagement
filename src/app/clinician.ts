export class Clinician {
  id?: number;
  name: string;
  surname: string;
  specialities: number[];

  constructor(id: number, name: string, surname: string, specialities: number[]) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.specialities = specialities;
  }
}

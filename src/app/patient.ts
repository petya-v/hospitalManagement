import {Clinician} from './clinician';

export class Patient {
  id?: number;
  name: string;
  surname: string;
  assignedClinicians: number[];
  conditions: number[];

  constructor(id: number, name: string, surname: string, assignedClinicians: number[], conditions: number[]) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.assignedClinicians = assignedClinicians;
    this.conditions = conditions;
  }
}

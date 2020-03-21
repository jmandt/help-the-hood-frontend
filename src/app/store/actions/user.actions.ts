import { User } from 'src/app/models';

export namespace UserAction {

  export class Set {
    static readonly type = '[User] Set';
    constructor(public user: User) {}
  }

}

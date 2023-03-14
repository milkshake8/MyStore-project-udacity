export class User {
  fullname: string;
  address: string;
  creditCard?: number;

  constructor() {
    (this.fullname = ''), (this.address = ''), (this.creditCard = 1);
  }
}

import BaseDomainClass from 'shared/1.domain/BaseDomainClass';
import IdentificationInterface from '../interfaces/IdentificationInterface';
import PhoneInterface from '../interfaces/PhoneInterface';
import UserInterface from '../interfaces/UserInterface';

export default class User extends BaseDomainClass {
  email: string;
  firstName: string;
  lastName: string;
  identification: IdentificationInterface;
  phone: PhoneInterface;
  createdAt: Date;
  password: string;

  constructor(args: UserInterface) {
    super();
    this.email = args.email;
    this.firstName = args.firstName;
    this.lastName = args.lastName;
    this.identification = args.identification;
    this.phone = args.phone;
    this.password = args.password;
    this.createdAt = new Date();
  }
}

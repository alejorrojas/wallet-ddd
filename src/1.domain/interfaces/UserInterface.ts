import IdentificationInterface from "./IdentificationInterface";
import PhoneInterface from "./PhoneInterface";

export default interface UserInterface {
  email: string;
  firstName: string;
  lastName: string;
  identification: IdentificationInterface;
  phone: PhoneInterface;
  password: string;
  createdAt?: Date;
}

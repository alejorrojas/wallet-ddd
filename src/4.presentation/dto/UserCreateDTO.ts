import { IsDefined, ValidateNested } from 'class-validator';
import { IdentificationDTO } from './IdentificationDTO';
import { Type } from 'class-transformer';
import { PhoneDTO } from './PhoneDTO';

export default class UserCreateDTO {
  @IsDefined()
  email: string;

  @IsDefined()
  firstName: string;

  @IsDefined()
  lastName: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => IdentificationDTO)
  identification: IdentificationDTO;

  @IsDefined()
  @ValidateNested()
  @Type(() => PhoneDTO)
  phone: PhoneDTO;

  @IsDefined()
  password: string;
}

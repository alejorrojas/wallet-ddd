import { IsDefined, IsNumber } from 'class-validator';

export class PhoneDTO {
  @IsDefined()
  @IsNumber()
  countryCode: number;

  @IsDefined()
  @IsNumber()
  areaCode: number;
  
  @IsDefined()
  @IsNumber()
  phone: number;
}

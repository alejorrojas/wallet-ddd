import { IsEnum, IsNumber } from 'class-validator';
import IdentificationTypeEnum from 'src/1.domain/enums/IdentificationTypesEnum';

export class IdentificationDTO {
  @IsEnum(IdentificationTypeEnum)
  type: IdentificationTypeEnum;

  @IsNumber()
  value: number;
}

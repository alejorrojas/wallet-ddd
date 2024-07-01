import IdentificationTypeEnum from '../enums/IdentificationTypesEnum';

export default interface IdentificationInterface {
  type: IdentificationTypeEnum;
  value: number;
}

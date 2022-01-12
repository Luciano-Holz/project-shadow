import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { CREATE, JoiSchema, JoiSchemaOptions } from 'nestjs-joi';
import { MinLength } from 'class-validator';
import { cpfRegex } from 'src/utils/regex';

@JoiSchemaOptions({
  allowUnknown: false,
})
export class CreateWalletDto {
  @ApiProperty()
  @JoiSchema(Joi.string().trim().min(7).max(30).required())
  @JoiSchema([CREATE], Joi.string().trim().min(7).max(30).required())
  @MinLength(7)
  name: string;

  @ApiProperty()
  @JoiSchema(
    Joi.string()
      .trim()
      .regex(cpfRegex)
      .message('"cpf" has an Invalid format, it should be xxx.xxx.xxx-xx')
      .required(),
  )
  @JoiSchema(
    [CREATE],
    Joi.string()
      .trim()
      .regex(cpfRegex)
      .message('"cpf" has an Invalid format, it should be xxx.xxx.xxx-xx')
      .required(),
  )
  cpf: string;

  @ApiProperty()
  @JoiSchema(Joi.string().trim().required())
  @JoiSchema([CREATE], Joi.string().trim().required())
  birthdate: string;
}

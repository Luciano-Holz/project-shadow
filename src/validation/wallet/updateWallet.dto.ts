import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema, JoiSchemaOptions, UPDATE } from 'nestjs-joi';
import { MinLength } from 'class-validator';
import { cpfRegex } from 'src/utils/regex';

@JoiSchemaOptions({
  allowUnknown: false,
})
export class UpdateWalletDto {
  @ApiProperty()
  @JoiSchema(Joi.string().trim().min(7).max(30).optional())
  @JoiSchema([UPDATE], Joi.string().trim().min(7).max(30).optional())
  @MinLength(7)
  name: string;

  @ApiProperty()
  @JoiSchema(
    Joi.string()
      .trim()
      .regex(cpfRegex)
      .message('"cpf" has an Invalid format, it should be xxx.xxx.xxx-xx')
      .optional(),
  )
  @JoiSchema(
    [UPDATE],
    Joi.string()
      .trim()
      .regex(cpfRegex)
      .message('"cpf" has an Invalid format, it should be xxx.xxx.xxx-xx')
      .optional(),
  )
  cpf: string;

  @ApiProperty()
  @JoiSchema(Joi.string().trim().optional())
  @JoiSchema([UPDATE], Joi.string().trim().optional())
  birthdate: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class AddressDto {
  @ApiProperty()
  @JoiSchema(Joi.string())
  @IsString()
  address: string;
}

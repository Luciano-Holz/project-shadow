import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequestError extends HttpException {
  constructor(message = null) {
    super(
      `it's a bad request ${message ? ' ' + message : ''}`,
      HttpStatus.BAD_REQUEST,
    );
  }
}

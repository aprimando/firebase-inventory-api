import {HttpException as HttpExceptionType} from '../types';

export const HttpException = (
    function(
        this: HttpExceptionType,
        code: number,
        message: string,
        errors?: string[],
    ) {
      this.code = code;
      this.message = message;
      this.errors = errors;
    } as unknown
) as {
  new (
      code: number,
      message: string,
      errors?: string[],
  ): HttpExceptionType,
};

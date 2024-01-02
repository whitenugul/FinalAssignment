import { CustomError } from "./custom-error.js";

export class BadRequestError extends CustomError {
  constructor(data){
    super(400, 'Bad Request Error', data);
  }
}
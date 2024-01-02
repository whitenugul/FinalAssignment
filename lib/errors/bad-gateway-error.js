import { CustomError } from "./custom-error.js";

export class BadGatewayError extends CustomError {
  constructor(data){
    super(502, 'Bad Gateway Error', data);
  }
}
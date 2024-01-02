import { CustomError } from "./custom-error.js";

export class NotFoundError extends CustomError {
  constructor(data){
    super(404, 'Not Found Error', data);
  }
}
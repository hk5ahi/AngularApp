import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  showLog(message:string){
    console.log(message);
  }
}

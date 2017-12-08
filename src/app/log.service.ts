import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  private _count = 0;

  constructor() { }

  public info(message: string): void {
    console.log('info', message, this._count);
    this._count++;
  }

}

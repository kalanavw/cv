import {Injectable} from '@angular/core';
import {Config} from '../model/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {
  }

  private _CONFIG: Config;

  get CONFIG(): Config {
    return this._CONFIG;
  }

  set CONFIG(value: Config) {
    this._CONFIG = value;
  }
}

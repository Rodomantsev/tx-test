import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Config {

  // TODO: нужно переделать

  readonly IS_MOCK_API:       boolean = false;
  readonly API_ENDPOINT:      string  = 'http://localhost:3000/';
  readonly publicHref:        string  = 'http://localhost:4200/';
  readonly adminHref:         string  = 'http://localhost:4300/';
  readonly API_MOCK_ENDPOINT: string  = 'mock-domain/';
  readonly api:               string  = this.IS_MOCK_API ? this.API_MOCK_ENDPOINT : this.API_ENDPOINT;

}

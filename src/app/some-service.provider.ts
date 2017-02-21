import { Http } from '@angular/http';
import { OpaqueToken } from '@angular/core';
import { SomeService } from './some-service.service';

export function SomeServiceFactory(http: Http) {
  return new SomeService(http, 'angular', 'angular');
}
export let SomeServiceProvider = {
  provide: SomeService,
  useFactory: SomeServiceFactory,
  deps: [Http]
};
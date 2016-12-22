import 'angular2-universal-polyfills';
import { platformUniversalDynamic } from 'angular2-universal';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

const platform = platformUniversalDynamic();

if (process.env.ENV === 'production') {
  enableProdMode();
}

platform.bootstrapModule(AppModule);

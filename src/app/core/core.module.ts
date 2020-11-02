import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NoAuthGuard } from './guards/no-auth.guard';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    NoAuthGuard,
  ]
})
export class CoreModule {
}

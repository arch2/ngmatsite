import { NgModule } from '@angular/core';
import { IMPORTED_MODULES, COMPONENT_DECLARATIONS, PROVIDERS_DECLARATIONS, COMPONENT_EXPORTS, BOOTSTRAP_DECLARATIONS } from './main.common';

@NgModule({
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  imports: [
    ...IMPORTED_MODULES
  ],
  providers: [
    ...PROVIDERS_DECLARATIONS
  ],
  exports: [
    ...COMPONENT_EXPORTS
  ],
  bootstrap: [
    ...BOOTSTRAP_DECLARATIONS
  ]
})
export class MainModule { }

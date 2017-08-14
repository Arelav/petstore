import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { ProductComponent } from '../product/product.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { ProductsComponent } from '../products/products.component';

@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule,
    MaterialComponentsModule,
  ],
  declarations: [
    FrontComponent,
    ProductComponent,
    ProductsComponent,
  ],
})
export class FrontModule {
}

import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FrontModule } from './front/front.module';
import { StoreService } from './store.service';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreEffects } from './store.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FrontModule,
    AppRoutingModule,
    MaterialComponentsModule,
    StoreModule.forRoot({store: storeReducer}),
    EffectsModule.forRoot([StoreEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {
}

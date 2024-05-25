import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/auth.service';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers} from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [
    provideAnimationsAsync(), AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

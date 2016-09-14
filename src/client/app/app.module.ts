import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SoundcloudModule } from './soundcloud/soundcloud.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ToasterModule,
    RouterModule.forRoot(routes),
    AboutModule,
    HomeModule,
    SoundcloudModule,
    SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }

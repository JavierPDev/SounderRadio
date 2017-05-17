import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster/lib/toaster-config';


@Component({
  moduleId: module.id,
  selector: 'sr-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  constructor() {
  }

  public toasterConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right'
  });
}

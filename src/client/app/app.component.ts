import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster/lib/toaster-config';

import { Config } from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'sp-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  public toasterConfig: ToasterConfig = new ToasterConfig({ positionClass: 'toast-bottom-right' });
  constructor() {
  }
}

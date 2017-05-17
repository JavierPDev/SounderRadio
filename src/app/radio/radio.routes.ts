import { Route } from '@angular/router';

import { RadioComponent } from './index';

export const RadioRoutes: Route[] = [
  {
    path: 'radio/:trackId',
    component: RadioComponent
  }
];



import { Route } from '@angular/router';

import { SearchPageComponent } from './search-page.component';
import { RadioPageComponent } from './radio-page.component';

export const SoundcloudRoutes: Route[] = [
  {
    path: 'search/:searchTerm',
    component: SearchPageComponent
  },
  {
    path: 'radio/:trackId',
    component: RadioPageComponent
  }
];


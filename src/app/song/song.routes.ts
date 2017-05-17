import { Route } from '@angular/router';

import { SearchComponent } from './search.component';

export const SongRoutes: Route[] = [
  {
    path: 'search/:searchTerm',
    component: SearchComponent
  }
];


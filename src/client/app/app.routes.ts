import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { HistoryRoutes } from './history/history.routes';
import { FavoritesRoutes } from './favorites/favorites.routes';
import { SoundcloudRoutes } from './soundcloud/soundcloud.routes';

export const routes: Routes = [
  ...HomeRoutes,
  ...HistoryRoutes,
  ...FavoritesRoutes,
  ...AboutRoutes,
  ...SoundcloudRoutes
];

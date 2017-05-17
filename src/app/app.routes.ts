import { Routes } from '@angular/router';

import { AboutRoutes } from './about/about.routes';
import { HomeRoutes } from './home/home.routes';
import { HistoryRoutes } from './history/history.routes';
import { FavoritesRoutes } from './favorites/favorites.routes';
import { SongRoutes } from './song/song.routes';
import { RadioRoutes } from './radio/radio.routes';

export const routes: Routes = [
  ...HomeRoutes,
  ...HistoryRoutes,
  ...FavoritesRoutes,
  ...AboutRoutes,
  ...SongRoutes,
  ...RadioRoutes
];

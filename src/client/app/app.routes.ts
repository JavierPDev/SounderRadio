import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { HistoryRoutes } from './history/history.routes';
import { SoundcloudRoutes } from './soundcloud/soundcloud.routes';

export const routes: Routes = [
  ...HomeRoutes,
  ...HistoryRoutes,
  ...AboutRoutes,
  ...SoundcloudRoutes
];

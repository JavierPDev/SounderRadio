import { join } from 'path';

import { SeedConfig } from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  SOUNDCLOUD_CLIENT_ID = '';

  constructor() {
    super();
    this.APP_TITLE = 'Sounder Radio';

    // Dependencies
		this.SYSTEM_CONFIG_DEV.paths['moment'] =
      `node_modules/moment/moment.js`;

		this.SYSTEM_CONFIG_DEV.paths['angular2-moment'] =
      `node_modules/angular2-moment/index.js`;

		this.SYSTEM_CONFIG_DEV.paths['angular2-toaster'] =
      `node_modules/angular2-toaster/angular2-toaster.js`;


    this.SYSTEM_BUILDER_CONFIG.packages['moment'] = {
			main: 'moment.js',
			defaultExtension : 'js'
    }

    this.SYSTEM_BUILDER_CONFIG.packages['angular2-moment'] = {
			main: 'index.js',
			defaultExtension : 'js'
    }

    this.SYSTEM_BUILDER_CONFIG.packages['angular2-toaster'] = {
			main: 'angular2-toaster.js',
			defaultExtension : 'js'
    }


    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      {src: 'angular2-toaster/lib/toaster.css', inject: true},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}

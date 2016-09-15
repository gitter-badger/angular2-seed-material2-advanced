import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedAdvancedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });

    this.APP_TITLE = 'Driftlog';

    this.ENABLE_SCSS = true;

    const components = [
      'button',
      'card',
      'checkbox',
      'dialog',
      'grid-list',
      'icon',
      'input',
      'list',
      'menu',
      'progress-bar',
      'progress-circle',
      'radio',
      'sidenav',
      'slider',
      'slide-toggle',
      'button-toggle',
      'tabs',
      'toolbar',
      'tooltip'
    ];

    this.SYSTEM_CONFIG['packageConfigPaths'] = [
      `${this.APP_BASE}node_modules/*/package.json`,
      `${this.APP_BASE}node_modules/@ngrx/*/package.json`,
      `${this.APP_BASE}node_modules/@angular2-material/*/package.json`
    ];
    components.forEach(name => {
      this.SYSTEM_CONFIG.paths[`@angular2-material/${name}`] = `${this.APP_BASE}node_modules/@angular2-material/${name}/${name}.umd.js`;
    });


    this.SYSTEM_BUILDER_CONFIG['packages']['.'] = {
      defaultExtension: 'js'
    };
    components.forEach(name => {
      this.SYSTEM_BUILDER_CONFIG.packages[`@angular2-material/${name}`] = {
        format: 'cjs',
        main: `${name}.umd.js`
      };
    });
  }

}

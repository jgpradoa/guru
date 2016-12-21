import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

//importing guru module using Dynamic loading
platformBrowserDynamic().bootstrapModule(AppModule);
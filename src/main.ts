import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));

  document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('global-loader');
  if (loader) {
    loader.style.display = 'none';
  }
});

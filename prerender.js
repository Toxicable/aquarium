require('zone.js/dist/zone-node');
require('reflect-metadata')
const fs = require('fs');

const { renderModuleFactory } = require('@angular/platform-server');

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./dist-server/main.bundle`);

const index = fs.readFileSync('./dist/index.html', 'utf8');

renderModuleFactory(AppServerModuleNgFactory, {
  document: index,
  url: '/',
  extraProviders: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
})
.then(html => fs.writeFileSync('./dist/index.html', html));

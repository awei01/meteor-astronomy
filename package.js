Package.describe({
  summary: 'Model layer for Meteor',
  version: '0.2.0',
  name: 'jagi:astronomy',
  git: 'https://github.com/jagi/meteor-astronomy.git'
});

Package.registerBuildPlugin({
  name: 'compileSchemes',
  use: ['underscore', 'minifiers', 'spacebars-compiler'],
  sources: [
    'lib/build/scan.js',
    'lib/build/build.js',
    'private/base.js'
  ]
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('mongo');
  api.use('minimongo');
  api.use('underscore');

  api.addFiles('lib/global.js', ['client', 'server']);
  api.addFiles('lib/utils.js', ['client', 'server']);
  api.addFiles('lib/schema.js', ['client', 'server']);
  api.addFiles('lib/module.js', ['client', 'server']);
  api.addFiles('lib/class.js', ['client', 'server']);
  // Fields module.
  api.addFiles('lib/modules/fields/schema.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/module.js', ['client', 'server']);
  // Methods module.
  api.addFiles('lib/modules/methods/schema.js', ['client', 'server']);
  api.addFiles('lib/modules/methods/module.js', ['client', 'server']);
  // Events module.
  api.addFiles('lib/modules/events/schema.js', ['client', 'server']);
  api.addFiles('lib/modules/events/module.js', ['client', 'server']);

  api.export(['Astro', 'Astronomy'], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');

  api.use('mongo');
  api.use('minimongo');
  api.use('underscore');

  api.addFiles('lib/global.js', ['client', 'server']);
  api.addFiles('lib/utils.js', ['client', 'server']);
  api.addFiles('lib/schema.js', ['client', 'server']);
  api.addFiles('lib/module.js', ['client', 'server']);
  api.addFiles('lib/class.js', ['client', 'server']);
  // Fields module.
  api.addFiles('lib/modules/fields/schema.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/module.js', ['client', 'server']);
  // Methods module.
  api.addFiles('lib/modules/methods/schema.js', ['client', 'server']);
  api.addFiles('lib/modules/methods/module.js', ['client', 'server']);
  // Events module.
  api.addFiles('lib/modules/events/schema.js', ['client', 'server']);
  api.addFiles('lib/modules/events/module.js', ['client', 'server']);

  api.export(['Astro', 'Astronomy'], ['client', 'server']);

  api.addFiles('test/fields.js', ['client', 'server']);
});

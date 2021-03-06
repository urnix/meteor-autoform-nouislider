Package.describe({
  name: 'artemi:autoform-nouislider',
  summary: 'Dual value slider for autoform.',
  version: '0.4.0',
  git: 'https://github.com/urnix/meteor-autoform-nouislider'
});

Npm.depends({
  "nouislider": '8.5.1',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('ecmascript');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@6.2.0');
  api.addFiles([
    'autoform-nouislider.html',
    'autoform-nouislider.js',
    'autoform-nouislider.css'
  ], 'client');
});

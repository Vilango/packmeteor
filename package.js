Package.describe({
  name: 'vilango:packmeteor',
  version: '0.1.4',
  summary: "Rig the basics for packmeteor"
  git: 'https://github.com/Vilango/packmeteor'
});

Package.onUse(function (api) {
  api.use('webapp', 'server');
  api.use('reload', 'client');
  api.use('routepolicy', 'server');
  api.use('underscore', 'server');
  api.use('autoupdate', 'server', {weak: true});

  api.export('Packmeteor');
  api.use('deps', 'client');
  api.add_files('meteor/packmeteor-client.js', 'client');
  api.add_files('meteor/packmeteor-server.js', 'server');
});

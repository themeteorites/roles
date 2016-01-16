Package.describe({
  name: 'themeteorites:roles',
  version: '1.0.0',
  summary: 'basic roles package',
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2')

  api.use(['grigio:babel@0.1.0', 'accounts-base'])

  api.export('isAdmin')
  api.export('hasRole')
  api.export('getUserId')

  api.addFiles('roles.es6.js')
})

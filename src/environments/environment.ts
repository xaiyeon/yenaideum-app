// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyDOHzzYJ7Qb50mGK4O2WM_sYMtFUaxGU_I',
    authDomain: 'yenaideum.firebaseapp.com',
    databaseURL: 'https://yenaideum.firebaseio.com',
    projectId: 'yenaideum',
    storageBucket: 'yenaideum.appspot.com',
    messagingSenderId: '456780731839'
  }
};

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyCTF5Ay3GYgEX4jKUf1BC12aLb-ycsz40w",
    authDomain: "museospasto.firebaseapp.com",
    databaseURL: "https://museospasto.firebaseio.com",
    projectId: "museospasto",
    storageBucket: "museospasto.appspot.com",
    messagingSenderId: "993715883856"
  }
};

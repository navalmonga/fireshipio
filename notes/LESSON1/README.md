## Angular 4 Development and Production Envrionments w/ Firebase

**1.**: Navigate to the [Firebase](https;//console.firebase.google.com) console.

**2.**: Create 2 new projects (AngFireStarterDev, AngFireStarterProd)

**3.**: Create a new application using Angular CLI

Install the CLI:

```bash
npm install -g @angular/cli
```

Create the project:

```bash
ng new angfirestarter
cd angfirestarter
```

**4.**: Install dependencies

```bash
ng add @angular/fire firebase
```

**5.**: Update the `src/environments/environment.ts` file

```
export const environment = {
  production: false,
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig: {
    apiKey: "XXXXX",
    authDomain: "angfirestarterdev.firebaseapp.com",
    databaseURL: "https://angfirestarterdev.firebaseio.com",
    projectId: "angfirestarterdev",
    storageBucket: "angfirestarterdev.appspot.com",
    messagingSenderId: "XXXXX",
    appId: "XXXXX",
    measurementId: "G-XXXXX"
  }
};
```


**6.**: Update the `environments/environment.ts` file

```
export const environment = {
  production: false,
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig: {
    apiKey: "XXXXX",
    authDomain: "angfirestarterdev.firebaseapp.com",
    databaseURL: "https://angfirestarterdev.firebaseio.com",
    projectId: "angfirestarterdev",
    storageBucket: "angfirestarterdev.appspot.com",
    messagingSenderId: "XXXXX",
    appId: "XXXXX",
    measurementId: "G-XXXXX"
  }
};
```


**7.**: Start the app (localhost:4200)

```bash
npm i; npm start
```
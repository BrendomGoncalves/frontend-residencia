import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCKXD_Qad26qa00D0bfuvjS_GRDTylWpcM",
  authDomain: "suinocultura-bc633.firebaseapp.com",
  databaseURL: "https://suinocultura-bc633-default-rtdb.firebaseio.com",
  projectId: "suinocultura-bc633",
  storageBucket: "suinocultura-bc633.appspot.com",
  messagingSenderId: "798476172651",
  appId: "1:798476172651:web:404239f59ba5cfab66602e",
  measurementId: "G-WN0FKGZ220"
};
firebase.initializeApp(firebaseConfig);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

import firebase from 'firebase/app'
import 'firebase/firestore'

export function loadDB(){

  if (!firebase.apps.length){
    const config = {
      apiKey: process.env.FIREBASE_APIKEY,
      authDomain: process.env.FIREBASE_AUTHDOMAIN,
      databaseURL: process.env.FIREBASE_DATABASEURL,
      projectId: process.env.FIREBASE_PROJECTID,
      storageBucket: process.env.FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID
    };
    firebase.initializeApp(config);
    firebase.firestore().settings({timestampsInSnapshots: true})
  }

  return firebase.firestore();
}
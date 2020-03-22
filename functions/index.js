const functions = require('firebase-functions');
import 'firebase/firestore';
// https://github.com/geofirestore/geofirestore-js
import {GeoFirestore} from 'geofirestore';

firebase.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// Create a Firestore reference
const firestore = firebase.firestore();

// Create a GeoFirestore reference
const geofirestore = new GeoFirestore(firestore);

// Create a GeoCollection reference
const geocollection = geofirestore.collection('jobs');

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

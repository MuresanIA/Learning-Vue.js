import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyBQ5ZaWfWhMGPOlBT-2Q6hLL5rwq9P3gGU',
	authDomain: 'dojo-blog-35b13.firebaseapp.com',
	projectId: 'dojo-blog-35b13',
	storageBucket: 'dojo-blog-35b13.appspot.com',
	messagingSenderId: '537223684984',
	appId: '1:537223684984:web:61dbdd1fd16ee211e09e8d'
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };

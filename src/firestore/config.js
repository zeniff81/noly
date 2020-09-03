import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCNmfCsJQx5zscheVltDLdLoAaXP9nAmGk',
	authDomain: 'habla-con-noly.firebaseapp.com',
	databaseURL: 'https://habla-con-noly.firebaseio.com',
	projectId: 'habla-con-noly',
	storageBucket: 'habla-con-noly.appspot.com',
	messagingSenderId: '987683991145',
	appId: '1:987683991145:web:8360a60ae640c08c973cf8',
	measurementId: 'G-CZ41XFDPL3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };

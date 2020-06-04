import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDRg-AmKV1Dx2nkmXnjqlAIVEBoL2MBwHg",
    authDomain: "takeout-form.firebaseapp.com",
    databaseURL: "https://takeout-form.firebaseio.com",
    projectId: "takeout-form",
    storageBucket: "takeout-form.appspot.com",
    messagingSenderId: "1014401151192",
    appId: "1:1014401151192:web:6c04bf36cf5ab245ac67ad"
};

export default { //firebase関連の関数
    init(): void {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    },
};
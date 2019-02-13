import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCsJCtlT5W-zO1yZSM3P1w00BX6ykfCpHA",
    authDomain: "csday2018.firebaseapp.com",
    databaseURL: "https://csday2018.firebaseio.com",
    projectId: "csday2018",
    storageBucket: "csday2018.appspot.com",
    messagingSenderId: "542265127372"
};
firebase.initializeApp(config);

export const getView = function(){
    return new Promise((resolve, reject) => {
        firebase.database().ref('/count/pageview').once('value').then(function (snapshot) {
            var view = (snapshot.val());
            resolve(view)
        });
    });
}
export const countView = function(){
    getView().then((view)=>{
        firebase.database().ref('/count').update({
            pageview : view + 1
        });
    })
}
export const getRegisterClick = function(){
    return new Promise((resolve, reject) => {
        firebase.database().ref('/count/registerclick').once('value').then(function (snapshot) {
            var registerclick = (snapshot.val());
            resolve(registerclick)
        });
    });
}
export const countRegisterClick = function(){
    getRegisterClick().then((registerclick)=>{
        firebase.database().ref('/count').update({
            registerclick: registerclick + 1
        });
    })
}
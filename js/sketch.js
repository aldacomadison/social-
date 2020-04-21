'use strict'

let nodeData; //object we will push to firebase
let fbData;  //data we will pull from firebase
let fbDataArray;  //firebase data values converted to an array
let database;  //reference to our firebase database
let folderName = 'messages';  //name of folder you create in db


function setup() {
  noCanvas();

  let config = {
       apiKey: "AIzaSyCNOUNqLcB-bc9ej05z_DSTtpPfZPTI3MQ",
       authDomain: "socialmediaproj-ea386.firebaseapp.com",
       databaseURL: "https://socialmediaproj-ea386.firebaseio.com",
       projectId: "socialmediaproj-ea386",
       storageBucket: "socialmediaproj-ea386.appspot.com",
       messagingSenderId: "182461268048",
       appId: "1:182461268048:web:9e1209c9f5229cf0a59155",
       measurementId: "G-7G4GF3FMLB"
     };

    firebase.initializeApp(config);

    database = firebase.database();

    // this references the folder you want your data to appear in
    let ref = database.ref(folderName);

    // **** folderName must be consistant across all calls to this folder
    ref.on('value', gotData, errData);


}

function draw() {

}

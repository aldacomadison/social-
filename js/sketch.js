'use strict'

let nodeData; //object we will push to firebase
let fbData; //data we will pull from firebase
let fbDataArray; //firebase data values converted to an array
let database; //reference to our firebase database
let folderName = 'messages'; //name of folder you create in db
let messageInput;
let messageInput2;
let sendMessageBtn;
let receiveMessageBtn;
// let sendAgainBtn;
let receivedMessage;
let receiveDiv, sendDiv;

function setup() {
  noCanvas();
  messageInput = select("#messageInput");
  messageInput2 = select("#messageInput2")
  messageInput = document.querySelector("#messageInput");
  messageInput2 = document.querySelector("#messageInput2")
  sendMessageBtn = document.querySelector("#sendMessageBtn");
  receiveMessageBtn = document.querySelector("#receiveMessageBtn");
  receivedMessage = document.querySelector("#receivedMessage");
  // sendAgainBtn = document.querySelector("#sendAgainBtn");
  receiveDiv = document.querySelector("#receiveDiv");
  sendDiv = document.querySelector("#sendDiv");


  sendMessageBtn.addEventListener('click', sendMessage);
  receiveMessageBtn.addEventListener('click', receiveMessage);
  // sendAgainBtn.addEventListener('click', sendAgain);


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


function sendMessage() {
  if (messageInput.value) {
    let timestamp = Date.now();

    nodeData = {
      name: messageInput.value,
      price: messageInput2.value,
      timestamp: timestamp,
      received: false,
    }
    //pushes to fixbase!
    createNode(folderName, timestamp, nodeData);

    // createP(`sent message: ${nodeData.name}`);
    // createP(`sent message: ${nodeData.price}`);

    var li = createElement('li', nodeData.name + ' $' + nodeData.price);
    li.parent('discovery');

    //zeo out text box
    messageInput.value = '';
    messageInput2.value = '';

    // sendDiv.style.display = 'none';
    // receiveDiv.style.display = 'block';

  } else {
    alert("type message first");
  }

}

function receiveMessage() {

  //shuffle arrray first

  //shuffleArray(fbDataArray);
  let found = false;
  let lookup = document.querySelector("#searchItem").value;
  console.log(lookup)
  for (let i = 0; i < fbDataArray.length; i++) {
    if (fbDataArray[i].name === lookup) {
      console.log("received");
      receivedMessage.innerHTML = fbDataArray[i].name + " $" + fbDataArray[i].price;
      receiveMessageBtn.style.display = 'block';
      //sendAgainBtn.style.display = 'block';
      found = true;
      break;
    }

  }
  if (found == false) {
    receivedMessage.innerHTML = 'Not yet discovered!';
    console.log("not found");
  }
}



function shuffleArray(_array) {
  //iterate backwards thrrough an array
  for (let i = _array.length - 1; i > 0; i--) {

    //grab random index from 0 to // I
    let randomIndex = Math.floor(Math.random() * (i + 1));

    //swap elements array[i] and array[i]
    [_array[i], _array[randomIndex]] = [_array[randomIndex], _array[i]];
  }
}

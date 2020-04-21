'use strict'

function gotData(data){

// need to retrieve firebase data with val() method
// this returns an object of all database
fbData = data.val();

if (fbData) {
  console.log('recieved data:');
  console.log(fbData);

  fbDataArray = Object.values(fbData);
} else{
  console.log('nothing in this folder yet');
}

}

function errData(err){
  console.log('error! did not receive data');
  console.log(err);
}

//create a new node
// the node folder name, id, and object are all passed in as parameters
function createNode(_nodeFolder, _nodeId, _nodeObject) {
  firebase.database().ref(_nodeFolder + '/' + _nodeId).set(_nodeObject);
}

//createNode(folderName, test{text:'hello'});

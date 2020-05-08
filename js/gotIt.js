'use strict'

function gotData(data){
//seed array (on first initializiing database only)
// need to retrieve firebase data with val() method
// this returns an object of all database
fbData = data.val();

if (fbData) {
  console.log('recieved data:');
  console.log(fbData);

  fbDataArray = Object.values(fbData);

  console.log(fbDataArray);

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
function createNode(_nodeFolder, _nodeID, _nodeObject) {
  firebase.database().ref(_nodeFolder + '/' + _nodeID).set(_nodeObject);
}

// the update method will update existing node
function updateNode(_nodeFolder, _nodeID, _updateObject){
  firebase.database().ref(_nodeFolder + '/' + _nodeID).update(_updateObject);
}

function deleteNode(_nodeFolder, _nodeID){
  firebase.database().ref(_nodeFolder + '/' + _nodeID).remove();
}

// function seedDatabase(_array){
// console.log('seed');
//   _array.forEach(function(item) {
//     let timestamp = Date.now();
//
//     nodeData = {
//       messageText: item,
//       timestamp: timestamp,
//       received: false,
//     }
//     //pushes to fixbase!
//     createNode(folderName, timestamp, nodeData);
//
//   })
// }

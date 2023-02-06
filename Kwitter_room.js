var firebaseConfig = {
  apiKey: "AIzaSyD6p8Xow_rHTQ6uq9TSnRfqqhOW5GyOL6I",
  authDomain: "kwitter-6f6d7.firebaseapp.com",
  databaseURL: "https://kwitter-6f6d7-default-rtdb.firebaseio.com",
  projectId: "kwitter-6f6d7",
  storageBucket: "kwitter-6f6d7.appspot.com",
  messagingSenderId: "681354766689",
  appId: "1:681354766689:web:f4264b287646b742077d20"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username")
document.getElementById("h3").innerHTML = "Welcome "+ username +"!"
function add(){
roomname = document.getElementById("text_input2").value
firebase.database().ref("/").child(roomname).update({
  purpose : "Adding room name"
})
localStorage.setItem("room_name", roomname)
window.location = "Kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name -" + Room_names)
  row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
  document.getElementById("output").innerHTML+=row
  //End code
  });});}
getData();
function redirectToRoomName(name){
console.log(name)
localStorage.setItem("room_name", name)
window.location = "Kwitter_page.html"
}
function logout(){
localStorage.removeItem("room_name")
localStorage.removeItem("username")
window.location = "index.html"

}
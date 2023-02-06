var firebaseConfig = {
    apiKey: "AIzaSyD6p8Xow_rHTQ6uq9TSnRfqqhOW5GyOL6I",
    authDomain: "kwitter-6f6d7.firebaseapp.com",
    databaseURL: "https://kwitter-6f6d7-default-rtdb.firebaseio.com",
    projectId: "kwitter-6f6d7",
    storageBucket: "kwitter-6f6d7.appspot.com",
    messagingSenderId: "681354766689",
    appId: "1:681354766689:web:f4264b287646b742077d20"
  };
  

firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username")

room_name = localStorage.getItem("room_name")
function sendmessage(){
    message = document.getElementById("message").value
    firebase.database().ref(room_name).push({
          name: username,
          msg: message,
          like: 0
    })
    document.getElementById("message").value = ""

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;


//Start code
console.log(firebase_message_id)
console.log(message_data)
name = message_data["name"]
message = message_data["msg"]
like = message_data["like"]
nametag = "<h4>"+name+"<img src='tick.png' class='user_tick'></h4>"
messagetag = "<h4 class='message_h4'>"+message+"</h4>"
liketag = "<button id="+ firebase_message_id +" value="+like+" class='btn btn-primary' onclick='updateLike(this.id)'>"
spantag = "<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button><hr>"
thetag = nametag + messagetag + liketag + spantag
document.getElementById("output").innerHTML += thetag

//End code
    } });  }); }
getData();

  function logout(){
    localStorage.removeItem("room_name")
    localStorage.removeItem("username")
    window.location = "index.html"

  }
  function updateLike(message_id){
    console.log(message_id)
    button_id=message_id
    likes = document.getElementById(button_id).value
    updatedLikes= Number(likes)+1
    console.log(updatedLikes)
    firebase.database().ref(room_name).child(message_id).update({
      like: updatedLikes
  })
  }

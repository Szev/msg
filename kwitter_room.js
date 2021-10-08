var firebaseConfig = {
      apiKey: "AIzaSyAeKJU8mVSlgu6Q-QhyoPVHDeI92MnBSYQ",
      authDomain: "newz-c08dc.firebaseapp.com",
      databaseURL: "https://newz-c08dc-default-rtdb.firebaseio.com",
      projectId: "newz-c08dc",
      storageBucket: "newz-c08dc.appspot.com",
      messagingSenderId: "1027339435520",
      appId: "1:1027339435520:web:450a67762407fe560a62e5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "WELCOME" + user_name + "!";
    
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
}    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name" + Room_names);
      row= "<div class= 'room_name' id= " + Room_names + "onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row; 

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";

}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}

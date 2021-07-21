var firebaseConfig = {
    apiKey: "AIzaSyAtdocw14jTgUM2iVCgPxM6CGf-FM7X1-M",
    authDomain: "kwitter-3212b.firebaseapp.com",
    databaseURL: "https://kwitter-3212b-default-rtdb.firebaseio.com",
    projectId: "kwitter-3212b",
    storageBucket: "kwitter-3212b.appspot.com",
    messagingSenderId: "142367193547",
    appId: "1:142367193547:web:59507f226b7853af2f1e4e",
    measurementId: "G-Y10R5428GL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
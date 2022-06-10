// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDsqMd8LLAw6T6fZTwlOPsKlC-BTHEseTc",
      authDomain: "class-test-53505.firebaseapp.com",
      projectId: "class-test-53505",
      storageBucket: "class-test-53505.appspot.com",
      messagingSenderId: "97379764214",
      appId: "1:97379764214:web:4f2deee6721da3d0b769d7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

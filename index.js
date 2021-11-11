const firebaseConfig = {
    apiKey: "AIzaSyAQTcPu9d0m475kt--RmuRonurX_-zsL4c",
    authDomain: "midtermasi.firebaseapp.com",
    databaseURL: "https://midtermasi-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "midtermasi",
    storageBucket: "midtermasi.appspot.com",
    messagingSenderId: "317726761917",
    appId: "1:317726761917:web:79bda967395750419fe8d4",
    measurementId: "G-0WEMMB444X"
    };
    
    firebase.initializeApp(firebaseConfig);

    firebase.auth.Auth.Persistence.LOCAL;

    $("#btn-login").click(function()
    {
        var email = $("#email").val();
        var password = $("#password").val();

        if(email !="" && password !="")
        {
            var result = firebase.auth().signInWithEmailAndPassword(email, password);

            result.catch(function(error)
            {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message: " + errorMessage);
            });
        }
        else
        {
            window.alert("Form is incomplete. Please fill out all fields.");
        }
    });
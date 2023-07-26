const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyAWZVm226hS6BchF3p-cyYpxR7obcBAJbA",
  authDomain: "contact-form-c0bbc.firebaseapp.com",
  databaseURL: "https://contact-form-c0bbc-default-rtdb.firebaseio.com",
  projectId: "contact-form-c0bbc",
  storageBucket: "contact-form-c0bbc.appspot.com",
  messagingSenderId: "874105216373",
  appId: "1:874105216373:web:02687019a9fbc93422c73c"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
    
    
 
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 300);
    
        //   reset the form
    document.getElementById("contactForm").reset();
  }
  
   
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
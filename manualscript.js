var sendbtn = document.getElementById('submitbtn');
sendbtn.addEventListener('click', function(e){
    e.preventDefault();
    var fname = document.getElementById('fnamefield').value;
    var lname = document.getElementById('lnamefield').value;
    var email = document.getElementById('emailfield').value;
    var msg = document.getElementById('msgfield').value;
    var emailbody = 'First Name: ' + fname + '<br/>Last Name: ' + lname + '<br/>Email: '
    + email + '<br/>Message: ' + msg;
    Email.send({
        //SecureToken : "c7ea3a34-0e2a-4f94-84fa-8a4a1ace81fc",
        Host : "smtp.elasticemail.com",
        Port : "2525",
        Username : "d.rudenko51@icloud.com",
        Password : "3A6639A08801AC3E4CE4D8F4C9371A6705EF",
        To : 'd.rudenko51@gmail.com',
        From : email,
        Subject : "Contacted from Portfolio site",
        Body : emailbody
    }).then(
      message => alert(message)
    );
})


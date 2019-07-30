
function Login(){ 
  var done=0; 
  var username=document.login.username.value; 
  var password=document.login.password.value;
  var users = new Array();

users['membre1'] = 'code1';
users['membre2'] = 'code2';
users['membre3'] = 'code3';
users['membre4'] = 'code4';
users['membre5'] = 'code5';

  if (users[username] == password) 
  { 
       switch(username)
       {
           case 'membre1':
              window.location="accesmembre1.html";
              break;
           case 'membre2':
              window.location="accesmembre2.html";
              break;
           case 'membre3':
              window.location="accesmembre3.html";
              break;
     case 'membre4':
              window.location="accesmembre4.html";
              break;
     case 'membre5':
              window.location="accesmembre5.html";
              break;
 }
  }
  else 
  {
      window.location="error.html";
  }
}
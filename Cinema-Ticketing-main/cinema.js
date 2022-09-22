        var detail=[];
        var obj = {}
        var objj={}



let speechRecognition = new webkitSpeechRecognition();

        function logiin() {
            if (localStorage.Broh) {
                users = localStorage.getItem("Broh")
    
                customer = JSON.parse(users)
                var getIt = customer.find((val, i )=> val.usnn1 == usn2.value && val.passw1== psw2.value)
                var getusn = customer.find((val, i )=> val.usnn1 == usn2.value)
                var getpasw = customer.find((val, i )=>val.passw1== psw2.value)
    
            
               if(getIt) {
                   alert("User found!");
                   location.reload()
                    window.location.href="./loggedin.html"
    
               }
               else if(getusn && !getpasw){
                alert("Opps! Wrong password.")
    
               }
               else{
                   alert("Account not found, create an account")
            }
          } else {
            alert("Account not found, create an account")
            }
           
        }
        startRec=()=>{
        speechRecognition.start()
        }
    function purchase() {

   
    speechRecognition.continuous = false;
    speechRecognition.interimResults = true;
    
    objj ={
                fName: firstName.value,
                sName: secondName.value,
                mail: email.value,
                usnn1: usn1.value,
                passw1: psw1.value,
                password1: psww1.value,
                usernme2: usn2.value,
                passw2: psw2.value,
                noofchairs: nofc.value
            }
            detaill.push(objj)
            console.log(detaill);
            localStorage.setItem("Broh", JSON.stringify(detaill))
} 


      

        signinn=()=> {
        loginpage.style.display="block"
        signuppage.style.display="none"
        uuu.style.display="none"
        }


    adsign=()=>{
        loginnpage.style.display="block"
        signuppage.style.display="none"
        uuu.style.display="none"
       
    }

    function logiinn(){
        if (localStorage.Admins) {
            var usnn1= usn2.value
            var passw1= psw2.value
    
            admins = localStorage.getItem("Admins")
            adminss = JSON.parse(admins)
            var getIt = adminss.find((val, i )=> val.adusername == usn2.value && val.adpassword== psw2.value)
    
          
            if(passw1=="dee" && usnn1=="Oyin"){
             alert ("Admin login successful")
             location.href="./tables.html"
            }
           else if (!getIt) {
                alert("Are you sure you are an admin? Try again.");
            }
           else {
               alert("Welcome, Dear "+usnn1+"!");
            //    location.reload()
                window.location.href="./adminList.html"
    
           }      
        } else {
            alert("Are you sure you are an admin? Try again.");
        }


        }
function adminList() {
   var pass=  prompt("Passphrase?")
    if (pass=="rigbig") {
       window.location.href="./adminList.html"
    }
    else{
        alert("Stay back!")
    }

}



        
function calc() {
   amountevaluated.value =  (numberofchairs.value*500)

}

function idk() {
    if (rememberMe.checked) {
        var tt=parseInt(numberofchairs.value);
        var yy= parseInt(amountevaluated.value);
        amountevaluated.value = yy+(350*tt)
    }
    else{
        var tt=parseInt(numberofchairs.value);
        var yy= parseInt(amountevaluated.value);
        amountevaluated.value = yy-(350*tt)
}
}




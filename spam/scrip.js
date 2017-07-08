<SCRIPT>
    
    window.onload=function()         
    {
    document.getElementById('btnGen').addEventListener('click',createPassword)             //calling createPassword() when GENERATE button presssed!!
    document.getElementById('btnGen').addEventListener('click',labl)                       //calling lalbl() when GENERATE button presssed!!
    }


function all(length) {
    var length=document.getElementById('passIn').value;
    var chars = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps= pass;
    document.getElementById('result').innerHTML=(ps);
}




function lowupdig(length) {
    var length=document.getElementById('passIn').value;
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps=pass;
    document.getElementById('result').innerHTML=(ps);
}



 
function lowupspc(length) {
    var length=document.getElementById('passIn').value;
    var chars = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps=pass;
    document.getElementById('result').innerHTML=(ps);
}



function lowdigspc(length) {
    var length=document.getElementById('passIn').value;
    var chars = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps=pass;
    document.getElementById('result').innerHTML=(ps);
}



function updigspc(length) {
    var length=document.getElementById('passIn').value;
    var chars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps=pass;
    document.getElementById('result').innerHTML=(ps);
}



function lowdig(length) {
    var length=document.getElementById('passIn').value;
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps=pass;
    document.getElementById('result').innerHTML=(ps);
}



function lowspc(length) {
    var length=document.getElementById('passIn').value;
    var chars = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps= pass;
    document.getElementById('result').innerHTML=(ps);
}



function lowup(length) {
    var length=document.getElementById('passIn').value;
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
       var ps= pass;
       document.getElementById('result').innerHTML=(ps);
}



function updig(length) {
    var length=document.getElementById('passIn').value;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps= pass;
    document.getElementById('result').innerHTML=(ps);
}



function upspc(length) {
    var length=document.getElementById('passIn').value;
    var chars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps= pass;
    document.getElementById('result').innerHTML=(ps);
}



function digspc(length) {
    var length=document.getElementById('passIn').value;
    var chars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps= pass;
    document.getElementById('result').innerHTML=(ps);
}



function low(length) {
    var length=document.getElementById('passIn').value;
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps=pass;
    document.getElementById('result').innerHTML=(ps);
}



function up(length) {
    var length=document.getElementById('passIn').value;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps=pass;
    document.getElementById('result').innerHTML=(ps);
}



function dig(length) {
    var length=document.getElementById('passIn').value;
    var chars = "1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps=pass;
    document.getElementById('result').innerHTML=(ps);
}



function spc(length) {
    var length=document.getElementById('passIn').value;
    var chars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var ps=pass;
    document.getElementById('result').innerHTML=(ps);
}

function createPassword(e)
{

 var length=document.getElementById('passIn').value;


if ((document.getElementById("L").checked)&&(document.getElementById("U").checked)&&(document.getElementById("D").checked)&&(document.getElementById("S").checked))
{
  all(length);
}

if ((document.getElementById("L").checked)&&(document.getElementById("U").checked)&&(document.getElementById("D").checked))
{
  lowupdig(length);
  
}

if ((document.getElementById("L").checked)&&(document.getElementById("U").checked)&&(document.getElementById("S").checked))
{
  lowupspc(length);
 
}

if ((document.getElementById("L").checked)&&(document.getElementById("D").checked)&&(document.getElementById("S").checked))
{
   lowdigspc(length);
 
}

if ((document.getElementById("U").checked)&&(document.getElementById("D").checked)&&(document.getElementById("S").checked))
{
    updigspc(length);

}

if ((document.getElementById("L").checked)&&(document.getElementById("D").checked))
{
    lowdig(length);

}

if ((document.getElementById("L").checked)&&(document.getElementById("S").checked))
{
   lowspc(length);
  
}

if ((document.getElementById("L").checked)&&(document.getElementById("U").checked))
{
   lowup(length); 

}

if ((document.getElementById("U").checked)&&(document.getElementById("D").checked))
{
    updig(length);
 
}


if ((document.getElementById("U").checked)&&(document.getElementById("S").checked))
{
  upspc(length);
 
}

if ((document.getElementById("D").checked)&&(document.getElementById("S").checked))
{
   digspc(length);
)  
}

if (document.getElementById("L").checked)
{
    low(length);

}


if (document.getElementById("U").checked)
{
   up(length);
 
}

if (document.getElementById("D").checked)
{
  dig(length);
 
}


if (document.getElementById("S").checked)
{
    spc(length);  
}
}
function labl(c)      //Fn to print password text when button triggered
{
var txt="Your Random Password is:";
document.getElementById('text').innerHTML=(txt);       //Printing txt inside div with id 'text'
}
</SCRIPT>
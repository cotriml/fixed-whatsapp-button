/* ---------- WHATSAPP CONFIG ---------- */

var whatsAppNumber = '55' + '1799999999'; //Country code + Phone Number
var whatsAppMessage = 'Hello, would you help me?';

/* ---------- IMG CONFIG ---------- */

var src = "https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"; //Path to the Image
var width = "90";
var height = "90";
var position = 'left'; //left or right

/* ---------- CSS ---------- */

var css = `
    .fixed-whatsapp-button {
        position: fixed;
        bottom: 0;
        ${position}: 0;
        z-index: 999;
        padding:20px;
    }
    
    @keyframes bounce {
        0%,
        20%,
        60%,
        100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        }
    
        40% {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
        }
    
        80% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
        }
    }
    
    .fixed-whatsapp-button:hover {
        animation: bounce 0.5s;
    }
`

/* ---------- HTML ElEMENTS---------- */

//Create DIV element
var div = document.createElement('div');
div.className = 'fixed-whatsapp-button';

//Create A element
var a = document.createElement('a');
a.href = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(whatsAppNumber) + '&text=' + encodeURIComponent(whatsAppMessage);;
a.target = "_blank";

//Create IMG element
var img = document.createElement('img');
img.src = src;
img.width = width;
img.height = height;
img.ondragstart = "return false";

//Create STYLE element
var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

//Load BODY element or any other to insert the DIV
var body = document.body;

//Insert IMG inside A element
a.appendChild(img);

//Insert A inside DIV element
div.appendChild(a);

//Insert STYLE inside DIV element
div.appendChild(style);

//Insert DIV at the end of BODY
body.appendChild(div);
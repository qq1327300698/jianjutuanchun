if (window.XMLHttpRequest)
 {// code for IE7+, Firefox, Chrome, Opera, Safari
 xmlhttp=new XMLHttpRequest();
 }
 else
 {// code for IE6, IE5
 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 }
 xmlhttp.open("GET","gdg.xml",false);
 xmlhttp.send();
 xmlDoc=xmlhttp.responseXML;

 document.getElementById("shiyan").innerHTML=
 xmlDoc.getElementsByTagName("herf")[0].value;

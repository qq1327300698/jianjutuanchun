if (window.XMLHttpRequest)
 {// code for IE7+, Firefox, Chrome, Opera, Safari
 xmlhttp=new XMLHttpRequest();
 }
 else
 {// code for IE6, IE5
 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 }
 // xmlhttp.open("GET","./xml/gdg.xml",false);
 // xmlhttp.send();
 // xmlDoc=xmlhttp.responseXML;
 xmlhttp.open("GET","./xml/shuliang.xml",false);
 xmlhttp.send();
 xmlDoc=xmlhttp.responseXML;

new Vue({
    el:"#headerApp",
    data:{
        overflowTF: true,
        zx:xmlDoc.getElementsByTagName("sps")[0].childNodes[0].length,
        gdg:xmlDoc.getElementsByTagName("gdg")[0].childNodes[0].nodeValue,
        yyp:xmlDoc.getElementsByTagName("yyp")[0].childNodes[0].nodeValue,
        zyl:xmlDoc.getElementsByTagName("zyl")[0].childNodes[0].nodeValue,
        mht:xmlDoc.getElementsByTagName("mht")[0].childNodes[0].nodeValue,
        zhl:xmlDoc.getElementsByTagName("zhl")[0].childNodes[0].nodeValue,
        xw:xmlDoc.getElementsByTagName("xw")[0].childNodes[0].nodeValue,
        jm:xmlDoc.getElementsByTagName("jm")[0].childNodes[0].nodeValue,
    },
    methods:{
        say:function(message){
            if(this.overflowTF===true)
            this.overflowTF=false;
            else
            this.overflowTF=true;
        }
    }
})
function validform()
{ var x,y,ic="/:;,";

x=document.getElementById("email");
   if(x.value==""){ alert("Trebuie sa introduceti o adresa de email");x.focus();x.select();return false;}
   for(i=0;i<ic.length;i++){
			badChar=ic.charAt(i);
			if(x.value.indexOf(badChar,0)>-1){ alert("Adresa de email incorecta");x.focus();x.select;return false;}
	}
    
    ap=x.value.indexOf("@",1)
		if(ap==-1){ alert("Adresa de email incorecta");x.focus();x.select();return false;}
	
	if(x.value.indexOf("@",ap+1)!=-1){ alert("Adresa de email incorecta");x.focus();x.select();return false;}
   
    pp=x.value.indexOf(".",ap)
	if(pp==-1){ alert("Adresa de email incorecta");x.focus();x.select();return false;}
   
    if(pp+3>x.value.length){ alert("Adresa de email incorecta");x.focus();x.select();return false;}
	
   
x=document.getElementById("pass");
y=document.getElementById("vpass");
		if(x.value.length==0) {alert("Introduceti parola"); x.focus();x.select(); return false;} else
		if(x.value.length<4) {alert("Parola este prea scurta"); x.focus();x.select();return false;} else
		if(x.value!=y.value) {alert("Verificati parola"); x.focus();x.select(); return false;}
x=document.getElementById("tarea");
if(x.value.length<20) {alert("Va rugam sa ne scrieti un mesaj"); x.focus();x.select; return false;}
alert("Felicitari! Ai reusit sa te inregistrezi pe site-ul nostru.");
window.location.href = "Pagina-principala.html";
return true;
}
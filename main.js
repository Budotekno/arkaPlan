function renkDegistir(){

    if(document.getElementById("beyaz").checked){
        document.getElementById("arka").style.backgroundColor="white";
       
       document.getElementById("renk").value="FFFFFF";
        //console.log("ejhehfhd");

    }
  
    else if(document.getElementById("kirmizi").checked){
        document.getElementById("arka").style.backgroundColor="red";
        document.getElementById("renk").value="FF0000";
        //document.getElementById("k").style.color="white";
    

        //console.log("ejhehfhd");

    }

    else if(document.getElementById("mavi").checked){
        document.getElementById("arka").style.backgroundColor="blue";
        document.getElementById("renk").value="0000FF";
        //console.log("ejhehfhd");

    }

    else if(document.getElementById("sari").checked){
        document.getElementById("arka").style.backgroundColor="yellow";
        document.getElementById("renk").value="FFFF00";
        //console.log("ejhehfhd");

    }

    else if(document.getElementById("yesil").checked){
        document.getElementById("arka").style.backgroundColor="green";
        document.getElementById("renk").value="008000";
        //console.log("ejhehfhd");

    }
  
}

function degistir(){
  
    if(document.getElementById("renk").value==""){
        document.getElementById("renk").value="Doldurunuz!";
    }
    else{
        document.getElementById("arka").style.backgroundColor="#"+document.getElementById("renk").value;
    }

     
}

function aktifPasif(){

    if(document.getElementById("a").checked==true)
    {
        document.getElementById("renk").disabled=false;
        document.getElementById("sari").checked=false;
        document.getElementById("mavi").checked=false;
        document.getElementById("kirmizi").checked=false;
        document.getElementById("beyaz").checked=false;
        document.getElementById("yesil").checked=false;
    }

    else{
        document.getElementById("renk").disabled=true;
    }
   
}

function yuklenirken(){
    document.getElementById("renk").value="FFFFFF";
    document.getElementById("renk").disabled=true;
}

function txtTikla(){
    document.getElementById("renk").value="";

   
}
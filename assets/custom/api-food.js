var character;
function loadDoc(url, cFunction){
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            character = this.responseText;
            character = JSON.parse(character);

            cFunction(this);
        }
    }
    xhttp.open("GET",url,true)
    xhttp.send();
}
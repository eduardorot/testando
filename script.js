var radio=1
function retira(){
    if(radio<=3){
        document.getElementById(`radio${radio}`).checked=false
        radio++
        document.getElementById(`radio${radio}`).checked=true
    }else{
        return
    }
    if(radio==4){
        document.getElementById("direita").style.opacity="40%"
    }
    if(radio!=1){
        document.getElementById("esquerda").style.opacity="100%"
    }
    
}

function adiciona(){
    if(radio==1){
        return
    }else{
        document.getElementById(`radio${radio}`).checked=false
        radio--
    document.getElementById(`radio${radio}`).checked=true
    }
    if(radio!=4){
        document.getElementById("direita").style.opacity="100%"
    }
    if(radio==1){
        document.getElementById("esquerda").style.opacity="40%"
    }
    
}
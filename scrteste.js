var img=0
function direita(){
    if(img>=0 && img <=2){
        img++
        var imagem=document.getElementById(`img${img}`)
        var veri=(imagem.classList.contains('volta'))
        if(veri==true){
            imagem.classList.remove("volta")
        }
        imagem.classList.add("retira")
        
    }else{
        return
    }
    
}

function esquerda(){
    if(img>=1 && img <=3){
    var imagem=document.getElementById(`img${img}`)
    imagem.classList.remove("retira")
    imagem.classList.add("volta")
    img--
}else{
    return
}
}
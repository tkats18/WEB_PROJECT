

function makeInvisible(id){
    document.getElementById(id).style.display='none'
    
}

function makeVisible(id){
    document.getElementById(id).style.display='block'
    document.getElementById(id).style.left = 
        document.getElementById(id+"_par").getBoundingClientRect().left+ document.getElementById(id+"_par").getBoundingClientRect().width/2
        -document.getElementById(id).getBoundingClientRect().width/2
}
function hascollided(lbullet,lwall){

    bulling=lbullet.width/2+lwall.width/2+lbullet.x;
    walling=lwall.x;
    
    if(bulling>=walling){
    
    
    
    return true;
    }
    return false;
    }
const display= document.getElementById("watch");
let timerfunc=null;
let sttime=0;
let endtime=0;
let running=false;

function Start(){
    console.log("func called");
    if(!running){
        sttime=Date.now()-endtime;                      
        timerfunc=setInterval(update,10);
        
        running=true;
    }
}

function Stop(){
    console.log("func called");
    if(running){
        clearInterval(timerfunc);
        endtime=Date.now()-sttime;
        running=false;
    }
}

function Reset(){
    console.log("func called");
    clearInterval(timerfunc);
    timerfunc=null;
    sttime=0;
    endtime=0;
    running=false;
    display.textContent="00:00:00:00";
}

function update(){
    console.log("func called");
    const currenttime= Date.now();
    endtime=currenttime-sttime;

    let hours=Math.floor(endtime/(1000*60*60));
    let min=Math.floor(endtime/(1000*60)%60);
    let sec=Math.floor((endtime/1000)%60);
    let millisec=Math.floor((endtime%1000)/10);

    hours=String(hours).padStart(2,"0");
    min=String(min).padStart(2,"0");
    sec=String(sec).padStart(2,"0");
    millisec=String(millisec).padStart(2,"0");


    display.textContent=`${hours}:${min}:${sec}:${millisec}`;

}










    
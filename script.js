const card=document.querySelectorAll('.memory-card');
let lockboard=false;
let hasFlipped=false;
let first,second;

function flipCard(){
    if(lockboard) return;
    if(this===first) return;

    this.classList.add('flip');
    if(!hasFlipped)
    {
        hasFlipped=true;
        first=this;
        return;
    } 
    second=this;
    // lockboard=true;
    checkMatch();
}

function checkMatch(){
    if(first.dataset.framework===second.dataset.framework)
    {
        disable();
    }else{
       unflip();
    }
}
function disable(){
    first.removeEventListener('click',flipCard);
    second.removeEventListener('click',flipCard);
    resetBroad();
}
function unflip(){
    lockboard=true;
    setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');

        resetBroad();
    },1500);
}
function resetBroad(){
    [hasFlipped,lockboard]=[false,false];
    [first,second]=[null,null];
}
(function shuffule(){
    card.forEach(cards =>{
        let randomPos=Math.floor(Math.random()*12);
        cards.style.order=randomPos;
    });
})();

card.forEach(cards => cards.addEventListener('click',flipCard));

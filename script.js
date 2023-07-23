function expandSearch() {
    document.querySelector('.search-wraper-sm').style.display = 'none';
    document.querySelector('.search-box').style.display = 'block';
    const content=document.getElementById('right-wrapper');
    content.style.display = 'none';
}

const content=document.getElementById('right-wrapper');
function shrinkSearch(){
    if( content.style.display == 'none'){
    document.querySelector('.search-wraper-sm').style.display = 'block';
    document.querySelector('.search-box').style.display = 'none';
    content.style.display = 'block';
    }
}
function profileView(){
    const pCard=document.getElementById('profile-card');   
     console.log(window.getComputedStyle(pCard).display);
    if(window.getComputedStyle(pCard).display=='none'){
        pCard.style.display = 'block';
    }
    else{
        console.log("else got");
        pCard.style.display = 'none';
    }
}

function scaleBusinessCard(){
    const bCard=document.getElementById('business-card');   
     console.log(window.getComputedStyle(bCard).display);
    if(window.getComputedStyle(bCard).display=='none'){
        bCard.style.display = 'block';
        document.querySelector('.for-business').style.opacity ='1';
    }
    else{
        console.log("else got");
        bCard.style.display = 'none';
        document.querySelector('.for-business').style.opacity ='0.6';
    }
}
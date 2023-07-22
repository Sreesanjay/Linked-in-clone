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
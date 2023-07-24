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
        document.querySelector('#business-card').style.display='none';
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
        document.querySelector('.profile-card').style.display='none';
    }
    else{
        console.log("else got");
        bCard.style.display = 'none';
        document.querySelector('.for-business').style.opacity ='0.6';
    }
}
function exparea(){
    const ext=document.getElementById('right-sec-card');
    const up=document.querySelector('.up');
    const dwn=document.querySelector('.dwn');
    ext.style.maxHeight='100%';
    up.style.display='block';
    dwn.style.display='none';
}
function compressarea(){
    const ext=document.getElementById('right-sec-card');
    const up=document.querySelector('.up');
    const dwn=document.querySelector('.dwn');
    ext.style.maxHeight='320px';
    up.style.display='none';
    dwn.style.display='block';
}
function seeMore(ele){
    const fc=ele.parentNode;
    const ext=fc.querySelector('.ext-cap');
    console.log(ext);
    const more=fc.querySelector('.s-more');
    const less=fc.querySelector('.s-less');
    ext.style.display='block';
    more.style.display='none';
    less.style.display='block';
}
function seeLess(ele){
    const fc=ele.parentNode;
    const ext=fc.querySelector('.ext-cap');
    const more=fc.querySelector('.s-more');
    const less=fc.querySelector('.s-less');
    ext.style.display='none';
    more.style.display='block';
    less.style.display='none';
}
function expandProfArea(){
    const expSec1=document.querySelector('.left-sec-expand-area');
    const expSec2=document.querySelector('.left-sec-card-2');
    const expup=document.querySelector('.left-sec-expand');
    const expdwn=document.querySelector('.left-sec-comp');
    expSec1.style.display='block';
    expSec2.style.display='block';
    expup.style.display='none';
    expdwn.style.display='block'
}
function compressProfArea(){
    const expSec1=document.querySelector('.left-sec-expand-area');
    const expSec2=document.querySelector('.left-sec-card-2');
    const expup=document.querySelector('.left-sec-expand');
    const expdwn=document.querySelector('.left-sec-comp');
    expSec1.style.display='none';
    expSec2.style.display='none';
    expup.style.display='block';
    expdwn.style.display='none'
}
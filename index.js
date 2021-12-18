leftbtn = document.getElementById('left');
rightbtn = document.getElementById('right');
display = document.getElementById('display');
resetbtn = document.getElementById('reset');

function setAnimation(flag){
    if(flag==0){
        display.style.animationName='none';
    }
    if(flag==1){
        display.style.animationName = 'myanim';
    }
}
leftbtn.addEventListener('click',function(){
    let count = display.innerHTML;
    count = parseInt(count) - 1;
    display.innerHTML = count;
    setAnimation(1);
    setTimeout(() => {
        setAnimation(0)
    }, 900);
});

rightbtn.addEventListener('click',function(){
    let count = display.innerHTML;
    count = parseInt(count) + 1;
    display.innerHTML = count;
    setAnimation(1);
    setTimeout(() => {
        setAnimation(0)
    }, 900);
    
});
resetbtn.addEventListener('click',function(){
    display.innerHTML = 0;
    setAnimation(1);
    setTimeout(() => {
        setAnimation(0)
    }, 900);
});





var i = 0;

const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const neutral = document.getElementById('neutral');
const d_counter = document.querySelector('.d_counter');

d_counter.innerHTML = i;

increase.addEventListener('click',() =>
{
    i++;
    d_counter.innerHTML = i;
});

decrease.addEventListener('click',()=>{
    i--;
    d_counter.innerHTML = i;
});

neutral.addEventListener('click', ()=>{
    i = 0;
    d_counter.innerHTML = i;
});




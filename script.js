const typed= new Typed('#typed',{
    strings:['Web Developer','Python learner'],
    typespeed:60,
    backspeed:40,
    loop:true
});

document.getElementById('toggle-theme').addEventListener('click' ,() =>{
    document.body.classList.toggle('light')
});
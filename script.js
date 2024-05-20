let image1=document.getElementsByClassName('img-project')[0];
let image2=document.getElementsByClassName('img-project')[1];
let image3=document.getElementsByClassName('img-project')[2];
let image4=document.getElementsByClassName('img-project')[3];

document.getElementsByClassName('project-item')[0].addEventListener('mouseenter',(e)=>{
    image1.style.display='block'
})
document.getElementsByClassName('project-item')[0].addEventListener('mouseleave',(e)=>{
   image1.style.display='none'
})
document.getElementsByClassName('project-item')[1].addEventListener('mouseenter',(e)=>{
    image2.style.display='block'
})
document.getElementsByClassName('project-item')[1].addEventListener('mouseleave',(e)=>{
   image2.style.display='none'
})
document.getElementsByClassName('project-item')[2].addEventListener('mouseenter',(e)=>{
    image3.style.display='block'
})
document.getElementsByClassName('project-item')[2].addEventListener('mouseleave',(e)=>{
   image3.style.display='none'
})
document.getElementsByClassName('project-item')[3].addEventListener('mouseenter',(e)=>{
    image4.style.display='block'
})
document.getElementsByClassName('project-item')[3].addEventListener('mouseleave',(e)=>{
   image4.style.display='none'
})
setTimeout(() => {
    document.getElementById('loader-text').innerHTML='Environment'
}, 1000);
setTimeout(() => {
    document.getElementById('loader-text').innerHTML='Experience'
}, 2000);
setTimeout(() => {
    document.getElementById('loader-text').innerHTML='Content'
}, 3000);
   setTimeout(()=>{
if(document.getElementById('loader-text').innerHTML='Content'){
    document.getElementsByClassName('loader')[0].classList.add('loadend')
}
   },4000)

   let menu=document.getElementsByClassName('menu')[0];
   let btn=document.getElementById('menu-btn');
   btn.addEventListener('click',()=>{
    menu.classList.toggle('menu-drop')
})


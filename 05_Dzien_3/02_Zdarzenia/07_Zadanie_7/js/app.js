document.addEventListener("DOMContentLoaded", function()  {

    const box = document.getElementById('box');
    const globalX= document.getElementById('globalX');
    const globalY= document.getElementById('globalY');
    const localXS= document.getElementById('localX');
    const localY = document.getElementById('localY');

    box.addEventListener("mousemove", function (event){
       globalX.innerText = `${event.clientX}`;
       globalY.innerText = `${event.clientY}`;
       localXS.innerText = `${event.offsetX}px`;
       localY.innerText = `${event.offsetY}px`;
    });
});

//All picture in array
const images=[
    "mangoes/amrupali.jpg",
    "mangoes/raspuri.jpg",
    "mangoes/gulabKhass.jpg",
    "mangoes/fazli.png",
    "mangoes/vanraj.jpg",
    "mangoes/totapuri.jpg",
    "mangoes/safeda.jpg",
    "mangoes/rumani.jpg",
    "mangoes/raspuri.jpg",
    "mangoes/mankurad.jjpg.jpg"
];
let imgIndex=0;
const imgElement=document.getElementById('slider-img');

//setInterval function use to change the image
setInterval(()=>{
    if(imgIndex >=images.length){
        imgIndex =0;
    }
    
    const imgUrl=images[imgIndex];
    imgElement.setAttribute('src',imgUrl)
    imgIndex++;
},2000)
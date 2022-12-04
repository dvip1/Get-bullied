//alert("We are great");


 for(let i=0; i<8 ;i++){ 
//settimeout is basically a function used to set time of an action to be performed, so setTimeout(describes an action to be performed, describes the time (note:here 800 indicates 800ms, and 800*i just means that the 500ms would increase times 'i'))
    setTimeout(function()  { 
        var imgage=document.createElement('div');
        imgage.className='gonnacry';
        document.getElementById('parent1').appendChild(imgage);

        var audio=new Audio('/material/gonnacry.mp3');
        audio.play();
    },800*(i+1))
 } 
 let a=document.lastModified;
 document.write(a);

 //objects practice
/*
  const hotel= {
    name:'Oscorp Hotels',
    rooms: 200,
    floors:40,
    price:'400$ per night',
    packages:['Delux','Premium','First Class']
}

document.write(hotel.name+" ");
document.write(hotel.rooms+" ");
document.write(hotel.floors+" ");
document.write(hotel.price+" ");
document.write(hotel.packages);*/
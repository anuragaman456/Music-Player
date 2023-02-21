let previous =document.querySelector('#pre');
let play =document.querySelector('#play');
let next =document.querySelector('#next');
let title =document.querySelector('#title');
let artist =document.querySelector('#artist');
let slider =document.querySelector('#duration_slider');
let track_image =document.querySelector('#track_image');

let timer;
let autoplay=1;

let index_no=0;
let plaing_song=false;
let track=document.createElement('audio');

let All_song=[
{
    name:"hye mera dil",
    path:"music/Haye_Mera_Dil_2.mp3",
    img:"img/hye mera dil.jpg",
    artist:'"Alfaz"'
},
{
    name:"Moon Rise",
    path:"music/Moon Rise Guru Randhawa(DJSathi).mp3",
    img:"img/moon rise.jpg",
    artist:'"Guru Raandhawa"'
},
{
    name:"Enda Ni chalda pyar",
    path:"music/Eda Ni Chalda Pyar Soniye-(DJMaza).mp3",
    img:"img/subh.jpg",
    artist:'"Subh"'
}
];

function load_track(index_no){
    clearInterval(timer);
    reset_slider();

    track.src=All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML =All_song[index_no].artist;

    timer =setInterval(range_slider,1000);
    Total.innerHTML = All_song.length;
    Present.innerHTML= index_no + 1;
}
load_track(index_no);

function justplay(){
         if(plaing_song==false)
          {  
               playsong();
          }
        else 
          {
                pausesong();
          }
  } 
  function reset_slider(){
    slider.value=0;
  }

console.log("welcome to spotify");
//intialize the variables
let songIndex=0;
let audioElement =new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Mahi n Mahi",filePath:"songs/1.mp3",coverPath:"cover/cover1.jpg"},
    { songName: "Ishq di..", filePath: "songs/1.mp3", coverPath: "cover/cover2.jpg" },
    { songName: "samjhava ji", filePath: "songs/2.mp3", coverPath: "cover/cover3.jpg" },
    { songName: "Tenu itna me pyar kra", filePath: "songs/3.mp3", coverPath: "cover/cover4.jpg" },
    { songName: "I Love You..", filePath: "songs/4.mp3", coverPath: "cover/cover1.jpg" },
    { songName: "Dil chuke sanam", filePath: "songs/5.mp3", coverPath: "cover/cover5.jpg" },
    { songName: "shubhanalllahh", filePath: "songs/6.mp3", coverPath: "cover/cover6.jpg" },    
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        console.log("I am reached");
        audioElement.play();
        masterPlay.classList.remove('bi-play-circle'); 
        masterPlay.classList.add('bi-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('bi-pause-circle');
        masterPlay.classList.add('bi-play-circle');
        gif.style.opacity =0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=Progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value*audioElement.duration/100;
})


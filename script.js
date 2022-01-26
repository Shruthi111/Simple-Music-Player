console.log("Welcome to spotify");


let songindex=0;
let audioelement=new Audio('Spotify Clone/songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let displaybar=document.getElementById('displaybar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));



songs = [
    {
        name: "Legion", songpath: "Spotify Clone/songs/1.mp3",
        coverpath: "Spotify Clone/covers/1.jpg"
    },
    {
        name: "Trap", songpath: "Spotify Clone/songs/1.mp3",
        coverpath: "Spotify Clone/covers/2.jpg"
    },
    {
        name: "They Mad-LowkeyPesci", songpath: "Spotify Clone/songs/1.mp3",
        coverpath: "Spotify Clone/covers/3.jpg"
    },
    {
        name: "Plug Walk", songpath: "Spotify Clone/songs/1.mp3",
        coverpath: "Spotify Clone/covers/4.jpg"
    },
    {
        name: "Unknown", songpath: "Spotify Clone/songs/1.mp3",
        coverpath: "Spotify Clone/covers/5.jpg"
    },
    {
        name: "The Safety Dance", songpath: "Spotify Clone/songs/1.mp3",
        coverpath: "Spotify Clone/covers/6.jpg"
    },
    {
        name: "Back it Up", songpath: "Spotify Clone/songs/1.mp3",
        coverpath: "Spotify Clone/covers/7.jpg"
    },
    {
        name: "Unknown", songpath: "Spotify Clone/songs/1.mp3",
        coverpath: "Spotify Clone/covers/8.jpg"
    },
    {
        name: "Unknown", songpath: "Spotify Clone/songs/1.mp3",
        coverpath: "Spotify Clone/covers/9.jpg"
    },
    {
        name: "True Love", songpath: "Spotify Clone/songs/1.mp3",
        coverpath: "Spotify Clone/covers/10.jpg"
    }
];

songitems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;   
});



masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;

    }
});
audioelement.addEventListener('timeupdate',()=>
{
    // console.log('Timeupdate');
    progress =parseInt((audioelement.currentTime/audioelement.duration)*100);
    // console.log(progress);
    displaybar.value=progress;
}

);


displaybar.addEventListener('change',()=>{
    audioelement.currentTime = displaybar.value * audioelement.duration / 100;
});



const makeallplays=()=>{
   
    Array.from(document.getElementsByClassName('songinfo')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
    
}


Array.from(document.getElementsByClassName('songinfo')).forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        
        makeallplays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src=`Spotify Clone/songs/1.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        element.addEventListener('click',(e)=>{
            audioelement.pause();
            makeallplays();
        })

    });

}
    );



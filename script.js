
//----------------------Define os audios e suas propriedades-------------------------

var audio = document.getElementById('1');
var audio2 = document.getElementById('2');
var audio3 = document.getElementById('3');
var musicName = document.getElementById('music-name');
var currentTimeSpan = document.getElementById('current');
var durationTimeSpan = document.getElementById('duration')
var label01 = document.getElementById('music01')
var label02 = document.getElementById('music02')


var album ={
    'musica01':{'audio': audio, 'name':'Interrupted Light', 'currentTime': audio.currentTime, 'duration':audio.duration},
    'musica02':{'audio': audio2, 'name':'Dark Memories', 'currentTime': audio.currentTime, 'duration':audio2.duration},

}


// -----------------------------Seta os estados como iniciais---

// guarda o estado do botão 'ouvir o álbum' (0 -não clicado, 1 - clicado)
var stateButton = 0
//guarda o estado do footer (0 - não aparece, 1 - aparece)
var stateFooter = 0

var stateLista = 0









//------------------------------Botão Ouvir o Álbum ---------


// pega o botão 'Ouvir o álbum'
var buttonPlayAll = document.getElementById('playAll');


buttonPlayAll.addEventListener("click", () =>{ 
    
    
    
    if (stateButton === 1){
        stateButton = 0
        //audio.pause()
        console.log('hiding..')
        

    }
    else {
        stateButton = 1
        showFooter('musica01', album.musica01.name);
        album.musica01.audio.play();
        
        console.log('showing...')
    }

    progressBar('musica01')
})

//------------------------------------Aparecer Footer-----------------------

const showFooter = (music, music_name) => {
    var displayFooter = document.getElementById('audio-player-container')
    musicName.innerText = music_name
    playPause(music)
    displayFooter.classList.add('transform', '-translate-y-0')
    displayFooter.style.transition = 'all 1.618s ease'
    stateFooter = 1
    
}

const hideFooter = (music) => {
    displayFooter = document.getElementById('audio-player-container')
    playPause(music)
    displayFooter.classList.remove('transform', '-translate-y-0')
    displayFooter.style.transition = 'all 1.618s ease'
    stateFooter = 0
}

//------------------------Atualiza Progress Bar ----------------------------

function progressBar (music) {
    var progressBar = document.getElementById('seek-slider');
    album[music].audio.addEventListener('timeupdate', function(){
        progressBar.setAttribute("value", this.currentTime / this.duration);
        currentTimeSpan.textContent = `${calculateTime(this.currentTime)} `
        durationTimeSpan.textContent = `${calculateTime(this.duration)}`

})
}

//-------------------Calcular segundos e minutos-----------------------

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

//--------------------muda botão play/pause---------------------------

function playPause(music_name){
    var playIcon = document.getElementById('play-icon');
    playIcon.addEventListener('click', () =>{
    if (playIcon.textContent == 'pause'){
        playIcon.textContent = 'play_arrow';
        album[music_name].audio.pause()
    }
    else {
        playIcon.textContent = 'pause';
        album[music_name].audio.play()
    }
    
})
}

// ----------------------------toca musica 01 -------------------------

label01.addEventListener('click', () =>{
    hideFooter('musica02');
    if (stateLista==0){
        showFooter('musica01',album.musica01.name);
        progressBar('musica01');
        album.musica01.audio.play();
        label01.classList.add('bg-slate-800');
        stateLista = 1;
    }
    else {
        album.musica01.audio.pause();
        
        stateLista = 0;
    }

    console.log('showing...')
})

//------------------------------toca musica 02 ---------------------

label02.addEventListener('click', () =>{
    hideFooter('musica01'); 
    console.log(stateLista);
    if (stateLista==0){
        showFooter('music02', album.musica02.name);
        progressBar('musica02');
        album.musica02.audio.play();
        label02.classList.add('bg-slate-800');
        stateLista = 1;
    }
    else {
        label02.classList.remove('bg-slate-800');
        stateLista = 0;
    }
    
})
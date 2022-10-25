
//----------------------Define os audios e suas propriedades-------------------------

var audio = document.getElementById('1');
var audio2 = document.getElementById('2');
var audio3 = document.getElementById('3');
var currentTimeSpan = document.getElementById('current');
var durationTimeSpan = document.getElementById('duration')


//var album ={
  //  'musica01':{'audio': audio, 'name':'Interrupted Light', 'currentTime': audio.currentTime, 'duration':audio.duration},
  //  'musica02':{'audio': audio2, 'name':'Dark Memories', 'currentTime': audio2.currentTime, 'duration':audio2.duration},

//}


// -----------------------------Seta os estados como iniciais---

// guarda o estado do botão 'ouvir o álbum' (0 -não clicado, 1 - clicado)
var stateButton = 0
//guarda o estado do footer (0 - não aparece, 1 - aparece)
var stateFooter = 0







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
        audio.play();
        showFooter()
        console.log('showing...')
    }
})

//------------------------------------Aparecer Footer-----------------------

const showFooter = () => {
    displayFooter = document.getElementById('audio-player-container')
    displayFooter.classList.add('transform', '-translate-y-0')
    displayFooter.style.transition = 'all 1.618s ease'
}

const hideFooter = () => {
    displayFooter = document.getElementById('audio-player-container')
    displayFooter.classList.remove('transform', '-translate-y-0')
    displayFooter.style.transition = 'all 1.618s ease'
}

//------------------------Atualiza Progress Bar ----------------------------

var progressBar = document.getElementById('seek-slider');
audio.addEventListener('timeupdate', function(){
    progressBar.setAttribute("value", this.currentTime / this.duration);
    currentTimeSpan.textContent = `${calculateTime(this.currentTime)} `
    durationTimeSpan.textContent = `${calculateTime(this.duration)}`

})

//-------------------Calcular segundos e minutos-----------------------

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

//--------------------muda botão play/pause---------------------------

var playIcon = document.getElementById('play-icon');
playIcon.addEventListener('click', () =>{
    if (playIcon.textContent == 'play_arrow'){
        playIcon.textContent = 'pause';
        audio.pause()
    }
    else {
        playIcon.textContent = 'play_arrow';
        audio.play()
    }
    
})

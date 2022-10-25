
//----------------------Define os audios e suas propriedades-------------------------

var audio = document.querySelector('audio')

var musicName = document.getElementById('music-name');
var currentTimeSpan = document.getElementById('current');
var durationTimeSpan = document.getElementById('duration')
var label = Array.from(document.getElementsByTagName('li'))

console.log(label)



var album ={
    'music01':{'name':'Interrupted Light', 'src': '/MUSICA 01.mp3', 'identificador':'01'},
    'music02':{'name':'Dark Memories', 'src':'/ENDING THEME.mp3', 'identificador':'02'},

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
        console.log('hiding..')
        

    }
    else {
        stateButton = 1
        console.log('showing...')
    }

})

//------------------------------------Aparecer Footer-----------------------

const showFooter = (music) => {
    var displayFooter = document.getElementById('audio-player-container')
    musicName.innerText = album[music].name
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

function progressBar () {
    var progressBar = document.getElementById('seek-slider');
    audio.addEventListener('timeupdate', function(){
        progressBar.setAttribute("value", this.currentTime / this.duration);
        durationTimeSpan.textContent = `${calculateTime(this.duration)}`
        currentTimeSpan.textContent = `${calculateTime(this.currentTime)} `
        var audio_id = this.id
        

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


    var playIcon = document.getElementById('play-icon');
    playIcon.addEventListener('click', () =>{
    console.log('evento disparado')
    if (playIcon.textContent == 'pause'){
        playIcon.textContent = 'play_arrow';
        audio.pause()
    }
    else {
        playIcon.textContent = 'pause';
        audio.play()
    }
})

// ----------------------------toca musica 01 -------------------------
label.forEach(function(li){
    li.addEventListener('click', () =>{
        //-------------seta o botão pause inicialmente
        playIcon.textContent = 'pause';
        var id = li.id
       
        if (stateLista==0){
            console.log(album[id])
            audio.setAttribute('src', album[id].src)
            audio.setAttribute('id', album[id].identificador )
            progressBar()
            showFooter(id)
            audio.play()
        }
        
    })
})


//------------------------------botao avançar ---------------------

var skip = document.getElementById('skip-next');
skip.addEventListener('click', () => {
    audio['musica'+audio_id]
    



}

)
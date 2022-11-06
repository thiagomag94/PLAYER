
//---------------------- componentes-------------------------

var audio = document.querySelector('audio')

var musicName = document.getElementById('music-name');
var currentTimeSpan = document.getElementById('current');
var durationTimeSpan = document.getElementById('duration')
var label = Array.from(document.getElementsByTagName('li'))
var displayFooter = document.getElementById('audio-player-container')
var album ={
    'music00':{'name':'Moment of a Miracle', 'src': 'MUSICA 00.mp3', 'identificador':'00'},
    'music01':{'name':'Interrupted Light', 'src': 'MUSICA 01.mp3', 'identificador':'01'},

}

var albumSize = Object.keys(album).length



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

    // se o ícone de play estiver ativo, muda para pause assim que clicar no botão "Ouvir álbum"
    if (playIcon.textContent == 'play_arrow'){
        playIcon.textContent = 'pause';
        
    }

    // remove o selecionado de todas as músicas
    label.forEach(li => {
        li.classList.remove('bg-neutral-900')
       
    })

    //adiciona o selecionado apenas na primeira
    label[0].classList.add('bg-neutral-900')
    
    audio.setAttribute('src', album.music00.src)
    audio.setAttribute('id', album.music00.identificador )
    progressBar()
    showFooter('music00')
    audio.play()

})

//------------------------------------Aparecer Footer-----------------------

const showFooter = (music) => {
    var displayFooter = document.getElementById('audio-player-container')
    musicName.innerText = album[music].name
    displayFooter.classList.remove('transform', 'translate-y-32')
    displayFooter.classList.add('transform', '-translate-y-0')
    displayFooter.style.transition = 'all 1.618s ease'
    stateFooter = 1
    
}



//------------------------Atualiza Progress Bar ----------------------------

function progressBar () {
    var progressBar = document.getElementById('seek-slider');
    audio.addEventListener('timeupdate', function(){
        progressBar.setAttribute("value", this.currentTime / this.duration);
        durationTimeSpan.textContent = `${calculateTime(this.duration)}`
        currentTimeSpan.textContent = `${calculateTime(this.currentTime)} `
        
        
        

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

// ----------------------------toca musica  -------------------------
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
audio.addEventListener('timeupdate', function() {
    
    var skip = document.getElementById('skip-next');
    var audio_id = this.id
    var id_increase = '0'+(parseInt(audio_id)+1).toString()
    skip.addEventListener('click', () => {
        playIcon.textContent = 'pause';
        audio.setAttribute('src', album['music'+id_increase].src)
        audio.setAttribute('id', album['music'+id_increase].identificador )
        musicName.innerText = album['music' + id_increase].name
        audio.play()
}

)
})

// -----------------------------tocar proxima ao acabar -------------

audio.addEventListener('ended', function() {
    
    var audio_id = this.id
    var id_increased = '0'+(parseInt(audio_id)+1).toString()
    if (parseInt(id_increased) > albumSize ){
        playIcon.textContent = 'play_arrow';
    }
    else {
        
        //remove seleção da faixa que terminou e coloca na que começou a tocar
        label[parseInt(audio_id)].classList.remove('bg-neutral-900')
        label[parseInt(audio_id)+1].classList.add('bg-neutral-900')
        
               
               
           
        
                
        playIcon.textContent = 'pause';
        audio.setAttribute('src', album['music'+id_increased].src)
        audio.setAttribute('id', album['music'+id_increased].identificador )
        musicName.innerText = album['music' + id_increased].name
        audio.play()
        
        
    }
    
    
    
}
)


// -------------------------------Adiciona duração da música na lista ----------------------


Object.keys(album).forEach(key => {
    var audio_temp = new Audio(album[key].src)
    audio_temp.addEventListener('loadedmetadata', function() {
        var audio_duration = calculateTime(this.duration).toString()
        var li = document.getElementById(key)
        var newLi = document.createElement('li') 
        newLi.classList.add('absolute', 'right-8','text-slate-500')
        newLi.textContent = audio_duration
        li.appendChild(newLi)
    }
    )
    
})

//----------------------------------musica selecionada ao clicar ------------------------

label.forEach(li =>{
    li.addEventListener('click', function(){
        label.forEach(li => {
            li.classList.remove('bg-neutral-900')
           
        })
        li.classList.add('bg-neutral-900')
        
    })

})
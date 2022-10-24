

// -----------------------------Seta os estados como iniciais---

// guarda o estado do botão 'ouvir o álbum' (0 -não clicado, 1 - clicado)
var stateButton = 0
//guarda o estado do footer (0 - não aparece, 1 - aparece)
var stateFooter = 0







//------------------------------Botão Ouvir o Álbum ---------


// pega o botão 'Ouvir o álbum'
var buttonPlayAll = document.getElementById('playAll');


buttonPlayAll.addEventListener("click", () =>{ 
    var audio = document.getElementById('1');
    
    
    if (stateButton === 1){
        stateButton = 0
        audio.pause()
        console.log('hiding..')
        hideFooter();

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

    

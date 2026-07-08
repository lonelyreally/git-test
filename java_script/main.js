const playpauseButton = document.querySelector('.playpause')
const nextSongButton = document.querySelector('.next')
const prevSongButton = document.querySelector('.prev')
const mixSongButton = document.querySelector('.mix')
const repeatSongButton = document.querySelector('.repeat')
const progress = document.querySelector('.progress')
const songImg = document.querySelector('.img')
const songTitle = document.querySelector('.title')
const songArtist = document.querySelector('.artist')
const current_time = document.querySelector('.current_time')
const song_duration = document.querySelector('.song_duration')
const artistPhoto = document.querySelector('.artist_photo')
const singleCover = document.querySelectorAll('.singleCover')
const artistName = document.querySelectorAll('.artistName')
const singleTitle = document.querySelectorAll('.singleTitle')
const artist = document.querySelector('.artist_name')
const albumCover = document.querySelectorAll('.albumCover')
const albumTitle = document.querySelectorAll('.album_title')
const back = document.querySelector('.back')
const single = document.querySelectorAll('.single')

const nameAr = document.querySelectorAll('.name_ar')


const ph_ar1 = document.querySelector('.ph_ar1')
const closed = document.querySelector('.closed')
const chto = document.querySelector('.artists_info')


closed.addEventListener('click', ()=> {
    chto.style.display = 'none'
})

songTitle.addEventListener('click', ()=> {
    chto.style.display = 'block'
})





const art1 = document.querySelector('.art1')
const art2 = document.querySelector('.art2')
const art3 = document.querySelector('.art3')
const art4 = document.querySelector('.art4')


const songs = [
    {   
        image: "images/xxxmanera - usb.png",
        title: "usb",
        artist: "xxxmanera",
        artist1: "xxxmanera",
        audio: "audio/usb.mp3",
        about: 'images/xxxmanera.png',

        // СИНГЛЫ
        singleCover_0: 'images/xxxmanera - usb.png',
        artistName_0: 'xxxmanera',
        singleTitle_0: 'usb',
        audio: "audio/usb.mp3",

        singleCover_1: 'images/xxxmanera - Тает лёд.png',
        artistName_1: 'xxxmanera',
        singleTitle_1: 'Тает лёд',

        singleCover_2: 'images/xxxmanera - Я хочу.png',
        artistName_2: 'xxxmanera',
        singleTitle_2: 'Я хочу',

        singleCover_3: 'images/xxxmanera - for sure.png',
        artistName_3: 'xxxmanera',
        singleTitle_3: 'for sure',

        // АЛЬБОМЫ
        albumCover_0: 'images/xxxmanera - HUNNID_GATEKEEPING.png',
        albumTitle_0: 'HUNNID: GATEKEEPING',

        albumCover_1: 'images/xxxmanera - Man of Era 3.png',
        albumTitle_1: 'Man of Era 3',

        albumCover_2: 'images/xxxmanera - exxxtract vol. 1.png',
        albumTitle_2: 'exxxtract vol. 1',
    },
    {
        image: "images/d3r - jealous (UNFINISHED).jpeg",
        title: "jealous",
        artist: "d3r",
        artist1: "d3r",
        audio: "audio/jealous.mp3",
        about: 'images/d3r.png',

        // СИНГЛЫ
        singleCover_0: 'images/d3r - jealous (UNFINISHED).jpeg',
        artistName_0: 'd3r',
        singleTitle_0: 'jealous',
        
        singleCover_1: 'images/d3r - reality.jpeg',
        artistName_1: 'd3r',
        singleTitle_1: 'reality',

        singleCover_2: 'images/d3r - love bomb.jpeg',
        artistName_2: 'doll real, d3r',
        singleTitle_2: 'love bomb',

        // АЛЬБОМЫ
        albumCover_0: 'images/d3r - d3valued.png',
        albumTitle_0: 'd3valued',
    },
    {
        image: "images/dollreal, d3r - RED.png",
        title: "RED",
        artist: "dollreal, d3r",
        artist1: "dollreal",
        artist2: "d3r",
        audio: "audio/red.m4a"
    },
    {
        image: "images/d3r, kets4eki, asteria - DROP IT!.jpg",
        title: "DROP IT!",
        artist: "d3r, kets4eki, asteria",
        artist1: "d3r",
        artist2: "kets4eki",
        artist3: "asteria",
        audio: "audio/drop it.m4a",
    },
    {
        image: "images/Upvampin, kets4eki, 5GSWAG - PASS THAT HOE AROUND!.jpeg",
        title: "PASS THAT HOE AROUND!",
        artist: "Upvampin, kets4eki, 5GSWAG",
        artist1: "Upvampin",
        artist2: "kets4eki",
        artist3: "5GSWAG",
        audio: "audio/pass that hoe around!.m4a",
    },
    {
        image: "images/skypebf, kets4eki, Syris - talk shit.jpeg",
        title: "talk shit",
        artist: "skypebf, kets4eki, Syris",
        artist1: "skypebf",
        artist2: "kets4eki",
        artist3: "Syris",
        audio: "audio/talk shit.m4a",
    },
    {
        image: "images/мистер модератор, SODA LUV - занозы.jpeg",
        title: "занозы",
        artist: "мистер модератор, SODA LUV",
        artist1: "мистер модератор",
        artist2: "SODA LUV",
        audio: "audio/занозы.m4a",
    },
    {   image: "images/JDFLAG - LЮБИТЬ.jpeg",
        title: "LЮБИТЬ",
        artist: "JDFLAG",
        artist1: "JDFLAG",
        audio: "audio/LЮБИТЬ.m4a",
        about: 'images/JDFLAG.png',

        // СИНГЛЫ
        singleCover_0: 'images/JDFLAG - TRЭПDOM.jpeg',
        artistName_0: 'JDFLAG',
        singleTitle_0: 'TRЭПDOM',

        singleCover_1: 'images/JDFLAG - LЮБИТЬ.jpeg',
        artistName_1: 'JDFLAG',
        singleTitle_1: 'LЮБИТЬ',

        singleCover_2: 'images/JDFLAG - ИNSЭЙN.jpeg',
        artistName_2: 'JDFLAG',
        singleTitle_2: 'ИNSЭЙN',
        
        singleCover_3: 'images/JDFLAG - DEMONЫ.jpeg',
        artistName_3: 'JDFLAG',
        singleTitle_3: 'DEMONЫ',

        // АЛЬБОМЫ
        albumCover_0: 'images/JDFLAG - FLAГSTRИК.jpeg',
        albumTitle_0: 'FLAГSTRИК',
    },
    {
        image: "images/tewiq - попал.png",
        title: "попал",
        artist: "tewiq",
        artist1: "tewiq",
        audio: "audio/попал.m4a",
        about: 'images/tewiq.png',
        artistName: 'tewiq',
    },
    {
        image: "images/dmtboy - OMGDBL.jpeg",
        title: "OMGDBL",
        artist: "dmtboy",
        artist1: "dmtboy",
        audio: "audio/omgdbl.m4a",
        about: 'images/dmtboy.png',
    },
    {
        image: "images/Kai Angel - im all blessed the fuck up.jpeg",
        title: "im all blessed the fuck up",
        artist: "Kai Angel",
        artist1: "Kai Angel",
        audio: "audio/im all blessed the fuck up.m4a",
        about: 'images/Kai Angel.png',
    },
    {
        image: "images/clout - sEx dOLL.jpeg",
        title: "sEx dOLL%)",
        artist: "clout",
        artist1: "clout",
        audio: "audio/sEx dOLL.m4a",
        about: 'images/clout.png',
    },
]
const audio = document.createElement("audio")

let currentSongIndex = 0


const artists = [
    {
        // d3r
        artist: 'd3r',
        about: 'images/d3r.png',
    },
    {
        // xxxmanera
        artist: 'xxxmanera',
        about: 'images/xxxmanera.png',
    }
]

let currentArtistIndex = 0









updateSong()

function nextSong() {
    playpauseButton.src = 'images/pausesongbutton.svg'
    if (currentSongIndex == songs.length - 1 && audio.currentTime == audio.duration) {
        playpauseButton.src = 'images/playsongbutton.svg'
        return
    }
    currentSongIndex++
    updateSong()
    audio.play()
}

function prevSong() {
    if (currentSongIndex != 0) {
        playpauseButton.src = 'images/pausesongbutton.svg'
    } 
    if (audio.currentTime < 5) {
        currentSongIndex--
        updateSong()
        audio.play()
    } else {
        audio.currentTime = 0
        audio.play();
    }
}

prevSongButton.addEventListener("click", prevSong)
nextSongButton.addEventListener("click", nextSong)

playpauseButton.addEventListener("click", function() {
    if (!audio.paused) {
        playpauseButton.src = 'images/playsongbutton.svg'
        audio.pause()
    }
    else {
        playpauseButton.src = 'images/pausesongbutton.svg'
        audio.play()
    }
})



function updateSong() {
    const song = songs[currentSongIndex]
    const person = artists[currentArtistIndex]
    songImg.src = song.image || '';
    songTitle.innerText = song.title || '';
    songArtist.innerText = song.artist || '';
    artistPhoto.src = song.about || '';

    art1.addEventListener('click', ()=> {
        artist.innerHTML = song.artist1 || ""
        if (artist.innerHTML == person.artist) {
            artistPhoto.src = song.about
        }
    })
    
    art2.addEventListener('click', ()=> {
        artist.innerHTML = song.artist2 || ""
        if (artist.innerHTML == song.artist) {
        }
    })

    art3.addEventListener('click', ()=> {
        artist.innerHTML = song.artist3 || ""
    })

    art4.addEventListener('click', ()=> {
        artist.innerHTML = song.artist4 || ""
    })

    
    ph_ar1.src = song.about
    nameAr[0].innerText = song.artist1
    nameAr[1].innerText = (song.artist2 || '')

    singleCover.forEach(item => {
        item.style.width = '45px'
        item.style.borderRadius = '10px'
})
    singleCover[0].src = song.singleCover_0 || '';
    singleCover[1].src = song.singleCover_1 || '';
    singleCover[2].src = song.singleCover_2 || '';
    singleCover[3].src = song.singleCover_3 || '';

    singleTitle[0].innerHTML = song.singleTitle_0 || '';
    singleTitle[1].innerHTML = song.singleTitle_1 || '';
    singleTitle[2].innerHTML = song.singleTitle_2 || '';
    singleTitle[3].innerHTML = song.singleTitle_3 || '';

    albumCover.forEach(item => {
        item.style.width = '100px'
        item.style.borderRadius = '10px';

    })
    albumCover[0].src = song.albumCover_0 || '';
    albumCover[1].src = song.albumCover_1 || '';
    albumCover[2].src = song.albumCover_2 || '';


    albumTitle[0].innerHTML = song.albumTitle_0 || '';
    albumTitle[1].innerHTML = song.albumTitle_1 || '';
    albumTitle[2].innerHTML = song.albumTitle_2 || '';


    artistName[0].innerHTML = song.artistName_0 || '';
    artistName[1].innerHTML = song.artistName_1 || '';
    artistName[2].innerHTML = song.artistName_2 || '';
    artistName[3].innerHTML = song.artistName_3 || '';


    audio.src = song.audio;

    audio.onloadedmetadata = function() {
        progress.value = 0;
        progress.max = audio.duration;
    };

    art1.innerHTML = song.artist1 || song.artist
    art2.innerHTML = song.artist2 || ""
    art3.innerHTML = song.artist3 || ""
    art4.innerHTML = song.artist4 || ""














}

progress.addEventListener('change', function() {
    audio.currentTime = progress.value;
})

function moveProgress() {
    progress.value = audio.currentTime;
    current_time.innerHTML = sToStr(Math.round(audio.currentTime));
    song_duration.innerHTML = sToStr(Math.round(audio.duration));
}

setInterval(moveProgress, 1000);

audio.addEventListener('ended', nextSong)

function sToStr(s) {
  let m = Math.trunc(s / 60) + ''
  s = (s % 60) + ''
  return m.padStart(2, 0) + ':' + s.padStart(2, 0)
}




// single.forEach(item => {
//     const zas  = item.querySelector('.zas')
//     zas.style.display = 'none'
//     item.addEventListener('mouseover', ()=> {
//         zas.style.display = 'flex'
//         if (zas.style.display == 'flex') {
//             item.addEventListener('mouseout', ()=> {
//                 zas.style.display = 'none'
//             })
//         }
//     })
// })


single.forEach(item => {
    const zas  = item.querySelector('.zas')
    zas.style.opacity = '0'
    item.addEventListener('mouseover', ()=> {
        zas.style.transition = 'opacity 0.3s'
        zas.style.opacity = '1'
        if (zas.style.opacity == '1') {
            item.addEventListener('mouseout', ()=> {
                zas.style.transition = 'opacity 0.3s'
                zas.style.opacity = '0'
            })
        }
    })
})





single[0].addEventListener('click', ()=> {
    const zas  = single[0].querySelector('.zas')
    if (!audio.paused) {
        zas.style.display = 'flex'
    } else {
        zas.style.display = 'none'
    }
    audio.play()
})







const playlist_nav = document.querySelector('.playlist_nav')
const player_nav = document.querySelector('.player_nav')
const playlist = document.querySelector('.playlist')

playlist.style.display = 'none'

playlist_nav.addEventListener('click', () => {
    if (playlist.style.display == 'none') {
        playlist.style.display = 'block'
    } 
})

player_nav.addEventListener('click', () => {
    if (playlist.style.display == 'block') {
        playlist.style.display = 'none'
    }
})


const buttons = document.querySelectorAll('.btn_nav');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.style.backgroundColor = 'black'; 
        });
        button.style.backgroundColor = '#363636'; 
    });
});


const mute_audio = document.querySelector('.mute')

mute_audio.addEventListener('click', ()=> {
    if (audio.volume != 0) {
        audio.volume = 0;
    } else {
        audio.volume = 1.0
    }
})






















const artist_about = document.querySelector(".artist_about")
artist_about.style.display = 'none'

songArtist.addEventListener('click', ()=> {
    artist_about.style.display = 'block'
})

art1.addEventListener('click', ()=> {
    artist_about.style.display = 'block'
})

art2.addEventListener('click', ()=> {
    artist_about.style.display = 'block'
})

art3.addEventListener('click', ()=> {
    artist_about.style.display = 'block'
})

art4.addEventListener('click', ()=> {
    artist_about.style.display = 'block'
})



back.addEventListener('click', ()=> {
    artist_about.style.display = 'none'
})
































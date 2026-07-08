const list = [
    {
        artist: 'asteria',
        img: 'artists/asteria.jpg',
    },
    {
        artist: 'Clover!',
        img: 'artists/clover!.jpg',
    },
    {
        artist: 'xaduma',
        img: 'artists/xaduma.jpg',
    },
    {
        artist: 'EPITXME',
        img: 'artists/EPITXME.jpg',
    },
    {
        artist: 'd3r',
        img: 'artists/d3r.jpg',
    },
    {
        artist: 'Upvampin',
        img: 'artists/Upvampin.jpg',
    },
    {
        artist: 'clout',
        img: 'artists/clout.jpeg',
    },
    {
        artist: 'kets4eki',
        img: 'artists/kets4eki.jpg',
    },
    {
        artist: '5GSWAG',
        img: 'artists/5GSWAG.jpg',
    },
    {
        artist: 'GASPXR',
        img: 'artists/GASPXR.jpg',
    },
    {
        artist: 'wikuro',
        img: 'artists/wikuro.jpg',
    },
    {
        artist: 'p6inkillr',
        img: 'artists/p6inkillr.jpeg',
    },
    {
        artist: 'Kai Angel',
        img: 'artists/Kai Angel.jpg',
    },
]

const tracklist_list = [
    {
        cover: 'images/xxxmanera - usb.png',
        title: 'usb',
        artist_1: 'xxxmanera',
        audio: 'audio/usb.mp3'
    },
    {
        cover: "images/d3r - jealous (UNFINISHED).jpeg",
        title: 'jealous',
        artist_1: 'd3r',
        audio: 'audio/jealous.mp3',
    },
    {
        cover: 'images/dollreal, d3r - RED.png',
        title: 'RED',
        artist_1: 'dollreal',
        artist_2: 'd3r',
        audio: 'audio/red.m4a'
    },
    {
        cover: 'images/skypebf, kets4eki, Syris - talk shit.jpeg',
        title: 'talk shit',
        artist_1: 'skypebf',
        artist_2: 'kets4eki',
        artist_3: 'Syris',
        audio: 'audio/talk shit.m4a'
    },
    {
        cover: 'images/мистер модератор, SODA LUV - занозы.jpeg',
        title: "занозы",
        artist_1: 'мистер модератор',
        artist_2: 'SODA LUV',
        audio: 'audio/занозы.m4a'
    },
        {
        cover: 'images/Clover! - YOU AND I.png',
        title: 'YOU AND I',
        artist_1: 'Clover!',
        audio: 'audio/you and i.mp3'
    },
    {
        cover: 'images/d3r - im so delusiona.jpg',
        title: 'im so delusional',
        artist_1: 'd3r',
        audio: 'audio/im so delusional.m4a'
    },
    {
        cover: 'images/Clover! - bacardi!.png',
        title: 'bacardi!',
        artist_1: 'Clover!',
        audio: 'audio/bacardi!.m4a'
    },
    {
        cover: 'images/d3r, kets4eki, Proz - life force.jpg',
        title: 'life force',
        artist_1: 'd3r',
        artist_2: 'kets4eki',
        artist_3: 'Proz',
        audio: 'audio/life force.m4a'
    },
    {
        cover: 'images/Clover! - CROWD PLEASER!.jpg',
        title: 'CROWD PLEASER!',
        artist_1: 'Clover!',
        audio: 'audio/crowd pleaser!.m4a'
    },
    {
        cover: 'images/GASPXR, CR0T0N, BroA$tar - ADHD 3!.jpeg',
        title: 'ADHD 3!',
        artist_1: 'GASPXR',
        artist_2: 'CR0T0N',
        artist_3: 'BroA$tar',
        audio: 'audio/adhd 3!.mp3'
    },
    {
        cover: 'images/p6inkillr, dollreal, Proz - TAKE A BITE.jpg',
        title: 'TAKE A BITE',
        artist_1: 'p6inkillr',
        artist_2: 'dollreal',
        artist_3: 'Proz',
        audio: 'audio/take a bite.mp3'
    },
    {
        cover: 'images/xaduma, UpVampin - BLOODSUCKER.jpg',
        title: 'BLOODSUCKER',
        artist_1: 'xaduma',
        artist_2: 'UpVampin',
        audio: 'audio/bloodsucker.mp3'
    },
    {
        cover: 'images/xaduma - DANCE.png',
        title: 'DANCE',
        artist_1: 'xaduma',
        audio: 'audio/dance.m4a'
    },
    {
        cover: 'images/EPITXME, xaduma - UH HUH!.jpg',
        title: 'UH HUH!',
        artist_1: 'EPITXME',
        artist_2: 'xaduma',
        audio: 'audio/uh huh.m4a'
    },
    {
        cover: 'images/EPITXME, xaduma - SUM MORE!.jpg',
        title: 'SUM MORE!',
        artist_1: 'EPITXME',
        artist_2: 'xaduma',
        audio: 'audio/sum more!.m4a'
    },
    {
        cover: 'images/EPITXME, sxcredmane - ANYTHING YOU WANT!.png',
        title: 'ANYTHING YOU WANT!',
        artist_1: 'EPITXME',
        artist_2: 'sxcredmane',
        audio: 'audio/anything you want!.m4a'
    },
    {
        cover: 'images/EPITXME, xaduma - LA LA LA.png',
        title: 'LA LA LA',
        artist_1: 'EPITXME',
        artist_2: 'xaduma',
        audio: 'audio/la la la.m4a'
    },
]

// ИСПОЛНИТЕЛИ

// 1. Находим нужный родительский блок
const parentBlock = document.querySelector('.artists');

// 2. Создаем временный контейнер в памяти
const fragment_artists = document.createDocumentFragment();

// 3. Создаем и наполняем новые элементы (например, в цикле)
for (let i = 0; i < list.length; i++) {
  const newElement = document.createElement('div');
  const newImg = document.createElement('img');
  const newCard = document.createElement('div');
  newElement.textContent = list[i].artist;
  newImg.src = list[i].img;
  newCard.className = 'card';
  newImg.className = 'block_img';
  
  // Добавляем элемент во временный контейнер
  newCard.appendChild(newImg)
  newCard.appendChild(newElement)
  fragment_artists.appendChild(newCard);
}

// 4. Добавляем всё содержимое в блок (старые элементы останутся на месте)
parentBlock.append(fragment_artists);


// ТРЕКЛИСТ
const tracklist = document.querySelector('.tracklist');

const track = document.querySelectorAll('.track')

const fragment_tracks = document.createDocumentFragment();

for (i = 0; i < tracklist_list.length; i++) {
    const newTrack = document.createElement('div')
    const newTrackImg = document.createElement('img')
    const newTrackAbout = document.createElement('div')
    const newTrackTitle = document.createElement('div')
    const newTrackArtist = document.createElement('div')
    newTrackImg.src = tracklist_list[i].cover;
    newTrackTitle.textContent = tracklist_list[i].title;
    newTrack.className = 'track'
    newTrackImg.className = 'track-img';
    newTrackAbout.className = 'track-about';
    newTrackTitle.className = 'track-title';
    newTrackArtist.className = 'track-artist'

    // ДОБАВЛЕНИЕ ИСПОЛНИТЕЛЕЙ
    const artists = [];
    const track = tracklist_list[i]; 
    for (const key in track) {
        if (key.startsWith('artist') && track[key]) {
            artists.push(track[key]);
        }
    }
    newTrackArtist.textContent = artists.join(', ');

    newTrackAbout.appendChild(newTrackTitle)
    newTrackAbout.appendChild(newTrackArtist)
    newTrack.appendChild(newTrackImg)
    newTrack.appendChild(newTrackAbout)

    fragment_tracks.appendChild(newTrack)
}

tracklist.append(fragment_tracks)



track.forEach(item => {
    const onItemHover = document.createElement('div')
    const onItemHoverImg = document.createElement('img')
    onItemHoverImg.src = 'images/play-track.svg'
    onItemHover.classList.add('onItemHoverTrack')
    onItemHover.appendChild(onItemHoverImg)
    item.append(onItemHover)
    item.addEventListener('mouseenter', ()=> {
        onItemHover.style.display = 'block'
    })
    item.addEventListener('mouseleave', ()=> {
        onItemHover.style.display = 'none'
    })
})















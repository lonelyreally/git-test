// КНОПКИ
const mixSong_button = document.querySelector('.mix_songs_button')
const prevSong_button = document.querySelector('.prev_song_button')
const playSong_button = document.querySelector('.play_song_button')
const nextSong_button = document.querySelector('.next_song_button')
const repeatSong_button = document.querySelector('.repeat_song_button')
const volume_play_button = document.querySelector('.volume_play_button')


// О ПЕСНЕ
const songCover = document.querySelector('.song_img')
const songTitle = document.querySelector('.song_info__title')
const songArtists = document.querySelector('.list_of_artists')


// ПРОГРЕСС
const progress = document.querySelector('.progress')
const current_time = document.querySelector('.current_time')
const song_duration = document.querySelector('.song_duration')


// АУДИО
const audio = document.createElement("audio")

// СПИСОК ИСПОЛНИТЕЛЕЙ
const photos_artists = [
    {
        text: 'asteria',
        photo: 'artists/asteria.jpg',
    },
    {
        text: 'kets4eki',
        photo: 'artists/kets4eki.jpg',
    },
    {
        text: 'Anarchist Sanctuary',
        photo: 'artists/Anarchist Sanctuary.jpeg',
    },
    {
        text: 'Vyzer',
        photo: 'artists/Vyzer.jpg',
    },
    {
        text: 'Clover!',
        photo: 'artists/Clover!.jpg',
    },
    {
        text: 'd3r',
        photo: 'artists/d3r.jpg',
    },
    {
        text: 'xaduma',
        photo: 'artists/xaduma.png',
    },
    {
        text: 'EPITXME',
        photo: 'artists/EPITXME.jpg',
    },
    {
        text: '6arelyhuman',
        photo: 'artists/6arelyhuman.jpg',
    },
    {
        text: 'hubithekid',
        photo: 'artists/hubithekid.jpeg',
    },
    {
        text: 'UpVampin',
        photo: 'artists/Upvampin.jpg',
    },
    {
        text: '5GSWAG',
        photo: 'artists/5GSWAG.jpg',
    },
    {
        text: 'Anti-Light',
        photo: 'artists/Anti-Light.jpeg',
    },
    {
        text: '444pluto',
        photo: 'artists/444pluto.jpg',
    },
    {
        text: 'dmtboy',
        photo: 'artists/dmtboy.jpg',
    },
    {
        text: 'Shluzov',
        photo: 'artists/Shluzov.jpeg',
    },
    {
        text: 'clout',
        photo: 'artists/clout.jpeg',
    },
    {
        text: 'wikuro',
        photo: 'artists/wikuro.jpg',
    },
    {
        text: 'p6inkillr',
        photo: 'artists/p6inkillr.jpeg',
    },
    {
        text: '4ortake',
        photo: 'artists/4ortake.jpg',
    },
    {
        text: 'блэйзи?',
        photo: 'artists/блэйзи.png',
    },
    {
        text: 'Proz',
        photo: 'artists/Proz.png',
    },
    {
        text: 'Lytra',
        photo: 'artists/Lytra.jpg',
    },
    {
        text: 'm1v',
        photo: 'artists/m1v.jpeg',
    },
    {
        text: 'm0v',
        photo: 'artists/m0v.jpeg',
    },
    {
        text: 'GASPXR',
        photo: 'artists/GASPXR.jpg',
    },
    {
        text: 'CR0T0N',
        photo: 'artists/CR0T0N.jpg',
    },
    {
        text: 'zhunii',
        photo: 'artists/zhunii.jpg',
    },
    {
        text: 'Vizzyx',
        photo: 'artists/Vizzyx.jpg',
    },
    {
        text: '`ёarly',
        photo: 'artists/`ёarly.jpg',
    },
    {
        text: 'JDFLAG',
        photo: 'artists/JDFLAG.jpeg',
    },
    {
        text: 'rompy',
        photo: 'artists/rompy.png',
    },
    {
        text: 'vinetta',
        photo: 'artists/vinetta.jpg',
    },
    {
        text: 'Kai Angel',
        photo: 'artists/Kai Angel.jpg',
    },
    {
        text: 'dollreal',
        photo: 'artists/dollreal.jpg',
    },
    {
        text: 'Vee4r',
        photo: 'artists/Vee4r.jpg',
    },
    {
        text: 'skypebf',
        photo: 'artists/skypebf.jpeg',
    },
    {
        text: 'lunagrace',
        photo: 'artists/lunagrace.jpg',
    },
    {
        text: 'Evilfan',
        photo: 'artists/Evilfan.jpeg',
    },
    {
        text: 'Syris',
        photo: 'artists/Syris.jpeg',
    },
    {
        text: 'xxxmanera',
        photo: 'artists/xxxmanera.jpeg',
    },
    {
        text: 'мистер модератор',
        photo: 'artists/мистер модератор.jpg',
    },
    {
        text: 'SODA LUV',
        photo: 'artists/SODA LUV.jpg',
    },
    {
        text: 'luvwillow',
        photo: 'artists/luvwillow.jpg',
    },
    {
        text: 'stravvbery',
        photo: 'artists/stravvbery.jpg',
    },
    {
        text: 'yungalligator',
        photo: 'artists/yungalligator.jpg',
    },
    {
        text: 'enveel',
        photo: 'artists/enveel.jpeg',
    },
    {
        text: 'athysue',
        photo: 'artists/athysue.jpeg',
    },
    {
        text: 'шейди',
        photo: 'artists/шейди.jpg',
    },
    {
        text: 'akiko!',
        photo: 'artists/akiko!.jpg',
    },
    {
        text: 'BroA$tar',
        photo: 'artists/BroA$tar.jpeg',
    },
    {
        text: 'Kana Paint',
        photo: 'artists/Kana Paint.jpg',
    },
    {
        text: 'sxcredmane',
        photo: 'artists/sxcredmane.jpg',
    },
    {
        text: 'euphoria',
        photo: 'artists/euphoria.png',
    },
    {
        text: 'prvttyscrzz',
        photo: 'artists/prvttyscrzz.jpeg',
    },
]

// СПИСОК ПЕСЕН
const songs = [
    {
        cover: 'images/Clover! - GOIN DUMB!.png',
        title: 'GOIN DUMB!',
        artist_1: 'Clover!',
        audio: 'audio/Clover! - GOIN DUMB!.m4a',
    },
    {
        cover: 'images/asteria - BAD FOR YOU.png',
        title: 'BAD FOR YOU',
        artist_1: 'asteria',
        audio: 'audio/asteria - BAD FOR YOU.mp3',
    },
    {
        cover: 'images/xaduma, Vyzer - DOWN&DIRTY.png',
        title: 'DOWN&DIRTY',
        artist_1: 'xaduma',
        artist_2: 'Vyzer',
        audio: 'audio/xaduma, Vyzer - DOWN&DIRTY.mp3',
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki  - i don’t care.png',
        title: 'i don’t care',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki  - i don’t care.m4a',
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki  - serotonin.png',
        title: 'serotonin',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki  - serotonin.mp3',
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki  - no_more.png',
        title: 'no_more',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki  - no_more.mp3',
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki  - laughin to the bank.png',
        title: 'laughin to the bank',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki  - laughin to the bank.mp3',
    },
    {
        cover: 'albums/clout/ОКО/clout - ОКО.webp',
        title: 'Миром правит',
        artist_1: 'clout',
        audio: 'albums/clout/ОКО/audio/clout - Миром правит.m4a',
    },
    {
        cover: 'albums/clout/ОКО/clout - ОКО.webp',
        title: 'Ad4m',
        artist_1: 'clout',
        audio: 'albums/clout/ОКО/audio/clout - Ad4m.m4a',
    },
    {
        cover: 'albums/clout/ОКО/clout - ОКО.webp',
        title: 'BoneSSS',
        artist_1: 'clout',
        audio: 'albums/clout/ОКО/audio/clout - BoneSSS.m4a',
    },
    {
        cover: 'albums/clout/ОКО/clout - ОКО.webp',
        title: 'Чудо Света',
        artist_1: 'clout',
        audio: 'albums/clout/ОКО/audio/clout - Чудо Света.m4a',
    },
    {
        cover: 'images/sykcore, EPITXME - AINT SLOWING DOWN!.jpeg',
        title: 'AINT SLOWING DOWN!',
        artist_1: 'sykcore',
        artist_2: 'EPITXME',
        audio: 'audio/sykcore, EPITXME - AINT SLOWING DOWN!',
    },
    {
        cover: 'images/asteria, an4rch - why can’t i be happy.png',
        title: 'why can’t i be happy',
        artist_1: 'asteria',
        artist_2: 'an4rch',
        audio: 'audio/asteria x an4rch - why can’t i be happy.m4a',
    },
    {
        cover: 'albums/dmtboy/DMTCORE/dmtboy - DMTCORE.png',
        title: 'ГИГАБАЙТЫ',
        artist_1: 'dmtboy',
        audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ГИГАБАЙТЫ.m4a',
    },
    {
        cover: 'albums/dmtboy/DMTCORE/dmtboy - DMTCORE.png',
        title: 'СЛОВИЛ ЗВЕЗДУ',
        artist_1: 'dmtboy',
        audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - СЛОВИЛ ЗВЕЗДУ.m4a',
    },
    {
        cover: 'albums/dmtboy/DMTCORE/dmtboy - DMTCORE.png',
        title: 'ANFISA',
        artist_1: 'dmtboy',
        audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ANFISA.mp3',
    },
    {
        cover: 'albums/dmtboy/DMTCORE/dmtboy - DMTCORE.png',
        title: 'ЭТУ И ТУ',
        artist_1: 'dmtboy',
        audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ЭТУ И ТУ.m4a',
    },
    {
        cover: 'albums/dmtboy/DMTCORE/dmtboy - DMTCORE.png',
        title: 'ПЕРЕЗАРЯДКА 3',
        artist_1: 'dmtboy',
        audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ПЕРЕЗАРЯДКА 3.m4a',
    },
    {
        cover: 'albums/dmtboy/DMTCORE/dmtboy - DMTCORE.png',
        title: 'FAKWRK',
        artist_1: 'dmtboy',
        audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - FAKWRK.m4a',
    },
    {
        cover: 'images/Clover!, Vyzer - BAD HABIT!.jpeg',
        title: 'BAD HABIT!',
        artist_1: 'Vyzer',
        artist_2: 'Clover!',
        audio: 'audio/Clover!, Vyzer - BAD HABIT!.m4a',
    },
    {
        cover: 'images/Vyzer - I GOT AN EMO CHICK WITH BALLS XD.jpg',
        title: 'I GOT AN EMO CHICK WITH BALLS XD',
        artist_1: 'Vyzer',
        audio: 'audio/Vyzer - I GOT AN EMO CHICK WITH BALLS XD.m4a',
    },
    {
        cover: 'images/xaduma - GAH DAMN.jpg',
        title: 'GAH DAMN',
        artist_1: 'xaduma',
        audio: 'audio/xaduma - GAH DAMN.m4a',
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - way it goes.png',
        title: 'way it goes',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - way it goes.m4a',
    },
    {
        cover: 'images/GASPXR - JULIE POWERS!.jpg',
        title: 'JULIE POWERS!',
        artist_1: 'GASPXR',
        audio: 'audio/GASPXR - JULIE POWERS!.m4a',
    },
    {
        cover: 'images/GASPXR - KIM PINE.png',
        title: 'KIM PINE',
        artist_1: 'GASPXR',
        audio: 'audio/GASPXR - KIM PINE.m4a',
    },
    {
        cover: 'images/kets4eki, asteria - adding it up.jpeg',
        title: 'adding it up',
        artist_1: 'kets4eki',
        artist_2: 'asteria',
        audio: 'audio/kets4eki, asteria - adding it up.mp3',
    },
    {
        cover: 'images/GASPXR - SUMMER 2004.jpeg',
        title: 'SUMMER 2004',
        artist_1: 'GASPXR',
        audio: 'albums/GASPXR/AUTISM SPECTRUM DISORDER (ASDELUXE)/audio/GASPXR - SUMMER2004.m4a',
    },
    {
        cover: 'images/GASPXR - RAMONA FLOWERS!.jpg',
        title: 'RAMONA FLOWERS!',
        artist_1: 'GASPXR',
        audio: 'albums/GASPXR/AUTISM SPECTRUM DISORDER (ASDELUXE)/audio/GASPXR - RAMONA FLOWERS!.m4a',
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - sorry not sorry.jpg',
        title: 'sorry not sorry',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - sorry not sorry.m4a',
    },
    {
        cover: 'images/babydxll, JXNDRO - Mirror On My Mind - Ultra Slowed.jpeg',
        title: 'Mirror On My Mind - Ultra Slowed',
        artist_1: 'babydxll',
        artist_2: 'JXNDRO',
        audio: 'audio/babydxll, JXNDRO - Mirror On My Mind - Ultra Slowed.mp3',
    },
    {
        cover: 'images/CR0T0N, 444pluto, Anti-Light - TONIGHT!.jpeg',
        title: 'TONIGHT!',
        artist_1: 'CR0T0N',
        artist_2: '444pluto',
        artist_3: 'Anti-Light',
        audio: 'audio/CR0T0N, 444pluto, Anti-Light - TONIGHT!.m4a',
    },
    {
        cover: 'images/CR0T0N, 444pluto, prvttyscrzz, 5GSWAG - HAD ENOUGH!.png',
        title: 'HAD ENOUGH!',
        artist_1: 'CR0T0N',
        artist_2: '444pluto',
        artist_3: 'prvttyscrzz',
        audio: 'audio/CR0T0N, 444pluto, prvttyscrzz, 5GSWAG - HAD ENOUGH!.mp3',
    },
    {
        cover: 'images/CR0T0N, 444pluto - Always On My Mind.png',
        title: 'Always On My Mind',
        artist_1: 'CR0T0N',
        artist_2: '444pluto',
        audio: 'albums/CR0T0N/The Red Carpet/audio/СR0T0N, 444pluto - Always On My Mind.m4a',
    },
    {
        cover: 'images/CR0T0N, euphoria - NO YOU DONT!.png',
        title: 'NO YOU DONT!',
        artist_1: 'CR0T0N',
        artist_2: 'euphoria',
        audio: 'albums/CR0T0N/The Red Carpet/audio/CR0T0N, euphoria - NO YOU DONT!.m4a',
    },
    {
        cover: 'images/CR0T0N - Make Sense.jpeg',
        title: 'Make Sense',
        artist_1: 'CR0T0N',
        audio: 'audio/CR0T0N - Make Sense.m4a',
    },
    {
        cover: 'images/CR0T0N, GASPXR, Kana Paint - WE OWN THIS PLACE.jpeg',
        title: 'WE OWN THIS PLACE',
        artist_1: 'CR0T0N',
        artist_2: 'GASPXR',
        artist_3: 'Kana Paint',
        audio: 'audio/CR0T0N, GASPXR, Kana Paint - WE OWN THIS PLACE.m4a',
    },
    {
        cover: 'images/asteria, kets4eki, 6arelyhuman - BE LIKE ME.png',
        title: 'BE LIKE ME',
        artist_1: 'asteria',
        artist_2: 'kets4eki',
        artist_3: '6arelyhuman',
        audio: 'audio/asteria, kets4eki, 6arelyhuman - BE LIKE ME.m4a',
    },
    {
        cover: 'images/hubithekid - turn the lightz off.jpeg',
        title: 'turn the lightz off',
        artist_1: 'hubithekid',
        audio: 'albums/hubithekid/audio/hubithekid - turn the lightz off.mp3',
    },
    {
        cover: 'images/hubithekid, BAEBY ALEX - b.r.a.t..jpeg',
        title: 'b.r.a.t.',
        artist_1: 'hubithekid',
        artist_2: 'BAEBY ALEX',
        audio: 'albums/hubithekid/audio/hubithekid, BAEBY ALEX - b.r.a.t..m4a',
    },
    {
        cover: 'images/dmtboy - Ничтожен.jpg',
        title: 'Ничтожен',
        artist_1: 'dmtboy',
        audio: 'audio/dmtboy - Ничтожен.m4a',
    },
    {
        cover: 'images/asteria - make you sweat.png',
        title: 'make you sweat',
        artist_1: 'asteria',
        audio: 'albums/asteria/niche princess/audio/asteria - make you sweat.m4a',
    },
    {
        cover: 'albums/asteria/SCARLET ASHES/asteria - SCARLET ASHES.png',
        title: 'that’s okay...',
        artist_1: 'asteria',
        audio: 'albums/asteria/SCARLET ASHES/audio/asteria - that`s okay....m4a',
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - different day, same drugs.png',
        title: 'different day, same drugs',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - different day, same drugs.mp3',
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki  - RIGHT NOW.jpg',
        title: 'RIGHT NOW',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki  - RIGHT NOW.m4a',
    },
    {
        cover: 'images/Clover! - do it better.jpeg',
        title: 'do it better',
        artist_1: 'Clover!',
        audio: 'audio/Clover! - do it better.m4a',
    },
    {
        cover: 'images/Anti-Light, zhunii, EPITXME, Proz - ON SIGHT.jpeg',
        title: 'ON SIGHT',
        artist_1: 'Anti-Light',
        artist_2: 'zhunii',
        artist_3: 'EPITXME',
        artist_4: 'Proz',
        audio: 'audio/Anti-Light, zhunii, EPITXME, Proz - ON SIGHT.m4a',
    },
    {
        cover: 'images/Anti-Light - MAKE YOU JEALOUS.jpeg',
        title: 'MAKE YOU JEALOUS',
        artist_1: 'Anti-Light',
        audio: 'audio/Anti-Light - MAKE YOU JEALOUS.m4a',
    },
    {
        cover: 'images/Anti-Light - KISS AND TELL.jpg',
        title: 'KISS AND TELL',
        artist_1: 'Anti-Light',
        audio: 'audio/Anti-Light - KISS AND TELL.m4a',
    },
    {
        cover: 'images/Anti-Light - HOT TOPIC.jpg',
        title: 'HOT TOPIC',
        artist_1: 'Anti-Light',
        audio: 'audio/Anti-Light - HOT TOPIC.m4a',
    },
    {
        cover: 'images/UpVampin, d3r, Clover! - PARTY WONT STOP!.jpeg',
        title: 'PARTY WONT STOP!',
        artist_1: 'UpVampin',
        artist_2: 'd3r',
        artist_3: 'Clover!',
        audio: 'audio/UpVampin, d3r, Clover! - PARTY WONT STOP!.mp3',
    },
    {
        cover: 'images/kets4eki, m1v, d3r - posted up.jpg',
        title: 'posted up',
        artist_1: 'kets4eki',
        artist_2: 'm1v',
        artist_3: 'd3r',
        audio: 'audio/kets4eki, m1v, d3r - posted up.m4a',
    },
    {
        cover: 'images/d3r - love bomb.jpeg',
        title: 'love bomb',
        artist_1: 'd3r',
        audio: 'audio/d3r - love bomb.m4a',
    },
    {
        cover: 'images/d3r - reality.jpeg',
        title: 'reality',
        artist_1: 'd3r',
        audio: 'audio/d3r - reality.m4a',
    },
    {
        cover: 'images/lunagrace, xaduma - RUTHLESS.jpeg',
        title: 'RUTHLESS',
        artist_1: 'lunagrace',
        artist_2: 'xaduma',
        audio: 'audio/lunagrace, xaduma - RUTHLESS.m4a',
    },
    {
        cover: 'images/EPITXME - TOLD HER NAH!.jpeg',
        title: 'TOLD HER NAH!',
        artist_1: 'EPITXME',
        audio: 'albums/EPITXME/SELFISH/audio/EPITXME - TOLD HER NAH!.m4a'
    },
    {
        cover: 'images/Vee4r, EPITXME - NO CHANCE!.jpg',
        title: 'NO CHANCE!',
        artist_1: 'Vee4r',
        artist_2: 'EPITXME',
        audio: 'audio/Vee4r, EPITXME - NO CHANCE!.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, kets4eki, asteria - moving like a zombie.jpg',
        title: 'moving like a zombie',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'kets4eki',
        artist_3: 'asteria',
        audio: 'audio/Anarchist Sanctuary, kets4eki, asteria - moving like a zombie.m4a'
    },
    {
        cover: 'images/4ortake - world star.jpeg',
        title: 'world star',
        artist_1: '4ortake',
        audio: 'albums/4ortake/audio/4ortake - world star.m4a'
    },
    {
        cover: 'images/asteria - THAT’S THE WAY I LIKE IT.png',
        title: 'THAT’S THE WAY I LIKE IT',
        artist_1: 'asteria',
        audio: 'audio/asteria - THAT’S THE WAY I LIKE IT.m4a'
    },
    {
        cover: 'images/Vyzer - I KNOW IT.png',
        title: 'I KNOW IT',
        artist_1: 'Vyzer',
        audio: 'audio/Vyzer - I KNOW IT.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - WATCH ME BALL OUT.png',
        title: 'WATCH ME BALL OUT',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - WATCH ME BALL OUT.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - moneyright.jpeg',
        title: 'moneyright',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - moneyright.m4a'
    },
    {
        cover: 'images/xaduma - party!.png',
        title: 'party!',
        artist_1: 'xaduma',
        audio: 'audio/xaduma - party!.m4a'
    },
    {
        cover: 'images/kets4eki, asteria - DANCE FOR ME.png',
        title: 'DANCE FOR ME #AN4CHKORE',
        artist_1: 'kets4eki',
        artist_2: 'asteria',
        audio: 'audio/kets4eki, asteria - DANCE FOR ME.mp3'
    },
    {
        cover: 'images/блэйзи - лень.jpg',
        title: 'лень :/',
        artist_1: 'блэйзи?',
        audio: 'albums/блэйзи/h0rny_p4wz.blz/audio/блэйзи - лень.mp3'
    },
    {
        cover: 'images/блэйзи - морально и физически.jpeg',
        title: 'морально и физически',
        artist_1: 'блэйзи?',
        audio: 'audio/блэйзи - морально и физически.m4a'
    },
    {
        cover: 'images/Shluzov - её руки.png',
        title: 'Её руки',
        artist_1: 'Shluzov',
        audio: 'audio/Shluzov - её руки.m4a'
    },
    {
        cover: 'images/блэйзи - z43balo.jpeg',
        title: 'z4#balo ///',
        artist_1: 'блэйзи?',
        audio: 'albums/блэйзи/h0rny_p4wz.blz/audio/блэйзи - z43balo.mp3'
    },
    {
        cover: 'images/Evilfan, блэйзи - по бартеру.jpeg',
        title: 'по бартеру',
        artist_1: 'Evilfan',
        artist_2: 'блэйзи?',
        audio: 'audio/Evilfan, блэйзи - по бартеру.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - ON THE DAILY.jpeg',
        title: 'ON THE DAILY',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - ON THE DAILY.m4a'
    },
    {
        cover: 'images/5GSWAG, ket4eki, asteria - stres stres stres.jpeg',
        title: 'stres stres stres',
        artist_1: '5GSWAG',
        artist_2: 'kets4eki',
        artist_3: 'asteria',
        audio: 'audio/5GSWAG, ket4eki, asteria - stres stres stres.mp3'
    },
    {
        cover: 'images/wikuro, Vee4r - KNIVES.jpg',
        title: 'KNIVES',
        artist_1: 'wikuro',
        artist_2: 'Vee4r',
        audio: 'albums/wikuro/KNIVES EP/audio/wikuro, Vee4r - KNIVES.mp3'
    },
    {
        cover: 'images/wikuro, Vee4r - I WANT IT!.jpg',
        title: 'I WANT IT!',
        artist_1: 'wikuro',
        artist_2: 'Vee4r',
        audio: 'albums/wikuro/KNIVES EP/audio/wikuro, Vee4r - I WANT IT!.mp3'
    },
    {
        cover: 'images/wikuro, Vee4r - BETTER!.jpg',
        title: 'BETTER!',
        artist_1: 'wikuro',
        artist_2: 'Vee4r',
        audio: 'albums/wikuro/KNIVES EP/audio/wikuro, Vee4r - BETTER!.mp3'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - TO THE FLOOR.jpeg',
        title: 'TO THE FLOOR',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - TO THE FLOOR.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - BLOODSTAIN BANDS.jpeg',
        title: 'BLOODSTAIN BANDS',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - BLOODSTAIN BANDS.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - quiet overdose.png',
        title: 'quiet overdose',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - quiet overdose.mp3'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - without me.jpeg',
        title: 'without me',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - without me.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - drugs callin.jpeg',
        title: 'drugs callin’',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - drugs callin.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - cocaine bricks.png',
        title: 'cocaine bricks',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - cocaine bricks.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - cuz i wanna.jpeg',
        title: 'cuz i wanna',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - cuz i wanna.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - if you bleed.jpeg',
        title: 'if you bleed',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - if you bleed.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - my friends r dead.jpg',
        title: 'my friends r dead',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - my friends r dead.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - iwokeuplike.jpeg',
        title: 'iwokeuplike',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - iwokeuplike.m4a'
    },
    {
        cover: 'images/Anarchist Sanctuary, asteria, kets4eki - fresh asf.jpeg',
        title: 'fresh asf',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - fresh asf.m4a'
    },
    {
        cover: 'images/xxxmanera - usb.png',
        title: 'usb',
        artist_1: 'xxxmanera',
        audio: 'albums/xxxmanera/HUNNID GATEKEEPING/audio/xxxmanera - usb.mp3'
    },
    {
        cover: "images/d3r - jealous.jpeg",
        title: 'jealous',
        artist_1: 'd3r',
        audio: 'audio/d3r - jealous.mp3'
    },
    {
        cover: 'images/dollreal, d3r - RED.png',
        title: 'RED',
        artist_1: 'dollreal',
        artist_2: 'd3r',
        audio: 'audio/dollreal, d3r - RED.m4a'
    },
    {
        cover: 'images/d3r, kets4eki, asteria - DROP IT!.jpg',
        title: 'DROP IT!',
        artist_1: 'd3r',
        artist_2: 'kets4eki',
        artist_3: 'asteria',
        audio: 'audio/d3r, kets4eki, asteria - DROP IT!.m4a'
    },
    {
        cover: 'images/Upvampin, kets4eki, 5GSWAG - PASS THAT HOE AROUND!.jpeg',
        title: 'PASS THAT HOE AROUND!',
        artist_1: 'UpVampin',
        artist_2: 'kets4eki',
        artist_3: '5GSWAG',
        audio: 'audio/Upvampin, kets4eki, 5GSWAG - PASS THAT HOE AROUND!.m4a'
    },
    {
        cover: 'images/clout - sEx dOLL.jpeg',
        title: 'sEx dOLL%)',
        artist_1: 'clout',
        audio: 'albums/clout/КАТАРСИС/audio/clout - sEx dOLL.m4a'
    },
    {
        cover: 'images/skypebf, kets4eki, Syris - talk shit.jpeg',
        title: 'talk shit',
        artist_1: 'skypebf',
        artist_2: 'kets4eki',
        artist_3: 'Syris',
        audio: 'audio/skypebf, kets4eki, Syris - talk shit.m4a'
    },
    {
        cover: 'images/мистер модератор, SODA LUV - занозы.jpeg',
        title: "занозы",
        artist_1: 'мистер модератор',
        artist_2: 'SODA LUV',
        audio: 'audio/мистер модератор, SODA LUV - занозы.m4a'
    },
    {
        cover: 'images/dmtboy - GET KRANK.jpg',
        title: 'GET KRANK',
        artist_1: 'dmtboy',
        audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - GET KRANK.m4a'
    },
    {
        cover: 'images/dmtboy - OMGDBL.jpeg',
        title: 'OMGDBL',
        artist_1: 'dmtboy',
        audio: 'albums/dmtboy/SUCK IT!/audio/dmtboy - OMGDBL.m4a'
    },
    {
        cover: 'images/Kai Angel - im all blessed the fuck up.jpeg',
        title: 'im all blessed the fuck up',
        artist_1: 'Kai Angel',
        audio: 'albums/Kai Angel/damage/audio/Kai Angel - im all blessed the fuck up.m4a'
    },
    {
        cover: 'images/Kai Angel - Pretty Girls.png',
        title: 'Pretty Girls',
        artist_1: 'Kai Angel',
        audio: 'audio/Kai Angel - Pretty Girls.m4a'
    },
    {
        cover: 'images/Vizzyx - BUSINESS CLASS.png',
        title: 'BUSINESS CLASS',
        artist_1: 'Vizzyx',
        audio: 'audio/Vizzyx - BUSINESS CLASS.m4a'
    },
    {
        cover: 'images/Vizzyx, `ёarly - INFLUENTIAL.jpeg',
        title: 'INFLUENTIAL',
        artist_1: 'Vizzyx',
        artist_2: '`ёarly',
        audio: 'audio/Vizzyx, `ёarly - INFLUENTIAL.mp3'
    },
    {
        cover: 'images/asteria, Lytra - bad bad bad.png',
        title: 'bad bad bad',
        artist_1: 'asteria',
        artist_2: 'Lytra',
        audio: 'albums/asteria/niche princess/audio/asteria, Lytra - bad bad bad.m4a'
    },
    {
        cover: 'images/Lytra, Vyzer - FAKE LOVE.jpg',
        title: 'FAKE LOVE',
        artist_1: 'Lytra',
        artist_2: 'Vyzer',
        audio: 'audio/Lytra, Vyzer - FAKE LOVE.mp3'
    },
    {
        cover: 'images/Vyzer, 6arleyhuman - LUV ME.jpeg',
        title: 'LUV ME',
        artist_1: 'Vyzer',
        artist_2: '6arelyhuman',
        audio: 'audio/Vyzer, 6arleyhuman - LUV ME.m4a'
    },
    {
        cover: 'images/asteria, 6arleyhuman - Take A Pic.png',
        title: 'Take A Pic',
        artist_1: 'asteria',
        artist_2: '6arelyhuman',
        audio: 'audio/asteria, 6arleyhuman - Take A Pic.mp3'
    },
    {
        cover: 'images/m0v, m1v - addicts.jpeg',
        title: 'run',
        artist_1: 'm0v',
        artist_2: 'm1v',
        audio: 'audio/m0v, m1v - addicts.m4a'
    },
    {
        cover: 'images/m0v, m1v - run.jpeg',
        title: 'addicts',
        artist_1: 'm0v',
        artist_2: 'luvwillow',
        artist_3: 'm1v',
        audio: 'audio/m0v, m1v - run.m4a'
    },
    {
        cover: 'images/rompy - M1NVT3.jpeg',
        title: '//M1NVT3',
        artist_1: 'rompy',
        audio: 'audio/rompy - M1NVT3.m4a'
    },
    {
        cover: 'images/vinetta - ПУЛЬС.jpg',
        title: 'ПУЛЬС',
        artist_1: 'vinetta',
        audio: 'albums/vinetta/CULT/audio/vinetta - ПУЛЬС.m4a'
    },
    {
        cover: 'images/vinetta - СЕТИ.jpg',
        title: 'СЕТИ',
        artist_1: 'vinetta',
        audio: 'albums/vinetta/CULT/audio/vinetta - СЕТИ.m4a'
    },
    {
        cover: 'images/vinetta - D4BST3P.jpg',
        title: 'D4BST3P',
        artist_1: 'vinetta',
        audio: 'albums/vinetta/CULT/audio/vinetta - D4BST3P.m4a'
    },
    {
        cover: 'images/wikuro - I REMEMBER.png',
        title: 'I REMEMBER',
        artist_1: 'wikuro',
        audio: 'audio/wikuro - I REMEMBER.mp3'
    },
    {
        cover: 'images/Vizzyx, stravvbery - Соседи.jpeg',
        title: 'Соседи',
        artist_1: 'Vizzyx',
        artist_2: 'stravvbery',
        audio: 'audio/Vizzyx, stravvbery - Соседи.m4a'
    },
    {
        cover: 'images/Vizzyx - LIFESTYLE.jpeg',
        title: 'LIFESTYLE',
        artist_1: 'Vizzyx',
        audio: 'audio/Vizzyx - LIFESTYLE.m4a'
    },
    {
        cover: 'images/asteria, kets4eki - pick & choose.jpg',
        title: 'pick & choose',
        artist_1: 'asteria',
        artist_2: 'kets4eki',
        audio: 'audio/asteria, kets4eki - pick & choose.mp3'
    },
    {
        cover: 'images/JDFLAG - LЮБИТЬ.jpeg',
        title: 'LЮБИТЬ',
        artist_1: 'JDFLAG',
        audio: 'albums/JDFLAG/FLAГSTRИK/audio/JDFLAG - LЮБИТЬ.m4a'
    },
    {
        cover: 'images/yungalligator, athysue - angelo4ek.jpeg',
        title: 'angelo4ek',
        artist_1: 'yungalligator',
        artist_2: 'athysue',
        audio: 'audio/yungalligator, athysue - angelo4ek.m4a'
    },
    {
        cover: 'images/asteria, kets4eki - TOO MANY LINES!.png',
        title: 'TOO MANY LINES!',
        artist_1: 'asteria',
        artist_2: 'kets4eki',
        audio: 'audio/asteria, kets4eki - TOO MANY LINES!.m4a'
    },
    {
        cover: 'images/asteria, kets4eki - DON`T UNDERSTAND IT.png',
        title: 'DON’T UNDERSTAND IT',
        artist_1: 'asteria',
        artist_2: 'kets4eki',
        audio: 'audio/asteria, kets4eki - DON`T UNDERSTAND IT.m4a'
    },
    {
        cover: 'images/asteria, kets4eki - ULTRA INSTINCT.png',
        title: 'ULTRA INSTINCT',
        artist_1: 'asteria',
        artist_2: 'kets4eki',
        audio: 'audio/asteria, kets4eki - ULTRA INSTINCT.m4a'
    },
    {
        cover: 'images/Lytra, asteria, kets4eki - HOLD UP!.jpeg',
        title: 'HOLD UP!',
        artist_1: 'Lytra',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'audio/Lytra, asteria, kets4eki - HOLD UP!.m4a'
    },
    {
        cover: 'images/Lytra, kets4eki, Sillage - ENOUGH.jpg',
        title: 'ENOUGH',
        artist_1: 'Lytra',
        artist_2: 'kets4eki',
        artist_3: 'Sillage',
        audio: 'audio/Lytra, kets4eki, Sillage - ENOUGH.m4a'
    },
    {
        cover: 'images/kets4eki, asteria - 40 bands in this bitch.jpeg',
        title: '40 bands in this bitch',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - 40 bands in this bitch.m4a'
    },
    {
        cover: 'images/Clover!, Proz - BODYBAGS!.jpeg',
        title: 'BODYBAGS!',
        artist_1: 'Clover!',
        artist_2: 'Proz',
        audio: 'audio/Clover!, Proz - BODYBAGS!.m4a'
    },
    {
        cover: 'images/asteria, kets4eki - hell yeah!.jpeg',
        title: 'hell yeah!',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - hell yeah!.m4a'
    },
    {
        cover: 'images/шейди, akiko! - intheclub.png',
        title: '#intheclub ',
        artist_1: 'шейди',
        artist_2: 'akiko!',
        audio: 'audio/шейди, akiko! - intheclub.mp3'
    },
    {
        cover: 'images/asteria, kets4eki - all u can eat.jpeg',
        title: 'all u can eat',
        artist_1: 'Anarchist Sanctuary',
        artist_2: 'asteria',
        artist_3: 'kets4eki',
        audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - all u can eat.m4a'
    },
    {
        cover: 'images/Vyzer - STAR!.png',
        title: 'STAR!',
        artist_1: 'Vyzer',
        audio: 'audio/Vyzer - STAR!.m4a'
    },
    {
        cover: 'images/Vyzer - NO TIME.jpg',
        title: 'NO TIME',
        artist_1: 'Vyzer',
        audio: 'audio/Vyzer - NO TIME.m4a'
    },
    {
        cover: 'images/clout - МРТ.png',
        title: 'МРТ',
        artist_1: 'clout',
        audio: 'albums/clout/КИБЕРПСИХОЗ.ERROR/audio/clout - МРТ.m4a'
    },
    {
        cover: 'images/clout - ХтП.png',
        title: 'ХтП',
        artist_1: 'clout',
        audio: 'albums/clout/КИБЕРПСИХОЗ.ERROR/audio/clout - ХтП.m4a'
    },
    {
        cover: 'images/clout - КоД ХаОса.png',
        title: 'КоД ХаОса*404#',
        artist_1: 'clout',
        audio: 'albums/clout/КИБЕРПСИХОЗ.ERROR/audio/clout - КоД ХаОса.m4a'
    },
    {
        cover: 'images/Clover! - YOU AND I.png',
        title: 'YOU AND I',
        artist_1: 'Clover!',
        audio: 'audio/Clover! - YOU AND I.mp3'
    },
    {
        cover: 'images/d3r - im so delusional.jpg',
        title: 'im so delusional',
        artist_1: 'd3r',
        audio: 'audio/d3r - im so delusional.m4a'
    },
    {
        cover: 'images/Clover! - bacardi!.png',
        title: 'bacardi!',
        artist_1: 'Clover!',
        audio: 'audio/Clover! - bacardi!.m4a'
    },
    {
        cover: 'images/Anti-Light, Clover!, Proz - DYNAMITE!.jpeg',
        title: 'DYNAMITE',
        artist_1: 'Anti-Light',
        artist_2: 'Clover!',
        artist_3: 'Proz',
        audio: 'audio/Anti-Light, Clover!, Proz - DYNAMITE!.mp3'
    },
    {
        cover: 'images/d3r, kets4eki, Proz - life force.jpg',
        title: 'life force',
        artist_1: 'd3r',
        artist_2: 'kets4eki',
        artist_3: 'Proz',
        audio: 'audio/d3r, kets4eki, Proz - life force.m4a'
    },
    {
        cover: 'images/Clover! - CROWD PLEASER!.jpg',
        title: 'CROWD PLEASER!',
        artist_1: 'Clover!',
        audio: 'audio/Clover! - CROWD PLEASER!.m4a'
    },
    {
        cover: 'images/GASPXR, CR0T0N, BroA$tar - ADHD 3!.jpeg',
        title: 'ADHD 3!',
        artist_1: 'GASPXR',
        artist_2: 'CR0T0N',
        artist_3: 'BroA$tar',
        audio: 'audio/GASPXR - ADHD3.mp3'
    },
    {
        cover: 'images/p6inkillr, Anti-Light - DANCING IN THE DARK.png',
        title: 'DANCING IN THE DARK',
        artist_1: 'p6inkillr',
        artist_2: 'Anti-Light',
        audio: 'audio/p6inkillr, Anti-Light - DANCING IN THE DARK.mp3'
    },
    {
        cover: 'images/p6inkillr, zhunii - SILHOUETTE.jpeg',
        title: 'SILHOUETTE',
        artist_1: 'p6inkillr',
        artist_2: 'zhunii',
        audio: 'audio/p6inkillr, zhunii - SILHOUETTE.mp3'
    },
    {
        cover: 'images/p6inkillr - sweet temptation.jpg',
        title: 'sweet temptation',
        artist_1: 'p6inkillr',
        audio: 'audio/p6inkillr - sweet temptation.mp3'
    },
    {
        cover: 'images/p6inkillr - ETERNAL.jpeg',
        title: 'ETERNAL',
        artist_1: 'p6inkillr',
        audio: 'audio/p6inkillr - ETERNAL.mp3'
    },
    {
        cover: 'images/p6inkillr - kill me.jpeg',
        title: 'kill me',
        artist_1: 'p6inkillr',
        audio: 'audio/p6inkillr - kill me.mp3'
    },
    {
        cover: 'images/p6inkillr - SWEET LIKE SIN.jpeg',
        title: 'SWEET LIKE SIN',
        artist_1: 'p6inkillr',
        audio: 'audio/p6inkillr - SWEET LIKE SIN.mp3'
    },
    {
        cover: 'images/p6inkillr, dollreal, Proz - TAKE A BITE.jpg',
        title: 'TAKE A BITE',
        artist_1: 'p6inkillr',
        artist_2: 'dollreal',
        artist_3: 'Proz',
        audio: 'audio/p6inkillr, dollreal, Proz - TAKE A BITE.mp3'
    },
    {
        cover: 'images/enveel - cutie girl (Speed Up).jpg',
        title: 'cutie girl (Speed Up)',
        artist_1: 'enveel',
        audio: 'audio/enveel - cutie girl (Speed Up).m4a'
    },
    {
        cover: 'images/xaduma, UpVampin - BLOODSUCKER.jpg',
        title: 'BLOODSUCKER',
        artist_1: 'xaduma',
        artist_2: 'UpVampin',
        audio: 'audio/xaduma, UpVampin - BLOODSUCKER.mp3'
    },
    {
        cover: 'images/xaduma - DANCE.png',
        title: 'DANCE',
        artist_1: 'xaduma',
        audio: 'audio/xaduma - DANCE.m4a'
    },
    {
        cover: 'images/EPITXME, xaduma - UH HUH!.jpg',
        title: 'UH HUH!',
        artist_1: 'EPITXME',
        artist_2: 'xaduma',
        audio: 'audio/EPITXME, xaduma - UH HUH!.m4a'
    },
    {
        cover: 'images/EPITXME, xaduma - SUM MORE!.jpg',
        title: 'SUM MORE!',
        artist_1: 'EPITXME',
        artist_2: 'xaduma',
        audio: 'audio/EPITXME, xaduma - SUM MORE!.m4a'
    },
    {
        cover: 'images/EPITXME, sxcredmane - ANYTHING YOU WANT!.png',
        title: 'ANYTHING YOU WANT!',
        artist_1: 'EPITXME',
        artist_2: 'sxcredmane',
        audio: 'albums/EPITXME/UNAVOIDABLE/audio/EPITXME, sxcredmane - ANYTHING YOU WANT!.m4a'
    },
    {
        cover: 'images/EPITXME, xaduma - LA LA LA.png',
        title: 'LA LA LA',
        artist_1: 'EPITXME',
        artist_2: 'xaduma',
        audio: 'albums/EPITXME/UNAVOIDABLE/audio/EPITXME, xaduma - LA LA LA.m4a'
    },
]

// СПИСОК АЛЬБОМОВ
const albums = [
    {
        // Anarchist Sanctuary, asteria, kets4eki
        artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], 
        title: 'ASFRIDAYS',
        cover: 'albums/asteria/ASFRIDAYS/asteria, kets4eki - ASFRIDAYS.jpeg',
        songs: [
        {title: 'i don’t care', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki  - i don’t care.m4a'},
        {title: 'serotonin', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki  - serotonin.mp3'},
        {title: 'no_more', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki  - no_more.mp3'},
        {title: 'laughin to the bank', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki  - laughin to the bank.mp3'},
        {title: 'different day, same drugs', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - different day, same drugs.mp3'},
        {title: 'way it goes', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - way it goes.m4a'},
        {title: 'sorry not sorry', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - sorry not sorry.m4a'},
        {title: 'RIGHT NOW', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki  - RIGHT NOW.m4a'},
        {title: 'WATCH ME BALL OUT', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - WATCH ME BALL OUT.m4a'},
        {title: 'moving like a zombie', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - moving like a zombie.m4a'},
        {title: 'moneyright', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - moneyright.m4a'},
        {title: 'ON THE DAILY', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - ON THE DAILY.m4a'},
        {title: 'TO THE FLOOR', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - TO THE FLOOR.m4a'},
        {title: 'BLOODSTAIN BANDS', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - BLOODSTAIN BANDS.m4a'},
        {title: 'quiet overdose', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - quiet overdose.mp3'},
        {title: 'without me', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - without me.m4a'},
        {title: 'drugs callin’', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - drugs callin.m4a'},
        {title: 'cocaine bricks', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - cocaine bricks.m4a'},
        {title: 'cuz i wanna', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - cuz i wanna.m4a'},
        {title: 'if you bleed', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - if you bleed.m4a'},
        {title: 'my friends r dead', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - my friends r dead.m4a'},
        {title: 'iwokeuplike', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - iwokeuplike.m4a'},
        {title: 'fresh asf', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - fresh asf.m4a'},
        {title: 'all u can eat', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - all u can eat.m4a'},
        {title: '40 bands in this bitch', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - 40 bands in this bitch.m4a'},
        {title: 'hell yeah!', artists: ['Anarchist Sanctuary', 'asteria', 'kets4eki'], audio: 'albums/asteria/ASFRIDAYS/audio/Anarchist Sanctuary, asteria, kets4eki - hell yeah!.m4a'},
        ]
    },
    {
        // asteria
        artists: ['asteria'], 
        title: 'niche princess',
        cover: 'albums/asteria/niche princess/asteria - niche princess.png',
        songs: [
        {title: 'dance for me', artists: ['asteria'], audio: ''},
        {title: 'bad bad bad', artists: ['asteria', 'Lytra'], audio: 'albums/asteria/niche princess/audio/asteria, Lytra - bad bad bad.m4a'},
        {title: 'make you sweet', artists: ['asteria'], audio: 'albums/asteria/niche princess/audio/asteria - make you sweat.m4a'},
        {title: 'keep a secret', artists: ['asteria'], audio: ''},
        {title: 'obsessed with you', artists: ['asteria'], audio: ''},
        {title: 'whatever it takes', artists: ['asteria'], audio: ''},
        {title: 'withdrawals', artists: ['asteria'], audio: ''},
        {title: 'comfort zone', artists: ['asteria'], audio: ''},
        {title: 'i’m back on the drugs', artists: ['asteria'], audio: ''},
        {title: 'one more line?', artists: ['asteria'], audio: ''},
        {title: 'make us one last line', artists: ['asteria'], audio: ''},
        {title: 'this is actually the last line because i ran out', artists: ['asteria'], audio: ''},
        {title: 'my broken record', artists: ['asteria'], audio: ''},
        {title: 'i know ur getting sick of me', artists: ['asteria'], audio: ''},
        {title: 'i just hope you tell me when you change your mind', artists: ['asteria'], audio: ''},
        {title: 'running of time', artists: ['asteria'], audio: ''},
        {title: 'sippin soju', artists: ['asteria'], audio: ''},
        {title: 'Advertisement', artists: ['asteria'], audio: ''},
        {title: 'how could i be so stupid', artists: ['asteria'], audio: ''},
        {title: 'life update: she changed her mind', artists: ['asteria'], audio: ''},
        {title: 'guess i’m just invisible to you', artists: ['asteria', 'i wanna be a jack-o-lantern'], audio: 'albums/asteria/niche princess/audio/asteria,  i wanna be a jack-o-lantern - guess im just invisible to you.m4a'},
        {title: 'the only one you love', artists: ['asteria'], audio: ''},
        {title: 'everyday is the same in nz', artists: ['asteria'], audio: ''},
        {title: 'sobbing at the strip club', artists: ['asteria'], audio: ''},
        {title: 'bleeding out', artists: ['asteria'], audio: ''},
        {title: 'one way ticket', artists: ['asteria'], audio: ''},
        {title: 'look who’s back', artists: ['asteria'], audio: ''},
        {title: 'possessed', artists: ['asteria'], audio: ''},
        {title: 'hahaha happy halloween bro', artists: ['asteria'], audio: ''},
        {title: 'i’m not that stupid anymore', artists: ['asteria'], audio: ''},
        {title: 'i’ll stay sober (tfw ur a drug addict)', artists: ['asteria'], audio: ''},
        {title: 'all we need is us', artists: ['asteria'], audio: ''},
        {title: 'hatefuck', artists: ['asteria'], audio: ''},
        {title: 'finale: guillotine', artists: ['asteria'], audio: ''},        
        ]
    },
    {
        // asteria
        artists: ['asteria'], 
        title: 'SCARLET ASHES',
        cover: 'albums/asteria/SCARLET ASHES/asteria - SCARLET ASHES.png',
        songs: [
        {title: 'that’s okay...', artists: ['asteria'], audio: 'albums/asteria/SCARLET ASHES/audio/asteria - that`s okay....m4a'},
        {title: 'i hate your friends', artists: ['asteria'], audio: 'albums/asteria/SCARLET ASHES/audio/asteria - i hate your friends.m4a'},
        {title: 'lie about this', artists: ['asteria'], audio: 'albums/asteria/SCARLET ASHES/audio/asteria - lie about this.m4a'},
        ]
    },
    {
        // asteria
        artists: ['asteria'], 
        title: 'ASTERIA VOL. 1',
        cover: 'albums/asteria/ASTERIA VOL. 1/asteria - ASTERIA VOL. 1.jpg',
        songs: [
        {title: 'MOVE YOUR BODY', artists: ['asteria'], audio: ''},
        {title: 'DIE FOR YOU', artists: ['asteria'], audio: ''},
        {title: 'WATCH THIS!', artists: ['asteria'], audio: ''},
        {title: 'TELL ME LIES', artists: ['asteria', 'Odetari'], audio: ''},
        {title: 'TOO MANY LINES!', artists: ['asteria', 'kets4eki'], audio: 'albums/asteria/ASTERIA VOL. 1/audio/asteria, kets4eki - TOO MANY LINES!.m4a'},
        {title: 'DON’T UNDERSTAND IT', artists: ['asteria', 'kets4eki'], audio: 'albums/asteria/ASTERIA VOL. 1/audio/asteria, kets4eki - DON`T UNDERSTAND IT.m4a'},
        {title: 'ROCK THAT SHIT!', artists: ['asteria'], audio: ''},
        {title: 'WHAT YOU WANT!', artists: ['asteria', 'Hatsune Miku'], audio: ''},
        {title: 'YOU CAN’T HIDE', artists: ['asteria'], audio: ''},
        {title: 'EXOTIC', artists: ['asteria'], audio: ''},
        {title: 'EYES ON ME', artists: ['asteria'], audio: ''},
        {title: 'DEAD AGAIN', artists: ['asteria'], audio: ''},
        ]
    },
    {
        // asteria, kets4eki
        artists: ['asteria', 'kets4eki'], 
        title: ' PARTY4LIFE',
        cover: 'albums/asteria/PARTY4LIFE/asteria, kets4eki - PARTY4LIFE.png',
        songs: [
        {title: 'ON MY WAY!', artists: ['asteria', 'kets4eki', '6arelyhuman'], audio: ''},
        {title: 'WELCOME TO THE PARTY', artists: ['asteria', 'kets4eki'], audio: ''},
        {title: 'THROW BANDZZZ', artists: ['asteria', 'kets4eki'], audio: ''},
        {title: 'FOR REAL', artists: ['asteria', 'kets4eki'], audio: ''},
        {title: 'MANNERS', artists: ['asteria', 'kets4eki'], audio: ''},
        {title: 'PROJECT X 2.0', artists: ['asteria', 'kets4eki'], audio: ''},
        {title: 'GOLD', artists: ['asteria', 'kets4eki'], audio: ''},
        {title: 'GET DOWN', artists: ['asteria', 'kets4eki'], audio: ''},
        {title: 'NEW BITCH', artists: ['asteria', 'kets4eki'], audio: ''},
        {title: 'PIKA GIRL', artists: ['asteria', 'kets4eki'], audio: ''},
        {title: 'ALL NIGHT LONG', artists: ['asteria', 'kets4eki'], audio: ''},
        {title: 'WE MADE IT', artists: ['asteria', 'kets4eki'], audio: ''},
        {title: 'MAKE IT BOUNCE!', artists: ['asteria', 'kets4eki'], audio: ''},
        ]
    },
    {
        // asteria, 6arelyhuman
        artists: ['asteria', '6arelyhuman'], 
        title: 'Cute Songs For Gangsters',
        cover: 'albums/asteria/Cute Songs For Gangsters/asteria, 6arelyhuman - Cute Songs For Gangsters.png',
        songs: [
        {title: 'BLOODBATH', artists: ['6arelyhuman', 'asteria'], audio: 'albums/asteria/Cute Songs For Gangsters/audio/6arelyhuman, asteria - BLOODBATH.m4a'},
        {title: 'HYPNOTIZED', artists: ['6arelyhuman', 'asteria'], audio: 'albums/asteria/Cute Songs For Gangsters/audio/6arelyhuman, asteria - HYPNOTIZED.m4a'},
        {title: 'RED MERCEDES', artists: ['6arelyhuman', 'asteria'], audio: 'albums/asteria/Cute Songs For Gangsters/audio/6arelyhuman, asteria - RED MERCEDES.m4a'},
        {title: 'FADE AWAY', artists: ['6arelyhuman', 'asteria'], audio: 'albums/asteria/Cute Songs For Gangsters/audio/6arelyhuman, asteria - FADE AWAY.m4a'},
        {title: 'Make Me Famous', artists: ['6arelyhuman', 'asteria'], audio: 'albums/asteria/Cute Songs For Gangsters/audio/6arelyhuman, asteria - Make Me Famous.m4a'},
        ]
    },
    {
        // asteria, kets4eki
        artists: ['kets4eki','asteria'], 
        title: 'RAVE2DEATH',
        cover: 'albums/asteria/RAVE2DEATH/asteria, kets4eki - RAVE2DEATH.jpg',
        songs: [
        {title: '#RAVELIFE', artists: ['kets4eki','asteria'], audio: 'albums/asteria/RAVE2DEATH/audio/kets4eki, asteria - RAVELIFE.mp3'},
        {title: 'FADED', artists: ['kets4eki','asteria'], audio: 'albums/asteria/RAVE2DEATH/audio/kets4eki, asteria - FADED.mp3'},
        {title: 'DOLLAR BILLS', artists: ['kets4eki','asteria'], audio: 'albums/asteria/RAVE2DEATH/audio/kets4eki, asteria - DOLLAR BILLS.mp3'},
        {title: 'TRYNA FUCK (SPARTA)', artists: ['kets4eki','asteria'], audio: 'albums/asteria/RAVE2DEATH/audio/kets4eki, asteria - TRYNA FUCK (SPARTA).mp3'},
        {title: 'COME ON', artists: ['kets4eki','asteria'], audio: 'albums/asteria/RAVE2DEATH/audio/kets4eki, asteria - COME ON.mp3'},
        {title: 'i fucked her friend', artists: ['kets4eki','asteria'], audio: 'albums/asteria/RAVE2DEATH/audio/kets4eki, asteria - i fucked her friend.mp3'},
        {title: 'felling nothing', artists: ['kets4eki', 'asteria', '6arelyhuman'], audio: 'albums/asteria/RAVE2DEATH/audio/kets4eki, asteria, 6arelyhuman - feeling nothing.mp3'},
        {title: 'COUNT IT UP', artists: ['kets4eki', 'asteria', 'hubithekid'], audio: 'albums/asteria/RAVE2DEATH/audio/kets4eki, asteria, hubithekid - COUNT IT UP.mp3'},
        ]
    },
    {
        // d3r
        artists: ['d3r'], 
        title: 'd3valued',
        cover: 'albums/d3r/d3valued/d3r - d3valued.png',
        songs: [
        {title: 'i think im lost', artists: ['d3r'], audio: ''},
        {title: 'theres no light at the end of the tunnel', artists: ['d3r'], audio: ''},
        {title: 'no more', artists: ['d3r'], audio: ''},
        ]
    },
    {
        // hubithekid
        artists: ['hubithekid'], 
        title: 'HUBICORE',
        cover: 'albums/hubithekid/hubithekid - HUBICORE.jpg',
        songs: [
        {title: '#HUBICORE INTRODÜCTION', artists: ['hubithekid'], audio: ''},
        {title: 'turn the lightz off', artists: ['hubithekid'], audio: 'albums/hubithekid/audio/hubithekid - turn the lightz off.mp3'},
        {title: 'ayo!', artists: ['hubithekid'], audio: ''},
        {title: 'eyez on me', artists: ['hubithekid', '6arelyhuman', 'BAEBY ALEX', 'syris', 'skypebf'], audio: ''},
        {title: 'b.r.a.t.', artists: ['hubithekid', 'BAEBY ALEX'], audio: 'albums/hubithekid/audio/hubithekid, BAEBY ALEX - b.r.a.t..m4a'},
        {title: 'ina trance', artists: ['hubithekid'], audio: ''},
        {title: 'jestem wasted x_x', artists: ['hubithekid'], audio: ''},
        {title: 'lost it', artists: ['hubithekid', 'pearlblade'], audio: ''},
        {title: 'give me more', artists: ['hubithekid', 'asteria'], audio: ''},
        {title: 'over n over', artists: ['hubithekid'], audio: ''},
        {title: 'na dno', artists: ['hubithekid', 'Nosgov'], audio: ''},
        {title: 'losin my mind', artists: ['hubithekid'], audio: ''},
        {title: 'c0raz bliżej', artists: ['hubithekid'], audio: ''},
        {title: 'give me a call (DJ HUBITHEKID EXCLUSIVE)', artists: ['hubithekid', '6arelyhuman'], audio: ''},
        ]
    },
    {
        // 4ortake
        artists: ['4ortake'], 
        title: 'wawe files',
        cover: 'albums/4ortake/4ortake - wave files.jpeg',
        songs: [
        {title: 'paranoia!', artists: ['4ortake'], audio: ''},
        {title: 'fxlling', artists: ['4ortake'], audio: ''},
        {title: 'ten/ten', artists: ['4ortake'], audio: ''},
        {title: 'HURTSOBAD!', artists: ['4ortake'], audio: ''},
        {title: 'all 4 me', artists: ['4ortake'], audio: ''},
        {title: 'bloodlust', artists: ['4ortake'], audio: ''},
        {title: 'wasted at the party', artists: ['4ortake'], audio: ''},
        {title: 'xoxo from 4', artists: ['4ortake'], audio: ''},
        {title: 'world star', artists: ['4ortake'], audio: 'albums/4ortake/audio/4ortake - world star.m4a'},
        {title: 'strippers', artists: ['4ortake'], audio: ''},
        {title: 'im a rockstar', artists: ['4ortake'], audio: ''},
        {title: 'DIM THE LIGHTS!', artists: ['4ortake'], audio: ''},
        {title: 'jumpin out the bass', artists: ['4ortake'], audio: ''},
        ]
    },
    {
        // xaduma
        artists: ['xaduma'], 
        title: 'go',
        cover: 'albums/xaduma/go/xaduma - go.png',
        songs: [
        {title: 'go!', artists: ['xaduma'], audio: ''},
        {title: 'for a moment', artists: ['xaduma'], audio: ''},
        {title: 'let u go', artists: ['xaduma'], audio: ''},
        {title: 'i hate the fact i lost you so easily (demo)', artists: ['xaduma'], audio: ''},
        {title: 'i need ya', artists: ['xaduma'], audio: ''},
        {title: 'DIE 4 UR LUV', artists: ['xaduma'], audio: ''},
        ]
    },
    {
        // EPITXME
        artists: ['EPITXME'], 
        title: 'SELFISH',
        cover: 'albums/EPITXME/SELFISH/EPITXME - SELFISH.png',
        songs: [
        {title: 'SELFISH!', artists: ['EPITXME'], audio: ''},
        {title: 'WHERE WERE YOU?', artists: ['EPITXME'], audio: ''},
        {title: 'CANT GET ENOUGH!', artists: ['EPITXME'], audio: ''},
        {title: 'CHANCE!', artists: ['EPITXME'], audio: ''},
        {title: 'ON MY OWN!', artists: ['EPITXME', '4ortake'], audio: ''},
        {title: 'TOLD HER NAH!', artists: ['EPITXME'], audio: 'albums/EPITXME/SELFISH/audio/EPITXME - TOLD HER NAH!.m4a'},
        {title: 'I DONT BELIEVE!', artists: ['EPITXME'], audio: ''},
        {title: 'NAH!', artists: ['EPITXME'], audio: ''},
        ]
    },
    {
        artists: ['EPITXME'], 
        title: 'UNAVOIDABLE',
        cover: 'albums/EPITXME/UNAVOIDABLE/EPITXME - UNAVOIDABLE.png',
        songs: [
        {title: 'DISCUSSION (Skit)', artists: ['EPITXME', 'sxcredmane'], audio: ''},
        {title: '#ELECTRONICSWAG!', artists: ['EPITXME', 'sxcredmane'], audio: ''},
        {title: 'ANYTHING YOU WANT!', artists: ['EPITXME', 'sxcredmane'], audio: 'albums/EPITXME/UNAVOIDABLE/audio/EPITXME, sxcredmane - ANYTHING YOU WANT!.m4a'},
        {title: 'LA LA LA', artists: ['EPITXME', 'xaduma'], audio: 'albums/EPITXME/UNAVOIDABLE/audio/EPITXME, xaduma - LA LA LA.m4a'},
        {title: 'TO THA BEAT!', artists: ['EPITXME', 'xaduma'], audio: ''},
        {title: 'WELCOME TO THE CLUB!', artists: ['EPITXME'], audio: ''},
        {title: 'EMO GIRL!', artists: ['EPITXME'], audio: ''},
        {title: 'SIPPIN ON WHITHEY!', artists: ['EPITXME', 'dollreal'], audio: ''},
        {title: 'TONIGHT IM 21', artists: ['EPITXME', '666tsukasa'], audio: ''},
        {title: 'LEAVE ME ALONE!', artists: ['EPITXME'], audio: ''},
        ]
    },
    {
        // JDFLAG
        artists: ['JDFLAG'], 
        title: 'FLAГSTRИK',
        cover: 'albums/JDFLAG/FLAГSTRИK/JDFLAG - FLAГSTRИK.jpeg',
        songs: [
        {title: 'ИNSЭЙN', artists: ['JDFLAG'], audio: ''},
        {title: 'TRЭПDOM', artists: ['JDFLAG'], audio: ''},
        {title: 'SOZDATELЬ МИRA', artists: ['JDFLAG'], audio: ''},
        {title: 'ИNTROSПЕКЦИЯ', artists: ['JDFLAG'], audio: ''},
        {title: 'ПБZX', artists: ['JDFLAG'], audio: ''},
        {title: 'ПRИVET', artists: ['JDFLAG'], audio: ''},
        {title: 'SKRT', artists: ['JDFLAG'], audio: ''},
        {title: 'ЖИVУ V ПЕЩЕRE', artists: ['JDFLAG'], audio: ''},
        {title: 'ГАГУNSКИЙ', artists: ['JDFLAG'], audio: ''},
        {title: 'SAMSУNГ', artists: ['JDFLAG'], audio: ''},
        {title: 'MAVERИК', artists: ['JDFLAG'], audio: ''},
        {title: 'ПLAMЯ', artists: ['JDFLAG'], audio: ''},
        {title: 'TVOЯ VИNA', artists: ['JDFLAG'], audio: ''},
        {title: 'ОБОЖАЮ ЧИSLA', artists: ['JDFLAG'], audio: ''},
        {title: 'KИD', artists: ['JDFLAG'], audio: ''},
        {title: 'KЭТИ ПЭRИ', artists: ['JDFLAG'], audio: ''},
        {title: 'SИLЬNO ОЧЕNЬ', artists: ['JDFLAG'], audio: ''},
        {title: 'DAЙ MNE RУKУ', artists: ['JDFLAG'], audio: ''},
        {title: 'SOУ WАТ', artists: ['JDFLAG'], audio: ''},
        {title: 'REALЬNEЙ', artists: ['JDFLAG'], audio: ''},
        {title: 'ЭБАУТ МИ', artists: ['JDFLAG'], audio: ''},
        {title: 'LЮБИТЬ', artists: ['JDFLAG'], audio: 'albums/JDFLAG/FLAГSTRИK/audio/JDFLAG - LЮБИТЬ.m4a'},
        {title: 'БУDУ VLИЯТЬ', artists: ['JDFLAG'], audio: ''},
        {title: 'XOLDAП', artists: ['JDFLAG'], audio: ''},
        {title: 'DEMONЫ', artists: ['JDFLAG'], audio: ''},
        {title: 'ПЭЙПАL 2023', artists: ['JDFLAG'], audio: ''},
        ]
    },
    {
        // UpVampin
        artists: ['UpVampin'], 
        title: 'HALLOWS EVE!',
        cover: 'albums/UpVampin/HALLOWS EVE!/UpVampin - HALLOWS EVE!.jpg',
        songs: [
        {title: 'DRESSED LIKE A SLUT!', artists: ['UpVampin'], audio: ''},
        {title: 'ZOMBIE BITCHES', artists: ['UpVampin'], audio: ''},
        {title: 'DRUGS', artists: ['UpVampin'], audio: ''},
        {title: 'CASTLES', artists: ['UpVampin', 'ang3lx'], audio: ''},
        {title: 'HAUNTED HOUSE!', artists: ['UpVampin'], audio: ''},
        {title: 'GET SO SCARED!', artists: ['UpVampin'], audio: ''},
        {title: 'horror movie/3', artists: ['UpVampin'], audio: ''},
        {title: 'HAPPY HALLOWEEN!', artists: ['UpVampin'], audio: ''},
        ]
    },
    {
        // dmtboy
        artists: ['dmtboy'], 
        title: 'DMTCORE',
        cover: 'albums/dmtboy/DMTCORE/dmtboy - DMTCORE.png',
        songs: [
        {title: 'GET KRANK', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - GET KRANK.m4a'},
        {title: 'SUPA STA', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - SUPA STA.m4a'},
        {title: 'ЭТУ И ТУ', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ЭТУ И ТУ.m4a'},
        {title: 'KONTAKT', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - KONTAKT.m4a'},
        {title: 'ГИГАБАЙТЫ', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ГИГАБАЙТЫ.m4a'},
        {title: 'AMBASSADOR', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - AMBASSADOR.m4a'},
        {title: 'SKINNY', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - SKINNY.m4a'},
        {title: '3GP', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - 3GP.m4a'},
        {title: 'СЛОВИЛ ЗВЕЗДУ', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - СЛОВИЛ ЗВЕЗДУ.m4a'},
        {title: 'В СПАМ', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - В СПАМ.m4a'},
        {title: 'ИНЕТ', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ИНЕТ.m4a'},
        {title: 'ВЫХОД', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ВЫХОД.m4a'},
        {title: 'SELEBA', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - SELEBA.m4a'},
        {title: 'ANFISA', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ANFISA.mp3'},
        {title: 'BIG FAIL', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - BIG FAIL.m4a'},
        {title: 'MDK', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - MDK.m4a'},
        {title: 'ПЕРЕЗАРЯДКА 3', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ПЕРЕЗАРЯДКА 3.m4a'},
        {title: '100500', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - 100500.m4a'},
        {title: 'ГУДКИ', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ГУДКИ.m4a'},
        {title: 'ВСЁ КЛЁВА', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ВСЁ КЛЁВА.mp3'},
        {title: 'КОММЕНТ', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - КОММЕНТ.m4a'},
        {title: 'НОВЫЕ', artists: ['dmtboy', 'diklor'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy, diklor - НОВЫЕ.m4a'},
        {title: 'FAKWRK', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - FAKWRK.m4a'},
        {title: 'ХЛОПАЙ', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - ХЛОПАЙ.m4a'},
        {title: 'RIGNTON', artists: ['dmtboy'], audio: 'albums/dmtboy/DMTCORE/audio/dmtboy - RINGTON.mp3'},
        ]
    },
    {
        // dmtboy
        artists: ['dmtboy'], 
        title: 'SUCK IT!',
        cover: 'albums/dmtboy/SUCK IT!/dmtboy - SUCK IT!.jpeg',
        songs: [
        {title: 'VIP', artists: ['dmtboy'], audio: ''},
        {title: 'FUCK YEAH', artists: ['dmtboy'], audio: ''},
        {title: 'ЗАНЯЛ НИШУ', artists: ['dmtboy'], audio: ''},
        {title: 'OMGDBL', artists: ['dmtboy'], audio: 'albums/dmtboy/SUCK IT!/audio/dmtboy - OMGDBL.m4a'},
        {title: 'XXXXL', artists: ['dmtboy'], audio: ''},
        {title: 'TWERK', artists: ['dmtboy'], audio: ''},
        {title: 'SKIT IT', artists: ['dmtboy'], audio: ''},
        {title: 'ONLINE', artists: ['dmtboy', 'diklor', 'SHTRIHCOD', 'dekma'], audio: ''},
        {title: 'БОЛЬШЕ ГЛАМУРА', artists: ['dmtboy'], audio: ''},
        {title: 'ACORN', artists: ['dmtboy'], audio: ''},
        {title: 'DG', artists: ['dmtboy'], audio: ''},
        {title: 'MILF KLAB', artists: ['dmtboy'], audio: ''},
        {title: 'SUCK MY SWAG', artists: ['dmtboy'], audio: ''},
        ]
    },
    {
        // clout
        artists: ['clout'], 
        title: 'ОКО',
        cover: 'albums/clout/ОКО/clout - ОКО.webp',
        songs: [
        {title: 'Миром правит', artists: ['clout'], audio: 'albums/clout/ОКО/audio/clout - Миром правит.m4a'},
        {title: 'Ad4m', artists: ['clout'], audio: 'albums/clout/ОКО/audio/clout - Ad4m.m4a'},
        {title: 'BoneSSS', artists: ['clout'], audio: 'albums/clout/ОКО/audio/clout - BoneSSS.m4a'},
        {title: 'Чудо Света', artists: ['clout'], audio: 'albums/clout/ОКО/audio/clout - Чудо Света.m4a'}
        ]
    },
    {
        artists: ['clout'], 
        title: 'КИБЕРПСИХОЗ.ERROR',
        cover: 'albums/clout/КИБЕРПСИХОЗ.ERROR/clout - КИБЕРПСИХОЗ.ERROR.png',
        songs: [
        {title: 'МРТ', artists: ['clout'], audio: 'albums/clout/КИБЕРПСИХОЗ.ERROR/audio/clout - МРТ.m4a'},
        {title: 'КоД ХаОса*404#', artists: ['clout'], audio: 'albums/clout/КИБЕРПСИХОЗ.ERROR/audio/clout - КоД ХаОса.m4a'},
        {title: 'ХтП', artists: ['clout'], audio: 'albums/clout/КИБЕРПСИХОЗ.ERROR/audio/clout - ХтП.m4a'},
        ]
    },
    {
        artists: ['clout'], 
        title: 'КАТАРСИС',
        cover: 'albums/clout/КАТАРСИС/clout - КАТАРСИС.jpeg',
        songs: [
        {title: 'Клуб «КАТАРСИС»', artists: ['clout'], audio: ''},
        {title: 'ДеВо4Ка-Ту$оВка x_X', artists: ['clout'], audio: ''},
        {title: 'у тРуПа', artists: ['clout'], audio: ''},
        {title: 'АнГел РейВ', artists: ['clout'], audio: ''},
        {title: 'sEx dOLL%)', artists: ['clout'], audio: 'albums/clout/КАТАРСИС/audio/clout - sEx dOLL.m4a'},
        {title: 'ВиРуСы +_+', artists: ['clout'], audio: ''},
        {title: 'buRN In uR eyeS…', artists: ['clout'], audio: ''},
        {title: 'My Bloody Heart', artists: ['clout'], audio: ''},
        ]
    },
    {
        artists: ['clout'], 
        title: 'КИБЕРПСИХОЗ.MP3',
        cover: 'albums/clout/КИБЕРПСИХОЗ.MP3/clout - КИБЕРПСИХОЗMP3.png',
        songs: [
        {title: 'ДИЛЕР', artists: ['clout'], audio: ''},
        {title: 'ЭлЕктРоНный', artists: ['clout'], audio: ''},
        {title: 'ДюРаСэлЛ%)9)', artists: ['clout'], audio: ''},
        ]
    },
    {
        artists: ['clout'], 
        title: 'XD',
        cover: 'albums/clout/XD/clout - XD.png',
        songs: [
        {title: 'бЕзЗзУмИе xDDD', artists: ['clout'], audio: ''},
        {title: 'КИСЛОТА X_X', artists: ['clout'], audio: ''},
        {title: 'пОлЕтАеМ? (n30N k1nG)', artists: ['clout'], audio: ''},
        ]
    },
    {
        artists: ['clout'], 
        title: 'HEADLINER',
        cover: 'albums/clout/HEADLINER/clout - HEADLINER.png',
        songs: [
        {title: 'UR0D', artists: ['clout'], audio: ''},
        {title: 'HBA', artists: ['clout'], audio: ''},
        {title: 'WTF?!', artists: ['clout'], audio: ''},
        ]
    },
    {
        artists: ['clout'], 
        title: 'ERA OF DARKNESS',
        cover: 'albums/clout/ERA OF DARKNESS/clout - ERA OF DARKNESS.jpeg',
        songs: [
        {title: 'TIME', artists: ['clout'], audio: ''},
        {title: 'RED', artists: ['clout'], audio: ''},
        {title: 'MONEY ADDICT', artists: ['clout'], audio: ''},
        {title: 'FUK YOUR EXES', artists: ['clout'], audio: ''},
        {title: 'MISSION', artists: ['clout'], audio: ''},
        ]
    },
    {
        // wikuro, Vee4r
        artists: ['wikuro','Vee4r'], 
        title: 'KNIVES EP',
        cover: 'albums/Vee4r/KNIVES EP/wikuro, Vee4r - KNIVES EP.jpg',
        songs: [
        {title: 'WELCOME TO THE STABBING', artists: ['wikuro', 'Vee4r'], audio: ''},
        {title: 'KNIVES', artists: ['wikuro', 'Vee4r'], audio: 'albums/wikuro/KNIVES EP/audio/wikuro, Vee4r - KNIVES.mp3'},
        {title: 'I WANT IT', artists: ['wikuro', 'Vee4r'], audio: 'albums/wikuro/KNIVES EP/audio/wikuro, Vee4r - I WANT IT!.mp3'},
        {title: 'BETTER!', artists: ['wikuro', 'Vee4r'], audio: 'albums/wikuro/KNIVES EP/audio/wikuro, Vee4r - BETTER!.mp3'},
        ]
    },
    {
        // GASPXR
        artists: ['GASPXR'], 
        title: 'AUTISM SPECTRUM DISORDER (ASDELUXE)',
        cover: 'albums/GASPXR/AUTISM SPECTRUM DISORDER (ASDELUXE)/GASPXR - AUTISM SPECTRUM DISORDER (ASDELUXE).jpeg',
        songs: [
        {title: 'RAMONA FLOWERS', artists: ['GASPXR'], audio: 'albums/GASPXR/AUTISM SPECTRUM DISORDER (ASDELUXE)/audio/GASPXR - RAMONA FLOWERS!.m4a'},
        {title: 'SAINTS & SINNERS', artists: ['GASPXR'], audio: ''},
        {title: 'RODEO', artists: ['GASPXR'], audio: ''},
        {title: 'SUMMER 2004', artists: ['GASPXR'], audio: 'albums/GASPXR/AUTISM SPECTRUM DISORDER (ASDELUXE)/audio/GASPXR - SUMMER2004.m4a'},
        {title: 'LUXURY BABY', artists: ['GASPXR', 'ELECTRAA'], audio: ''},
        {title: 'REDEMPTION', artists: ['GASPXR'], audio: ''},
        {title: 'THE BITE OF 87', artists: ['GASPXR'], audio: ''},
        {title: 'KATYUSHA', artists: ['GASPXR', '重音テト (Kasane Teto)'], audio: ''},
        {title: 'TRUST', artists: ['GASPXR', 'CR0T0N', 'Kitt9A'], audio: ''},
        {title: 'PLAYBOY', artists: ['GASPXR'], audio: ''},
        {title: 'THERE IS TOO MUCH NOISES', artists: ['GASPXR'], audio: ''},
        {title: 'WHOISTHEMONSTER / ECLIPSE', artists: ['GASPXR'], audio: ''},
        {title: 'ASMR+ANTISOCIAL', artists: ['GASPXR', 'YANDXRE'], audio: ''},
        {title: 'CYBERSEX', artists: ['GASPXR'], audio: ''},
        {title: 'ExiSTenCiaLLCRisiS!?!!!!!!!!!!', artists: ['GASPXR'], audio: ''},
        {title: 'EARGASM INTERLUDE', artists: ['GASPXR'], audio: ''},
        {title: 'VOYAGE', artists: ['GASPXR'], audio: ''},
        {title: 'I♥︎BEINGHATEDBYU', artists: ['GASPXR', 'W4ddles'], audio: ''},
        {title: 'RESET 2', artists: ['GASPXR'], audio: ''},
        {title: 'tears', artists: ['GASPXR'], audio: ''},
        ]
    },
    {
        // GASPXR
        artists: ['GASPXR'], 
        title: 'AUTISM SPECTRUM DISORDER',
        cover: 'albums/GASPXR/AUTISM SPECTRUM DISORDER/GASPXR - AUTISM SPECTRUM DISORDER.png',
        songs: [
        {title: 'REDEMPTION', artists: ['GASPXR'], audio: ''},
        {title: 'THE BITE OF 87', artists: ['GASPXR'], audio: ''},
        {title: 'KATYUSHA', artists: ['GASPXR'], audio: ''},
        {title: 'TRUST', artists: ['GASPXR', 'CR0T0N', 'Kitt9A'], audio: ''},
        {title: 'PLAYBOY', artists: ['GASPXR'], audio: ''},
        {title: 'THERE IS TOO MUCH NOISES', artists: ['GASPXR'], audio: ''},
        {title: 'WHOISTHEMONSTER / ECLIPSE', artists: ['GASPXR'], audio: ''},
        {title: 'ASMR+ANTISOCIAL', artists: ['GASPXR', 'YANDXRE'], audio: ''},
        {title: 'CYBERSEX', artists: ['GASPXR'], audio: ''},
        {title: 'ExiSTenCiaLLCRisiS!?!!!!!!!!!!', artists: ['GASPXR'], audio: ''},
        {title: 'EARGASM INTERLUDE', artists: ['GASPXR'], audio: ''},
        {title: 'I♥︎BEINGHATEDBYU', artists: ['GASPXR', 'W4ddles'], audio: ''},
        {title: 'RESET 2', artists: ['GASPXR'], audio: ''},
        {title: 'tears', artists: ['GASPXR'], audio: ''},
        ]
    },
    {
        // rompy
        artists: ['rompy'], 
        title: '//outlaw',
        cover: 'albums/rompy/outlaw/rompy - outlaw.jpg',
        songs: [
        {title: '//masка', artists: ['rompy'], audio: ''},
        {title: '//cry_0n_me', artists: ['rompy'], audio: ''},
        {title: '//оjоги', artists: ['rompy'], audio: ''},
        {title: '//лast_пartи', artists: ['rompy', 'keijo!'], audio: ''},
        {title: '//пнеvмония', artists: ['rompy'], audio: ''},
        {title: '//bэд_коmпanи', artists: ['rompy'], audio: ''},
        {title: '//деmония', artists: ['rompy'], audio: ''},
        {title: '//лонdон', artists: ['rompy'], audio: ''},
        {title: '//turnitup', artists: ['rompy'], audio: ''},
        {title: '//g0rekи', artists: ['rompy'], audio: ''},
        {title: '//bоль', artists: ['rompy'], audio: ''},
        ]
    },
    {
        // vinetta
        artists: ['vinetta'], 
        title: 'CULT',
        cover: 'albums/vinetta/CULT/vinetta - CULT.jpg',
        songs: [
        {title: 'ПУЛЬС', artists: ['vinetta'], audio: 'albums/vinetta/CULT/audio/vinetta - ПУЛЬС.m4a'},
        {title: 'СЕТИ', artists: ['vinetta'], audio: 'albums/vinetta/CULT/audio/vinetta - СЕТИ.m4a'},
        {title: 'D4BST3P', artists: ['vinetta'], audio: 'albums/vinetta/CULT/audio/vinetta - D4BST3P.m4a'},
        ]
    },
    {
        artists: ['vinetta'], 
        title: 'ПЛ0ТЬ',
        cover: 'albums/vinetta/ПЛ0ТЬ/vinetta - ПЛ0ТЬ.jpeg',
        songs: [
        {title: '0TPUST1', artists: ['vinetta'], audio: 'albums/vinetta/ПЛ0ТЬ/audio/vinetta - 0TPUST1.m4a'},
        {title: 'RAZ0RV1', artists: ['vinetta'], audio: 'albums/vinetta/ПЛ0ТЬ/audio/vinetta - RAZ0RV1.mp3'},
        {title: 'K0ST1', artists: ['vinetta'], audio: 'albums/vinetta/ПЛ0ТЬ/audio/vinetta - K0ST1.m4a'},
        {title: 'ZARAZ4', artists: ['vinetta'], audio: 'albums/vinetta/ПЛ0ТЬ/audio/vinetta - ZARAZ4.m4a'},
        ]
    },
    {
        // Kai Angel
        artists: ['Kai Angel'], 
        title: 'damage',
        cover: 'albums/Kai Angel/damage/Kai Angel - damage.jpeg',
        songs: [
        {title: 'are you happy', artists: ['Kai Angel'], audio: ''},
        {title: 'im all blessed the fuck up', artists: ['Kai Angel'], audio: 'albums/Kai Angel/damage/audio/Kai Angel - im all blessed the fuck up.m4a'},
        {title: 'basement', artists: ['Kai Angel'], audio: ''},
        {title: 'body double', artists: ['Kai Angel'], audio: ''},
        {title: 'mirrors', artists: ['Kai Angel'], audio: ''},
        {title: 'chelsea smile', artists: ['Kai Angel'], audio: ''},
        {title: '444', artists: ['Kai Angel'], audio: ''},
        {title: 'parasocial freestyle', artists: ['Kai Angel'], audio: ''},
        {title: 'designers paradise', artists: ['Kai Angel'], audio: ''},
        {title: 'fire walk with me', artists: ['Kai Angel'], audio: ''},
        {title: 'madam', artists: ['Kai Angel'], audio: ''},
        {title: 'sirens', artists: ['Kai Angel'], audio: ''},
        {title: 'naive', artists: ['Kai Angel'], audio: ''},
        {title: 'drive', artists: ['Kai Angel'], audio: ''},
        {title: 'welcome to forever', artists: ['Kai Angel'], audio: ''},
        {title: '0 tears', artists: ['Kai Angel'], audio: ''},
        {title: 'damage', artists: ['Kai Angel'], audio: ''},
        {title: 'amy', artists: ['Kai Angel'], audio: ''},
        ]
    },
    {
        artists: ['Kai Angel'], 
        title: 'ANGEL MAY CRY 2',
        cover: 'albums/Kai Angel/ANGEL MAY CRY 2/Kai Angel - ANGEL MAY CRY 2.png',
        songs: [
        {title: 'john galliano', artists: ['Kai Angel'], audio: ''},
        {title: 'millions', artists: ['Kai Angel'], audio: ''},
        {title: 'i hate fashion shows', artists: ['Kai Angel'], audio: ''},
        {title: 'scream!', artists: ['Kai Angel'], audio: ''},
        {title: 'laperouse', artists: ['Kai Angel'], audio: ''},
        {title: 'aimed u up', artists: ['Kai Angel'], audio: ''},
        {title: 'white ferrari', artists: ['Kai Angel'], audio: ''},
        ]
    },
    {
        artists: ['9mice', 'Kai Angel'], 
        title: 'Heavy Metal 2',
        cover: 'albums/Kai Angel/Heavy Metal 2/9mice, Kai Angel - Heavy Metal 2.png',
        songs: [
        {title: 'Cyber Is Dead Interlude', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Fountainebleau', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Phoenix', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Blum (Big City Life)', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Ринопластика (Surgery)', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Paparazzi', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'So Good', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Frank Ocean', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: '2017', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Da Vinci', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'LMFAO', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Ice + Alabaster', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Tusa V.I.P.', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'I Love God', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Smells Like Teen Spirit', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Hollywood Takeover…', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'I Wanna Be Your Dog', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Hate People', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Fire Alarm', artists: ['Kai Angel', '9mice'], audio: ''},
        {title: 'Murder On The Dancefloor', artists: ['9mice', 'Kai Angel'], audio: ''},
        {title: 'Homecoming', artists: ['9mice', 'Kai Angel'], audio: ''},            
        ]
    },
    {
        // блэйзи
        artists: ['блэйзи?'], 
        title: 'h0rny_p4wz.blz',
        cover: 'albums/блэйзи/h0rny_p4wz.blz/блэйзи - h0rny_p4wz.blz.jpeg',
        songs: [
        {title: 'Vtel3gr4m ))', artists: ['блэйзи?'], audio: ''},
        {title: 'z4#balo ///', artists: ['блэйзи?', 'fluksa'], audio: 'albums/блэйзи/h0rny_p4wz.blz/audio/блэйзи - z43balo.mp3'},
        {title: '-хф..~', artists: ['блэйзи?', 'лиля водкина'], audio: ''},
        {title: 'лень :/', artists: ['блэйзи?'], audio: 'albums/блэйзи/h0rny_p4wz.blz/audio/блэйзи - лень.mp3'},
        {title: 'd0g.core :3', artists: ['блэйзи?'], audio: ''},
        ]
    },
    {
        // xxxmanera
        artists: ['xxxmanera'], 
        title: 'Man of Era 3',
        cover: 'albums/xxxmanera/Man of Era 3/xxxmanera - Man of Era 3.png',
        songs: [
        {title: 'Mood Down Paper Up', artists: ['xxxmanera'], audio: ''},
        {title: 'Тает лед', artists: ['xxxmanera'], audio: ''},
        {title: 'T-Pain', artists: ['xxxmanera'], audio: ''},
        {title: 'Я хочу', artists: ['xxxmanera'], audio: ''},
        {title: 'Stranger Things', artists: ['xxxmanera'], audio: ''},
        {title: 'Emo Emo', artists: ['xxxmanera'], audio: ''},
        ]
    },
    {
        artists: ['xxxmanera'], 
        title: 'HUNNID: GATEKEEPING',
        cover: 'albums/xxxmanera/HUNNID GATEKEEPING/xxxmanera - HUNNID GATEKEEPING.png',
        songs: [
        {title: 'neсtar', artists: ['xxxmanera'], audio: ''},
        {title: 'presidential', artists: ['xxxmanera'], audio: ''},
        {title: 'usb', artists: ['xxxmanera'], audio: 'albums/xxxmanera/HUNNID GATEKEEPING/audio/xxxmanera - usb.mp3'},
        {title: 'reflex80', artists: ['xxxmanera', 'CODE80'], audio: ''},
        {title: 'osamaslon', artists: ['xxxmanera'], audio: ''},
        {title: 'for sure', artists: ['xxxmanera', 'Josodo'], audio: ''},
        {title: 'nevada', artists: ['xxxmanera'], audio: ''},
        {title: 'double it', artists: ['xxxmanera', 'Джон Гарик'], audio: ''},
        {title: 'sniper', artists: ['xxxmanera'], audio: ''},
        {title: 'tourist', artists: ['xxxmanera'], audio: ''},
        {title: 'yaga', artists: ['xxxmanera'], audio: ''},
        {title: 'passout', artists: ['xxxmanera', 'Nikitsunami'], audio: ''},
        {title: 'lovin', artists: ['xxxmanera'], audio: ''},
        ]
    },
    {
        // SODA LUV
        artists: ['SODA LUV'], 
        title: '-5LUV5',
        cover: 'albums/SODA LUV/-5LUV5/SODA LUV - -5LUV5.png',
        songs: [
        {title: 'Надежда Бабкина [luchshiy vnuk]', artists: ['SODA LUV'], audio: ''},
        {title: 'Mi Amore', artists: ['SODA LUV', 'BUSHIDO ZHO'], audio: ''},
        {title: 'Omg! [melovemealot]', artists: ['SODA LUV'], audio: ''},
        {title: '5pin it again', artists: ['SODA LUV'], audio: ''},
        {title: 'Душегубка', artists: ['SODA LUV', 'SEEMEE'], audio: ''},
        {title: 'Baccara', artists: ['SODA LUV'], audio: ''},
        {title: 'Bop Bop', artists: ['SODA LUV'], audio: ''},
        {title: 'Аре5тантка', artists: ['SODA LUV', 'paper illustrator'], audio: ''},
        {title: 'Ba5e', artists: ['SODA LUV'], audio: ''},
        {title: 'Москва - Владивосток', artists: ['SODA LUV', 'Heronwater'], audio: ''},
        {title: 'Heinz', artists: ['SODA LUV'], audio: ''},
        {title: 'Feelin’ Lonely', artists: ['SODA LUV'], audio: ''},
        {title: 'Pick me hoe', artists: ['SODA LUV'], audio: ''},
        {title: 'Flatout', artists: ['SODA LUV'], audio: ''},
        {title: '5urprise', artists: ['SODA LUV', 'nkeeei'], audio: ''},
        {title: 'ЧАТИК', artists: ['SODA LUV'], audio: ''},
        {title: 'Champagne 5quirt 2', artists: ['SODA LUV', 'ТРАВМА'], audio: ''},
        ]
    },
    {
        artists: ['SODA LUV'], 
        title: 'НИЧЕГО ЛИЧНОГО 2',
        cover: 'albums/SODA LUV/НИЧЕГО ЛИЧНОГО 2/SODA LUV - НИЧЕГО ЛИЧНОГО 2.png',
        songs: [
        {title: 'AHAHAHA', artists: ['SODA LUV'], audio: ''},
        {title: 'МИКРОВОЛНОВКА ФЛОУ', artists: ['SODA LUV'], audio: ''},
        {title: 'MAYBACH', artists: ['SODA LUV'], audio: ''},
        {title: 'ТАХО', artists: ['SODA LUV'], audio: ''},
        {title: 'КАРИНА', artists: ['SODA LUV', 'Heronwater'], audio: ''},
        {title: 'ВЗБЕЙ МЯСО', artists: ['SODA LUV'], audio: ''},
        {title: 'CHASEDAMONEY / Salam Zelly', artists: ['SODA LUV', 'BUSHIDO ZHO'], audio: ''},
        {title: 'TURBINA', artists: ['SODA LUV'], audio: ''},
        {title: 'DTF', artists: ['SODA LUV'], audio: ''},
        {title: 'CARPE DIEM', artists: ['SODA LUV'], audio: ''},
        {title: 'ЯЛРС', artists: ['SODA LUV'], audio: ''},
        {title: 'Prettyboii', artists: ['SODA LUV'], audio: ''},
        {title: 'REFERENCE / БОЛЬШОЙ ШАГАТЕЛЬ', artists: ['SODA LUV'], audio: ''},
        {title: 'From UK 2 RU', artists: ['SODA LUV'], audio: ''},
        {title: 'BOSCO', artists: ['SODA LUV', 'Hood Rich Luka'], audio: ''},
        {title: 'CMD + Z', artists: ['SODA LUV'], audio: ''},
        ]
    },
    {
        // CR0T0N
        artists: ['CR0T0N'], 
        title: 'The Red Carpet',
        cover: 'albums/CR0T0N/The Red Carpet/CR0T0N - The Red Carpet.png',
        songs: [
        {title: 'Red Carpet Walk!', artists: ['CR0T0N', 'Kana Paint'], audio: ''},
        {title: 'Blah Blah Blah', artists: ['CR0T0N', 'Mika Montag'], audio: ''},
        {title: 'BE LIKE US', artists: ['CR0T0N', 'prvttyscrzz', 'Brennn'], audio: ''},
        {title: 'Spontaneous', artists: ['CR0T0N', 'Anti-Light'], audio: ''},
        {title: 'NO YOU DONT!', artists: ['CR0T0N', 'euphoria'], audio: 'albums/CR0T0N/The Red Carpet/audio/CR0T0N, euphoria - NO YOU DONT!.m4a'},
        {title: 'Do My Way!', artists: ['CR0T0N', 'GASPXR', 'HAR$h'], audio: ''},
        {title: 'Change The Subject', artists: ['CR0T0N', 'prvttyscrzz'], audio: ''},
        {title: 'Ignorance is Bliss', artists: ['CR0T0N', 'AfterDRK', 'HAR$h'], audio: ''},
        {title: 'LIKE DAMN', artists: ['CR0T0N', 'hydrakuma13', '$kirmish'], audio: ''},
        {title: 'Always On My Mind', artists: ['CR0T0N', '444pluto'], audio: 'albums/CR0T0N/The Red Carpet/audio/СR0T0N, 444pluto - Always On My Mind.m4a'},
        ]
    },
];


// РАЗЛИЧНЫЕ ПЕРЕМЕННЫЕ
let currentSongIndex = 0
let currentPlaylist = songs; // По умолчанию играет общий список синглов
let currentPlaylistCover = null; // Обложка для текущего списка (нужна для альбомов)
let originalPlaylist = [...songs]; // Хранит треки в исходном порядке
let isShuffled = false; // Состояние кнопки перемешивания (вкл/выкл)
let isRepeated = false; // Состояние кнопки повтора (вкл/выкл)


// МИНИ-ПЛЕЕР
const miniPlayer = document.querySelector('.mini-player');
const miniCover = document.querySelector('.mini-player-track_cover');
const miniTitle = document.querySelector('.mini-player-track-title');
const miniArtist = document.querySelector('.mini-player-track-artist');
const miniProgress = document.querySelector('.mini-player-progress-bar');
const miniCurrentTime = document.querySelector('.mini-player-track-current-time');
const miniDuration = document.querySelector('.mini-player-track-duration');


// КНОПКИ МИНИ-ПЛЕЕРА
const miniPlayBtn = miniPlayer.querySelector('.play_song_button');
const miniPrevBtn = miniPlayer.querySelector('.prev_song_button');
const miniNextBtn = miniPlayer.querySelector('.next_song_button');
const miniMixBtn = miniPlayer.querySelector('.mix_songs_button');
const miniRepeatBtn = miniPlayer.querySelector('.repeat_song_button');
const miniVolumeBtn = miniPlayer.querySelector('.volume_play_button');


// ОБНОВИТЬ ЧТО-ТО
const fragment_songs = document.createDocumentFragment();

const test_grid = document.querySelector('.test-grid')

updateSong(songs[currentSongIndex]);

function updateSong(track, customCover = null) {
    if (!track) return;
    
    songCover.src = customCover || track.cover;
    songTitle.textContent = track.title;
    if (miniCover) miniCover.src = customCover || track.cover;
    if (miniTitle) miniTitle.textContent = track.title;
    
    let artistsArray = [];
    if (Array.isArray(track.artists)) { // Что это?
        artistsArray = track.artists;
    } else {
        for (const key in track) {
            if (key.startsWith('artist') && track[key]) {
                artistsArray.push(track[key]);
            }
        }
    }
 
    songArtists.textContent = artistsArray.join(', ');
    if (miniArtist) miniArtist.textContent = artistsArray.join(', ');
    
    test_grid.innerHTML = '';
    const localFragment = document.createDocumentFragment();
    
    for (let i = 0; i < artistsArray.length; i++) {
        const artistName = artistsArray[i];
        const newGridy = document.createElement('div');
        const newGridyText = document.createElement('p');
        const newGridyImg = document.createElement('img');
        newGridy.classList.add('gridy');
        newGridyText.classList.add('gridy-text');
        newGridyText.textContent = artistName;
        newGridy.appendChild(newGridyImg);
        newGridy.appendChild(newGridyText);
        
        newGridy.addEventListener('click', () => {
            artistProfileName.textContent = artistName;
            if (foundArtist) {
                artistProfileImg.src = foundArtist.photo;
            }
            appendSingle();
            appendAlbum();
            artist_click.classList.remove('active');
            artistProfile.style.display = 'block';
        });
    
        const foundArtist = photos_artists.find(item => item.text === artistName);
        if (foundArtist) {
            newGridyImg.src = foundArtist.photo;
        } else {
            newGridyImg.src = 'artists/Anarchist Sanctuary.jpeg';
        }
        localFragment.appendChild(newGridy);
    }
    test_grid.appendChild(localFragment);
    
    if (artistsArray.length % 2 !== 0) {
        test_grid.classList.add('test-grid-odd');
    } else {
        test_grid.classList.remove('test-grid-odd');
    }
 
    const targetAudioSrc = track.audio || track.src;
    audio.src = targetAudioSrc;
    audio.onloadedmetadata = function() {
        progress.value = 0;
        progress.max = audio.duration;
        if (miniProgress) {
            miniProgress.value = 0;
            miniProgress.max = audio.duration;
        }
    };

    // ===========================================================================
    // --- СИНХРОНИЗАЦИЯ ИКОНОК И СОСТОЯНИЙ ---
    // ===========================================================================
    
    // Шаг A: Снимаем активность со всех старых элементов сайта
    document.querySelectorAll('.track, .single-grid, .album-grid, .all-single-grid').forEach(t => {
    t.classList.remove('track-active');
    
    const hoverTrackImg = t.querySelector('.onItemHoverTrack img');
    if (hoverTrackImg) hoverTrackImg.src = 'icons/play-track.svg';
    
    const hoverAlbumImg = t.querySelector('.albumOnHover img');
    if (hoverAlbumImg) hoverAlbumImg.src = 'icons/play-album.svg';

    // Исправлено для треков внутри альбома: если мышь ушла, удаляем ноду
    const hoverAlbumTrack = t.querySelector('.albumTrackOnHover');
    if (hoverAlbumTrack) {
        const img = hoverAlbumTrack.querySelector('img');
        if (img) img.src = 'icons/play-album.svg';
        if (!t.matches(':hover')) {
            t.removeChild(hoverAlbumTrack);
        }
    }
 
    const hoverAllSingleImg = t.querySelector('.allSingleOnHover img');
    if (hoverAllSingleImg) hoverAllSingleImg.src = 'icons/play-profile-single.svg';
    
    const hoverAllSingleBlock = t.querySelector('.allSingleOnHover');
    if (hoverAllSingleBlock && !t.matches(':hover')) {
    t.removeChild(hoverAllSingleBlock);
    }
 
    const hoverSingle = t.querySelector('.profileSingleOnHover');
    if (hoverSingle) {
        const hoverSingleImg = hoverSingle.querySelector('img');
        if (hoverSingleImg) hoverSingleImg.src = 'icons/play-profile-single.svg';
        if (!t.matches(':hover')) {
            t.removeChild(hoverSingle);
        }
    }
    });

    // Шаг B: Подсвечиваем текущую играющую песню
    const targetTitle = track.title.trim().toLowerCase().replace(/’/g, "'");

    document.querySelectorAll('.track, .single-grid, .album-grid, .all-single-grid').forEach(t => {
        let elementTitle = '';
        if (t.classList.contains('track')) {
            const titleEl = t.querySelector('.track-title');
            if (titleEl) elementTitle = titleEl.textContent.trim();
        } 
        else if (t.classList.contains('single-grid')) {
            const titleEl = t.querySelector('.single-title');
            if (titleEl) elementTitle = titleEl.textContent.trim();
        }
        else if (t.classList.contains('all-single-grid')) {
            const titleEl = t.querySelector('.all-single-grid-title');
            if (titleEl) elementTitle = titleEl.textContent.trim();
        }
        else if (t.classList.contains('album-grid')) {
            const titleEl = t.querySelector('.album-track-title');
            if (titleEl) elementTitle = titleEl.textContent.trim();
        }

        if (elementTitle && elementTitle.toLowerCase().replace(/’/g, "'") === targetTitle) {
            t.classList.add('track-active');
            
            if (t.classList.contains('track')) {
                const img = t.querySelector('.onItemHoverTrack img');
                if (img) img.src = audio.paused ? 'icons/play-track.svg' : 'icons/pause-track.svg';
            } 
            // ПРОВЕРКА ДУБЛИРОВАНИЯ ХОВЕРА У АЛЬБОМОВ
            else if (t.classList.contains('album-grid')) {
                let hoverAlbumTrack = t.querySelector('.albumTrackOnHover');
                if (!hoverAlbumTrack) {
                    hoverAlbumTrack = document.createElement('div');
                    hoverAlbumTrack.classList.add('albumTrackOnHover');
                    const hoverAlbumTrackImg = document.createElement('img');
                    hoverAlbumTrack.appendChild(hoverAlbumTrackImg);
                    t.appendChild(hoverAlbumTrack);
                }
                const img = hoverAlbumTrack.querySelector('img');
                if (img) img.src = audio.paused ? 'icons/play-album.svg' : 'icons/pause-album.svg';
            }
            else if (t.classList.contains('all-single-grid')) {
                let hoverAllSingle = t.querySelector('.allSingleOnHover');
                if (!hoverAllSingle) {
                    hoverAllSingle = document.createElement('div');
                    hoverAllSingle.classList.add('allSingleOnHover');
                    const hoverAllSingleImg = document.createElement('img');
                    hoverAllSingle.appendChild(hoverAllSingleImg);
                    t.appendChild(hoverAllSingle);
                }
                const img = hoverAllSingle.querySelector('img');
                if (img) img.src = audio.paused ? 'icons/play-profile-single.svg' : 'icons/pause-profile-single.svg';
            }
            else if (t.classList.contains('single-grid')) {
                let hoverSingle = t.querySelector('.profileSingleOnHover');
                if (!hoverSingle) {
                    hoverSingle = document.createElement('div');
                    hoverSingle.classList.add('profileSingleOnHover');
                    const hoverSingleImg = document.createElement('img');
                    hoverSingle.appendChild(hoverSingleImg);
                    t.appendChild(hoverSingle);
                }
                const img = hoverSingle.querySelector('img');
                if (img) img.src = audio.paused ? 'icons/play-profile-single.svg' : 'icons/pause-profile-single.svg';
            }
        }
    });
}


// ВРЕМЯ ПЕСНИ
progress.addEventListener('change', function() {
    audio.currentTime = progress.value;
})

function moveProgress() {
    progress.value = audio.currentTime;
    current_time.innerHTML = sToStr(Math.round(audio.currentTime));
    song_duration.innerHTML = sToStr(Math.round(audio.duration));
}

setInterval(moveProgress, 1000);

function sToStr(s) {
  let m = Math.trunc(s / 60) + ''
  s = (s % 60) + ''
  return m.padStart(2, 0) + ':' + s.padStart(2, 0)
}


// ВОСПРОИЗВЕДЕНИЕ АУДИО
playSong_button.addEventListener("click", function() {
    if (!audio.paused) {
        playSong_button.src = 'icons/play-button.svg'
        audio.pause()
    }
    else {
        playSong_button.src = 'icons/pause-button.svg'
        audio.play()
    }
})


// ЗВУК ПЕСНИ (ОСНОВНОЙ ПЛЕЕР)
const audioplayerPlayer = document.querySelector('.audioplayer__player')
const changeVolumeBox = audioplayerPlayer.querySelector('.change-volume-box')
const volumeControl = audioplayerPlayer.querySelector('.volume-control')
const changeVolume = audioplayerPlayer.querySelector('.change-volume')

// ЗВУК ПЕСНИ (МИНИ-ПЛЕЕР)
const changeVolumeBoxMini = miniPlayer.querySelector('.change-volume-box')
const volumeControlMini = miniPlayer.querySelector('.volume-control')
const changeVolumeMini = miniPlayer.querySelector('.change-volume') 

// Показываем/скрываем при наведении в основном плеере
volume_play_button.addEventListener('mouseenter', () => changeVolumeBox.classList.add('is-active'))
volumeControl.addEventListener('mouseleave', () => changeVolumeBox.classList.remove('is-active'))

// Показываем/скрываем при наведении в мини-плеере
if (miniVolumeBtn && changeVolumeBoxMini && volumeControlMini) {
  miniVolumeBtn.addEventListener('mouseenter', () =>  changeVolumeBoxMini.classList.add('is-active'))
  volumeControlMini.addEventListener('mouseleave', () => changeVolumeBoxMini.classList.remove('is-active'))
}

// Переменная для хранения громкости
let currentVolume = changeVolume.value

// Общая функция для обновления всех элементов интерфейса звука
function updateVolumeInterface(volumeValue) {
  audio.volume = volumeValue;
  
  // Синхронизируем положение обоих ползунков
  changeVolume.value = volumeValue;
  if (changeVolumeMini) changeVolumeMini.value = volumeValue;

  // Находим иконку в зависимости от уровня звука
  const iconSrc = volumeValue == 0 ? 'icons/mute-button.svg' : 'icons/unmute-button.svg';

  // Меняем иконки на кнопках напрямую
  if (volume_play_button) volume_play_button.src = iconSrc;
  if (miniVolumeBtn) miniVolumeBtn.src = iconSrc;
}

// Слушатель для основного ползунка
changeVolume.addEventListener('input', (event) => {
  const value = event.target.value;
  updateVolumeInterface(value);
  if (value > 0) currentVolume = value; 
})

// Слушатель для ползунка в мини-плеере
if (changeVolumeMini) {
  changeVolumeMini.addEventListener('input', (event) => {
    const value = event.target.value;
    updateVolumeInterface(value);
    if (value > 0) currentVolume = value;
  })
}

// КЛИК ПО КНОПКЕ MUTE (ГЛАВНАЯ И В МИНИ-ПЛЕЕРЕ)
function toggleMute(event) {
  // Останавливаем всплытие события, чтобы mouseleave/click других элементов не мешали
  event.stopPropagation(); 
  
  if (audio.volume > 0) {
    currentVolume = audio.volume; // Запоминаем текущий звук
    updateVolumeInterface(0);     // Полностью обнуляем звук и ползунки
  } else {
    const returnVolume = currentVolume > 0 ? currentVolume : 1;
    updateVolumeInterface(returnVolume); // Восстанавливаем сохраненный уровень
  }
}

// Универсальный обработчик клика для всего документа
document.addEventListener('click', (event) => {
  // Проверяем, нажали ли мы на кнопку громкости (в основном или мини-плеере)
  const clickedButton = event.target.closest('.volume_play_button');
  
  if (clickedButton) {
    event.stopPropagation(); // Блокируем баги всплытия событий
    
    if (audio.volume > 0) {
      currentVolume = audio.volume;
      updateVolumeInterface(0);
    } else {
      const returnVolume = currentVolume > 0 ? currentVolume : 1;
      updateVolumeInterface(returnVolume);
    }
  }
});


// КНОПКИ ПАНЕЛИ
const panel_buttons = document.querySelectorAll('.panel_btn') 

panel_buttons[0].classList.add('clicked')

for (let i = 0; i < panel_buttons.length; i++) {
    panel_buttons[i].addEventListener('click', ()=> {
        panel_buttons.forEach(item => {
            item.classList.remove('clicked')
            panel_buttons[i].classList.add('clicked')
        })
    })
}


// ТРЕКЛИСТ
const tracklist = document.querySelector('.tracklist');

const fragment_tracks = document.createDocumentFragment();

for (i = 0; i < songs.length; i++) {
    const newTrack = document.createElement('div')
    const newTrackImg = document.createElement('img')
    const newTrackAbout = document.createElement('div')
    const newTrackTitle = document.createElement('div')
    const newTrackArtist = document.createElement('div')
    newTrackImg.src = songs[i].cover;
    newTrackTitle.textContent = songs[i].title;
    newTrack.className = 'track'
    newTrackImg.className = 'track-img';
    newTrackAbout.className = 'track-about';
    newTrackTitle.className = 'track-title';
    newTrackArtist.className = 'track-artist'


    // ДОБАВЛЕНИЕ ИСПОЛНИТЕЛЕЙ
    const artists = [];
    const track = songs[i]; 
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



function togglePlay(mediaElement) {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

const track = document.querySelectorAll('.track')

track.forEach((item, index) => {
    const onItemHover = document.createElement('div')
    const onItemHoverImg = document.createElement('img')
    onItemHoverImg.src = 'icons/play-track.svg'
    onItemHover.classList.add('onItemHoverTrack')

    onItemHover.appendChild(onItemHoverImg)
    item.append(onItemHover)
    item.addEventListener('mouseenter', ()=> { onItemHover.style.display = 'block' })
    item.addEventListener('mouseleave', ()=> { onItemHover.style.display = 'none' })

    const song = songs[index]
    item.addEventListener('click', () => {
        if (item.classList.contains('track-active')) {
            togglePlay();
            return;
        }

        originalPlaylist = [...songs]; // Сохраняем оригинальный порядок
        currentPlaylistCover = null; 

        // ГЛОБАЛЬНЫЙ ШАФФЛ: Если кнопка включена, перемешиваем плейлист на лету
        if (isShuffled) {
            let shuffledList = [...songs];
            const clickedTrack = shuffledList[index];
            
            for (let m = shuffledList.length - 1; m > 0; m--) {
                const j = Math.floor(Math.random() * (m + 1));
                [shuffledList[m], shuffledList[j]] = [shuffledList[j], shuffledList[m]];
            }
            currentPlaylist = shuffledList;
            currentSongIndex = currentPlaylist.findIndex(s => s.title === clickedTrack.title);
        } else {
            currentPlaylist = songs; 
            currentSongIndex = index; 
        }
        
        updateSong(songs[index]);
        playSong_button.src = 'icons/pause-button.svg';
        audio.play();
    });
})


// СПИСОК ИСПОЛНИТЕЛЕЙ
const parentBlock = document.querySelector('.artists');

const fragment_artists = document.createDocumentFragment();

for (let i = 0; i < photos_artists.length; i++) {
    const newElement = document.createElement('div');
    const newImg = document.createElement('img');
    const newCard = document.createElement('div');
    newElement.textContent = photos_artists[i].text;
    newImg.src = photos_artists[i].photo;
    newCard.className = 'card';
    newImg.className = 'block_img';

    newCard.appendChild(newImg)
    newCard.appendChild(newElement)
    fragment_artists.appendChild(newCard);
}

parentBlock.append(fragment_artists);


// ОТКРЫТИЕ И ЗАКРЫТИЕ ПАНЕЛИ С ИСПОЛНИТЕЛЯМИ ПЕСНИ
const artist_click = document.querySelector('.artist-click')

const close_artist = document.querySelector('.close-artist')

songArtists.addEventListener('click', ()=> {
    artist_click.classList.add('active')
})

close_artist.addEventListener('click', ()=> {
    artist_click.classList.remove('active')
})


// ПРОФИЛЬ ИСПОЛНИТЕЛЯ
const card = document.querySelectorAll('.card')
const artistProfile = document.querySelector('.artist-profile')
const artistProfileImg = document.querySelector('.artist-profile-img')
const artistProfileName = document.querySelector('.artist-profile-name')
const singleImg = document.querySelectorAll('.single-img')
const singleTitle = document.querySelectorAll('.single-title')
const closeArtistProfile = document.querySelector('.close-artist-profile')

card.forEach(item => {
    item.addEventListener('click', ()=> {
        const proverka = item.textContent
        const checkList = photos_artists.find(artist => artist.text === proverka)

        if (checkList) {
            artistProfileImg.src = checkList.photo
            artistProfileName.textContent = checkList.text
            artistProfile.style.display = 'block'
        }

        appendSingle();
        appendAlbum();
    })
})

closeArtistProfile.addEventListener('click', ()=> {
    artistProfile.style.display = 'none'
})


// СИНГЛЫ В ПРОФИЛЕ ИСПОЛНИТЕЛЯ
const singlesGrid = document.querySelector('.singles-grid');

const fragment_singles = document.createDocumentFragment();

function appendSingle() {
    singlesGrid.innerHTML = '';
    let addedCount = 0; 
    const currentArtist = artistProfileName.textContent;
    for (const song of songs) {
        if (addedCount == 4) break; 

        let isTargetArtist = false;
        const artists = [];

        for (const key in song) {
            if (key.startsWith('artist') && song[key]) {
                artists.push(song[key]);
                if (song[key] === currentArtist) {
                    isTargetArtist = true; 
                }
            }
        }
        
        if (isTargetArtist) {
            const newSingle = document.createElement('div');
            const newSingleImg = document.createElement('img');
            const newSingleAbout = document.createElement('div');
            const newSingleTitle = document.createElement('div');
            const newSingleArtist = document.createElement('div');
            
            newSingle.classList.add('single-grid');
            newSingleImg.classList.add('single-img');
            newSingleAbout.classList.add('about-single');
            newSingleTitle.classList.add('single-title');
            newSingleArtist.classList.add('single-artist');
            newSingleImg.src = song.cover;
            newSingleTitle.textContent = song.title;
            newSingleArtist.textContent = artists.join(', ');

            newSingleAbout.appendChild(newSingleTitle);
            newSingleAbout.appendChild(newSingleArtist);
            newSingle.appendChild(newSingleImg);
            newSingle.appendChild(newSingleAbout);

            // Создаем элемент ховера заранее
            const profileSingleOnHover = document.createElement('div');
            const profileSingleOnHoverImg = document.createElement('img');

            profileSingleOnHover.classList.add('profileSingleOnHover');
            profileSingleOnHoverImg.src = 'icons/play-profile-single.svg'; 
            profileSingleOnHover.appendChild(profileSingleOnHoverImg);

            newSingle.addEventListener('mouseenter', () => {
                if (!newSingle.querySelector('.profileSingleOnHover')) {
                    newSingle.appendChild(profileSingleOnHover);
            }
            
            if (newSingle.classList.contains('track-active') && !audio.paused) {
                const img = newSingle.querySelector('.profileSingleOnHover img');
                if (img) img.src = 'icons/pause-profile-single.svg';
            } else {
                const img = newSingle.querySelector('.profileSingleOnHover img');
                if (img) img.src = 'icons/play-profile-single.svg';
            }
            });

            newSingle.addEventListener('mouseleave', () => {
                if (!newSingle.classList.contains('track-active')) {
                    const existHover = newSingle.querySelector('.profileSingleOnHover');
                    if (existHover) newSingle.removeChild(existHover);
                }
            });

            newSingle.addEventListener('click', () => {
                if (newSingle.classList.contains('track-active')) {
                    if (!audio.paused) { audio.pause(); } else { audio.play(); }
                    return;
                }
                
                let filterCount = 0;
                const filteredSingles = songs.filter(s => {
                    if (filterCount >= 4) return false; 

                    for (const key in s) {
                        if (key.startsWith('artist') && s[key] === artistProfileName.textContent) {
                            filterCount++;
                            return true;
                        }
                    }
                    return false;
                });

                originalPlaylist = [...filteredSingles];
                currentPlaylistCover = null;

                // ГЛОБАЛЬНЫЙ ШАФФЛ: подхватываем состояние кнопки
                if (isShuffled) {
                    let shuffledList = [...filteredSingles];
                    const targetIdx = filteredSingles.findIndex(s => s.title === song.title);
                    const clickedTrack = shuffledList[targetIdx];
                    
                    for (let m = shuffledList.length - 1; m > 0; m--) {
                        const j = Math.floor(Math.random() * (m + 1));
                        [shuffledList[m], shuffledList[j]] = [shuffledList[j], shuffledList[m]];
                    }
                    currentPlaylist = shuffledList;
                    currentSongIndex = currentPlaylist.findIndex(s => s.title === clickedTrack.title);
                } else {
                    currentPlaylist = filteredSingles; 
                    currentSongIndex = filteredSingles.findIndex(s => s.title === song.title);
                }

                updateSong(song);
                playSong_button.src = 'icons/pause-button.svg';
                audio.play();
            });
            fragment_singles.appendChild(newSingle);
            addedCount++; 
        }
    }
    singlesGrid.append(fragment_singles);
}


// ВСЕ СИНГЛЫ
const allSingleZagName = document.querySelector('.all-single-artist-name')
const allSinglesGrid = document.querySelector('.all-singles-grid-set');
const allSinglesGridFragment = document.createDocumentFragment();

function appendAllSingles() {
    allSinglesGrid.innerHTML = '';
    const currentArtist = artistProfileName.textContent;
    for (const song of songs) {
        const artists = [];
        let isTargetArtist = false;
            for (const key in song) {
            if (key.startsWith('artist') && song[key]) {
                artists.push(song[key]);
                if (song[key] === currentArtist) {
                    isTargetArtist = true; 
                }
            }
        }
        
        if (isTargetArtist) {
            const newGridAllSingle = document.createElement('div');
            const newGridAllSingleImg = document.createElement('img');
            const newGridAllSingleAbout = document.createElement('div');
            const newGridAllSingleTitle = document.createElement('div');
            const newGridAllSingleArtist = document.createElement('div');

            newGridAllSingle.classList.add('all-single-grid');
            newGridAllSingleImg.classList.add('all-single-grid-img');
            newGridAllSingleAbout.classList.add('all-single-grid-about');
            newGridAllSingleTitle.classList.add('all-single-grid-title');
            newGridAllSingleArtist.classList.add('all-single-grid-artist');

            allSingleZagName.textContent = currentArtist;
            newGridAllSingleImg.src = song.cover;
            newGridAllSingleTitle.textContent = song.title;
            newGridAllSingleArtist.textContent = artists.join(', ');

            newGridAllSingleAbout.appendChild(newGridAllSingleTitle);
            newGridAllSingleAbout.appendChild(newGridAllSingleArtist);
            newGridAllSingle.appendChild(newGridAllSingleImg);
            newGridAllSingle.appendChild(newGridAllSingleAbout);
            allSinglesGridFragment.appendChild(newGridAllSingle);

            // Создаем элемент ховера заранее
            const allSingleOnHover = document.createElement('div');
            const allSingleOnHoverImg = document.createElement('img');
            allSingleOnHover.classList.add('allSingleOnHover');
            allSingleOnHoverImg.src = 'icons/play-profile-single.svg'; 
            allSingleOnHover.appendChild(allSingleOnHoverImg);

            newGridAllSingle.addEventListener('mouseenter', () => {
                // ИСПРАВЛЕНО: Проверяем, не добавила ли уже функция updateSong этот блок в структуру карточки
                if (!newGridAllSingle.querySelector('.allSingleOnHover')) {
                    newGridAllSingle.appendChild(allSingleOnHover);
            }
            
            if (newGridAllSingle.classList.contains('track-active') && !audio.paused) {
                const img = newGridAllSingle.querySelector('.allSingleOnHover img');
                if (img) img.src = 'icons/pause-profile-single.svg';
            } else {
                const img = newGridAllSingle.querySelector('.allSingleOnHover img');
                if (img) img.src = 'icons/play-profile-single.svg';
            }
            });
            
            newGridAllSingle.addEventListener('mouseleave', () => {
            // Оставляем блок нетронутым только если этот трек прямо сейчас играет
                if (!newGridAllSingle.classList.contains('track-active')) {
                    const existHover = newGridAllSingle.querySelector('.allSingleOnHover');
                    if (existHover) newGridAllSingle.removeChild(existHover);
                    }
            });

            newGridAllSingle.addEventListener('click', () => {
            if (newGridAllSingle.classList.contains('track-active')) {
                if (!audio.paused) { audio.pause(); } else { audio.play(); }
                return;
            }

            const filteredSingles = songs.filter(s => {
                for (const key in s) {
                    if (key.startsWith('artist') && s[key] === currentArtist) return true;
                }
                return false;
            });

            originalPlaylist = [...filteredSingles];
            currentPlaylistCover = null;

            // ГЛОБАЛЬНЫЙ ШАФФЛ: подхватываем состояние кнопки
            if (isShuffled) {
                let shuffledList = [...filteredSingles];
                const targetIdx = filteredSingles.findIndex(s => s.title === song.title);
                const clickedTrack = shuffledList[targetIdx];
                
                for (let m = shuffledList.length - 1; m > 0; m--) {
                    const j = Math.floor(Math.random() * (m + 1));
                    [shuffledList[m], shuffledList[j]] = [shuffledList[j], shuffledList[m]];
                }
                currentPlaylist = shuffledList;
                currentSongIndex = currentPlaylist.findIndex(s => s.title === clickedTrack.title);
            } else {
                currentPlaylist = filteredSingles; 
                currentSongIndex = filteredSingles.findIndex(s => s.title === song.title);
            }

            updateSong(song);
            playSong_button.src = 'icons/pause-button.svg';
            audio.play();
            });
        }
    }
    allSinglesGrid.append(allSinglesGridFragment);
}


// МЕНЮ ВСЕ СИНГЛЫ
const checkSinglesButton = document.querySelector('.checkSingles')

const allSinglesMenu = document.querySelector('.all-single')

checkSinglesButton.addEventListener('click', ()=> {
    allSinglesMenu.style.display = 'block'
    appendAllSingles()
})

const singlesMenuClose = document.querySelector('.close-all-single')

singlesMenuClose.addEventListener('click', ()=> {
    allSinglesMenu.style.display = 'none'
})


// АЛЬБОМЫ В ПРОФИЛЕ
const alb = document.querySelector('.alb')
const sloy = document.querySelector('.sloy')

document.querySelector('.album-tracklist-close').addEventListener('click', ()=> {
    alb.style.display = 'none'
    sloy.style.display = 'none'
})


const albumsGrid = document.querySelector('.albums-grid')
const albumsOpenGrid = document.querySelector('.album-tracklist-grid')
const textProfileAlbums = document.querySelectorAll('.artist-profile-category-name')

function appendAlbum() {
    albumsGrid.innerHTML = ''; 
    const fragment_albums = document.createDocumentFragment();
    const currentArtist = artistProfileName.textContent;
    let addedCount = 0;
    
    for (const album of albums) {
        if (addedCount >= 3) break; 
        if (album.artists.includes(currentArtist)) {
            const newAlbum = document.createElement('div');
            const newAlbumImg = document.createElement('img');
            const newAlbumTitle = document.createElement('p');
            newAlbum.classList.add('album');
            newAlbumTitle.classList.add('album-name');
            
            newAlbumImg.src = album.cover;
            newAlbumTitle.textContent = album.title;
            newAlbum.appendChild(newAlbumImg);
            newAlbum.appendChild(newAlbumTitle);
            fragment_albums.appendChild(newAlbum);

            const albumOnHover = document.createElement('div')
            const albumOnHoverImg = document.createElement('img')
            albumOnHover.classList.add('albumOnHover')
            albumOnHoverImg.src = 'icons/play-album.svg'
            albumOnHover.appendChild(albumOnHoverImg)

            newAlbum.addEventListener('mouseenter', () => { newAlbum.appendChild(albumOnHover) })
            newAlbum.addEventListener('mouseleave', () => { newAlbum.removeChild(albumOnHover) }) 
            
            newAlbum.addEventListener('click', () => {
            albumsOpenGrid.innerHTML = ''; 
            document.querySelector('.album-cover').src = album.cover;
            document.querySelector('.album-tracklist-title').textContent = album.title;
            document.querySelector('.album-tracklist-artist').textContent = album.artists.join(', ');
            
            const albumTrackFragment = document.createDocumentFragment();
            const frozenSongs = [...album.songs]; 
            const frozenCover = album.cover;

            for (let i = 0; i < frozenSongs.length; i++) {
                const song = frozenSongs[i];
                const albumGrid = document.createElement('div');
                const albumGridImg = document.createElement('img');
                const albumGridAbout = document.createElement('div');
                const albumGridTitle = document.createElement('div');
                const albumGridArtist = document.createElement('div');
                    
                albumGrid.classList.add('album-grid');
                albumGridImg.classList.add('album-grid-img');
                albumGridAbout.classList.add('about-track-album');
                albumGridTitle.classList.add('album-track-title');
                albumGridArtist.classList.add('album-track-artist');
                    
                albumGridImg.src = frozenCover;
                albumGridTitle.textContent = song.title;
                albumGridArtist.textContent = song.artists.join(', ');
                    
                albumGridAbout.appendChild(albumGridTitle);
                albumGridAbout.appendChild(albumGridArtist);
                albumGrid.appendChild(albumGridImg);
                albumGrid.appendChild(albumGridAbout);

                albumGrid.addEventListener('click', () => {
                originalPlaylist = [...frozenSongs]; 
                currentPlaylistCover = frozenCover; 

                if (isShuffled) {
                    let shuffledList = [...frozenSongs];
                    const clickedTrack = shuffledList[i];
                        
                    for (let m = shuffledList.length - 1; m > 0; m--) {
                        const j = Math.floor(Math.random() * (m + 1));
                        [shuffledList[m], shuffledList[j]] = [shuffledList[j], shuffledList[m]];
                    }
                    currentPlaylist = shuffledList;
                    currentSongIndex = currentPlaylist.findIndex(s => s.title === clickedTrack.title);
                } else {
                    currentPlaylist = frozenSongs; 
                    currentSongIndex = i; 
                }
                    
                updateSong(song, frozenCover);
                playSong_button.src = 'icons/pause-button.svg';
                audio.play();
                });

                albumTrackFragment.appendChild(albumGrid);

                // ТРЕК В АЛЬБОМЕ ПРИ НАВЕДЕНИИ
                const albumGridOnHover = document.createElement('div')
                const albumGridOnHoverImg = document.createElement('img')
                albumGridOnHover.classList.add('albumTrackOnHover')
                albumGridOnHoverImg.src = 'icons/play-album.svg'
                albumGridOnHover.appendChild(albumGridOnHoverImg)

                albumGrid.addEventListener('mouseenter', ()=> {
                    albumGrid.appendChild(albumGridOnHover)
                })

                albumGrid.addEventListener('mouseleave', ()=> {
                    albumGrid.removeChild(albumGridOnHover)
                }) 
            }
            albumsOpenGrid.append(albumTrackFragment); 
            sloy.style.display = 'block';
            alb.style.display = 'block';
            });

            addedCount++;
        }
    }
    albumsGrid.append(fragment_albums);
    if (textProfileAlbums[1]) {
        if (addedCount === 0) {
            textProfileAlbums[1].style.display = 'none';
        } else {
            textProfileAlbums[1].style.display = 'flex';
        }
    }
}


// ВСЕ АЛЬБОМЫ
const allAlbumZagName = document.querySelector('.all-album-artist-name')
const allAlbumsGrid = document.querySelector('.all-albums-grid-set');
const allAlbumsGridFragment = document.createDocumentFragment();

function appendAllAlbums() {
    allAlbumsGrid.innerHTML = ''
    const currentArtist = artistProfileName.textContent;
    const allAlbumsGridFragment = document.createDocumentFragment();

    for (const album of albums) {
        if (album.artists.includes(currentArtist)) {
            albumsOpenGrid.innerHTML = ''; 

            const newGridAllAlbum = document.createElement('div')
            const newGridAllAlbumImg = document.createElement('img')
            const newGridAllAlbumTitle = document.createElement('div')

            newGridAllAlbum.classList.add('album')
            newGridAllAlbumImg.classList.add('all-album-grid-img')
            newGridAllAlbumTitle.classList.add('album-name')

            newGridAllAlbumImg.src = album.cover
            newGridAllAlbumTitle.textContent = album.title
            allAlbumZagName.textContent = artistProfileName.textContent

            newGridAllAlbum.appendChild(newGridAllAlbumImg)
            newGridAllAlbum.appendChild(newGridAllAlbumTitle)
            allAlbumsGridFragment.appendChild(newGridAllAlbum)
            
            newGridAllAlbum.addEventListener('click', () => {
                albumsOpenGrid.innerHTML = ''
                document.querySelector('.album-cover').src = album.cover;
                document.querySelector('.album-tracklist-title').textContent = album.title;
                document.querySelector('.album-tracklist-artist').textContent = album.artists.join(', ');
                
                const albumTrackFragment = document.createDocumentFragment();
                const frozenSongs = [...album.songs]; 
                const frozenCover = album.cover;
                
                for (let i = 0; i < frozenSongs.length; i++) {
                    const song = frozenSongs[i];
                    const albumGrid = document.createElement('div');
                    const albumGridImg = document.createElement('img');
                    const albumGridAbout = document.createElement('div');
                    const albumGridTitle = document.createElement('div');
                    const albumGridArtist = document.createElement('div');
                    
                    albumGrid.classList.add('album-grid');
                    albumGridImg.classList.add('album-grid-img');
                    albumGridAbout.classList.add('about-track-album');
                    albumGridTitle.classList.add('album-track-title');
                    albumGridArtist.classList.add('album-track-artist');
                    
                    albumGridImg.src = frozenCover;
                    albumGridTitle.textContent = song.title;
                    
                    if (song.artists && Array.isArray(song.artists)) {
                        albumGridArtist.textContent = song.artists.join(', ');
                    } else {
                        albumGridArtist.textContent = album.artists.join(', ');
                    }
                    
                    albumGridAbout.appendChild(albumGridTitle);
                    albumGridAbout.appendChild(albumGridArtist);
                    albumGrid.appendChild(albumGridImg);
                    albumGrid.appendChild(albumGridAbout);

                    // Сборка элемента ховера (ПО АНАЛОГИИ С APPENDSINGLE)
                    const albumGridOnHover = document.createElement('div')
                    const albumGridOnHoverImg = document.createElement('img')
                    albumGridOnHover.classList.add('albumTrackOnHover')
                    albumGridOnHoverImg.src = 'icons/play-album.svg' 
                    albumGridOnHover.appendChild(albumGridOnHoverImg)

                    // Если трек играет в момент открытия окна — сразу вшиваем ховер
                    if (currentPlaylist === frozenSongs && currentSongIndex === i) {
                        albumGrid.classList.add('track-active');
                        albumGridOnHoverImg.src = audio.paused ? 'icons/play-album.svg' : 'icons/pause-album.svg';
                        if (!albumGrid.querySelector('.albumTrackOnHover')) {
                            albumGrid.appendChild(albumGridOnHover);
                        }
                    }
                    
                    // НАВЕДЕНИЕ МЫШКИ (СТРОГО КАК В APPENDSINGLE С ПРОВЕРКОЙ НАЛИЧИЯ)
                    albumGrid.addEventListener('mouseenter', () => {
                        if (!albumGrid.querySelector('.albumTrackOnHover')) {
                            albumGrid.appendChild(albumGridOnHover);
                        }
                        const img = albumGrid.querySelector('.albumTrackOnHover img');
                        if (img) {
                            img.src = (albumGrid.classList.contains('track-active') && !audio.paused) 
                            ? 'icons/pause-album.svg' 
                            : 'icons/play-album.svg';
                        }
                    });
                    
                    // УХОД МЫШКИ
                    albumGrid.addEventListener('mouseleave', () => {
                        if (!albumGrid.classList.contains('track-active')) {
                            const existHover = albumGrid.querySelector('.albumTrackOnHover');
                            if (existHover) albumGrid.removeChild(existHover);
                        }
                    }); 

                    albumGrid.addEventListener('click', () => {
                        if (albumGrid.classList.contains('track-active')) {
                            if (!audio.paused) {
                                audio.pause();
                                const img = albumGrid.querySelector('.albumTrackOnHover img');
                                if (img) img.src = 'icons/play-album.svg';
                                playSong_button.src = 'icons/play-button.svg';
                            } else {
                                audio.play();
                                const img = albumGrid.querySelector('.albumTrackOnHover img');
                                if (img) img.src = 'icons/pause-album.svg';
                                playSong_button.src = 'icons/pause-button.svg';
                            }
                            return;
                        }

                        originalPlaylist = [...frozenSongs]; 
                        currentPlaylistCover = frozenCover; 

                        if (isShuffled) {
                            // Режим перемешивания активен: создаем случайный порядок
                            let shuffledList = [...frozenSongs];
                            const clickedTrack = shuffledList[i];
                            
                            for (let m = shuffledList.length - 1; m > 0; m--) {
                                const j = Math.floor(Math.random() * (m + 1));
                                [shuffledList[m], shuffledList[j]] = [shuffledList[j], shuffledList[m]];
                            }
                            currentPlaylist = shuffledList;
                            // Находим, каким по счету стал наш трек в перемешанном списке
                            currentSongIndex = currentPlaylist.findIndex(s => s.title === clickedTrack.title);
                        } else {
                            // Режим перемешивания выключен: играем треки по порядку
                            currentPlaylist = frozenSongs; 
                            currentSongIndex = i; 
                        }

                        // Очищаем старую активность со всех треков текущего альбома перед переключением
                        document.querySelectorAll('.album-grid').forEach(t => {
                            t.classList.remove('track-active');
                            const oldHover = t.querySelector('.albumTrackOnHover');
                            if (oldHover && !t.matches(':hover')) t.removeChild(oldHover);
                        });

                        albumGrid.classList.add('track-active');
                        if (!albumGrid.querySelector('.albumTrackOnHover')) {
                            albumGrid.appendChild(albumGridOnHover);
                        }
                        const currentImg = albumGrid.querySelector('.albumTrackOnHover img');
                        if (currentImg) currentImg.src = 'icons/pause-album.svg';
                        
                        updateSong(song, frozenCover);
                        playSong_button.src = 'icons/pause-button.svg';
                        audio.play();
                    });

                    albumTrackFragment.appendChild(albumGrid);
                }
                
                albumsOpenGrid.append(albumTrackFragment); 
                
                if (sloy) { sloy.style.display = 'block'; sloy.style.zIndex = '2000'; }
                if (alb) { alb.style.display = 'block'; alb.style.zIndex = '2001'; }
            });

            // АЛЬБОМ В МЕНЮ ПРИ НАВЕДЕНИИ
            const albumOnHover = document.createElement('div')
            const albumOnHoverImg = document.createElement('img')
            albumOnHover.classList.add('albumOnHover')
            albumOnHoverImg.src = 'icons/play-album.svg'
            albumOnHover.appendChild(albumOnHoverImg)

            newGridAllAlbum.addEventListener('mouseenter', ()=> {
                newGridAllAlbum.appendChild(albumOnHover)
            })
            
            newGridAllAlbum.addEventListener('mouseleave', ()=> {
                newGridAllAlbum.removeChild(albumOnHover)
            }) 
        }
    }
    allAlbumsGrid.append(allAlbumsGridFragment)
}

document.querySelector('.album-tracklist-close').addEventListener('click', ()=> {
    alb.style.display = 'none'
    sloy.style.display = 'none'
    // СБРОС СЛОЕВ
    if (sloy) sloy.style.zIndex = '';
    if (alb) alb.style.zIndex = '';
})


// МЕНЮ С АЛЬБОМАМИ
const allAlbumsMenu = document.querySelector('.all-album')
const closeAllAlbumsMenu = document.querySelector('.close-all-album')
const checkAlbums = document.querySelector('.checkAlbums')

checkAlbums.addEventListener('click', ()=> {
    allAlbumsMenu.style.display = 'block'
    appendAllAlbums()
})

closeAllAlbumsMenu.addEventListener('click', ()=> {
    allAlbumsMenu.style.display = 'none'
})


// СЛЕДУЮЩАЯ ПЕСНЯ
function nextSong() {
    if (currentSongIndex >= currentPlaylist.length - 1) {
        if (audio.ended) {
            playSong_button.src = 'icons/play-button.svg';
            if (miniPlayBtn) miniPlayBtn.src = 'icons/play-button.svg';
        }
        return;
    } else {
        currentSongIndex++;
    }

    // Принудительно удаляем зависшие блоки ховеров, где нет курсора мыши
    document.querySelectorAll('.all-single-grid, .single-grid').forEach(t => {
        if (!t.matches(':hover')) {
            const h1 = t.querySelector('.allSingleOnHover');
            if (h1) t.removeChild(h1);
            const h2 = t.querySelector('.profileSingleOnHover');
            if (h2) t.removeChild(h2);
        }
    });

    playSong_button.src = 'icons/pause-button.svg';
    if (miniPlayBtn) miniPlayBtn.src = 'icons/pause-button.svg';
    
    updateSong(currentPlaylist[currentSongIndex], currentPlaylistCover);
    audio.play();
}

// ПРЕДЫДУЩИЙ ТРЕК
function prevSong() {
    if (currentSongIndex === 0) {
        audio.currentTime = 0;
        return;
    }

    if (audio.currentTime < 5) {
        document.querySelectorAll('.all-single-grid, .single-grid').forEach(t => {
        if (!t.matches(':hover')) {
            const h1 = t.querySelector('.allSingleOnHover');
            if (h1) t.removeChild(h1);
            const h2 = t.querySelector('.profileSingleOnHover');
            if (h2) t.removeChild(h2);
            const h3 = t.querySelector('.albumTrackOnHover');
            if (h3) t.removeChild(h3);
        }
        });

        currentSongIndex--;
        
        // Синхронизируем иконки плеера на паузу
        playSong_button.src = 'icons/pause-button.svg';
        if (miniPlayBtn) miniPlayBtn.src = 'icons/pause-button.svg';

        updateSong(currentPlaylist[currentSongIndex], currentPlaylistCover);
        audio.play();
    } else {
        audio.currentTime = 0;
        audio.play();
    }
}

nextSong_button.addEventListener('click', nextSong)
prevSong_button.addEventListener('click', prevSong)


// ПЕРЕКЛЮЧЕНИЕ МЕЖДУ БЛОКАМИ
const buttons = document.querySelectorAll('.panel_btn')
const blocks = document.querySelectorAll('.block')
const playlist = document.querySelector('.playlist')

for (let i = 0; i < blocks.length; i++) {
    buttons[i].addEventListener('click', ()=> {
    blocks.forEach(block => {
    block.style.display = 'none'
    artist_click.classList.remove('active')
    blocks[i].style.display = 'block'
    artistProfile.style.display = 'none'
    alb.style.display = 'none'
    sloy.style.display = 'none'
    document.querySelector('.all-single').style.display = 'none'
    document.querySelector('.all-album').style.display = 'none'
    })

    // Логика отображения мини-плеера: скрываем на 1-й вкладке (Большой плеер, i === 0)
    if (i === 0) {
        miniPlayer.style.display = 'none';
    } else {
        if (audio.src) miniPlayer.style.display = 'block';
    }
    })
}


// ОБРАБОТЧИК КНОПКИ MIX
mixSong_button.addEventListener('click', () => {
    if (currentPlaylist.length <= 1) return; // Если в плейлисте 1 трек или пусто — не перемешиваем

    // Переключаем логическое состояние перемешивания (вкл/выкл)
    isShuffled = !isShuffled;

    // Находим все кнопки перемешивания на странице (в главном плеере и в мини-плеере)
    const allMixButtons = document.querySelectorAll('.mix_songs_button');

    if (isShuffled) {
        // === 1. РЕЖИМ ПЕРЕМЕШИВАНИЯ ВКЛЮЧЕН ===
        // Запоминаем песню, которая играет прямо сейчас, чтобы не сбить воспроизведение
        const currentTrack = currentPlaylist[currentSongIndex];

        // Алгоритм Фишера-Йетса: создаем хаотичный порядок внутри текущего запущенного списка
        for (let i = currentPlaylist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentPlaylist[i], currentPlaylist[j]] = [currentPlaylist[j], currentPlaylist[i]];
        }

        // Находим, под каким новым индексом наша песню оказалась в перемешанном массиве
        currentSongIndex = currentPlaylist.findIndex(s => s.title === currentTrack.title);

        // Синхронно подсвечиваем и меняем иконки на активные у ВСЕХ кнопок mix на странице
        allMixButtons.forEach(item => {
            item.classList.add('shuffled-active');
            if (item.src && item.src.includes('mix-button.svg')) {
                item.src = 'icons/mix-button-active.svg';
            }
        });

    } else {
        // === 2. РЕЖИМ ПЕРЕМЕШИВАНИЯ ВЫКЛЮЧЕН ===
        // Запоминаем текущую песню перед тем, как вернуть исходный порядок списка
        const currentTrack = currentPlaylist[currentSongIndex];

        // Полностью восстанавливаем исходный ordered-порядок треков из originalPlaylist
        currentPlaylist = [...originalPlaylist];

        // Возвращаем правильный индекс текущей песни в восстановленном списке
        currentSongIndex = currentPlaylist.findIndex(s => s.title === currentTrack.title);

        // Убираем подсветку и возвращаем дефолтные иконки у ВСЕХ кнопок mix
        allMixButtons.forEach(item => {
            item.classList.remove('shuffled-active');
            if (item.src && item.src.includes('mix-button-active.svg')) {
                item.src = 'icons/mix-button.svg';
            }
        });
    }
});


// СИНХРОНИЗАЦИЯ КНОПОК МИНИ-ПЛЕЕРА С БОЛЬШИМ ПЛЕЕРОМ
if (miniPlayBtn) miniPlayBtn.addEventListener('click', (e) => { e.stopPropagation(); playSong_button.click(); });
if (miniNextBtn) miniNextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextSong_button.click(); });
if (miniPrevBtn) miniPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevSong_button.click(); });
if (miniMixBtn) miniMixBtn.addEventListener('click', (e) => { e.stopPropagation(); mixSong_button.click(); });
if (miniRepeatBtn) miniRepeatBtn.addEventListener('click', (e) => { e.stopPropagation(); repeatSong_button.click(); });
if (miniVolumeBtn) miniVolumeBtn.addEventListener('click', (e) => { e.stopPropagation(); volume_play_button.click(); });


// СИНХРОНИЗАЦИЯ ИКОНОК И СОСТОЯНИЙ ПРИ ИЗМЕНЕНИИ КЛАССОВ И ПОТОКА
audio.addEventListener('play', () => {
    playSong_button.src = 'icons/pause-button.svg';
    if (miniPlayBtn) miniPlayBtn.src = 'icons/pause-button.svg';
    
    const trackActive = document.querySelector('.track.track-active .onItemHoverTrack img');
    if (trackActive) trackActive.src = 'icons/pause-track.svg';
    
    // Обновление иконки паузы для окон альбомов (и из профиля, и из меню всех альбомов)
    const albumActive = document.querySelector('.album-grid.track-active .albumTrackOnHover img');
    if (albumActive) albumActive.src = 'icons/pause-album.svg';
    
    const singleActive = document.querySelector('.single-grid.track-active .profileSingleOnHover img');
    if (singleActive) singleActive.src = 'icons/pause-profile-single.svg';
    
    const allSingleActive = document.querySelector('.all-single-grid.track-active .allSingleOnHover img');
    if (allSingleActive) allSingleActive.src = 'icons/pause-profile-single.svg';
});


audio.addEventListener('pause', () => {
    playSong_button.src = 'icons/play-button.svg';
    if (miniPlayBtn) miniPlayBtn.src = 'icons/play-button.svg';
    
    const trackActive = document.querySelector('.track.track-active .onItemHoverTrack img');
    if (trackActive) trackActive.src = 'icons/play-track.svg';
    
    // Обновление иконки плей для окон альбомов (и из профиля, и из меню всех альбомов)
    const albumActive = document.querySelector('.album-grid.track-active .albumTrackOnHover img');
    if (albumActive) albumActive.src = 'icons/play-album.svg';
    
    const singleActive = document.querySelector('.single-grid.track-active .profileSingleOnHover img');
    if (singleActive) singleActive.src = 'icons/play-profile-single.svg';
    
    const allSingleActive = document.querySelector('.all-single-grid.track-active .allSingleOnHover img');
    if (allSingleActive) allSingleActive.src = 'icons/play-profile-single.svg';
});


// Дополнительное обновление прогресса и таймеров для мини-плеера в фоне
function moveMiniProgress() {
    if (!audio.paused) {
        if (miniProgress) miniProgress.value = audio.currentTime;
        if (miniCurrentTime) miniCurrentTime.innerHTML = sToStr(Math.round(audio.currentTime));
        if (miniDuration) miniDuration.innerHTML = sToStr(Math.round(audio.duration));
    }
}
setInterval(moveMiniProgress, 1000);


if (miniProgress) {
    // --- ДОБАВЛЕНО: Блокируем клик на самом ползунке, чтобы не открывался большой плеер ---
        miniProgress.addEventListener('click', function(e) {
        e.stopPropagation(); 
    });

    // Добавляем параметр (e) в функцию
    miniProgress.addEventListener('change', function(e) {
        e.stopPropagation(); // <-- ДОБАВЛЕНО: останавливаем всплытие клика к miniPlayer
        audio.currentTime = miniProgress.value;
    });
    
    // Также добавим блокировку на событие input (когда ползунок тащат мышкой)
        miniProgress.addEventListener('input', function(e) {
        e.stopPropagation(); // <-- ДОБАВЛЕНО: предотвращает открытие плеера в процессе перетаскивания
    });
}


// СИСТЕМНОЕ СОБЫТИЕ ОКОНЧАНИЯ ТРЕКА
audio.addEventListener('ended', () => {
    if (isRepeated) {
        // Если функция повтора активна — просто сбрасываем время на 0 и запускаем песню заново
        audio.currentTime = 0;
        audio.play();
    } else {
        // Если повтор выключен — запускаем стандартный переход к следующей песне плейлиста
        nextSong();
    }
});


// ОБРАБОТЧИК КНОПКИ ПОВТОРА ТРЕКА
repeatSong_button.addEventListener('click', () => {
    // Переключаем логическое состояние (вкл/выкл)
    isRepeated = !isRepeated;

    // Находим все кнопки повтора на странице (в главном плеере и в мини-плеере)
    const allRepeatButtons = document.querySelectorAll('.repeat_song_button');

    allRepeatButtons.forEach(item => {
        if (isRepeated) {
        item.classList.add('repeat-active');
        
        // ИСПРАВЛЕНО: Проверяем реальное название файла repeat-button или дефолтное loop-button
        if (item.src && (item.src.includes('repeat-button.svg') || item.src.includes('loop-button.svg'))) {
            item.src = item.src.includes('repeat-button.svg') ? 'icons/repeat-button-active.svg' : 'icons/loop-button-active.svg';
        }
        } else {
        item.classList.remove('repeat-active');
        
        if (item.src && (item.src.includes('repeat-button-active.svg') || item.src.includes('loop-button-active.svg'))) {
            item.src = item.src.includes('repeat-button-active.svg') ? 'icons/repeat-button.svg' : 'icons/loop-button.svg';
        }
        }
    });
});













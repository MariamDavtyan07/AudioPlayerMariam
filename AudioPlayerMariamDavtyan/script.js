let data = {
    title: [
        "Shape of my heart",
        "Ov khandipi",
        "If you go",
        "Last chance to love",
        "Daisy",
        "Mon Amour"],
    song: [
        "songs/Sting - Shape Of My Heart (11).mp3",
        "songs/PROJECT LA feat. Gor Sujyan - Ov Khandipi (Eghishe Charents) 2018.mp3", ,
        "Nemra - If you go (www.mp3erger.ru) 2023.mp3",
        "songs/Nemra_-_Last_chance_to_love_76972100.mp3",
        "songs/2e849b6a74592e9a96506acec6b3587c_nemra-daisy.mp3",
        "songs/Slimane - Mon Amour (1).mp3"],
    poster: [
        "https://upload.wikimedia.org/wikipedia/it/a/a2/Shape_of_My_Heart_%28Sting%29.png",
        "https://i.ytimg.com/vi/lYx1A2cDus0/maxresdefault.jpg",
        "https://i.ytimg.com/vi/8Gy2ZDGLteQ/sddefault.jpg",
        "https://i.ytimg.com/vi/m9eK8vtNtS0/sddefault.jpg",
        "https://i.ytimg.com/vi/iIdCJUBb0_Q/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/it/0/08/Slimane_-_Mon_Amour.png"
    ],
}

let song = new Audio()
window.onload = function(){
    playSong()
}
let currentSong = 0
function playSong(){
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    song.play()
}
function playOrPauseSong(){
    let play = document.getElementById("play")
    if(song.paused){
        song.play()
        play.src = "images/pause.png"

    }else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }

}

song.addEventListener("timeupdate",function(){
    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime/song.duration
    fill[0].style.marginLeft = position * 99 + "%"

    
})
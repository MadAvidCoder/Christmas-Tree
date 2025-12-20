const date = new Date();
const days = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const ornamentImg = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.webp", "15.png","16.webp", "17.webp", "18.png"];
const stars = ["⭐", "🛠️", "💫", "💖", "🎄", "😸️", "🚀", "🔌"];


function changeStar(){
    let randomIndex = Math.floor(Math.random() * 8 );
    document.getElementById("star").innerText = stars[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const decorations = document.getElementById("decorations");
    const dateText = document.getElementById("date");
    const star = document.getElementById("star");
    dateText.innerText = days + "/" + month + "/" + year;

    if(month === 12){
        let daysTilChristmas = Math.max(25-days,0);

        for(let i = 0; i < daysTilChristmas; i++){
            const randomImg= ornamentImg[Math.floor(Math.random()*18)]
            decorations.innerHTML += `<img src="img/ornaments/${randomImg}" class="ornament" id="ornament${i}">`;
            const ornament = document.getElementById("ornament"+i);
            ornament.style.width = (Math.random() * 1.7 + 1) + "rem";
            ornament.style.left = (Math.random() * 40 + 30) + "%"
            ornament.style.top = (Math.random() * 10 + 6) + "rem"
        }
    }

    star.addEventListener('click', changeStar);

    document.getElementById("tree").addEventListener("click", () => {
        alert("🎄 Happy Haxmas! 🎄");
        if(month === 12){
            let daysTilChristmas = Math.max(25-days,0);
            decorations.innerHTML = ``

            for(let i = 0; i < daysTilChristmas; i++){
                const randomImg= ornamentImg[Math.floor(Math.random()*18)]
                decorations.innerHTML += `<img src="img/ornaments/${randomImg}" class="ornament" id="ornament${i}">`;
                const ornament = document.getElementById("ornament"+i);
                ornament.style.width = (Math.random() * 1.7 + 1) + "rem";
                ornament.style.left = (Math.random() * 40 + 30) + "%"
                ornament.style.top = (Math.random() * 10 + 6) + "rem"
            }
        }
    });
});
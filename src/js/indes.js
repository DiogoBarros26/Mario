const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video");
const modal = document.querySelector(".modal");

function alternado(){modal.classList.toggle("aberto") 

}

botaoTrailer.addEventListener("click", ()=> {
    alternado();
});

botaoFecharModal.addEventListener("click", ()=> {
    alternado();
    video.setAttribute("src", "")
    video.setAttribute("src", 
    "https://www.youtube.com/embed/Cb4WV4aXBpk")
});     
function publicacao() {
  if (publiid.onclick != null) {
    let ate = document.getElementById("publipostid");
    let tela = document.getElementById("ateee");
    tela.style.display = "none";
    ate.style.display = "block";
     // underline
     let publiid = document.getElementById("publiid")
     let curti = document.getElementById("curti")
     publiid.classList.add("active")  
     curti.classList.remove("active")  
  }
}

function likepost() {
  if (curti.onclick != null) {
    let ate = document.getElementById("publipostid");
    let tela = document.getElementById("ateee");
    tela.style.display = "block";
    ate.style.display = "none";
    // underline
    let publiid = document.getElementById("publiid")
    let curti = document.getElementById("curti")
    publiid.classList.remove("active")  
    curti.classList.add("active")  
  }
}

function ajusteposicao() {
  if (curti.onclick != true) {
    let telaa = document.getElementById("ateee");
    telaa.style.left = Math.random() * window.innerWidth + "100px";
    telaa.style.top = Math.random() * window.innerHeight + "px";
  }
}

const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
 
});



/* if (Cowboyforg != false) {
  const name = document.getElementById("Cowboyforg");
  name.style.color = "black";
} */
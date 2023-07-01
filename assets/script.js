// Sélecteurs
let arrow_left = document.querySelector(".arrow_left");
let arrow_right = document.querySelector(".arrow_right");
let banner_img = document.querySelector(".banner-img");
let tagLine = document.querySelector("#banner p");


// Index de la slide actuelle
let currentslide_index = 0;


// Tableau de nos slides

const slides = [
  {
    "image": "./assets/images/slideshow/slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "./assets/images/slideshow/slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "./assets/images/slideshow/slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "./assets/images/slideshow/slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
]





// Fonction pour afficher la slide actuelle
function afficher_slide() { //va chercher dans le tableau les éléments de chaque slides par index
  banner_img.src = slides[currentslide_index].image;
  tagLine.innerHTML = slides[currentslide_index].tagLine;


}



function afficher_points(){
  let points = document.querySelector(".dots");


  for(const slide in slides){ // for in affiche l'index avec console log et for of la valeur
    const point = document.createElement("div");
    point.setAttribute("id", "dot_"+slide);
    point.classList.add("dot");
    if(slide==0){ // au chargement de la page
      point.classList.add("dot_selected");
    }

    points.appendChild(point); // ajoute un enfant point à points

    /* console.log(slide); */
  }
}


function changer_point(){
  
  const point_selected = document.querySelector(".dot_selected");
  point_selected.classList.remove("dot_selected");

  const point = document.getElementById("dot_"+currentslide_index);
  point.classList.add("dot_selected");
}

afficher_points();
afficher_slide();


// Événement pour passer à la slide précédente
arrow_left.addEventListener('click', function () {
  currentslide_index--; //incrémente de -1
  if (currentslide_index < 0) { //revient à la fin si 1ere slide
    currentslide_index = slides.length - 1;
  }
  afficher_slide(); //retourne une la fonction d'affichage correspondant aux modifs de l'algo
  changer_point();
});

// Événement pour passer à la slide suivante
arrow_right.addEventListener('click', function () {
  currentslide_index++; //incrémente de +1
  if (currentslide_index >= slides.length) { //revient au début si dernière slide
    currentslide_index = 0;
  }
  afficher_slide(); //retourne une la fonction d'affichage correspondant aux modifs de l'algo
  changer_point();
});

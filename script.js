console.log("Bienvenue sur le site Courons Ensemble !");

// Permet de changer l'image de fond dynamiquement
function changeBackground(url) {
  const bg = document.querySelector('.background');
  if(bg) bg.style.backgroundImage = `url('${url}')`;
}

// Exemple d'utilisation si tu veux éditer via la console du navigateur :
// changeBackground('https://adresse.com/ton-image.jpg');

// Pour enrichir, ajouter ici d'autres scripts (animations, formulaire, etc.).

document.getElementById('welcomeButton').addEventListener('click', function() {
 document.getElementById('welcomeMessage').textContent = 'Nous sommes ravis de vous 
accueillir sur le site dédié à l\'EPO. Explorez nos programmes et nos initiatives!';
});

document.addEventListener("DOMContentLoaded", () => {
 const images = document.querySelectorAll("#galerie img");
 images.forEach(image => {
 image.addEventListener("click", () => {
 alert("Vous avez cliqué sur une image !");
 });
 });
});

document.addEventListener('DOMContentLoaded', function() {
 console.log('Bienvenue dans la section FAQ de l\'École Polytechnique de Ouagadougou!');
});

        // // Le mot à afficher
        // const mot = "Hello ,Je m'apelle Tahina";

        // // La durée entre chaque lettre en millisecondes
        // const intervalle = 100;

        // // L'élément où le mot sera affiché
        // const affichage = document.getElementById("affichage");

        // // L'index de la lettre actuelle
        // let index = 0;

        // // Indicateur pour savoir si on ajoute ou retire des lettres
        // let ajout = true;

        // // La fonction qui affiche ou retire une lettre à la fois
        // function machineAEcrire() {
        //     if (ajout) {
        //         if (index < mot.length) {
        //             affichage.textContent += mot[index];
        //             index++;
        //         } else {
        //             ajout = false;
        //             setTimeout(machineAEcrire, intervalle); // Pause avant de commencer à retirer des lettres
        //             return;
        //         }
        //     } else {
        //         if (index > 0) {
        //             affichage.textContent = mot.slice(0, index - 1);
        //             index--;
        //         } else {
        //             ajout = true;
        //             setTimeout(machineAEcrire, intervalle); // Pause avant de recommencer à ajouter des lettres
        //             return;
        //         }
        //     }
        //     setTimeout(machineAEcrire, intervalle);
        // }

        // // Démarrer l'affichage des lettres
        // machineAEcrire();
      
        // Les mots à afficher
        const mots = ["Hello, Bienvenue dans mon portfolio ", "Je m'appelle Tahina."];
        
        // La durée entre chaque lettre en millisecondes
        const intervalle = 100;
        
        // L'élément où les mots seront affichés
        const affichage = document.getElementById("affichage");
        
        // L'index du mot actuel
        let motIndex = 0;
        
        // L'index de la lettre actuelle
        let lettreIndex = 0;
        
        // Indicateur pour savoir si on ajoute ou retire des lettres
        let ajout = true;
        
        // La fonction qui affiche ou retire une lettre à la fois
        function machineAEcrire() {
            const mot = mots[motIndex];
            
            if (ajout) {
                if (lettreIndex < mot.length) {
                    affichage.textContent += mot[lettreIndex];
                    lettreIndex++;
                } else {
                    ajout = false;
                    setTimeout(machineAEcrire, intervalle); // Pause avant de commencer à retirer des lettres
                    return;
                }
            } else {
                if (lettreIndex > 0) {
                    affichage.textContent = mot.slice(0, lettreIndex - 1);
                    lettreIndex--;
                } else {
                    ajout = true;
                    motIndex = (motIndex + 1) % mots.length; // Passe au mot suivant
                    setTimeout(machineAEcrire, intervalle); // Pause avant de recommencer à ajouter des lettres
                    return;
                }
            }
            setTimeout(machineAEcrire, intervalle);
        }
        
        // Démarrer l'affichage des lettres
        machineAEcrire();
   
    //jeu Pacman
    const img = document.getElementById('animatedImage');
    let posX = 0;
    let posY = 0;
    const step = 2;
    let direction = 'right';

    function moveImage() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        switch (direction) {
            case 'right':
                posX += step;
                if (posX >= width - img.width) {
                    direction = 'down';
                }
                break;
            case 'down':
                posY += step;
                if (posY >= height - img.height) {
                    direction = 'left';
                }
                break;
            case 'left':
                posX -= step;
                if (posX <= 0) {
                    direction = 'up';
                }
                break;
            case 'up':
                posY -= step;
                if (posY <= 0) {
                    direction = 'right';
                }
                break;
        }

        img.style.left = posX + 'px';
        img.style.top = posY + 'px';
        requestAnimationFrame(moveImage);
    }

    moveImage();
   
function surprise(){
    alert('Pas de surprise !!! hahaha . Cliquez trois fois sur la deuxieme boite.')
}   

// let clickCount = 0;
// let isNegative = false;

// const cube = document.getElementById('cube');
// const star = document.getElementById('star');

// cube.addEventListener('click', () => {
//     clickCount++;
//     if (clickCount === 3) {
//         star.classList.add('show');
//     }
// });

// star.addEventListener('click', () => {
//     isNegative = !isNegative;
//     if (isNegative) {
//         document.body.style.filter = 'invert(1)';
//     } else {
//         document.body.style.filter = 'invert(0)';
//     }
// });

let clickCount = 0;
let isNegative = false;

const cube = document.getElementById('cube');
const star = document.getElementById('star');

cube.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 3) {
        showStar();
    // if(clickCount === 3){
    //     alert('Cette univers a fais quelques dégat sur certains contenus du page Sorry guys.')
    // }
    }
});

function showStar() {
    star.classList.add('show');
    setTimeout(() => {
        star.classList.remove('show');
        star.classList.add('hide');
    }, 7000); // 7 secondes
};
star.addEventListener('click', () => {
    alert('Cet univers a fait quelques dégâts sur certains contenus de la page. Rafraîchissez la page si vous êtes coincé dans le monde négatif."Sorry guys.');
});

star.addEventListener('transitionend', () => {
    if (star.classList.contains('hide')) {
        star.classList.remove('hide');
    }
});

star.addEventListener('click', () => {
    isNegative = !isNegative;
    if (isNegative) {
        document.body.style.filter = 'invert(1)';
    } else {
        document.body.style.filter = 'invert(0)';
    }
});

window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});


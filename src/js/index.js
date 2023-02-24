// By moi
// Sélectionne l'élément HTML avec la classe "gallery" et le stocke dans une variable
const gridContainer = document.querySelector('.gallery');

// Sélectionne l'élément HTML avec la classe "intersection-watcher" et le stocke dans une variable
const watcher = document.querySelector('.intersection-watcher');

// Initialise deux variables pour compter le nombre d'images chargées et affichées respectivement
let x = 0;
let y = 0;

// Initialise une variable pour déterminer le nombre d'images à charger à chaque intersection de l'observateur d'intersection
let nb_charge_img = 10;

// Définit la fonction de rappel qui sera exécutée lorsque l'observateur d'intersection détecte une intersection avec l'élément observé
const handleIntersect = entrie => 
{
    // Vérifie si l'élément observé est en intersection avec la zone d'affichage
    if (entrie[0].isIntersecting)
    {
        // Charge le nombre d'images spécifié dans la variable "nb_charge_img"
        for(i = 0; i < nb_charge_img ; i++)
        {
            // Incrémente la variable "x" pour générer un nouveau nombre aléatoire à utiliser dans l'URL de l'image
            x++;

            // Crée un nouvel élément HTML de type "div" pour contenir l'image
            const card = document.createElement('div');

            // Insère l'image aléatoire dans la balise "img" de la "card" nouvellement créée
            card.innerHTML = `<li><img src="https://picsum.photos/0/0?random=${x+y}"></li>`;

            // Ajoute la "card" à la galerie
            gridContainer.appendChild(card);

            // Vérifie si le nombre maximal d'images horizontales a été atteint (dans cet exemple, 7 images)
            if(x == 7){
                // Ajoute le nombre d'images chargées à la variable "y" pour décaler la génération de nouveaux nombres aléatoires
                y += nb_charge_img;
                // Réinitialise la variable "x" pour commencer à générer de nouveaux nombres aléatoires pour la prochaine rangée d'images
                x = 0;
            }
        }
    }
}

// Crée un nouvel observateur d'intersection et l'attache à l'élément "watcher". La fonction "handleIntersect" sera exécutée chaque fois que l'observateur détecte une intersection.
new IntersectionObserver(handleIntersect).observe(watcher);

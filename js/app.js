    // GESTION DU MENU BURGER MOBILE
   
    // Attendre que tout le document HTML soit complètement chargé
    document.addEventListener('DOMContentLoaded', function() {

        // Sélection des éléments dans le DOM grâce à leurs ID
        const boutonBurger = document.getElementById('bouton-menu-mobile');
        const menuNavigation = document.getElementById('menu-navigation');
        const liensNavigation = document.querySelectorAll('.lien-navigation');

        // Vérifier que le bouton burger existe sur la page
        if (boutonBurger && menuNavigation) {

            // Écouter le clic sur le bouton burger
            boutonBurger.addEventListener('click', function() {
                // Ajoute ou enlève la classe 'actif' sur le menu (ouvre/ferme le menu)
                menuNavigation.classList.toggle('actif');
            });

            // Fermer automatiquement le menu mobile lorsqu'on clique sur un lien du menu
            liensNavigation.forEach(function(lien) {
                lien.addEventListener('click', function() {
                    menuNavigation.classList.remove('actif');
                });
            });
        }
    });



    // VALIDATION DU FORMULAIRE DE CONTACT
        

        // Récupération du formulaire et de la zone de message
        const formulaire = document.getElementById('formulaire-contact');
        const messageRetour = document.getElementById('message-retour');

        if (formulaire) {
            // Écouter le moment où l'utilisateur clique sur "Envoyer le message"
            formulaire.addEventListener('submit', function(evenement) {

                // Empêcher la page de se recharger automatiquement
                evenement.preventDefault();

                // Récupérer la valeur tapée dans chaque champ
                const nom = document.getElementById('nom').value.trim();
                const email = document.getElementById('email').value.trim();
                const typeIntervention = document.getElementById('type-intervention').value;
                const message = document.getElementById('message').value.trim();

                // VÉRIFICATION 1 : Est-ce qu'un champ est vide ? 
                if (nom === '' || email === '' || typeIntervention === '' || message === '') {
                    // Afficher le message d'erreur en rouge
                    messageRetour.className = 'message-retour erreur';
                    messageRetour.textContent = 'Veuillez remplir tous les champs obligatoires.';
                   return; 
               }

               // VÉRIFICATION 2 : Est-ce que l'email contient un '@' ? 
               if (!email.includes('@')) {
                   // Afficher l'erreur email en rouge
                   messageRetour.className = 'message-retour erreur';
                   messageRetour.textContent = 'Veuillez entrer une adresse email valide (avec un @).';
                    return; 
                }

                // SI TOUT EST CORRECT : Afficher le succès en vert !
                messageRetour.className = 'message-retour succes';
                messageRetour.textContent = 'Merci ' + nom + ' ! Votre message a été envoyé avec succès.';

                // Vider les champs du formulaire après l'envoi
                formulaire.reset();
            });
        }

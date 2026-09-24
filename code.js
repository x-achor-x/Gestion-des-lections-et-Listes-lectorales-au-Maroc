const	prompt = require ("prompt-sync")();

/*
const couleurs =
{
  reset: "\x1b[0m",     // Arrête la couleur, retour à la normale
  rouge: "\x1b[31m",    // Pour les erreurs
  vert: "\x1b[32m",     // Pour les succès
  jaune: "\x1b[33m",    // Pour les avertissements ou les menus
  bleu: "\x1b[34m",     // Pour les informations
  magenta: "\x1b[35m",  // Pour mettre en évidence un résultat
  cyan: "\x1b[36m",     // Pour les titres de section
  gras: "\x1b[1m",      // Rend le texte plus épais (bold)
};

function colorer(texte, code) 
{
  return code + texte + couleurs.reset;
}
*/

const	data = [
  { id: 1, 
	  brand: "Toyota", 
	  model: "Corolla",
	  year: 2020,
	  color: "White", 
	  price: 20000, 
	  isElectric: false },
  { id: 2, 
	  brand: "Tesla", 
	  model: "Model 3", 
	  year: 2023,
	  color: "Red",
	  price: 45000, 
	  isElectric: true },
  { id: 3, brand: "Peugeot", model: "208", year: 2019, color: "Blue", price: 15000, isElectric: false },
  { id: 4, brand: "Volkswagen", model: "Golf", year: 2021, color: "Black", price: 22000, isElectric: false },
  { id: 5, brand: "Nissan", model: "Leaf", year: 2022, color: "Silver", price: 28000, isElectric: true }
];

// Practice idea: Calculate the total price of all cars



do
{
	console.log("
			⟹⟹⟹⟹⟹⟹⟹⟹⟹   GESTION DES ELECTIONS  ⟸⟸⟸⟸⟸⟸⟸⟸⟸⟸

			1   ➩    Ajouter un nouveau candidat
			2   ➩    Ajouter plusieurs candidats à la fois
			3   ➩    Afficher la liste des candidats
			4   ➩    Voter pour un candidat
			5   ➩    Modifier les informations d'un candidat
			6   ➩    Supprimer un candidat
			7   ➩    Rechercher des candidats
			8   ➩    Statistiques de l'élection



" );

	var ask = Number(prompt(" Veuillez saisir votre choix : "));
	switch(ask)
	{
		case 1 : 
			ajouter un nouveau candidat();
			break ;
		case 2 : 
			ajouter plusieurs candidats à la fois();
			break ;
		case 3 : 
			afficher la liste des candidats();
			break ;
		case 4 : 
			voter pour un candidat();
			break ;
		case 5 : 
			modifier les informations();
			break ;
		case 6 :
			supprimer un candidat();
			break;
		case 7 :
			rechercher des candidats();
			break;
		case 8 :
			statistiques();
			break;
		default :
			console.log( ` pardon ! votre choix n'est pas exister ` );
	}
} while ( choix !== 0 ) ;

function ()



















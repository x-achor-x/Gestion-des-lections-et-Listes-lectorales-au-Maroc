const couleurs = {
    reset: "\x1b[0m",     // Arrête la couleur, retour à la normale
    rouge: "\x1b[31m",    // Pour les erreurs
    vert: "\x1b[32m",     // Pour les succès
    jaune: "\x1b[33m",    // Pour les avertissements ou les menus
    bleu: "\x1b[34m",     // Pour les informations
    magenta: "\x1b[35m",  // Pour mettre en évidence un résultat
    cyan: "\x1b[36m",     // Pour les titres de section
    gras: "\x1b[1m",      // Rend le texte plus épais (bold)
};

const prompt = require("prompt-sync")();

let data =
[
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: []
    },
    {
        cin: "AC123456",
        nom: "Jendade",
        prenom: "Sara",
        partiPolitique: "Indépendant",
        age: 35,
        electeurs: []
    },
    {
        cin: "AD123456",
        nom: "Elghafouli",
        prenom: "Zakaria",
        partiPolitique: "AG",
        age: 42,
        electeurs: []
    },
    {
        cin: "AE123456",
        nom: "Idrissi",
        prenom: "Nadia",
        partiPolitique: "Indépendant",
        age: 38,
        electeurs: []
    },
    {
        cin: "AF123456",
        nom: "Bennani",
        prenom: "Omar",
        partiPolitique: "Parti X",
        age: 45,
        electeurs: []
    },
    {
        cin: "AG123456",
        nom: "Fassi",
        prenom: "Imane",
        partiPolitique: "Parti Y",
        age: 32,
        electeurs: []
    },
    {
        cin: "AH123456",
        nom: "Tazi",
        prenom: "Hamza",
        partiPolitique: "Parti Z",
        age: 41,
        electeurs: []
    },
    {
        cin: "AI123456",
        nom: "Chraibi",
        prenom: "Salma",
        partiPolitique: "Indépendant",
        age: 36,
        electeurs: []
    },
    {
        cin: "AJ123456",
        nom: "Benali",
        prenom: "Ayoub",
        partiPolitique: "Parti Z",
        age: 39,
        electeurs: []
    },
    {
        cin: "AK123456",
        nom: "Mansouri",
        prenom: "Meryem",
        partiPolitique: "Parti X",
        age: 34,
        electeurs: []
    }
];

//var ask = Number(prompt(" Veuillez saisir votre choix : "));
console.log(`
                                ⟹⟹⟹⟹⟹⟹⟹⟹⟹   GESTION DES ELECTIONS  ⟸⟸⟸⟸⟸⟸⟸⟸⟸⟸

                                1   ➩    Ajouter un nouveau candidat
                                2   ➩    Ajouter plusieurs candidats à la fois
                                3   ➩    Afficher la liste des candidats
                                4   ➩    Voter pour un candidat
                                5   ➩    Modifier les informations d'un candidat
                                6   ➩    Supprimer un candidat
                                7   ➩    Rechercher des candidats
                                8   ➩    Statistiques de l'élection



                                ` );

var ask = Number(prompt(" Veuillez saisir votre choix : "));

function choix() 
{
	do
	{
		switch(ask)
		{
			case 1 : 
				ajouter_un_nouveau_candidat();
				break ;
			case 2 : 
				ajouter_plusieurs_candidats_à_la_fois();
				break ;
			case 3 : 
				afficher_la_liste_des_candidats();
				break ;
			case 4 : 
				voter_pour_un_candidat();
				break ;
			case 5 : 
				modifier_les_informations();
				break ;
			case 6 :
				supprimer_un_candidat();
				break;
			case 7 :
				rechercher_des_candidats();
				break;
			case 8 :
				statistiques();
				break;
			default :
				console.log( ` pardon ! votre choix n'est pas exister ` );
		}
	}while ( ask !== 0)
}

function ajouter_un_nouveau_candidat()
{
    let cin = prompt("Enter ur cin : ");
    let nom = prompt("Enter ur last name : ");
    let prenom = prompt("Enter ur first name : ");
    let partiPolitique = prompt("");
    let age = Number(prompt("Enter ur age :"));

    let candidat =
    {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: []
    };

    data.push(candidat);
}




















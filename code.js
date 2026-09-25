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

/*
function lala(arr)
{
	//var long = 0;
	while(arr[data] !== undefined )
	{
		data++;
	}
	return data;
}
*/

const prompt = require("prompt-sync")();

let data =
[
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: [ "SA123456" , "SB123456" , "SC123456" , "SD123456" , "SE123456" , "SF123456" ]
    },
    {
        cin: "AC123456",
        nom: "Jendade",
        prenom: "Sara",
        partiPolitique: "Indépendant",
        age: 35,
        electeurs: [ "SG123456" , "SH123456" ]
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
        electeurs: [ "SJ123456" , "SI123456" , "SK123456" , "SL123456" ]
    },
    {
        cin: "AF123456",
        nom: "Bennani",
        prenom: "Omar",
        partiPolitique: "PAM",
        age: 45,
        electeurs: [ "SM123456" ]
    },
    {
        cin: "AG123456",
        nom: "Fassi",
        prenom: "Imane",
        partiPolitique: "RNI",
        age: 32,
        electeurs: [ "SN123456" , "SO123456" , "SP123456" ]
    },
    {
        cin: "AH123456",
        nom: "Tazi",
        prenom: "Hamza",
        partiPolitique: "MDS",
        age: 41,
        electeurs: [ "ST123456" , "SS123456" ]
    },
    {
        cin: "AI123456",
        nom: "Chraibi",
        prenom: "Salma",
        partiPolitique: "AG",
        age: 36,
        electeurs: []
    },
    {
        cin: "AJ123456",
        nom: "Benali",
        prenom: "Ayoub",
        partiPolitique: "GB",
        age: 39,
        electeurs: []
    },
    {
        cin: "AK123456",
        nom: "Mansouri",
        prenom: "Meryem",
        partiPolitique: "RNI",
        age: 34,
        electeurs: []
    }
];

function lala(arr)
{
        //var long = 0;
        while(arr[data] !== undefined )
        {
                data++;
        }
        return data;
}



function show() { 
		console.log(`
			⟹⟹⟹⟹⟹⟹⟹⟹⟹ GESTION DES ELECTIONS ⟸⟸⟸⟸⟸⟸⟸⟸⟸⟸

			1 ➩ Ajouter un nouveau candidat
			2 ➩ Ajouter plusieurs candidats à la fois
			3 ➩ Afficher la liste des candidats
			4 ➩ Voter pour un candidat
			5 ➩ Modifier les informations d'un candidat
			6 ➩ Supprimer un candidat
			7 ➩ Rechercher des candidats
			8 ➩ Statistiques de l'élection
			0 ➩ Quitter 
		`);

}
function choix() 
{
	let ask ;
	do
	{
		show();
		ask = Number(prompt(" Veuillez saisir votre choix : "));
		
		switch(ask)
		{
			case 0 :
                                quitter();
                                break;
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
	} while ( ask !== 0) ;
}


function quitter() 
{
    console.log(" Merci Pour Votre Visite");
}


function  ajouter_un_nouveau_candidat()
{
	let cin = prompt(" Entrez votre cin : ");

	for (let i = 0; i < data.length; i++)
	{
		if (data[i].cin === cin)
		{
			console.log(couleurs.rouge, "Ce CIN existe déjà !");
			return;
		}
	}



	let nom = prompt(" Entrez votre nom : ");
	let prenom = prompt(" Entrez votre prenom : ");
	let partiPolitique = prompt(" Entrez votre parti politique : ");
	let age = Number(prompt(" Entrez votre âge : "));

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

    //data.push(candidat);


function ajouter_plusieurs_candidats_à_la_fois()
{
	let ask2 = Number(prompt(" Combien de candidats souhaitez-vous ajouter ? "));
	for (let i = 0; i < ask2; i++)
	{
		console.log((i + 1), "/", ask2);
		ajouter_un_nouveau_candidat();
	}
}

function afficher_la_liste_des_candidats()
{
	console.log(`
		1 ➩ Afficher tous les candidats
		2 ➩ Trier par nombre de votes
		3 ➩ Afficher par parti
			`);

	let ask3 = Number(prompt("Enter ur number : "));

	if(ask3 === 1)
	{
		console.table(data);
	}

	else if(ask3 === 2)
	{
		for(let i = 0; i < data.length - 1; i++)
		{
			for(let j = 0; j < data.length - 1 - i; j++)
			{
				if(data[j].electeurs.length < data[j+1].electeurs.length)
				{
					let cup = data[j];
					data[j] = data[j+1];
					data[j+1] = cup;
				}
			}
		}

		for(let i = 0; i < data.length; i++)
		{
			console.log(data[i].nom, "→", data[i].electeurs.length, "votes");
		}
	}

	else if(ask3 === 3)
	{
		for(let i = 0; i < data.length; i++)
		{
			if ( data[i].partiPolitique != "Indépendant" )
			{
				console.log(
				data[i].partiPolitique,
				"→",
				data[i].nom,
				data[i].prenom,
				"→",
				data[i].electeurs.length,
				"votes"
				);
			}
		}
	}
}

choix();


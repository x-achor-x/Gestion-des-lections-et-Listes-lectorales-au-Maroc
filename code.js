const prompt = require("prompt-sync")();

let data =
[
	{
		cin: "AB123456",
		nom: "Boushaba",
		prenom: "Soufiane",
		partiPolitique: "Indépendant",
		age: 40,
		electeurs: [ "SA123456", "SB123456", "SC123456", "SD123456", "SE123456", "SF123456" ]
	},
	{
		cin: "AC123456",
		nom: "Jendade",
		prenom: "Sara",
		partiPolitique: "Indépendant",
		age: 35,
		electeurs: [ "SG123456", "SH123456" ]
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
		electeurs: [ "SJ123456", "SI123456", "SK123456", "SL123456" ]
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
		electeurs: [ "SN123456", "SO123456", "SP123456" ]
	},
	{
		cin: "AH123456",
		nom: "Tazi",
		prenom: "Hamza",
		partiPolitique: "MDS",
		age: 41,
		electeurs: [ "ST123456", "SS123456" ]
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
		electeurs: [ "KL852366" , "AZ456321" , "YU456321"  , "OP523698" , "ER785214" , "AS452178" , "FG452178" , "af123654" ,"HI4563214"]
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

function show()
{
	console.log(`
		========== GESTION DES ELECTIONS ==========

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
	let ask;

	do
	{
		show();

		ask = Number(prompt(" Veuillez saisir votre choix : "));

		switch(ask)
		{
			case 0:
				quitter();
				break;

			case 1:
				ajouter_un_nouveau_candidat();
				break;

			case 2:
				ajouter_plusieurs_candidats_à_la_fois();
				break;

			case 3:
				afficher_la_liste_des_candidats();
				break;

			case 4:
				voter_pour_un_candidat();
				break;

			case 5:
				modifier_les_informations();
				break;

			case 6:
				supprimer_un_candidat();
				break;

			case 7:
				rechercher_des_candidats();
				break;

			case 8:
				statistiques();
				break;

			default:
				console.log(" Pardon ! Votre choix n'existe pas ");
		}

	} while ( ask !== 0 );
}


function quitter()
{
	console.log(" Merci Pour Votre Visite ");
}

function ajouter_un_nouveau_candidat()
{
	let cin = prompt(" Entrez votre cin : ");

	for(let i = 0; i < data.length; i++)
	{
		if(data[i].cin === cin)
		{
			console.log(" Ce CIN existe déjà ! ");
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

	console.log(" Candidat ajouté avec succès ");
}


function ajouter_plusieurs_candidats_à_la_fois()
{
	let ask2 = Number(prompt(" Combien de candidats souhaitez-vous ajouter ? "));

	for(let i = 0; i < ask2; i++)
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
		3 ➩ Afficher par parti politique
	`);

	let ask3 = Number(prompt(" Entrez votre choix : "));

	switch(ask3)
	{
		case 1:

			console.table(data);

			break;


		case 2:
			let data_copy = []
			for (copy of data )
			{
				data_copy.push(copy)
			}
			for(let i = 0; i < data_copy.length - 1; i++)
			{
				for(let j = 0; j < data_copy.length - 1 - i; j++)
				{
					if(data_copy[j].electeurs.length < data_copy[j + 1].electeurs.length)
					{
						let cup = data_copy[j];

						data_copy[j] = data_copy[j + 1];
						data_copy[j + 1] = cup;
					}
				}
			}

			for(let i = 0; i < data_copy.length; i++)
			{
				console.log(
					data_copy[i].nom,
					data_copy[i].prenom,
					"→",
					data_copy[i].electeurs.length,
					"votes"
				);
			}

			break;


		case 3:

			let parti = prompt(" Entrez le parti politique : ");

			let existe = false;

			for(let i = 0; i < data.length; i++)
			{
				if(data[i].partiPolitique.toLowerCase() === parti.toLowerCase())
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

					existe = true;
				}
			}

			if(existe === false)
			{
				console.log(" Ce parti politique n'existe pas ");
			}

			break;


		default:

			console.log(" Ce choix n'existe pas ");
	}
}

function voter_pour_un_candidat()
{
	let cin = prompt(" Entrez votre cin : ");

	let declared_cin = false;
	let already_voted = false;

	for(let i = 0; i < data.length; i++)
	{
		if(data[i].cin === cin)
		{
			declared_cin = true;
		}

		for(let j = 0; j < data[i].electeurs.length; j++)
		{
			if(data[i].electeurs[j] === cin)
			{
				already_voted = true;
			}
		}
	}

	if(declared_cin === false)
	{
		console.log(" Cet électeur n'existe pas ");
	}

	else if(already_voted === true)
	{
		console.log(
			"Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau"
		);
	}

	else
	{
		let voting_on = prompt(
			" Entrez la cin du candidat pour lequel vous voulez voter : "
		);

		let voter_existe = false;

		for(let i = 0; i < data.length; i++)
		{
			if(data[i].cin === voting_on)
			{
				voter_existe = true;
			}
		}

		if(voter_existe === false)
		{
			console.log(" Ce candidat n'existe pas ");
		}

		else
		{
			for(let i = 0; i < data.length; i++)
			{
				if(data[i].cin === voting_on)
				{
					data[i].electeurs.push(cin);
				}
			}

			console.log(" Vous avez voté pour le candidat " + voting_on);
		}
	}
}

function modifier_les_informations()
{
	let cin = prompt(" Entrez la CIN du candidat : ");

	let existe = false;

	for(let i = 0; i < data.length; i++)
	{
		if(data[i].cin === cin)
		{
			existe = true;

			let choix = Number(prompt(
				"Qu'est-ce que vous voulez modifier ?\n" +
				"1 - Age\n" +
				"2 - Parti politique\n" +
				"Votre choix : "
			));

			if(choix === 1)
			{
				let age = Number(prompt(" Entrez le nouvel age : "));

				data[i].age = age;

				console.log(" L'âge a été modifié. ");
			}

			else if(choix === 2)
			{
				let parti = prompt(" Entrez le nouveau parti politique : ");

				data[i].partiPolitique = parti;

				console.log(" Le parti politique a été modifié. ");
			}

			else
			{
				console.log(" Choix invalide. ");
			}
		}
	}

	if(existe === false)
	{
		console.log(" Ce candidat n'existe pas. ");
	}
}

function supprimer(cup, i)
{
	for(i; i < cup.length; i++)
	{
		cup[i] = cup[i + 1];
	}

	cup.length -= 1;

	return cup;
}


function supprimer_un_candidat()
{
	const cin = prompt(" Entrez votre cin : ");

	for(let i = 0; i < data.length; i++)
	{
		if(data[i].cin === cin)
		{
			let ask2 = prompt(
				"Voulez-vous supprimer ce candidat ?\n" +
				"1- Oui\n" +
				"2- Non\n"
			);

			switch(ask2)
			{
				case "1":
					supprimer(data, i);

					console.log(" Ce candidat a été supprimé ");

					break;

				case "2":
					console.log(" Suppression annulée ");

					break;
			}

			return;
		}
	}

	console.log(" Ce candidat n'existe pas ");
}

function rechercher_des_candidats()
{
	let ask = prompt(" Enter votre nom : ").toLowerCase();

	for(let i = 0; i < data.length; i++)
	{
		if(data[i].nom.toLowerCase() === ask)
		{
			console.log(data[i]);

			return;
		}
	}

	console.log(" Ce nom n'existe pas ");
}

function statistiques()
{
	console.log(`
		========== STATISTIQUES ==========

		1 ➩ Nombre total de candidats
		2 ➩ Nombre total de votes
		3 ➩ Top 3 des candidats
		4 ➩ Nombre de candidats par parti Politique
	`);

	let ask = Number(prompt(" Entrez votre choix : "));

	switch(ask)
	{
		case 1:

			console.log(
				"Nombre de candidats : ",
				data.length
			);

			break;


		case 2:

			let votes = 0;

			for(let i = 0; i < data.length; i++)
			{
				votes = votes + data[i].electeurs.length;
			}

			console.log(
				"Nombre total de votes : ",
				votes
			);

			break;


		case 3:

			for(let i = 0; i < data.length - 1; i++)
			{
				for(let j = 0; j < data.length - 1 - i; j++)
				{
					if(data[j].electeurs.length < data[j + 1].electeurs.length)
					{
						let cup = data[j];

						data[j] = data[j + 1];
						data[j + 1] = cup;
					}
				}
			}

			console.log(
				"\n========== TOP 3 ==========\n"
			);

			for(let i = 0; i < 3 && i < data.length; i++)
			{
				console.log(
					(i + 1) +
					" → " +
					data[i].nom +
					" " +
					data[i].prenom
				);

				console.log(
					"    " +
					data[i].electeurs.length +
					" votes\n"
				);
			}

			break;


		case 4:

			for(let i = 0; i < data.length; i++)
			{
				let existe = false;

				for(let j = 0; j < i; j++)
				{
					if(data[i].partiPolitique === data[j].partiPolitique)
					{
						existe = true;
					}
				}

				if(existe === false)
				{
					let nombre = 0;

					for(let j = 0; j < data.length; j++)
					{
						if(data[i].partiPolitique === data[j].partiPolitique)
						{
							nombre++;
						}
					}
	
					console.log(data[i].partiPolitique, "→", nombre, "candidat(s)");
				}
			}
	}

}
choix();

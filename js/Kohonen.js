class Kohonen {
	/**
	* caracteristicas: [
	*		"aquático",
	*		"terrestre",
	*		"carnívoro",
	*		"herbívoro",
	*		"escamas",
	*		"pelos",
	*		"penas",
	*		"brânquias",
	*		"pulmões",
	*		"bico",
	*		"boca",
	*		"dentes",
	*		"moela",
	*		"asas",
	*		"nadadeiras",
	*		"patas",
	*		"ovos",
	*		"útero"
	* ]
	**/
	constructor() {
		this.nomes = ["Anfíbios", "Aves", "Mamíferos", "Peixes", "Répteis"];
		this.classes = [
			[1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0],
			[0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0],
			[1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1],
			[1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0],
			[0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0]
		];
	}

	nomearClasse(key) {
		return this.nomes[key];
	}

	classificar(animal) {
		let classe, diferencas = 100;
		this.classes.forEach(function(caracteristicas, key) {
			let pontuacao = 0;
			caracteristicas.forEach(function(caracteristica, index) {
				pontuacao += Math.pow(animal[index] - caracteristica, 2);
			});
			if (pontuacao <= diferencas) {
				classe = key;
				diferencas = pontuacao;
			}
		});
		return this.nomearClasse(classe);
	}
}

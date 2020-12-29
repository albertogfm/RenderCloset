const lista = document.getElementById('lista');
const lista2 = document.getElementById('lista2');


Sortable.create(lista, {
	animation: 150,
	chosenClass: "seleccionado",
	// ghostClass: "fantasma"
	dragClass: "drag",
	direction: 'horizontal',
	onEnd: () => {
		console.log('Se inserto un elemento');
	},
	group: {
        name: 'shared',
		pull: 'clone',
		put: false  
    },
	store: {
		// Guardamos el orden de la lista
		set: (sortable) => {
			const orden = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, orden.join('|'));
		},

		// Obtenemos el orden de la lista
		get: (sortable) => {
			const orden = localStorage.getItem(sortable.options.group.name);
			return orden ? orden.split('|') : [];
		}
	}
	
	
});

Sortable.create(lista2, {
	animation: 150,
	chosenClass: "seleccionado",
	// ghostClass: "fantasma"
	dragClass: "drag",
	direction: 'horizontal',
	removeOnSpill: true,
	onEnd: () => {
		console.log('Se inserto un elemento');
	},
	group: {
        name: 'shared',
        
    },
	store: {
		// Guardamos el orden de la lista
		set: (sortable) => {
			const orden = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, orden.join('|'));
		},

		// Obtenemos el orden de la lista
		get: (sortable) => {
			const orden = localStorage.getItem(sortable.options.group.name);
			return orden ? orden.split('|') : [];
		}
	}
	
	
});


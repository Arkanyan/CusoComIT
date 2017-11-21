var gustosDeHelado = ["Zambayon", "Frutilla", "Tramontana", "Frutos del bosque", "Banana split", "Vainilla", "Crema rusa", "Choclate suizo", "Dulce de leche", "Granizado"];
gustosDeHelado  = gustosDeHelado.reverse();
gustosSinStock = gustosDeHelado.splice(0, 2);
console.log(gustosDeHelado);
console.log(gustosSinStock);
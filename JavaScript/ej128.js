var gustosDeHelado = ["Zambayon", "Frutilla", "Tramontana", "Frutos del bosque", "Banana split", "Vainilla", "Crema rusa", "Choclate suizo", "Dulce de leche", "Granizado"];
gustosDeHelado  = gustosDeHelado.reverse();
gustosSinStock = [gustosDeHelado.shift(), gustosDeHelado.shift(), gustosDeHelado.pop(), gustosDeHelado.pop() ];
console.log(gustosDeHelado);
console.log(gustosSinStock);
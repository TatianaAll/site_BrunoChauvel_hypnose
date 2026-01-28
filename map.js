// Pour obtenir l'instance de carte lorsque vous utilisez un élément gmp-map, 
// utilisez document.querySelector pour récupérer une instance mapElement
const mapElement = document.querySelector('gmp-map');

// Définissez ensuite les propriétés de l'instance mapElement
mapElement.zoom = 8;

// La classe MapElement utilise la classe Map en interne. 
// Accédez à la classe Map à l'aide de la propriété MapElement.innerMap
mapElement.innerMap.setOptions({
    mapTypeControl: false,
});



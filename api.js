async function getRandomDogImage() { //se define una función asincrona, permite usar await dentro de lla
    //async hace que la función devuelva una promesa automáticamente.
    const url = 'https://dog.ceo/api/breeds/image/random'; // Obtiene una imagen aleatoria de perro desde https://dog.ceo/api/breeds/image/random. Se almacena la url de la api en la variable "url"
    try { //se usa try catch para capturar errores y evitar que la ejecución se detenga si hay algún porblema en la petición
        const response = await fetch(url); //fetch(url): Hace una petición HTTP a la URL de la API. await: Pausa la ejecución hasta que la respuesta esté lista. response ahora contiene un objeto con la respuesta de la petición.
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json(); //response.json(): Convierte la respuesta a formato JSON. Espera a que la conversión se complete.
    //json ahora contiene un objeto con la respuesta de la API.
        return json.message; //Se extrae la URL de la imagen (json.message) y se devuelve
    } catch (error) {
        console.error(error.message);
    }
}

//ejemplo de la respuesta JSON que devuelv la API: 
/* {
    "message": "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
    "status": "success"
    }
   */

//Para obtener una imágen podríamos usar:

/* async function mostrarImagen() {
    const imagen = await getRandomDogImage();
    console.log(imagen);
}

mostrarImagen(); */

//await es necesario porque getRandomDogImag() s una función async, lo que significa que devulv una promesa
//si llamamos a esta función sin await, obtendremos una promsae pendinte en lugar del valor ral (la url de la imágen)

//el código asíncrono es aquel que no se ejecuta hasta que await no termine
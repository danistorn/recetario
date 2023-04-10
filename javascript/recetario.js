
const recetasContainer = document.querySelector('.recetas-container');









const recipesList = [];


recipesList.push ({
    image: "./img/hamburguesas2.jpeg",   //Hacerlo como si este ubicada en el archivo HTML, y desde ahí voy a la carpeta img.
    name: 'Hamburguesa completa',
    description: 'Pensadas con lentejas y arroz yamaní, pero perfectamente pueden usarse otra legumbre y otro cereal. La verdura elegida es zapallo pero otra opción sería espinaca. Se hacen al horno.',
    link: '',
});

recipesList.push ({
    image: "./img/nuggets.jpeg",
    name: 'Nuggets de quinoa',
    description: 'Se hacen al horno. También pueden hacerse en freidora de aire.',
    link: 'Ver Receta',
});

recipesList.push ({
    image: "./img/fajitas.jpeg",
    name: 'Fajitas',
    description: 'Se hacen en freidora de aire.',
    link: 'Ver Receta',
});

recipesList.push ({
    image: "./img/frijoles-refritos.jpeg",
    name: 'Tacos de frijoles refritos',
    description: 'Este relleno para tacos puede también comerse sólo.',
    link: 'Ver Receta',
});

recipesList.push ({
    image: "./img/burritos.jpeg",
    name: 'Burritos',
    description: 'Exquitistos.',
    link: 'Ver Receta',
});

recipesList.push ({
    image: "./img/masa-de-tortillas.jpeg",
    name: 'Masa para tacos/burritos',
    description: 'Muy fácil y rápido de hacer con pocos ingredientes.',
    link: 'Ver Receta',
});

recipesList.push ({
    image: "./img/empanadas-no-carne.jpeg",
    name: 'Empanadas de NO Carne',
    description: 'De un sabor muy suave.',
    link: 'Ver Receta',
});


recipesList.push ({
    image: "./img/hamburguesa-portobello.jpeg",
    name: 'Hamburguesa de portobello',
    description: `Al estar hecha con dos tipos de legumbres no se distingue ninguno lo cual le da un sabor más especial.
    Además tiene un sabor umami que recuerda a la carne.`,
    link: 'Ver Receta',
});


recipesList.push ({
    image: "./img/guiso-frijoles-calabaza.jpeg",
    name: 'Guiso de frijoles y calabaza',
    description: `guisito para cuando hace frío. O no.`,
    link: 'Ver Receta',
});

recipesList.push ({
    image: "./img/quesofu.jpeg",
    name: 'Quesofu',
    description: `Queso de tofu que se derrite! perfecto para pizzas, tostados, etc. Preferentemente comerlo caliente`,
    link: 'Ver Receta',
});



// <div class="card"> 
//     <img class="card__img" alt="Foto" src="./img/hambueguesas2.jpeg" >
//     <div class="receta-info">
//         <h2>Hamburguesa al plato</h2>
//         <p>No seeeee algo algo. Lo pensé con lentejas y arroz yamaní, pero pueden ser otras dos legumbre y cereal.<br> 
//         Y la verdura elegida es zapallo. Se hacen al horno</p>
//         <a href="">Ver Receta</a>
//     </div>
// </div>


for (recipe of recipesList) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const imgTag = document.createElement('img');
    imgTag.classList.add('card__img');
    imgTag.setAttribute('src', recipe.image); //Es recipe y no "recipesList" porque es la imagen de CADA UNA. SERIA SETATTRIBUTE PERO EL GET SIRVE SI ME DA NULL
     
    const recetaInfoDiv = document.createElement('div');
    recetaInfoDiv.classList.add('receta-info');
    
    const recipeName = document.createElement('h2');
    recipeName.innerText = recipe.name;
    
    const descriptionDiv = document.createElement('p');
    descriptionDiv.innerText = recipe.description;

    const linkTag = document.createElement('a');
    linkTag.setAttribute('href', recipe.link);

    recetaInfoDiv.appendChild(recipeName);
    recetaInfoDiv.appendChild(descriptionDiv);
    recetaInfoDiv.appendChild(linkTag);

    cardDiv.appendChild(imgTag);
    cardDiv.appendChild(recetaInfoDiv);



    recetasContainer.appendChild(cardDiv);

}



Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    enumerable: false,
    writable: true,
    configurable: true,
});


Object.defineProperty(juan, "editor", {
    value: "VSCode",
    enumerable: true,
    writable: false,
    configurable: true,
});


Object.defineProperty(juan, "terminal", {
    value: "WSL",
    enumerable: true,
    writable: true,
    configurable: false,
});

Object.defineProperty(juan, "pruebaNasa", {
    value: "extraterrestres",
    enumerable: false,
    writable: false,
    configurable: false,
});









//funciones para validar si algo es un Objeto o Array o qué

function isObject(subject) {
    return typeof subject == "object"; 
}


function isArray(subject) {
    return Array.isArray(subject);
}



function deepCopy(subject) {
    let copySubject; //es la variable que vamos a terminar devolviendo al final

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject; //Si no tenemos objetos o arrays, devolvemos al sujeto tal y como está.
    }


    for (key in subject) {
        const keyIsObject = isObject(subject[key]);


        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]); //El llamado recursivo
        } else {
            if(subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject; 
}



const studentBase = {
    name: undefined,    //Con undefined tenemos la base, nos aparecerá en los objetos, pero JS lo interpretará como que aún no lo definimos. No existe todavía.
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};


const juan = deepCopy(studentBase);
juan.name = "Juan";   
juan["name"] = "Juan"; //"la propiedad "name" es igual a...



Object.defineProperty(juan, "name", {
    value: "Juanito",
    writable: true, //como por defecto recibe true, no haria falta escribirlo
    configurable: false, //evitamos que se pueda borrar la propiedad name de juan.
});

const URL = "https://striveschool-api.herokuapp.com/books"

// ! chiamata ajax
const allBooks = () => {
    fetch(URL)
    .then((res) => {
        return res.json()
    })
    .then((res2) => {
        resApi = res2;
        return allBooksCard(resApi);
    })
    .catch((err) => {console.log( "Attezione, errore: " + err)});
};
allBooks();

// ! push nel index
const row = document.querySelector(".row");

let allBooksCard = (res2) => {
    console.log(res2)
    row.innerHTML = '';
    for (let i = 0; i < res2.length; i++) {
        let counter = 1
        /* row.innerHTML += `
        <div class="cont col-6 col-md-3 col-lg-2 p-5">
            <div class="card h-100">
                <img src=" ${res2[i].img} " class="card-img-top img-fluid" alt="${res2[i].img}">
                <div class="card-body">
                    <h5 class="card-title">${res2[i].title}</h5>
                    <p class="card-text"> ID: ${counter} --- Category: ${res2[i].category} </p>
                    <p class="card-text"> Prezzo: €${res2[i].price} </p>
                    <button class="btn btn-outline-success" id="bottone" onclick="addToCart()">Add To Cart</button>
                </div>
            </div>
        </div>` */
        counter++;
        
    };
};

onload = () => {
    addToCart = () => {
        console.log("test");
        console.log(bottone);
    };
};


//! funzione di ricerca
let resApi;
let inputKey = document.querySelector("#ricerca");
let bottone = document.querySelector("#bottone");

inputKey.addEventListener("keydown", () => {
    console.log("papere")
    let letterSearch = resApi.filter(book => book.title.toUpperCase().includes(inputKey.value.toUpperCase()))
    allBooksCard(letterSearch);
});



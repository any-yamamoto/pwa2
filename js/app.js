const d = document;
const API_KEY = 'c89d937a';
const busqueda = [];
const buscador = d.getElementById('buscador');
const main = d.getElementById('main');
let miLista = [];
let miListaLocal = JSON.parse(localStorage.getItem('miLista'));


if (miListaLocal != null) {
    mostrarMiLista(miListaLocal);
    
}


function buscarPeliculas(busqueda)
{
    fetch (
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${busqueda}`
        ).then(function(response){
        return response.json();

    }).then(function(datos){
        if (datos.Response != 'False') {
            console.log('Funciona');
            mostrarPelicula(datos);
            console.log(datos);
           
            return datos;
            
        }
        else {
            console.log('No funciona');
        }
    }).catch(function (err) {
        console.log("Fallo", err);
    });
    
}


if (buscador != null) {
    buscador.addEventListener("change", function() {
       
        buscarPeliculas(buscador.value);
    });
    }
    


function crearPelicula() {
        let tarjeta = d.createElement('div');
        tarjeta.className = ('card my-5 p-3');
        tarjeta.setAttribute('id', 'tarjeta');
       
        
       
            let div1 = d.createElement('div');
            div1.className = ('row g-0');
            
            tarjeta.appendChild(div1);

              let div2 = d.createElement('div');
              div2.className = ('col-md-8');
              div1.appendChild(div2);

                let div3 = d.createElement('div');
                div3.className = ('card-body text-start');
                div2.appendChild(div3);

                let titulo = d.createElement('h1');
                titulo.className = ('card-title');
                titulo.setAttribute('id', 'titulo');
                div3.appendChild(titulo);

                let anio = d.createElement('h4');
                anio.className = ('card-text');
                anio.setAttribute('id', 'anio');
                div3.appendChild(anio);

                let genero = d.createElement('p');
                genero.className = ('card-text');
                genero.setAttribute('id', 'genero');
                div3.appendChild(genero);


                let sinopsis = d.createElement('p');
                sinopsis.className = ('card-text');
                sinopsis.setAttribute('id', 'sinopsis');
                div3.appendChild(sinopsis);


                let director = d.createElement('p');
                director.className = ('card-text');
                director.setAttribute('id', 'director');
                div3.appendChild(director);

                let score = d.createElement('span');
                score.className = ('card-text');
                div3.appendChild(score);

                let small = d.createElement('small');
                small.className = ('text-muted');
                small.setAttribute('id', 'small');
                score.appendChild(small);

                

                let div4 = d.createElement('div');
                div4.className = ('col-md-4');
                div1.appendChild(div4);
  
                let poster = d.createElement('img');
                poster.className = ('img-fluid rounded-start');
                poster.setAttribute('id', 'poster');
                div4.appendChild(poster);

                let botonAgregar = d.createElement('a');
                botonAgregar.className = ('btn ml-5 mt-5 color espacio');
                botonAgregar.setAttribute('id', 'botonAgregar');
                div3.appendChild(botonAgregar);

                main.appendChild(tarjeta);

    }

    var cont = 0
  
    function mostrarPelicula(datos) {
        cont++
        if(cont >= 2){
        let tarjeta = d.getElementById('tarjeta');
        tarjeta.remove()};

        crearPelicula();
        let titulo = d.getElementById('titulo');
        let anio = d.getElementById('anio');
        let genero = d.getElementById('genero');
        let sinopsis = d.getElementById('sinopsis');
        let director = d.getElementById('director');
        let small = d.getElementById('small');
        let poster = d.getElementById('poster');
        let botonAgregar = d.getElementById('botonAgregar');
        

        titulo.innerHTML = (datos.Title);
        anio.innerHTML = (datos.Year);
        genero.innerHTML = (datos.Genre);
        sinopsis.innerHTML = (datos.Plot);
        director.innerHTML = (`Director: ${datos.Director}`);
        small.innerHTML = (`Score: ${datos.Metascore}`);
        poster.setAttribute('src', `${datos.Poster}`);
       
        var inicio = true
       if(inicio == true){
        botonAgregar.innerHTML = (`Agregar a Mi Lista`);
       }
      
      botonAgregar.addEventListener("click", (e) => {

       let verificacion = 0;
        
        for (let peli of miLista) {

            if(peli.Title === datos.Title && verificacion === 0){
                botonAgregar.innerHTML = (`Agregar a Mi Lista`);
                let index = miLista.indexOf(peli);
                verificacion = 1;
               borrarMiLista(index);
            }
        }

        if (verificacion == 0) {
            e.target.innerHTML = (`Quitar de Mi Lista`);
            agregarMiLista(datos);
        }
      });
      
      


    }
    function agregarMiLista(datos) {     
        miLista.push(datos);
        localStorage.setItem('miLista', JSON.stringify(miLista));
       miListaLocal = JSON.parse(localStorage.getItem('miLista'));
    }
    function borrarMiLista(index) {              
        miLista.splice(index, 1);
        localStorage.setItem('miLista', JSON.stringify(miLista));
        miListaLocal = JSON.parse(localStorage.getItem('miLista'));
    }

    
    function mostrarMiLista(miListaLocal){
        
        for(datos of miListaLocal){
        let tarjeta = d.createElement('div');
        tarjeta.className = ('card my-5 p-3');
        tarjeta.setAttribute('id', 'tarjeta');    
     
       
            let div1 = d.createElement('div');
            div1.className = ('row g-0');
            
            tarjeta.appendChild(div1);

              let div2 = d.createElement('div');
              div2.className = ('col-md-8');
              div1.appendChild(div2);

                let div3 = d.createElement('div');
                div3.className = ('card-body text-start');
                div2.appendChild(div3);

                let titulo = d.createElement('h1');
                titulo.className = ('card-title');
                titulo.setAttribute('id', 'titulo');
                div3.appendChild(titulo);

                let anio = d.createElement('h4');
                anio.className = ('card-text');
                anio.setAttribute('id', 'anio');
                div3.appendChild(anio);

                let genero = d.createElement('p');
                genero.className = ('card-text');
                genero.setAttribute('id', 'genero');
                div3.appendChild(genero);


                let sinopsis = d.createElement('p');
                sinopsis.className = ('card-text');
                sinopsis.setAttribute('id', 'sinopsis');
                div3.appendChild(sinopsis);


                let director = d.createElement('p');
                director.className = ('card-text');
                director.setAttribute('id', 'director');
                div3.appendChild(director);

                let score = d.createElement('span');
                score.className = ('card-text');
                div3.appendChild(score);

                let small = d.createElement('small');
                small.className = ('text-muted');
                small.setAttribute('id', 'small');
                score.appendChild(small);

                

                let div4 = d.createElement('div');
                div4.className = ('col-md-4');
                div1.appendChild(div4);
  
                let poster = d.createElement('img');
                poster.className = ('img-fluid rounded-start');
                poster.setAttribute('id', 'poster');
                div4.appendChild(poster);

                let botonAgregar = d.createElement('a');
                botonAgregar.className = ('btn ml-5 mt-5 color espacio');
                botonAgregar.setAttribute('id', 'botonAgregar');
                div3.appendChild(botonAgregar);

                mainLista.appendChild(tarjeta);
    
            titulo.innerHTML = (datos.Title);
            anio.innerHTML = (datos.Year);
            genero.innerHTML = (datos.Genre);
            sinopsis.innerHTML = (datos.Plot);
            director.innerHTML = (`Director: ${datos.Director}`);
            small.innerHTML = (`Score: ${datos.Metascore}`);
            poster.setAttribute('src', `${datos.Poster}`);
           
            var inicio = false
           if(inicio == true){
            botonAgregar.innerHTML = (`Agregar a Mi Lista`);
           }else{ botonAgregar.innerHTML = (`Quitar de  Mi Lista`);}
          
          botonAgregar.addEventListener("click", (e) => {
    
           let verificacion = 0;
            
            for (let peli of miLista) {
    
                if(peli.Title === datos.Title && verificacion === 0){
                    botonAgregar.innerHTML = (`Agregar a Mi Lista`);
                    let index = miLista.indexOf(peli);
                    verificacion = 1;
                   borrarMiLista(index);
                }
            }
    
            if (verificacion == 0) {
                e.target.innerHTML = (`Quitar de Mi Lista`);
                agregarMiLista(datos);
            }
          });
          
         
    
    
        }
      
        }
    
        
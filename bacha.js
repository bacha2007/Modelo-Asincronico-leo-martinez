/*
EJEMPLO DEL PROFE

const urlapi=""
fetch(urlapi)
.then(Response=> Response.json ())
.then(response => console.log(response.results[0].name))
*/

/*
const consultarApi=()= async > {
    try{

        const response = await fetch(URLAPI)
        const datosFinales = await response.json()
        console.log(datosFinales.results[0].name)
    }catch (error)
    (console.error)(error);
    consultarApi()
    //DOM
    const renderData = (data)=> {
        data.array.forEach(character => {
        console.log(character)
        const articleCharacter = do.createElement ("article")
        articleCharacter.innerHTML='
        <h1> $ {character.name}</h1>
        <img src='${character.image}></img'>
        '
        document.body.append(articleCharacter)            
        });
    }

}
*/
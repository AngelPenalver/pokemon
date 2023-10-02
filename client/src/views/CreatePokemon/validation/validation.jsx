export default function validation (input){
    let errores = {};
    if(!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(input.image)){
        errores.image = 'Debe ingresar una url de imagen valida!'
    }
    if(!input.name){
        errores.name = 'El nombre no puede estar vacio'
    }
    if(input.attack === 0){
        errores.attack = 'El ataque debe de ser mas de 0'
    }
    if(input.defense === 0){
        errores.defense = 'La defensa debe de ser mas de 0'
    }
    if(input.speed === 0){
        errores.speed = 'La velocidad debe de ser mas de 0'
    }
    if(input.live === 0){
        errores.live = 'La vida debe de ser mas de 0'
    }
    if(input.type1 === 'Null' || input.type2 === 'Null'){
        errores.type = "Debe asociar el pokemon a 2 tipos"
    }

    return errores
}
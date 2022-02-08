
class Notas{

    constructor( id_alumnos, id_asignaturas,  fecha_examen, calificacion){
        this.id_notas;
        this.id_alumnos = id_alumnos;
        this.id_asignaturas = id_asignaturas;
        this.fecha_examen = fecha_examen
        this.calificacion = calificacion;
        }
}


//-------- FETCH PETICIONES----------
//------  GET----------
function getNota(){

    let id1 = document.getElementById("idalumno").value;
    
    let url = "http://localhost:3000/notas";

    if(id1 != ""){
        url = "http://localhost:3000/notas?id=" + id1;
    }

    let param ={
        headers:{"Content-type": "application/json; charset= UTF-8"},
        method:"GET"
    }
    fetch(url,param)
    .then(function(data){
        return data.json()
    })
    .then(function(result){
      
            console.log(result);
            for(let i= 0; i< result.length; i++){
                document.getElementById("alumnos").innerHTML 
                += `Id Notas:  ${result[i].id_notas},\nId Alumno:  ${result[i].id_alumnos}, \nAsignatura: ${result[i].id_asignaturas}, \nFecha Examen: ${result[i].fecha_examen}, \nCalificación: ${result[i].calificacion}, 
                \n`;
            }
    })

    .catch (function(error){
        console.log(error)
    })
}


//_________ POST ____________

function postNota (){
    let nuevo = new Notas (
        document.getElementById("idAlumno").value,
        document.getElementById("idAsignaturas").value,
        document.getElementById("fechaExamen").value,
        document.getElementById("calificacion").value)

    const url = "http://localhost:3000/notas";

    let param ={
        headers:{"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(nuevo),
        method: "POST"
    }


    fetch(url, param)
    .then(function(data){
        return data.json()
    })
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log(error);
    })
}


//__________ PUT ___________

function putNota(){
    let id = document.getElementById("idNotas").value;
    let nota = new Notas(
        document.getElementById("idAlumno").value,
        document.getElementById("idAsignaturas").value,
        document.getElementById("fechaExamen").value,
        document.getElementById("calificacion").value);

    const url = "http://localhost:3000/notas";
    let param ={
    headers:{"Content-type": "application/json; charset= UTF-8"},
    body: JSON.stringify(nota),
    method:"PUT"}

    fetch(url,param)
    .then(function(data){
        return data.json()
    })
    .then(function(result) {
        console.log(result);
    })
    .catch (function(error){
    console.log(error);
    })

}


//__________ DELETE ___________

function deleteNota(){
    let id = document.getElementById("idNota").value;
    let nota = {"id": parseInt(id)};
    
    const url = "http://localhost:3000/notas";
    let param ={
        headers:{"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(nota),
        method:"DELETE"}
        
       
    fetch(url,param)
        .then(function(data){
            return data.json()
        })
        .then(function(result){
          console.log(result) 
        })
        .catch (function(error){
         console.log(error)
        })
}

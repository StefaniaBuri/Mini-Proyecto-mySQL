//Clase Alumno
class Alumno{

    constructor( id, nombre, apellido1, apellido2, edad,id_grupo, año_ingreso){
            this.id = id;
            this.nombre = nombre;
            this.apellido1 = apellido1;
            this.apellido2 = apellido2;
            this.edad = edad;
            this.id_grupo = id_grupo;
            this.año_ingreso = año_ingreso;
        }
}

//-------- FETCH PETICIONES----------
//------  GET----------

function getAlumno(){
    let id = document.getElementById("mostrarId").value;
    
    let url = "http://localhost:3000/alumnos";

    if(id != ""){
        url = "http://localhost:3000/alumnos?id=" + id;
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
        if(Array.isArray(result) == true){
            console.log(result);
            for(let i= 0; i< result.length; i++){
                document.getElementById("alumnos").innerHTML 
                += `Nombre: ${result[i].nombre}, Apellidos: ${result[i].apellido1} ${result[i].apellido2}, Edad: ${result[i].edad}, \nId_grupo: ${result[i].id_grupo}, \nAño Ingreso: ${result[i].año_ingreso}
                \n`;
            }
            
        }else{

            document.getElementById("mostrarId").value = result.nombre;
            
        }
    })

    .catch (function(error){
        console.log(error)
    })
}


//_________ POST ____________

function postAlumno (){
    let nuevo = new Alumno (
        document.getElementById("id").value,
        document.getElementById("nombre").value,
        document.getElementById("apellido1").value,
        document.getElementById("apellido2").value,
        document.getElementById("edad").value,
        document.getElementById("grupo").value,
        document.getElementById("ingreso").value)

    const url = "http://localhost:3000/alumnos";

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

function putAlumno(){
    let id = document.getElementById("id").value;
    let alumno = new Alumno(
        document.getElementById("id").value,
        document.getElementById("nombre").value,
        document.getElementById("apellido1").value,
        document.getElementById("apellido2").value,
        document.getElementById("edad").value,
        document.getElementById("grupo").value,
        document.getElementById("ingreso").value
       
    );

    const url = "http://localhost:3000/alumnos";
    let param ={
    headers:{"Content-type": "application/json; charset= UTF-8"},
    body: JSON.stringify(alumno),
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

function deleteAlumno(){
    let id = document.getElementById("mostrarId").value;
    let alumno = {"id": parseInt(id)};
    
    const url = "http://localhost:3000/alumnos";
    let param ={
        headers:{"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(alumno),
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

function getApuntadas() {
    let id = document.getElementById("idAlumno").value;

    let url = "http://localhost:3000/apuntadas";
    if(id != ""){
        url = "http://localhost:3000/apuntadas?id=" + id;
    }
   
    let param = {
        headers:{"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }

    fetch(url,param)
    .then(function(data){
        return data.json()
    })
    .then(function(result){

        console.log(result);
        console.log(typeof(result));

            let main = document.getElementById("main")
            for(let i= 0; i< result.length; i++){
            
                let tabla = document.createElement("li")
                tabla.setAttribute("id", "tabla")

                let alumno = document.createElement("li")
               
                let nombre = document.createElement("p")
                nombre.innerHTML ="NOMBRE DEL ALUMNO: " + result[i].nombre
                alumno.appendChild(nombre)
                
                let apellido = document.createElement("p")
                apellido.innerHTML = "APELLIDO DEL ALUMNO: " + result[i].apellido1 + result[i].apellido2;
                alumno.appendChild(apellido)
               
                let asignatura = document.createElement("p")
                asignatura.innerHTML = "ASIGNATURA: " + result[i].titulo
                alumno.appendChild(asignatura)
                  
                tabla.appendChild(alumno)               
                main.insertBefore(tabla, document.getElementById("footer"))
            }
        
    })            
    
    .catch (function(error){
        console.log(error)
    })

}



function getAVG() {
    let id = document.getElementById("idAlumno").value
    let url = "http://localhost:3000/media";
    if(id != ""){
        url = "http://localhost:3000/media?id=" + id;
    }
   
    let param = {
        headers:{"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }

    fetch(url,param)
    .then(function(data){
        return data.json()
    })
    .then(function(result){

        console.log(result);
        console.log(typeof(result));
        
        let main = document.getElementById("main")
            for(let i= 0; i< result.length; i++){
        
            let tabla = document.createElement("li")
            tabla.setAttribute("id", "tabla")
            
            let alumno = document.createElement("li")
            
            let nota = document.createElement("p")
            nota.innerHTML ="NOTA: " + parseFloat(result[i].AVG)
            alumno.appendChild(nota)

            let nombre = document.createElement("p")
            nombre.innerHTML = "NOMBRE ALUMNO: " + result[i].nombre;
            alumno.appendChild(nombre)

            let apellido = document.createElement("p")
            apellido.innerHTML = "APELLIDOS: " + result[i].apellido1 + result[i].apellido2;
            alumno.appendChild(apellido)

            let asig = document.createElement("p")
            asig.innerHTML = "ASIGNATURA: " + result[i].titulo
            alumno.appendChild(asig)   
            tabla.appendChild(alumno)               
            main.insertBefore(tabla, document.getElementById("footer"))
                    
           }
   
        })

                 
        .catch (function(error){
            console.log(error)
        })

}



function getImpartidas() {
    let id = document.getElementById("idProfe").value;

    let url = "http://localhost:3000/impartidas";
    if(id != ""){
        url = "http://localhost:3000/impartidas?id=" + id;
    }
   
    let param = {
        headers:{"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }

    fetch(url,param)
    .then(function(data){
        return data.json()
    })
    .then(function(result){

        console.log(result);
        console.log(typeof(result));

            let main = document.getElementById("main")
            for(let i= 0; i< result.length; i++){
            
                let tabla = document.createElement("li")
                tabla.setAttribute("id", "tabla")

                let profesor = document.createElement("li")
               
                let nombre = document.createElement("p")
                nombre.innerHTML ="NOMBRE PROFESOR: " + result[i].Nombre
                profesor.appendChild(nombre)
                
                let apellido = document.createElement("p")
                apellido.innerHTML = "APELLIDOS: " + result[i].Apellidos;
                profesor.appendChild(apellido)
               
                let asignatura = document.createElement("p")
                asignatura.innerHTML = "ASIGNATURA: " + result[i].titulo
                profesor.appendChild(asignatura)
                  
                tabla.appendChild(profesor)               
                main.insertBefore(tabla, document.getElementById("footer"))

            }
        
    })            
    
    .catch (function(error){
        console.log(error)
    })

}
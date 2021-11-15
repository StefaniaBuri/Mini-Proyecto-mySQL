const express = require('express');
const app = express();
let cors = require('cors');
const { request } = require('express');
let mysql = require('mysql2')


let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nia-Sql-05-06",
    database: "codenotch"
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Conexion correcta');
    }
});

//MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//------- ENDPOINTS ALUMNOS------
//----------- GET -----------
app.get('/alumnos', (request, response) => {

   let sql;
   if(request.query.id == null){
       sql = "SELECT * FROM alumnos";
   }else{
       sql = "SELECT * FROM alumnos WHERE id_alumnos=" + request.query.id; 
   }

   connection.query(sql, function (err, result){
       if(err)
         console.log(err);
       else{
         response.send(result);
        }
   })
});

//------------ POST -----------
app.post('/alumnos', (request, response) => {

    console.log(request.body);

    let sql = "INSERT INTO alumnos (nombre, apellido1, apellido2, edad, id_grupo, año_ingreso)" + 
    "VALUES ('" + request.body.nombre + "', '"+
                  request.body.apellido1 + "', '"+
                  request.body.apellido2 + "', '"+
                  request.body.edad + "', '"+
                  request.body.id_grupo + "', '"+
                  request.body.año_ingreso + "')";
    
    console.log(sql);

    connection.query(sql, function (err, result){
        if(err)
        console.log(err); 
        else{
                console.log(result);
            if(result.insertId)
                response.send(String(result.insertId));
            else
                response.send("-1");
        }
        
                           
    })
});

//------------ PUT -------------
app.put('/alumnos', (request, response) => {

    console.log(request.body);

    let sql = "UPDATE alumnos SET nombre = COALESCE(?, alumnos.nombre)," + "apellido1 = COALESCE(?, alumnos.apellido1)," + "apellido2 = COALESCE(?, alumnos.apellido2)," + 
    "id_grupo = COALESCE(?, alumnos.id_grupo)," + "año_ingreso = COALESCE(?, alumnos.año_ingreso) WHERE id_alumnos = ?";
    
    let params =  [request.body.nombre, request.body.apellido1, request.body.apellido2, request.body.id_grupo, request.body.año_ingreso, request.body.id];

    console.log('EL ALUMNO HA SIDO MODIFICADO' + sql);

    connection.query(sql, params, function (err, result){
        if(err)
        console.log(err); 
        else{
                console.log(result);
            if(result.insertId)
                response.send(String(result.insertId));
            else
                response.send("-1");
        }                   
    })

});

//---------- DELETE ------------
app.delete('/alumnos', (request, response) => {

    let sql = "DELETE FROM alumnos WHERE id_alumnos = ?";
    let params = [request.body.id];

    console.log('EL ALUMNO HA SIDO BORRADO');

    connection.query(sql, params, function (err, result){
        if(err)
        console.log(err); 
        else{
                console.log(result);
            if(result.insertId)
                response.send(String(result.insertId));
            else
                response.send("-1");
        }        
    })
});  

// ----------- ENDPPOINTS NOTAS-----
//--------- GET --------

app.get('/notas', (request, response) => {
   let sql;
   if(request.query.id == null){
       sql = "SELECT * FROM notas";
   }
   else{
    sql = "SELECT * FROM notas WHERE id_notas=" + request.query.id;
   
    }

   connection.query(sql, function (err, result){
        if(err)
        console.log(err);
        else{
        response.send(result);
        }
   })
});
 

//---------- POST ----------

app.post('/notas', (request, response) => {

    console.log(request.body);
    let sql = "INSERT INTO notas (id_alumnos, id_asignaturas , fecha_examen, calificacion)"
    + "VALUES ('" + request.body.id_alumnos + "', '"+
                  request.body.id_asignaturas + "', '"+
                  request.body.fecha_examen + "', '"+
                  request.body.calificacion + "')";

            console.log(sql);

            connection.query(sql, function (err, result){
               
                if(err)
                    console.log(err); 
                else{
                    response.send(String(result.insertId));
                }

            })
});

//--------- PUT -----------
app.put('/notas', (request, response) => {

    console.log(request.body);

    let sql = "UPDATE notas SET id_alumnos = COALESCE(?, notas. id_alumnos)," + "id_asignaturas = COALESCE(?, notas.id_asignaturas)," + "fecha_examen = COALESCE(?, notas.fecha_examen)," + 
    "calificacion = COALESCE(?, notas.calificacion) WHERE id_notas = ?";
    
    let params =  [request.body.id_notas, request.body.id_alumnos, request.body.id_asignaturas, request.body.fecha_examen, request.body.calificacion];

    console.log('LA NOTA HA SIDO MODIFICADA' + sql);

    connection.query(sql, params, function (err, result){
        if(err)
        console.log(err); 
        else{
                console.log(result);
            if(result.insertId)
                response.send(String(result.insertId));
            else
                response.send("-1");
        }                   
    })

});



app.put('/notas', (request, response) => {
    console.log(request.body);

    let params =  [request.body.id_notas, request.body.id_alumnos, request.body.id_asignaturas, request.body.fecha_examen, request.body.calificacion];
    let sql = "UPDATE notas SET id_alumnos = COALESCE(?, notas.id_alumnos)," + "id_asignaturas = COALESCE(?, notas.id_asignaturas)," + 
    "fecha_examen = COALESCE(?, notas.fecha_examen)," + "calificacion = COALESCE(?, notas.calificacion) WHERE id_notas= ?";
    
    console.log(sql);
    console.log('LA NOTA HA SIDO MODIFICADA');

    connection.query(sql, params, function (err, result){
        if(err)
        console.log(err); 
        else{
            response.send(String(result.insertId));
        }                
    })

});

//------------ DELETE -------------
app.delete('/notas', (request, response) => {
    console.log(request.body);
    let sql = "DELETE FROM notas WHERE id_notas=" + request.body.id;

    console.log(sql);
    console.log('LA NOTA HA SIDO BORRADA');

    connection.query(sql, function (err, result){
        if(err)
        console.log(err); 
        else{
            response.send(result)
        }     
    })
}); 



//------------ ENDPOINTS ADICIONALES
app.get('/media', function(request,response){
   let sql;
   if(request.query.id !== null){
       sql = "SELECT AVG(calificacion) AS AVG, alumnos.nombre, alumnos.apellido1, alumnos.apellido2, asignaturas.titulo FROM notas JOIN alumnos on (notas.id_alumnos = alumnos.id_alumnos) JOIN asignaturas on (notas.id_asignaturas = asignaturas.id_asignaturas) WHERE alumnos.id_alumnos=" + request.query.id + " GROUP BY asignaturas.titulo";
   }
   connection.query(sql, function (err, result){
    if(err){
        console.log(err);
    }else{
        response.send(result)
    }
   })
});


app.get('/apuntadas', function(request,response){
   let sql;
   if(request.query.id == null){
    sql = "SELECT nombre, apellido1, apellido2, titulo FROM alumnos JOIN notas ON (alumnos.id_alumnos = notas.id_alumnos) JOIN asignaturas ON (asignaturas.id_asignaturas = notas.id_asignaturas)";
   }else{
    sql = "SELECT nombre, apellido1, apellido2, titulo FROM alumnos JOIN notas ON (alumnos.id_alumnos = notas.id_alumnos) JOIN asignaturas ON (asignaturas.id_asignaturas = notas.id_asignaturas) WHERE alumnos.id_alumnos= " + request.query.id;  
   }
   connection.query(sql, function (err, result){
        if(err){
            console.log(err);
        }else{
            response.send(result)
        }
   })
});


app.get('/impartidas', function(request,response){
   let sql;
   if(request.query.id == null){
       sql = "SELECT Nombre, Apellidos, titulo FROM profesores JOIN asignaturas_profesor ON (profesores.id_profesores = asignaturas_profesor.id_profesores) JOIN asignaturas ON (asignaturas.id_asignaturas = asignaturas_profesor.id_asignaturas);"
   }else{
       sql = "SELECT Nombre, Apellidos, titulo FROM profesores JOIN asignaturas_profesor ON (profesores.id_profesores = asignaturas_profesor.id_profesores) JOIN asignaturas ON (asignaturas.id_asignaturas = asignaturas_profesor.id_asignaturas) WHERE profesores.id_profesores=" + request.query.id;
   }

   connection.query(sql, function (err, result){
        if(err){
            console.log(err);
        }else{
            response.send(result)
        }
   })
});



app.use(function (req, res, next) {
    let respuesta = { error: true, codigo: 404, mensaje: "URL no encontrada" }
    res.status(404).send(respuesta)
})


app.listen(3000);
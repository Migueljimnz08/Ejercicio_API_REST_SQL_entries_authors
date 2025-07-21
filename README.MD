# EJERCICIO - API REST con Express - Posts del blog

En este ejercicio vamos a trabajar con una base de datos relacional a través de una API REST que desarrollemos, para ello deberemos escribir la lógica necesaria en los archivos ya predefinidos en el repositorio, conectar la base de datos y definir las rutas para interactuar con ella.

A continuación tienes las queries necesarias para el ejercicio, tendrás que ejecutarlas en pgAdmin 4 para crear las tablas e introducir los datos en ellas

[Fichero queries SQL](./queries.sql)


## Tareas a realizar

- Primero, vamos a modificar la BBDD para que no se puedan insertar entries repetidas por título (Hay que alterar algo en la tabla)

- Después, completamos la API con las siguientes rutas para entries:

    - [GET] http://localhost:3000/api/entries Retorna todas las entries
    - [GET] http://localhost:3000/api/entries?email=alejandru@thebridgeschool.es Retorna un objeto con las entries del autor buscado.

    #### Modificar la query SQL para que me devuelva una respuesta con los datos del autor y sin ID de la entry:

```
{
"title": "noticia desde Node",
"content": "va a triunfar esto2",
"date": "2022-03-20T23:00:00.000Z",
"category": "sucesos",
"name": "Alejandru",
"surname": "Regex",
"email_author":"alejandru@thebridgeschool.es"
"image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
}
```
En vez de esta respuesta, que es la que está ahora:

```
 {
"id_entry": 2,
"title": "Noticia: Un panda suelto por la ciudad",
"content": "El panda se comió todas las frutas de una tienda",
"date": "2022-03-15T23:00:00.000Z",
"id_author": 1,
"category": "Sucesos"
}
```

- [PUT] http://localhost:3000/api/entries/ (parecido a POST) modifica una entry por completo con nuevos datos y retorna un status 200. Buscar por título para editar entry.

Payload:
```
{message: "Se ha modificado la entry 'Título de noticia' "}

```

- [DELETE] http://localhost:3000/api/entries/ Borra una entry y retorna un status 200. Búsqueda por título de entry para borrar. 
Payload: 
```
{message: "Se ha borrado la entry 'Título de noticia' "}
```

#### A continuación, crearemos las rutas para los autores:

 
- [GET] http://localhost:3000/api/authors Retorna un objeto con los datos de todos los autores. Retorna un status 200.

Payload:
```
{
    "id_author": 1,
    "name": "Alejandru",
    "surname": "Regex",
    "email": "alejandru@thebridgeschool.es",
    "image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
},
{
    ...
}
...
```

- [GET] http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es Retorna un objeto con los datos del autor buscado. Retorna un status 200
Payload:

```
{
    "id_author": 1,
    "name": "Alejandru",
    "surname": "Regex",
    "email": "alejandru@thebridgeschool.es",
    "image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
}
```

- [POST] http://localhost:3000/api/authors/ Se envía por POST los datos del autor a crear y retorna un status 201. Payload:
```
{message: "usuario creado: guillermu@thebridgeschool.es"}
```

- [PUT] http://localhost:3000/api/authors/ Actualiza los datos de un autor y retorna un status 200. 
Payload: 
```
{message: "usuario actualizado: guillermu@thebridgeschool.es"}
```

- [DELETE] http://localhost:3000/api/authors/ Borra un autor y retorna un status 200. Búsqueda por email. 
Payload: 
```
{message: "Se ha borrado guillermu@thebridgeschool.es"}
```

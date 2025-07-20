const entry = require('../models/entries.model');

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
  let entries;
    try{ 
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getALLEntries();
    }
    if (!entries){
         return res.status(404).json({ message: 'Entry not found'});
    }
     res.status(200).json(entries);
  } catch (error) {
    console.error(`ERROR: ${error.stack}`);
    res.status(500).json({ msj: `ERROR: ${error.stack}`});
  }
}

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
const getAuthors = async (req, res) => {
    let authors;
        try{
            if(req.query.email) {
                authors = await entry.getAuthorByEmail(req.query.email);
            }
            else {
                authors = await entry.getAllAuthors();
            }
            if (!authors){
                return res.status(404).json({ message: 'Entry not found'});
            }
        res.status(200).json(authors);
    } catch (error) {
        console.error(`ERROR: ${error.stack}`);
        res.status(500).json({ msj: `ERROR: ${error.stack}`});
  }
}

// POST http://localhost:3000/api/entries
// let newEntry = {
//   "title": "Noticias desde node",
//   "content": "Esto va a funcionar genial",
//   "email": "guillermu@thebridgeschool.es",
//   "category": "sucesos"
// }
const createEntry = async (req, res) => {
    try {
        // const {title, content, email, category} = req.body;
        const newEntry = req.body; // {title,content,email,category}
        if (!newEntry.title || !newEntry.content || !newEntry.email || !newEntry.category){
           res.status(400).json({ msj: "Faltan datos obligatorios"}); 
        }
        const response = await entry.createEntry(newEntry);
        res.status(201).json({
            "items_created": response,
            data: newEntry
        });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(500).json({ msj: `ERROR: ${error.stack}`});
  }
}

// POST http://localhost:3000/api/author
// let newAuthor = {
//     "name":"Hugo",
//     "surname":"Rodriguez",
//     "email":"alejandru@thebridgeschool.es",
//     "image":"https://randomuser.me/api/portraits/thumb/men/75.jpg"}
const createAuthor = async (req, res) => {
    try{
        const newAuthor = req.body; // {name,surname,email,image}
        if (!newAuthor.name || !newAuthor.surname || !newAuthor.email || !newAuthor.image){
           res.status(400).json({ msj: "Faltan datos obligatorios"}); 
        }
        const response = await entry.createAuthor(newAuthor);
        res.status(201).json({
            "items_created": response,
            data: newAuthor
        });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(500).json({ msj: `ERROR: ${error.stack}`});
    }
}

// PUT http://localhost:3000/api/entries
// let updatedEntry = {
//   "oldTitle": "El rayo gana la champions",
//   "newTitle": "El rayo contrata a Messi",
//   "content": "Esta prueba va a funcionar genial",
//   "email": "alejandru@thebridgeschool.es",
//   "category": "deportes"
// }
const updateEntry = async (req, res) => {
    try{
        const updatedEntry = req.body;
        if (!updatedEntry.oldTitle || !updatedEntry.newTitle || !updatedEntry.content || !updatedEntry.email || !updatedEntry.category){
            res.status(400).json({ msj: "Faltan datos obligatorios"});
        }
        const response = await entry.updateEntry(updatedEntry);
        res.status(200).json({
            "items_updated": response,
            "Se ha modificado la entry": updatedEntry.oldTitle,
            data: updatedEntry
        });
    } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(500).json({ msj: `ERROR: ${error.stack}`});
    }
}

// PUT http://localhost:3000/api/author
// let updatedAuthor = {
//   "oldEmail": "alejandru@thebridgeschool.es",
//   "name": "AleAle",
//   "surname": "ReyRey",
//   "newEmail": "alejandrius@thebridgeschool.es",
//   "image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
// }
const updateAuthor = async (req,res) => {
    try{
        const updatedAuthor = req.body;
        if(!updatedAuthor.oldEmail || !updatedAuthor.name || !updatedAuthor.surname || !updatedAuthor.newEmail || !updatedAuthor.image){
            res.status(400).json({ msj: "Faltan datos obligatorios"});
        }
        const response = await entry.updateAuthor(updatedAuthor);
        res.status(200).json({
            "items_updated": response,
            "Usuario actualizado": updatedAuthor.oldEmail,
            data: updatedAuthor
        });
    } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(500).json({ msj: `ERROR: ${error.stack}`});
    }
}

// DELETE http://localhost:3000/api/entries
// {
//  "title": "Amanece Madrid lleno de arena"
// }
const deleteEntry = async (req, res) => {
    try{
        const {title} = req.body;
        if(!title){
           res.status(400).json({ msj: "Falta titulo valido"}); 
        }
        const response = await entry.deleteEntry(title);
        res.status(200).json({
            "Se ha borrado la entry": title
        });
    } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(500).json({ msj: `ERROR: ${error.stack}`});
    }
}

// DELETE http://localhost:3000/api/authors
// {
//  "email": "alejandru@thebridgeschool.es"
// }
const deleteAuthor = async (req, res) => {
    try{
        const {email} = req.body;
        if(!email){
            res.status(400).json({ msj: "Falta email valido"}); 
        }
        const response = await entry.deleteAuthor(email);
        res.status(200).json({
            "Se ha borrado el usuario": email
        });
    } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(500).json({ msj: `ERROR: ${error.stack}`});
    }
}
module.exports = {
    getEntries,
    getAuthors,
    createEntry,
    createAuthor,
    updateEntry,
    updateAuthor,
    deleteEntry,
    deleteAuthor
}
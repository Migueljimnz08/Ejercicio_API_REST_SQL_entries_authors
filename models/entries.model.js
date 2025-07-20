const queries = require('../queries/entries.queries');

const pool = require('../config/db_pgsql');

// GET
const getEntriesByEmail = async (email) => {
    let client, result;
    try{
        client = await pool.connect(); // Abrir la conexion
        const data = await client.query(queries.getEntriesByEmail, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getALLEntries = async () => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.getALLEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET 
const getAuthorByEmail = async (email) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.getAuthorByEmail, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    } 
    return result
}

// GET
const getAllAuthors = async () => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const {title, content, email, category} = entry;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createEntry, [title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createAuthor = async (author) => {
    const {name, surname, email, image} = author;
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.createAuthor, [name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// UPDATE
const updateEntry = async (entry) => {
    const {oldTitle, newTitle, content, email, category} = entry;
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.updateEntry, [oldTitle, newTitle, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// UPDATE
const updateAuthor = async (author) => {
    const {oldEmail, name, surname, newEmail, image} = author;
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.updateAuthor, [oldEmail, name, surname, newEmail, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteEntry = async (title) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteEntry, [title])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteAuthor = async (email) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.deleteAuthor, [email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const entries = {
    getEntriesByEmail,
    getALLEntries,
    getAuthorByEmail,
    getAllAuthors,
    createEntry,
    createAuthor,
    updateEntry,
    updateAuthor,
    deleteEntry,
    deleteAuthor
}

module.exports = entries;
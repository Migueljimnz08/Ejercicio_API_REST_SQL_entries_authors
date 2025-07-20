const express = require('express');

const entriesController = require('../controllers/entries.controller');
const router = express.Router();

// GET
router.get('/entries{/:email}', entriesController.getEntries);
router.get('/authors{/:email}', entriesController.getAuthors);

// CREATE
router.post('/entries', entriesController.createEntry);
router.post('/authors', entriesController.createAuthor);

// UPDATE
router.put('/entries', entriesController.updateEntry);
router.put('/authors', entriesController.updateAuthor);

// DELETE
router.delete('/entries', entriesController.deleteEntry);
router.delete('/authors', entriesController.deleteAuthor);

module.exports = router;
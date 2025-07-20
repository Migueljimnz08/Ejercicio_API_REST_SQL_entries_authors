const queries = {
    getEntriesByEmail:`SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.email,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;`, 
    getALLEntries:`SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.email,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author`,
    createEntry:`INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`,
    updateEntry:`UPDATE entries
	SET title=$2, content=$3, id_author=(SELECT id_author FROM authors WHERE email=$4), category=$5
	WHERE title=$1`,
    deleteEntry:`DELETE FROM entries
    WHERE title=$1`,
    getAllAuthors:`SELECT * FROM authors`,
    getAuthorByEmail:`SELECT * FROM authors
    WHERE email=$1`,
    createAuthor:`INSERT INTO authors(name,surname,email,image)
    VALUES($1,$2,$3,$4)`,
    updateAuthor:`UPDATE authors
    SET name=$2, surname=$3, email=$4, image=$5
    WHERE email=$1;`,
    deleteAuthor:`DELETE FROM authors
    WHERE email=$1`
}

module.exports = queries;
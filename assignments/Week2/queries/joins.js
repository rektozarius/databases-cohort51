// Names of all authors and their corresponding mentors
export const firstQuery = `
SELECT a.author_name AS Author, m.author_name AS Mentor
    FROM authors AS a
LEFT JOIN authors AS m ON a.mentor = m.author_id;
`

// All columns of authors and their published paper_title
export const secondQuery = `
SELECT a.author_id, a.author_name, rp.paper_title
    FROM authors AS a
LEFT JOIN author_paper AS ap ON a.author_id = ap.author_id
LEFT JOIN research_papers AS rp ON ap.paper_id = rp.paper_id;
`
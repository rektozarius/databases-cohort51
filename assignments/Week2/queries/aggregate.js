// All research papers and the number of authors that wrote that paper
export const firstQuery = `
SELECT rp.paper_title, COUNT(ap.author_id) AS author_count
    FROM research_papers AS rp
LEFT JOIN author_paper AS ap ON rp.paper_id = ap.paper_id
GROUP BY rp.paper_title;
`

// Sum of the research papers published by all female authors
export const secondQuery = `
SELECT COUNT(DISTINCT ap.paper_id) AS total_female_papers
    FROM author_paper AS ap
JOIN authors AS a ON ap.author_id = a.author_id
WHERE a.gender = 'F';
`

// Average of the h-index of all authors per university
export const thirdQuery = `
SELECT university, AVG(h_index) AS average_h_index
    FROM authors
GROUP BY university
ORDER BY average_h_index DESC;
`

// Sum of the research papers of the authors per university
export const fourthQuery = `
SELECT a.university, COUNT(DISTINCT ap.paper_id) AS total_papers
    FROM authors AS a
JOIN author_paper AS ap ON a.author_id = ap.author_id
GROUP BY a.university
ORDER BY total_papers DESC;
`

// Minimum and maximum of the h-index of all authors per university
export const fifthQuery = `
SELECT university, MIN(h_index) AS min_h_index, MAX(h_index) AS max_h_index
    FROM authors
GROUP BY university
ORDER BY AVG(h_index) DESC;
`
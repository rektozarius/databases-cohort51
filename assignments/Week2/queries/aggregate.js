export const firstQuery = `
SELECT rp.paper_title, COUNT(ap.author_id) AS author_count
    FROM research_papers AS rp
LEFT JOIN author_paper AS ap ON rp.paper_id = ap.paper_id
GROUP BY rp.paper_title;
`

export const secondQuery = `
SELECT COUNT(DISTINCT ap.paper_id) AS total_female_papers
    FROM author_paper AS ap
JOIN authors AS a ON ap.author_id = a.author_id
WHERE a.gender = 'F';
`
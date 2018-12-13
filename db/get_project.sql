SELECT p.id, p.name, p.start_date, p.est_end_date, p.end_date, p.description
FROM projectassign a 
JOIN projects p ON a.project_id = p.id
WHERE a.user_id = $1;
SELECT t.project_id, t.id, t.title, t.start_date, t.end_date, t.description, u.name
FROM tasks t
    JOIN users u ON t.user_id = u.id
WHERE t.project_id = $1;
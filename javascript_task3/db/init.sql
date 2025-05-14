CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
);

INSERT INTO tasks (title) VALUES ('Learn Docker');
INSERT INTO tasks (title) VALUES ('Learn Docker-Compose');
PRAGMA foreign_keys = ON;

CREATE TABLE generations (
    id INTEGER PRIMARY KEY,
    number INTEGER NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    asset_base_path TEXT
);

CREATE TABLE games (
    id INTEGER PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    generation_id INTEGER NOT NULL,
    FOREIGN KEY (generation_id)
        REFERENCES generations(id)
);

CREATE TABLE sprite_sets (
    id INTEGER PRIMARY KEY,
    slug TEXT NOT NULL,
    name TEXT NOT NULL,
    generation_id INTEGER NOT NULL,
    FOREIGN KEY (generation_id)
        REFERENCES generations(id),
    UNIQUE (generation_id, slug)
);
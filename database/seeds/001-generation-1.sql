INSERT INTO generations (
    id,
    number,
    name,
    description,
    asset_base_path
)
VALUES (
    1,
    1,
    'Generation 1',
    'Pokémon Red, Blue, and Yellow',
    'img/generation-i/'
);

INSERT INTO games (
    id,
    slug,
    name,
    generation_id
)
VALUES
    (1, 'red', 'Red', 1),
    (2, 'blue', 'Blue', 1),
    (3, 'yellow', 'Yellow', 1);

INSERT INTO sprite_sets (
    id,
    slug,
    name,
    generation_id
)
VALUES
    (1, 'red-blue', 'Red & Blue', 1),
    (2, 'yellow', 'Yellow', 1);
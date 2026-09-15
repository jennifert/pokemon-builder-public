# Pokémon Team Builder --- Database Model

## Purpose

This document is the design reference for the SQLite data model planned
for Pokémon Team Builder v1.1.

The immediate v1.1 goal is to migrate the existing Generation I JSON
data to SQLite while preserving current behavior. The schema is
deliberately designed so later generations can add historical type
changes, regional forms, Mega Evolution, Gigantamax, regional Pokédexes,
and other generation-specific mechanics without redesigning the core
database.

The database should model relationships rather than adding a new Boolean
or column for every future Pokémon mechanic.

## Design Principles

-   `pokemon` represents a species / National Pokédex entry.
-   `pokemon_forms` represents mechanically distinct forms of that
    species.
-   Types are normalized and referenced by ID.
-   Historical changes are generation-aware.
-   Games, generations, regions, and Pokédexes are separate concepts.
-   Availability means normal availability; glitches and unusual methods
    are supplemental resources.
-   Derived information, such as defensive weaknesses and
    final-evolution status, should be calculated from source data when
    practical.
-   Pokémon Verdant / the Emerald Expansion companion builder should be
    represented as its own game/data profile rather than pretending it
    is an official Generation VI game.

------------------------------------------------------------------------

# Core Game Structure

## `generations`

One row per official Pokémon generation.

``` text
id                  PK
number              UNIQUE
name
```

Examples: Generation I, Generation II, Generation VI.

Generation describes the rules/data era. It should not be used to
identify a ROM hack or custom game profile.

## `regions`

``` text
id                  PK
name                UNIQUE
introduced_gen_id   FK -> generations.id
```

Examples: Kanto, Johto, Hoenn, Kalos, Alola, Galar, Paldea.

## `games`

A game or supported game profile.

``` text
id                  PK
name
slug                UNIQUE
generation_id       FK -> generations.id
region_id           FK -> regions.id, NULL allowed
is_official         BOOLEAN
base_game_id        FK -> games.id, NULL allowed
```

Official examples: Red, Blue, Yellow, Emerald.

Custom example: Pokémon Verdant.

`generation_id` describes the most appropriate base/rules context for an
official game. A custom project should not be mislabeled as a later
official generation simply because it enables later mechanics.

`base_game_id` allows a custom profile such as Pokémon Verdant to
identify Emerald as its base game.

------------------------------------------------------------------------

# Pokémon

## `pokemon`

The species / National Pokédex entry.

``` text
id                      PK
national_dex_number     UNIQUE
name
introduced_gen_id       FK -> generations.id
is_legendary            BOOLEAN
is_mythical             BOOLEAN
```

National Dex numbers should be stored numerically. Zero-padding such as
`006` belongs in presentation code.

## `form_categories`

``` text
id                  PK
name                UNIQUE
```

Possible values:

-   standard
-   regional
-   mega
-   gigantamax
-   alternate

Additional categories can be added later without changing the schema.

## `pokemon_forms`

``` text
id                      PK
pokemon_id              FK -> pokemon.id
name
form_key
form_category_id        FK -> form_categories.id
region_id               FK -> regions.id, NULL allowed
introduced_gen_id       FK -> generations.id
is_default              BOOLEAN
```

Examples:

``` text
Charizard
- Standard
- Mega Charizard X
- Mega Charizard Y
- Gigantamax Charizard

Meowth
- Standard
- Alolan Meowth
- Galarian Meowth
```

------------------------------------------------------------------------

# Types

## `types`

``` text
id                  PK
name                UNIQUE
introduced_gen_id   FK -> generations.id
```

Examples: Normal, Fire, Water, Steel, Fairy.

## `form_types`

Connects forms to types while supporting historical changes.

``` text
form_id                 FK -> pokemon_forms.id
type_id                 FK -> types.id
generation_from_id      FK -> generations.id
generation_to_id        FK -> generations.id, NULL allowed
slot
```

`slot` is normally 1 or 2.

Examples this model can represent:

-   Clefairy: Normal through Generation V; Fairy from Generation VI.
-   Magnemite: Electric in Generation I; Electric/Steel from Generation
    II.

## `type_effectiveness`

Generation-aware type chart.

``` text
attacking_type_id       FK -> types.id
defending_type_id       FK -> types.id
generation_from_id      FK -> generations.id
generation_to_id        FK -> generations.id, NULL allowed
multiplier
```

Typical multipliers: `0`, `0.5`, `1`, `2`.

Dual types are combined by the application, producing values such as
`0.25` and `4`.

This should replace storing a complete weakness map on every Pokémon.

------------------------------------------------------------------------

# Availability

## `pokemon_availability`

Normal availability in a particular game/profile.

``` text
pokemon_id          FK -> pokemon.id
form_id             FK -> pokemon_forms.id, NULL allowed
game_id             FK -> games.id
obtainable          BOOLEAN
```

This is the source for version-exclusive and obtainable/unobtainable
filtering.

Glitches should not make a normally unavailable Pokémon count as
normally obtainable.

------------------------------------------------------------------------

# Evolutions and Items

## `evolution_methods`

``` text
id                  PK
name                UNIQUE
```

Examples:

-   level
-   item
-   trade
-   friendship
-   other

## `items`

``` text
id                  PK
name                UNIQUE
introduced_gen_id   FK -> generations.id
```

## `evolutions`

``` text
id                      PK
from_form_id            FK -> pokemon_forms.id
to_form_id              FK -> pokemon_forms.id
method_id               FK -> evolution_methods.id
generation_from_id      FK -> generations.id
generation_to_id        FK -> generations.id, NULL allowed
item_id                 FK -> items.id, NULL allowed
```

Evolution relationships can eventually replace stored flags such as
`finalForm`, `trade`, `item`, and `friendship`.

Final-evolution status can be derived for the selected game/generation
by checking whether an applicable outgoing evolution exists.

------------------------------------------------------------------------

# Pokédexes

## `pokedexes`

``` text
id                  PK
name
region_id           FK -> regions.id, NULL allowed
generation_id       FK -> generations.id, NULL allowed
game_id             FK -> games.id, NULL allowed
```

A Pokédex may be tied to a region, generation, game/profile, or an
appropriate combination.

## `pokedex_entries`

``` text
pokedex_id          FK -> pokedexes.id
pokemon_id          FK -> pokemon.id
dex_number
```

This keeps the permanent National Dex number separate from regional or
custom Pokédex numbering.

------------------------------------------------------------------------

# Mechanics

## `mechanics`

``` text
id                      PK
name                    UNIQUE
introduced_gen_id       FK -> generations.id
```

Examples:

-   Mega Evolution
-   Z-Moves
-   Dynamax
-   Terastallization

## `pokemon_mechanics`

``` text
pokemon_id              FK -> pokemon.id
mechanic_id             FK -> mechanics.id
generation_from_id      FK -> generations.id, NULL allowed
generation_to_id        FK -> generations.id, NULL allowed
game_id                 FK -> games.id, NULL allowed
```

`game_id` is important for custom projects. A mechanic can be enabled in
Pokémon Verdant without claiming that Emerald itself or all Generation
III games support it.

Mechanically distinct transformations such as Mega forms and Gigantamax
forms belong in `pokemon_forms`. Broad mechanics such as Dynamax can be
represented here instead of creating redundant form rows for every
Pokémon.

------------------------------------------------------------------------

# External Resources and Glitches

## `resources`

Supplemental information and external links.

``` text
id                  PK
title
description
resource_type
url
generation_id       FK -> generations.id, NULL allowed
game_id             FK -> games.id, NULL allowed
pokemon_id          FK -> pokemon.id, NULL allowed
```

Possible `resource_type` values:

-   glitch
-   guide
-   video
-   article
-   reference

Examples include a Serebii reference or a YouTube demonstration of a
Generation I glitch.

Resources remain separate from normal availability. For example, a
glitch that permits an unusual Mew encounter should not automatically
mark Mew as normally obtainable.

------------------------------------------------------------------------

# Pokémon Verdant / pokeemerald-expansion

Pokémon Verdant should **not simply point to Generation VI**.

The project is based on Pokémon Emerald / Generation III and uses
`pokeemerald-expansion`, but it can selectively enable mechanics and
data introduced much later. Treating the whole project as Generation VI
would incorrectly imply Generation VI rules wherever the custom game
differs.

Instead, represent Verdant as a custom game profile based on Emerald:

``` text
games

Emerald
- generation_id: Generation III
- region_id: Hoenn
- is_official: true
- base_game_id: NULL

Pokémon Verdant
- generation_id: Generation III
- region_id: Hoenn
- is_official: false
- base_game_id: Emerald
```

Then attach custom behavior to the Verdant game/profile.

Examples:

``` text
pokemon_mechanics
Pokémon Verdant -> Mega Evolution -> enabled when/if added
Pokémon Verdant -> Fairy-related modern mechanics -> as configured
```

Availability is also profile-specific:

``` text
pokemon_availability
Pokémon Verdant -> Treecko -> obtainable
Pokémon Verdant -> Lotad -> obtainable
...
```

A Verdant-specific Pokédex can likewise be attached to the Verdant
`game_id`.

This approach matches the project's direction: it remains an
Emerald/Hoenn enhancement while selectively incorporating modern
quality-of-life features, Fairy support, later evolutions, possible
regional forms, and possible Mega Evolution.

If a future builder needs exact per-game rules beyond the current
tables, add game-specific override/configuration tables rather than
assigning the custom game to an inaccurate official generation.

------------------------------------------------------------------------

# Table Summary

1.  `generations`
2.  `regions`
3.  `games`
4.  `pokemon`
5.  `form_categories`
6.  `pokemon_forms`
7.  `types`
8.  `form_types`
9.  `type_effectiveness`
10. `pokemon_availability`
11. `evolution_methods`
12. `items`
13. `evolutions`
14. `pokedexes`
15. `pokedex_entries`
16. `mechanics`
17. `pokemon_mechanics`
18. `resources`

------------------------------------------------------------------------

# v1.1 Scope

The schema is intentionally broader than the initial migration. Pokémon
Team Builder v1.1 does not need to populate every table immediately.

The first SQLite migration should focus on the tables required to
reproduce the existing Generation I application:

``` text
generations
regions
games
pokemon
pokemon_forms
form_categories
types
form_types
type_effectiveness
pokemon_availability
evolution_methods
items
evolutions
```

The remaining tables can be introduced/populated when their
corresponding application features are implemented.

The important v1.1 goal is not to implement every future generation. It
is to establish a stable relational model so adding future generations
and custom profiles extends structured data rather than requiring
another architectural rewrite.

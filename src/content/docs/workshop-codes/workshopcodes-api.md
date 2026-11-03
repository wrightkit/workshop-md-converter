---
title: "Workshop.codes API"
---

- [Codes](#codes)
  - [Homepage](#homepage)
  - [On Fire](#on-fire)
  - [Search](#search)
  - [Filters](#filters)
  - [Codes by users](#codes-by-users)
  - [Individual codes](#individual-codes)
- [Wiki](#wiki)
  - [Search](#wiki-search)
  - [Dictionary](#wiki-dictionary)
- [Heroes](#heroes)
- [Maps](#maps)
- [Abilities](#abilities)

---

Workshop.codes has several JSON endpoints for you to use and build your own tools with. These endpoints have no request limit, just be reasonable.

For now this API doesn't follow any guidelines or specifications. As a result it can be a little bit brittle. For simple use this should be no problem, but know there are no advanced parameters that let you fully customise your queries.

## Codes

In essence almost all pages that display codes have a `.json` endpoint which can easily be accessed by adding `.json` to the url. This exists for the homepage, on-fire, filters, search, show, and user profile pages.
All pages return 24 codes at once, given that amount of codes are available.

Each query returns the following per post:

- `code`:  Import code of the post
- `nice_url`:  Optional url that redirects to the code
- `title`:  Title of the post
- `thumbnail`:  URL to the thumbnail. This thumbnail is 690x394 in size.
- `categories`:  An array of user selected categories, up to 3.
	- Possible categories are: Free for all, Team Deathmatch, Solo, Elimination, 1vs1, King of the Hill, Boss Mode, Minigames, Parkour, Race, Survival, Protect, Hide and Seek, PvE, Practice Mode, Hero Adjustments, New Heroes, Scrims, Tools, Miscellaneous
- `maps`: An array of maps the code uses. Atleast 1.
- `heroes`: An array of heroes the code uses. Atleast 1.
- `tags`: A string of comma separated tags. Optional.
- `created_at`:  The datetime the post was first created.
- `updated_at`:  The datetime the post was last updated.
- `last_revision_created_at`:  The datetime the last revision got added to this post. This is used to determine if a post is "expired".
- `user`:
  - `username`: Username of the author
  - `nice_url`: Optional nice url which redirects to the userpage
  - `verified`: Boolean which states if the user is verified or not. The nice_url only works for verified users.

### Homepage

To access the most recent posts:
```
https://workshop.codes/.json
```
Or
```
https://workshop.codes/page/1.json
```
Both of these will return a list of the 20 most recently created codes. The next page can be accessed by changing the number, as you might have guessed.
```
https://workshop.codes/page/2.json
```
Or
```
https://workshop.codes/.json?page=2
```

### On Fire

To request "on fire" posts:
```
https://workshop.codes/on-fire.json
```
Additional pages can be requested like before.

### Search

To search for a specific query:

```
https://workshop.codes/search.json?search=[query]
```
To request additional pages:
```
https://workshop.codes/search.json?search=[query]&page=2.json
```
This query is not case sensitive.

Search results are based on a post's Code, Title, Tags, Username, Categories, Maps, Heroes, in that order of importance. These are additionally influenced by the posts "hotness" or "on fire" score. The query is "fuzzy" meaning they allow for misspellings or close matches. For example "mccree" and "mcree" will return the same results, altough correct spellings will be higher ranked if relevant.

While there is no limit to the amount of requests you can make, search results are limited in the amount of requests we can receive at one time. Because of this there might be times where the API will return a 500 error if there are too many searches going on at once.

### Filters

Filters can be used to refine a search result, or on their own without a search query.

```
https://workshop.codes/search.json?hero=reinhardt
```
Additional filters can be added like so:
```
https://workshop.codes/search.json?hero=reinhardt&map=eichenwalde
```

This can also be combined with search:

```
https://workshop.codes/search.json?query=[query]&map=eichenwalde
```

**Available filters:**

- `category`: Posts that have this category selected
- `hero`: Posts that have this hero selected
- `map`: Posts that have this map selected
- `from`: Posts that are created after this date. `yyyy-mm-dd`
- `to`: Posts that are created before this date. `yyyy-mm-dd`
- `expired`: Whether or not to include expired posts. true or false.
- `author`: Author username, only verified authors are included in this last
- `search`: Search query
- `sort`: Posts are sorted by this value. Possible values are:
  - views
  - favorites
  - created
  - updated
  - on-fire
- `language`: Posts made in this locale. Possible values are:
  - en
  - ko
- `page`: Page number. Each page returns a maximum of 20 codes.

### Codes by users

Request all codes by a user:

```
https://workshop.codes/u/[username].json
```
To request additional pages:
```
https://workshop.codes/u/[username]/page/2.json
```
Or
```
https://workshop.codes/u/[username].json?page=2
```

Usernames are not case sensitive, but do require battle.net or discord id. The `#` needs to be escaped as `%23`.

### Individual codes

Request a code with:
```
https://workshop.codes/[code].json
```

This code is not case sensitive. Unlike on the website itself, old revisions will not redirect to the correct code.

## Wiki

Almost all wiki pages can be accessed simply by adding `.json` to regular URLs, (e.g. https://workshop.codes/wiki/articles/destroy-effect.json). This also applies to overview pages such as https://workshop.codes/wiki/articles and https://workshop.codes/wiki/categories/actions. These pages are paginated either by adding `/page/2` or `?page=2`. Each page contains 24 entries. There is no indication of how many pages there are, instead you may choose to index all pages until you no longer get any results. When fetching a page without results it still returns as a success page (status 200) but with an empty array.

### Wiki search

To search the wiki you can use:
```
https://workshop.codes/wiki/search/[query].json
```
This will return a maximum of 20 results. The markdown of these results is cleaned up to make sense in other markdown environments, specifically for Discord.

There is currently no way of returning only a single result.

### Wiki dictionary

To get a dictionary of all Workshop terms use:
```
https://workshop.codes/wiki/dictionary.json
```
This will return an array of all values and actions the Workshop has to offer. For example;

`["Abort","Abort If","Abort If Condition Is False","Abort If Condition Is True", ...`

There is no way to filter this array via additional parameters.

## Heroes

To fetch all Overwatch heroes use:
```
https://workshop.codes/api/heroes.json
```
This will return an array of all heroes with some relevant data such as their role, subrole, release date, and more. This will also include urls for images for each hero in three different sizes.

Individual heroes can be fetched using:
```
https://workshop.codes/api/heroes/[name].json
https://workshop.codes/api/heroes/Mei.json
https://workshop.codes/api/heroes/Cassidy.json
```
This hero name ignores special characters, casing, and spaces.
```
https://workshop.codes/api/heroes/D.va.json
https://workshop.codes/api/heroes/dva.json
https://workshop.codes/api/heroes/Soldier: 76.json
https://workshop.codes/api/heroes/soldier76.json
```
The data returned for each individual hero is the same as that from the array for all heroes.

Heroes can optionally contain lore entries. These are story chapters for each hero. Each entry has a heading an multiple paragraphs to go with it. These are not included by default. To include these pass `?include_lore_entries=true` as a url param.
```
https://workshop.codes/api/heroes.json?include_lore_entries=true
https://workshop.codes/api/heroes/dva.json?include_lore_entries=true
```

## Maps

To fetch all Overwatch maps use:
```
https://workshop.codes/api/maps.json
```
This will return an array of all maps with some relevant data such as their type, slug, and location. This will also include urls for thumbnails for each map in three different sizes.

Individual maps can be fetched using:
```
https://workshop.codes/api/maps/[name].json
https://workshop.codes/api/maps/[slug].json
```

## Abilities

The abilities endpoint is used to fetch icons for all, or specific, abilities. This includes hero abilities, passives, perks, event specific abilities, and general icons.
```
https://workshop.codes/api/abilities.json
```
This will return an array of all abilities. Each entry has an `description`, `icon`, and a `tags` key. `description` holds official descriptions for hero abilities and perk, other icons may have `null` descriptions. `icon` has images in two different sizes. `tags` is used to refine what or who an ability belongs to. Many entries will have either `Ability` or `Perk` as their tags to differentiate between the two, along with the hero to which they belong. Some abilities will have neither as they might be general or not hero specific. Some abilities will have extra tags indicating they belonged to a specific event.

You can refine the abilities you receive by using the `tag` query parameter, which will return all abilities with that tag. This is not case sensitive and ignore certain characters:
```
https://workshop.codes/api/abilities.json?tag=Soldier: 76
https://workshop.codes/api/abilities.json?tag=soldier-76

https://workshop.codes/api/abilities.json?tag=Ability
https://workshop.codes/api/abilities.json?tag=ability
```

Use the `name` query parameter to return just one ability, filtered by its name. Once again, this is case insensitive and will ignore certain characters:
```
https://workshop.codes/api/abilities.json?name=Configuration: Recon
https://workshop.codes/api/abilities.json?name=configuration-recon

https://workshop.codes/api/abilities.json?name=Scrap Gun
https://workshop.codes/api/abilities.json?name=scrap-gun
```

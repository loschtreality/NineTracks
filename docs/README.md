# Ninetracks

View [NineTracks][heroku] on Heroku

Check out the [Trello][trello] Board

[heroku]: https://nine-tracks.herokuapp.com/
[trello]: https://trello.com/b/1T8w0P3T/ninetracks

## Minimum Viable Product

NineTracks is a web application inspired by 8tracks built using Ruby on
Rails on the back-end and React/Redux on the front-end. After a two week
period, this application will have, at a minimum, the following
criteria: smooth bug-free navigation, adequate seed data
and sufficient CSS styling:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login.
- [x] Play Bar which follows user navigation and continuously plays selected playlist.
- [x] Playlist creation, playlist deletion
- [x] Search entirely by tags (everything is a tag).
- [x] Users ability to create, view, updated, and destroy playlists.
- [x] User profile page
- [x] [Production README](../README.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: info/component-hierarchy.md
[sample-state]: info/sample-state.md
[api-endpoints]: info/api-endpoints.md
[schema]: info/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Playlist Model, API, and Seeding (2 days)

**Objective:** Playlists can be created, read, edited and destroyed through
the API.

### Phase 3: Playlist Component (2 days)

**Objective:** Playlists belong to a single user and has many comments, likes, and tags. Everything is

### Phase 3: Play Bar and Continuous Play (2 days)

**Objective:** Play bar will follow the user as he/she navigates the page and continue
to play songs if a playlist is selected

### Phase 4: Search and Search Results (2 days)

**Objective:** All Playlists generate a tag of their own name, and have tags which the user adds to them.
Everything is searchable by tag name. Tags can belong to multiple playlists.

### Phase 5: Feed (1 day)

**Objective:** A feed will display of other user's playlists on the feed page.



### Bonus Features (TBD)
- [ ] Infinite Scroll
- [ ] Favorite Tracks
- [ ] About Page
- [ ] Featured Playlist Section
- [ ] Ratings based on likes (Platinum, Gold, Silver, Bronze, None)
- [ ] Multiple sessions

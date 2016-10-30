# Ninetracks

[Heroku link][heroku] View NineTracks on Heroku

[Trello link][trello] Check out the Trello Board

[heroku]: https://nine-tracks.herokuapp.com/
[trello]: https://trello.com/b/1T8w0P3T/ninetracks

## Minimum Viable Product

NineTracks is a web application inspired by 8tracks built using Ruby on
Rails on the back-end and React/Redux on the front-end. After a two week
period, this application will have, at a minimum, the following
criteria: smooth bug-free navigation, adequate seed data
and sufficient CSS styling:

- [x] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Play Bar which follows user navigation
- [ ] Playlists with Pictures
- [ ] Playlist search by tags & title
- [ ] Users ability to comment on, create, and destroy playlists
- [ ] Continuous play for current playlist
- [ ] [Production README](../README.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: info/wireframes
[components]: info/component-hierarchy.md
[sample-state]: info/sample-state.md
[api-endpoints]: info/api-endpoints.md
[schema]: info/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Playlist Model, API, components, seeding (4 days)

**Objective:** Playlists can be created, read, edited and destroyed through
the API.

### Phase 3: Playlists (2 days)

**Objective:** Playlists belong to a single user and has many comments and likes

### Phase 4: Search and Play Bar components (2 days)

**Objective:** Tags are searchable when and before songs are playing, the Play Bar follows the
user when a playlist has been selected

### Phase 5: Feed and Bonus Features (1 day)

**objective:** Feed shows 20 random playlists


### Bonus Features (TBD)
- [ ] Infinite Scroll
- [ ] Favorite Tracks
- [ ] About Page
- [ ] Featured Playlist Section
- [ ] Ratings based on likes (Platinum, Gold, Silver, Bronze, None)
- [ ] Multiple sessions

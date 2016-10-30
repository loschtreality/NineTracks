# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Playlist

- `GET /api/playlists`
  - Search purely by tag
- `POST /api/playlists`
- `GET /api/playlists/:id`
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists/:id`


### Feed
- `GET /api/playlists`
- `POST /api/playlists`

### Likes
- `GET /api/users/liked-playlists`
- `DELETE /api/users/liked-playlists`

### Playlist

- `GET /api/playlists/:id`
- `DELETE /api/playlists/:id`
- `GET /api/playlists/:id/notes`

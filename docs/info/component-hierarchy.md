# Component Hierarchy

A layout of the hierarchy of NineTracks categorized by navigation.

## Home Components

**AuthFormContainer**

- AuthForm

**HomeContainer**

- Home
- Navigation (Dependent: Current User)
- Play Bar (Dependent: Current Playlist)
- Search Bar

**SearchResults**

- Playlists

**PlaylistsContainer**

- Playlist(s)

**FeedContainer**

- Playlists

**LikedContainer**

- Playlists (Dependent: User likes)

## Search

**SearchResultsContainer**

- Search
- NoteIndex

## User Profile

**UserProfileContainer**

- User Playlists
- User Likes
- New Playlist

**UserLikesContainer**

- Playlists (Dependent: User likes)

**UserPlaylistContainer**

- Playlist Title
- Playlist Author
- Playlist Tags

**NewPlaylistContainer**

- New Playlist
- Upload Song or URL
- Search for song in NineTracks DB
- Add Tags
- Create Playlist button

# Routes

Path                      | Component
------------------------- | -----------------------------
"/sign-up"                | "AuthFormContainer"
"/sign-in"                | "AuthFormContainer"
"/home"                   | "HomeContainer" (Index Route)
"/home/feed"              | "FeedContainer"
"/home/liked"             | "LikedContainer"
"/home/search-results"    | "SearchResultsContainer"
"/user/:id"               | "UserProfileContainer"
"/user/:id/playlists"     | "UserProfileContainer"
"/user/:id/likes"         | "UserLikesContainer"
"/user/:id/playlists/:id" | "UserPlaylistContainer"
"/new-playlist"           | "NewPlaylistContainer"

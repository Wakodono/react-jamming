import { useCallback, useState } from 'react';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState([])
  const [playlistTracks, setPlaylistTracks] = useState([])

  const search = useCallback((term) => {
    // First establish our Spotify fetch in utils
    // Spotify.search()
  })

  return (
    <div>
      <h1>
        Jamming
      </h1>
      <div className="App">
        <SearchBar />
        <div className='App-playlist'>
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;

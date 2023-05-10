import { useCallback, useState } from 'react';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';
import Spotify from '../../util/Spotify';

const App = () => {

  const [playlistName, setPlaylistName] = useState("New Playlsit")

  const [playlistTracks, setPlaylistTracks] = useState([])

  const [searchResults, setSearchResults] = useState([])

  const search = useCallback(async (term) => {
    const results = await Spotify.search(term)
    // console.log('correctly setting the state?', results)
    setSearchResults(results)
  }, [])


  const addTrack = useCallback(
    track => {
      if (playlistTracks.some(savedTrack => savedTrack.id === track.id))
        return

      setPlaylistTracks(prevTracks => [...prevTracks, track])
    },
    [playlistTracks]
  )

  const removeTrack = useCallback(track => {
    setPlaylistTracks(prevTracks =>
      prevTracks.filter(currentTrack => currentTrack.id !== track.id)
    )
  }, [])

  const updatePlaylistName = useCallback(name => {
    setPlaylistName(name)
  }, [])

  const savePlaylist = useCallback(async () => {
    const trackURIs = playlistTracks.map(track => track.uri)
    try {
      await Spotify.savePlaylist(playlistName, trackURIs)
      setPlaylistName("New Playlist")
      setPlaylistTracks([])
    } catch (error) {
      console.log('PLAYLIST SAVING ERROR', error)
    }
  }, [playlistName, playlistTracks]) // The dependencies used here, playlistName and playlistTracks, were chosen because they are the state variables used within the callback function.

  return (
    <div>
      <h1>
        Jamming
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className='App-playlist'>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

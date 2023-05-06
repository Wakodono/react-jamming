import { useCallback, useState } from 'react';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

const App = () => {

  const [playlistName, setPlaylistName] = useState("New Playlsit")
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 1,
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
    },
    {
      id: 2,
      name: `Sweet Child O' Mine`,
      artist: `Guns N' Roses`,
      album: 'Appetite for Destruction',
    },
    {
      id: 3,
      name: 'Bohemian Rhapsody',
      artist: 'Queen',
      album: 'A Night at the Opera',
    },
  ])

  const searchResults = [
    {
      id: 1,
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water',
    },
    {
      id: 2,
      name: `Sweet Child O' Mine`,
      artist: `Guns N' Roses`,
      album: 'Appetite for Destruction',
    },
    {
      id: 3,
      name: 'Bohemian Rhapsody',
      artist: 'Queen',
      album: 'A Night at the Opera',
    },
  ]

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

  return (
    <div>
      <h1>
        Jamming
      </h1>
      <div className="App">
        <SearchBar />
        <div className='App-playlist'>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack} />
        </div>
      </div>
    </div>
  );
}

export default App;

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
      uri: 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh',
    },
    {
      id: 2,
      name: `Sweet Child O' Mine`,
      artist: `Guns N' Roses`,
      album: 'Appetite for Destruction',
      uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
    },
    {
      id: 3,
      name: 'Bohemian Rhapsody',
      artist: 'Queen',
      album: 'A Night at the Opera',
      uri: 'spotify:track:6UxjVlJN1ieOLKrNSNzQPA'
    },
  ])

  const [saved, setSaved] = useState(false)

  const [saving, setSaving] = useState(false)

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

  const savePlaylist = useCallback(() => {
    const trackURIs = playlistTracks.map(track => track.uri)

    const playlistData = {
      name: playlistName,
      tracks: trackURIs
    }

    console.log(playlistData)

    setPlaylistName("New Playlist")

    setPlaylistTracks([])
  }, [playlistTracks, playlistName])

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
            onRemove={removeTrack}
            onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;

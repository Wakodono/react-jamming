import { useCallback, useState } from 'react';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

const App = () => {

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

  // const search = (term) => {
  //   // First establish our Spotify fetch in utils
  //   // Spotify.search()
  //   const tracks = [
  //     {
  //       id: 1,
  //       name: 'Tiny Dancer',
  //       artist: 'Elton John',
  //       album: 'Madman Across The Water',
  //     },
  //     {
  //       id: 2,
  //       name: `Sweet Child O' Mine`,
  //       artist: `Guns N' Roses`,
  //       album: 'Appetite for Destruction',
  //     },
  //     {
  //       id: 3,
  //       name: 'Bohemian Rhapsody',
  //       artist: 'Queen',
  //       album: 'A Night at the Opera',
  //     },
  //   ]

  //   setSearchResults(tracks)
  //   setPlaylistTracks(tracks)
  // }

  return (
    <div>
      <h1>
        Jamming
      </h1>
      <div className="App">
        <SearchBar />
        <div className='App-playlist'>
          <SearchResults searchResults={searchResults} />
          <Playlist playlistTracks={searchResults} />
        </div>
      </div>
    </div>
  );
}

export default App;

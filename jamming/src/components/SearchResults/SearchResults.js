import React from 'react'

import './SearchResults.css'
import Tracklist from '../Tracklist/Tracklist'

const SearchResults = ({ searchResults, onAdd }) => {
    console.log("SEARCH RESULTS ARRAY", searchResults)
    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            <Tracklist tracks={searchResults} onAdd={onAdd} />
        </div>
    )
}

export default SearchResults
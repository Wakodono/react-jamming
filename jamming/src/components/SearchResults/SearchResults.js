import React from 'react'

import './SearchResults.css'
import Tracklist from '../Tracklist/Tracklist'

const SearchResults = () => {
    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            <Tracklist />
        </div>
    )
}

export default SearchResults
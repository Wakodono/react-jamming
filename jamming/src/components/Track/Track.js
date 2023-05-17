import React, { useCallback } from 'react'

const Track = ({ track, onAdd, onRemove, isRemoval, isTrackInPlaylist }) => {
    // console.log("Check for the props in TRACK", props)

    const addTrack = useCallback(
        event => {
            onAdd(track)
        },
        [onAdd, track]
    )

    const removeTrack = useCallback(
        event => {
            onRemove(track)
        },
        [onRemove, track]
    )

    const renderAction = () => {
        if (isRemoval) {
            return (
                <button className='Track-action' onClick={removeTrack}>
                    -
                </button>
            )
        }
        return (
            <button className='Track-action'
                onClick={addTrack}
                disabled={isTrackInPlaylist}

            >
                +
            </button>
        )
    }

    return (
        <div className='Track'>
            <div className='Track-information'>
                <h3>{track.name}</h3>
                <p>
                    {track.artist} | {track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track
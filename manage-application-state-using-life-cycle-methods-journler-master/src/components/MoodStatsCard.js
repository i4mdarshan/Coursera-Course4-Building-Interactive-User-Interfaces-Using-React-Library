import React from 'react'
import MoodList from './MoodList'

const MoodStatsCard = () => {
  return (
    <>
        <h4 className="text-dark mt-5 mb-3">
                Mood Stats
        </h4>
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-center">
                <MoodList/>
            </div>
        </div>
    </>
  )
}

export default MoodStatsCard
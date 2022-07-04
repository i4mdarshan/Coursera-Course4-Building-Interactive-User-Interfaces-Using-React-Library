import React from 'react'
import logo from './../logo.svg'

const MoodList = () => {

    let moods = [
        {
            id:1,
            moodImg:"logo.svg"
        },
        {
            id:2,
            moodImg:"logo.svg"
        },
        {
            id:3,
            moodImg:"logo.svg"
        },
        {
            id:4,
            moodImg:"logo.svg"
        },
        {
            id:5,
            moodImg:"logo.svg"
        }
    ]

  return (
    <>
        <div className="row">
            <div className="col-md-12 d-flex">
                    {moods.map((mood)=>{
                        return (
                            <div className="d-flex flex-column justify-content-center align-items-center" key={mood.id}>
                                <img src={logo} className="img-fluid w-100 m-2" style={{height: "54px"}} alt="mood" />
                                <p>0</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    </>
  )
}

export default MoodList
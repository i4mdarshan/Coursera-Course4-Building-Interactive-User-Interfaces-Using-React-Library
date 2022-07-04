import React from 'react'
import JournelList from './JournelList'

const JournelCard = () => {

    let journals = [
        {
            id:1,
            title:"Angry Bird - 2nd August 2016",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, distinctio! Soluta quae rem neque reiciendis",
        },
        {
            id:2,
            title:"Angry Bird - 2nd August 2016",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, distinctio! Soluta quae rem neque reiciendis",
        },
        {
            id:3,
            title:"Angry Bird - 2nd August 2016",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, distinctio! Soluta quae rem neque reiciendis",
        },
        {
            id:4,
            title:"Angry Bird - 2nd August 2016",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, distinctio! Soluta quae rem neque reiciendis",
        },
        {
            id:5,
            title:"Angry Bird - 2nd August 2016",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, distinctio! Soluta quae rem neque reiciendis",
        }
    ]

  return (
    <>
        <h3 className="text-dark mx-1 my-3">Journals</h3>
        <div className="card bg-light overflow-auto p-3" style={{height:"50vh"}}>
            {(journals.length > 0) ? <JournelList journals={journals}/> : <small className="text-light">No Journals Available</small>}
        </div>
    </>
  )
}

export default JournelCard
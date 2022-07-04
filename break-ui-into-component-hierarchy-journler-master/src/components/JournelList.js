import React from 'react'

const JournelList = (props) => {

    let journals = props.journals;

  return (
    <>
        {
            journals.map((journal)=>{
                return (
                    <div className="card bg-dark my-1" key={journal.id}>
                        <div className="card-header py-1 px-auto">
                            <h5 className="text-light">
                                {journal.title}
                            </h5>
                        </div>
                        <div className="card-body py-1 px-auto">
                            <p className="text-light text-truncate">{journal.description}</p>
                        </div>
                    </div>
                );
            })
            
        }
    </>
  )
}

export default JournelList
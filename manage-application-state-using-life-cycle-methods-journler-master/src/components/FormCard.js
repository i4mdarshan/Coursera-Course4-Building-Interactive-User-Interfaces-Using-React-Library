import React from 'react'
import MoodList from './MoodList'

const FormCard = () => {
  return (
    <>
        <div className="m-3">
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="text-dark mt-1 mb-3">
                            How's your Mood Today?
                        </h5>
                        <MoodList/>
                        <div className="form-group">
                            <input type="text" className="form-control" name="title" id="title" placeholder="What's on your Mind?" />
                        </div>
                        <div className="form-group">
                            <textarea name="description" id="description" cols="30" rows="15" className="form-control" placeholder="I am all excited to know how was your day like!"></textarea>
                        </div>
                        <div className="button-group d-flex justify-content-end">
                            <button className="btn btn-light px-5 mx-2">Clear</button>
                            <button className="btn btn-secondary px-5 mx-2">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default FormCard
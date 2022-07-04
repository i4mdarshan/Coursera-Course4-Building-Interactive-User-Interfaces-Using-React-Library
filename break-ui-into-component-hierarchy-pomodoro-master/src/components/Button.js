import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className={"btn btn-lg btn-block btn-"+props.variant}>{props.title}</button>
    </>
  )
}

export default Button
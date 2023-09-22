import React from 'react'

const SingleReducer = (props) => {
    const {id, name} = props.data
  return (
    <>
      <h1 className='text-5xl'>{name}</h1>
    </>
  )
}

export default SingleReducer

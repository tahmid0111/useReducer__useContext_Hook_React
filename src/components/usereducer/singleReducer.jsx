import React from 'react'

const SingleReducer = (props) => {
    const {id, name, color} = props.data
    // const generateRandomColor = () => {
    //   const colors = [
    //     'bg-red-500',
    //     'bg-yellow-700',
    //     'bg-green-900',
    //     'bg-rose-950',
    //     'bbg-rose-600',
    //   ];
  
    //   const randomIndex = Math.floor(Math.random() * colors.length);
    //   return colors[randomIndex];
    // };

  return (
    <>
      <div className={`bg-yellow-500 card w-96 text-primary-content mb-12`}>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleReducer

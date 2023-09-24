import React from 'react'

const SingleReducer = (props) => {
    const {id, name} = props.data
    const generateRandomColor = () => {
      const colors = [
        'bg-red-500',
        'bg-yellow-700',
        'bg-green-900',
        'bg-rose-950',
        'bbg-rose-600',
      ];
  
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

  return (
    <>
      <div className={`${generateRandomColor()} card w-96 text-primary-content mb-12`}>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleReducer

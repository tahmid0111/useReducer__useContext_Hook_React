import {useState} from 'react'
import SingleReducer from './singleReducer'

const dummyDatas = [
    {
        id: 1,
        name: 'a',
        color: 'bg-red-500',
    },
    {
        id: 2,
        name: 'b',
        color: 'bg-yellow-700',
    },
    {
        id: 3,
        name: 'c',
        color: 'bg-green-900',
    },
    {
        id: 4,
        name: 'd',
        color: 'bg-rose-950',
    },
    {
        id: 5,
        name: 'e',
        color: 'bg-rose-600',
    },
]

const Reducers = () => {
    const [datas, setDatas] = useState(dummyDatas)
    const [newData, setNewData] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        setDatas((prevData) => {
            let brandNewData = {id: new Date().getTime().toString(), name: newData}
            return [...prevData, brandNewData]
        })
        console.log(datas)
        setNewData('')
    }
  return (
    <>
    <div className='text-center mb-20'>
        <form onSubmit={handleSubmit}>
            <input className="input input-bordered input-primary w-full max-w-xs" type="text" placeholder='new data' value={newData} onChange={e => setNewData(e.target.value)} />
            <button className='btn btn-primary ml-10 px-7' type="submit">Add</button>
        </form>
    </div>
      <div className='container mx-auto grid grid-cols-3 text-center'>
        {
            datas.map((data) => <SingleReducer key={data.id} data={data} />)
        }
      </div>
    </>
  )
}

export default Reducers

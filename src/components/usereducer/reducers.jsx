import {useState} from 'react'
import SingleReducer from './singleReducer'

const dummyDatas = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
    {
        id: 3,
        name: 'c'
    },
    {
        id: 4,
        name: 'd'
    },
    {
        id: 5,
        name: 'e'
    },
]

const Reducers = () => {
    const [datas, setDatas] = useState(dummyDatas)
  return (
    <>
    <div>
        <form>
            <input type="text" placeholder='new data' />
            <button type="submit">add</button>
        </form>
    </div>
      <div>
        {
            datas.map((data) => <SingleReducer key={data.id} data={data} />)
        }
      </div>
    </>
  )
}

export default Reducers

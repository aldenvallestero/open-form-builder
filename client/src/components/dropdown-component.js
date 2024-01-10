import { useState } from 'react'

export const Dropdown = ({ placeholder, items, label }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (show)
      setShow(false);
    else
      setShow(true);
  }

  return (
    <div>
      <button className="bg-blue-600 text-white font-bold rounded-md py-1 w-1/3" onClick={handleShow}>{placeholder}</button>
      { label && <small className="block text-gray-500">{label}</small> }
      {
        show ? (
          <ul className='w-1/4'>
            { items?.map(i => <li className='bg-blue-200 rounded-md my-0.5 p-1 px-2'>{i}</li>) }
          </ul>
        ) : <></>
      }
    </div>
  )
}

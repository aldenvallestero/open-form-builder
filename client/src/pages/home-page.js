import { useState } from 'react';
import { CopyIcon, TrashIcon } from '../components/icons-component';

export default function HomePage() {
  const [forms] = useState([1, 2, 3]);

  return (
    <div className="container-fluid p-10">
      {
        forms?.length > 0 ? forms?.map(() => (
          <div className="shadow border-s-8 border-blue-600 p-4 rounded-lg mb-6 w-auto" role="button">
            <div className="flex justify-between items-center">
              <div className="block">
                <h1 className="text-lg font-bold">Form Name & Description</h1>
                <p>Description of form here</p>
              </div>
              <div className="block">
                <div className="inline-block mx-2">
                  100 Views
                </div>
                <div className="inline-block mx-2">10 Sumbission</div>
              </div>
              <div className="block">
                <button className="mx-2 text-gray-600" onClick={() => {navigator.clipboard.writeText(`/form/fromIdHere`)}}><CopyIcon /></button>
                <button className="mx-2 text-red-600"><TrashIcon /></button>
              </div>
            </div>
          </div>
        )): (
          <div className="flex justify-center items-center h-96">
        <h1 className="text-2xl text-gray-400">No Forms Yet! Create One!</h1>
      </div>
        )
      }
      
    </div>
  )
}
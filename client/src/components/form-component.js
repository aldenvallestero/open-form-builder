import { TrashIcon } from './icons-component'

export const Form = ({ label, deleteField, fieldId }) => {
  return (
    <div className="shadow border-s-8 border-blue-600 p-4 rounded-lg mb-6">
      <span className="block text-2xl mb-2" htmlFor="">{label}</span>
      <div className="flex items-center justify-start">
        <span className="text-xl text-gray-500">Text</span>
        <button className="ms-4 text-red-600" onClick={() => deleteField(fieldId)}><TrashIcon /></button>
      </div>
    </div>
  )
}


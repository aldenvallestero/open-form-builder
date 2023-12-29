import { TrashIcon } from './icons-component'

export const Form = ({ label, type, placeholder, deleteField, fieldId }) => {
  return (
    <div className="shadow border-s-8 border-blue-600 p-4 rounded-lg mb-6">
      <label className="block font-bold mb-2" htmlFor="">{label}</label>
      <div className="flex items-center justify-center">
        <input className="inline-block border-b border-blue-600 rounded-md p-2 px-4 mb-4 w-full" type={type} placeholder={placeholder} required />
        <button className="ms-2 text-red-600" onClick={() => deleteField(fieldId)}><TrashIcon /></button>
      </div>
    </div>
  )
}


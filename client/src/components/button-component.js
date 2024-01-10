export const Button =({ placeholder, callback, label }) => {
  return (
    <div>
      <button className="bg-blue-600 text-white font-bold rounded-md py-1 w-1/3" onClick={callback}>{placeholder}</button>
      { label && <small className="block text-gray-500">{label}</small> }
    </div>
  )
}

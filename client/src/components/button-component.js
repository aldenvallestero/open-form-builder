export const Button =({ placeholder, cb, label }) => {
  return (
    <div>
      <button className="bg-blue-600 text-white font-bold rounded-md py-1 w-1/3" onClick={cb}>{placeholder}</button>
      { label && <small className="block text-gray-500">{label}</small> }
    </div>
  )
}

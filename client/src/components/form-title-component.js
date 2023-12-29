export function FormTitle({ setTitle }) {
  return (
    <div className="shadow border-s-8 border-blue-600 p-4 rounded-lg mb-6">
      <label className="block text-xl font-bold mb-2" htmlFor="">Form Title</label>
      <div className="flex">
        <input
          className="inline-block border-b border-blue-600 rounded-md text-4xl mb-4 w-full"
          type="text"
          placeholder="Form Title (eg. Software Engineer Application Form)"
          required
          onChange={data => setTitle(data.target.value)}
        />
      </div>
    </div>
  )
}

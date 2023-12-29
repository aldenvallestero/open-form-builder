import { useState } from 'react';
import { Form } from '../components/form-component';
import { FormTitle } from '../components/form-title-component';
import { v4 as uuidv4 } from 'uuid';

export default function FormPage() {
  const [form, setForm] = useState([]);
  const [title, setTitle] = useState('');
  const [label, setLabel] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  const addField = () => {
    if (label?.length > 0) {
      setForm([...form, { fieldId: uuidv4(), label, placeholder }])}
  }

  const deleteField = (fieldId) => {
    console.log("fieldId", fieldId)
    const newFields = form.filter(i => i.fieldId !== fieldId);
    console.log(newFields)
    setForm(newFields);
  }

  return (
    <div className="container-fluid p-10">
      <FormTitle setTitle={setTitle} />
      {
        form?.map(({ fieldId, label, placeholder }) => (
          <Form {...{ fieldId, label, placeholder, deleteField }} />
        ))
      }
      
      <div className="shadow border-s-8 border-blue-600 p-4 rounded-lg mb-6">
      <div className="block">
        <div className="mb-4">
          <label htmlFor="">Requirement / Question</label>
          <input className="inline-block border border-blue-600 rounded-md text-xl w-full" type="text" placeholder="" onChange={data => setLabel(data.target.value)} required />
          <label htmlFor="">Required?</label><input type="checkbox" className="mx-2" name="" id="" />
        </div>

        <div className="mb-4">
          <label htmlFor="">Placeholder</label>
          <input className="inline-block border border-blue-600 rounded-md text-xl w-full" type="text" placeholder="" onChange={data => setLabel(data.target.value)} required />
          <label htmlFor="">Required?</label><input type="checkbox" className="mx-2" name="" id="" />
        </div>
        <button className="bg-blue-600 text-white font-bold rounded-md py-1 w-1/3" onClick={addField}>Add Field</button>
      </div>
    </div>
    </div>
  )
}
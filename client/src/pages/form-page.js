import {  useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormsClient from '../clients/form-client';
import { Form } from '../components/form-component';
import { Button } from '../components/button-component';
import { FormTitle } from '../components/form-title-component';

export default function FormPage() {
  const [fields, setFields] = useState([]);
  const [title, setTitle] = useState('');
  const [label, setLabel] = useState('');
  const [placeholder] = useState('');

  const addField = () => {
    if (label?.length > 0) {
      setFields([...fields, { fieldId: uuidv4(), label, placeholder }])}
  }

  const deleteField = (fieldId) => {
    const newFields = fields.filter(i => i.fieldId !== fieldId);
    setFields(newFields);
  }

  const saveForm = () => {
    FormsClient.createForm(title, fields);
  }

  return (
    <div className="container-fluid p-10">
      <FormTitle setTitle={setTitle} />
      
      {
        fields?.map(({ fieldId, label }) => (
          <Form {...{ fieldId, label, deleteField }} />
        ))
      }
      
      <div className="shadow border-s-8 border-blue-600 p-4 rounded-lg mb-6">
        <div className="block">
          <div className="mb-4">
            <label htmlFor="">Requirement / Question</label>
            <input
              className="inline-block border border-blue-600 rounded-md text-xl w-full"
              type="text"
              placeholder=""
              onChange={data => setLabel(data.target.value)}
              required
            />
          </div>

          <Button
            placeholder="Add Field"
            callback={addField} 
          />
        </div>
      </div>

      <Button
        placeholder="Save Form"
        callback={saveForm}
        label={'Finalize your fields before you create the form.'}
      />
    </div>
  )
}
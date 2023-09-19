// DimensionsForm.js

import React from 'react';
import { useFormik } from 'formik';

function DimensionsForm() {
  const formik = useFormik({
    initialValues: {
      width: '',
      height: '',
      depth: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Width (cm):
        <input 
          type="number" 
          name="width" 
          onChange={formik.handleChange} 
          value={formik.values.width} 
        />
      </label>
      <br />
      <label>
        Height (cm):
        <input 
          type="number" 
          name="height" 
          onChange={formik.handleChange} 
          value={formik.values.height} 
        />
      </label>
      <br />
      <label>
        Depth (cm):
        <input 
          type="number" 
          name="depth" 
          onChange={formik.handleChange} 
          value={formik.values.depth} 
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DimensionsForm;

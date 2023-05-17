import React from 'react';
import { Formik, Form, Field } from 'formik';

export default function CustomMultiselect({ label, options, field, form }) {
  const handleOptionChange = (event) => {
    const { value, checked } = event.target;
    const selectedOptions = field.value || [];

    if (checked) {
      const updatedOptions = [...selectedOptions, value];
      form.setFieldValue(field.name, updatedOptions);
    } else {
      const updatedOptions = selectedOptions.filter(
        (selectedValue) => selectedValue !== value
      );
      form.setFieldValue(field.name, updatedOptions);
    }
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            name={field.name}
            value={option}
            checked={field.value && field.value.includes(option)}
            onChange={handleOptionChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
}
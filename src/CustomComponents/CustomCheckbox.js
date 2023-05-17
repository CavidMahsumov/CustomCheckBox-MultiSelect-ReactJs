import React from 'react'

export default function CustomCheckbox({ label, field, form }) {
    return (
        <label>
          <input
            type="checkbox"
            {...field}
            checked={field.value}
            onChange={() => form.setFieldValue(field.name, !field.value)}
          />
          {label}
        </label>
      );
}




// i

// function CustomCheckbox({ label, field, form }) {
//   return (
//     <label>
//       <input
//         type="checkbox"
//         {...field}
//         checked={field.value}
//         onChange={() => form.setFieldValue(field.name, !field.value)}
//       />
//       {label}
//     </label>
//   );
// }

// function App() {
//   const initialValues = {
//     checkboxValue: false,
//   };

//   const handleSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     <div>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form>
//           <Field
//             name="checkboxValue"
//             component={CustomCheckbox}
//             label="Checkbox"
//           />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// export default App;
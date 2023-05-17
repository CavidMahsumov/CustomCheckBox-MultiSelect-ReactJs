import logo from './logo.svg';
import './App.css';
import { Formik, Form, Field } from 'formik';
import CustomCheckbox from './CustomComponents/CustomCheckbox'
import CustomMultiSelect from './CustomComponents/CustomMultiSelect'



function App() {
  const initialValues = {
    checkboxValue: false,
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  const initialValuesMultiSelect = {
    multiselectValue: [],
  };

  const handleSubmitMultiSelect = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="checkboxValue"
            component={CustomCheckbox}
            label="Checkbox"
          />
        </Form>
      </Formik>
      <Formik initialValues={initialValuesMultiSelect} onSubmit={handleSubmitMultiSelect}>
        <Form>
          <Field
            name="multiselectValue"
            component={CustomMultiSelect}
            label="Multiselect"
            options={['Option 1', 'Option 2', 'Option 3']}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      
    </div>
  );
}

export default App;

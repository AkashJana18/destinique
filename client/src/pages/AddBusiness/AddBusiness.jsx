import React, { useState } from 'react';
import './AddBusiness.css';


const AddBusiness = (props) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    country: '',
    city:'',
    address: '',
    images: [],
    title: '',
    description: '',
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'images') {
      // If the field is 'images', store the files
      setFormData({
        ...formData,
        [name]: files,
      });
    } else {
      // Otherwise, store the regular input values
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any final actions or submit the form data
    alert('Business Verified');
  };

  const renderStepContent = () => {
    if (!props.show) {
      return null;
    }

    switch (step) {
      case 1:
        return (
          <div>
            <label>
              Country:
              <input className='addb' type="text" name="country" value={formData.country} onChange={handleChange} />
            </label>
            <br />
            <label>
              City:
              <input className='addb' type="text" name="city" value={formData.city} onChange={handleChange} />
            </label>
            <br />
            <label>
              Address:
              <input className='addb' type="text" name="address" value={formData.address} onChange={handleChange} />
            </label>
          </div>
        );
      case 2:
        return (
          <div>
            <label>
              Upload Images:
              <input className='addb' type="file" name="images" multiple onChange={handleChange} />
            </label>
          </div>
        );
      case 3:
        return (
          <div>
            <label>
              Title:
              <input className='addb' type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <br />
            <label>
              Description:
              <textarea className='addb' name="description" value={formData.description} onChange={handleChange}></textarea>
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderStepContent()}

      {step > 1 && <button className='addb' type="button" onClick={handlePrevStep}>Previous</button>}
      {step < 3 ? <button className='addb' type="button" onClick={handleNextStep}>Next</button> : <button className='addb' type="submit">Submit</button>}
    </form>
  );
};

export default AddBusiness;


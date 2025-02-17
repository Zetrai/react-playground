import { forwardRef, useEffect, useRef, useState } from 'react';

// ForwardRef Input Component
const InputField = forwardRef(({ label, error, onChange, ...props }, ref) => {
  return (
    <div className='flex flex-col mb-3'>
      <label className='font-semibold'>{label}</label>
      <input
        ref={ref}
        onChange={onChange}
        {...props}
        className='border p-2 rounded'
      />
      {error && <span className='text-red-500 text-sm'>{error}</span>}
    </div>
  );
});

const FormExample = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    let newErrors = {};
    if (!nameRef.current.value) newErrors.name = 'Name is required';
    if (!emailRef.current.value) newErrors.email = 'Email is required';
    if (!passwordRef.current.value) newErrors.password = 'Password is required';

    setErrors(newErrors);

    // Focus first invalid field
    if (newErrors.name) {
      nameRef.current.focus();
    } else if (newErrors.email) {
      emailRef.current.focus();
    } else if (newErrors.password) {
      passwordRef.current.focus();
    }
  };
  const handleInputChange = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mb-3 border-b-4 w-full text-center'>
        FormExample
      </h1>
      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>
            Forward Ref Example
          </h2>
          <form className='border p-5 rounded' onSubmit={handleSubmit}>
            <InputField
              ref={nameRef}
              onChange={() => handleInputChange('name')}
              label='Name'
              type='text'
              error={errors.name}
            />
            <InputField
              ref={emailRef}
              onChange={() => handleInputChange('email')}
              label='Email'
              type='email'
              error={errors.email}
            />
            <InputField
              ref={passwordRef}
              onChange={() => handleInputChange('password')}
              label='Password'
              type='password'
              error={errors.password}
            />
            <button
              type='submit'
              className='bg-blue-500 text-white p-2 rounded w-full'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormExample;

import React from 'react';
import { useForm } from 'react-hook-form';

function Various() {
  const { register, handleSubmit, watch, trigger, formState: { errors } } = useForm(); // Destructuring errors from formState
  const password = watch('password', ''); // Watching the 'password' input field

  const onSubmit = (data) => {
    console.log(data);
  };

  // Function to validate the confirmation password field
  const validateConfirmPassword = (value) => {
    return value === password || 'Passwords do not match';
  };

  // Function to validate the password field
  const validatePassword = async (value) => {
    // Perform asynchronous validation
    const isValid = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(value.length >= 8); // Password should be at least 8 characters long
      }, 1000);
    });
    return isValid || 'Password must be at least 8 characters long';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Password</label>
      <input type="password" {...register('password', { validate: validatePassword })} />
      <p>{errors.password && errors.password.message}</p>

      <label>Confirm Password</label>
      <input
        type="password"
        {...register('confirmPassword', { validate: validateConfirmPassword })}
        onChange={() => {
          trigger('confirmPassword'); // Triggering validation for confirmPassword field on change
        }}
      />
      <p>{errors.confirmPassword && errors.confirmPassword.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Various;

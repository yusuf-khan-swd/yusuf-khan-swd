import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (value) => {
    console.log(value);
  }

  return (
    <div>
      <h2 className='text-3xl font-bold text-center mt-3'>Contact Me</h2>
      <p className='text-center text-sm'>Fell free to contact me</p>
      <form className='card max-w-sm mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input {...register("name", { required: "Please enter your name" })} type="text" className="input input-bordered" />
          <p className="text-red-500">{errors.name?.message}</p>
        </div>
        <div className='form-control mt-5'>
          <button className='btn w-full' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
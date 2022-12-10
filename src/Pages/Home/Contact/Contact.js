import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (value) => {
    console.log(value);
  }

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input {...register("name", { required: "Please enter your name" })} type="text" placeholder="password" className="input input-bordered" />
          <p className="text-red-500">{errors.name?.message}</p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
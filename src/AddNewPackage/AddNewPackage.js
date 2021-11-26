import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewPackage.css'

const AddNewPackage = () => {
         const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

         const onSubmit = data => {
                  console.log(data)
                  fetch('https://powerful-sierra-60610.herokuapp.com/addPackage',{
                           method:"POST",
                           headers:{'content-Type' : 'application/json'},
                           body: JSON.stringify(data)
                  })
                  .then(res => res.json())
                  .then(result => console.log(result))


                  reset();
         };

         console.log(watch("example")); 
         return (
                  <div className="d-flex justify-content-center">
                        <div className="w-50 mt-4 mb-3">
                  <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
                  <input placeholder="Package Name" {...register("name")} />
                  <input placeholder="Day You Stay" {...register("duration")} />
                  <input type="number" placeholder="Price" {...register("price", { required: true })} />
                  <input placeholder="Leave Stars" {...register("rating", { required: true })} />
                  <input placeholder="Image" {...register("img", { required: true })} />
                  {errors.exampleRequired && <span>This field is required</span>}
                  
                  <input className="fw-bolder fs-5" type="submit" />
                  </form>
                  </div>    
                  </div>
         );
};

export default AddNewPackage;
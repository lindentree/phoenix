import React,{ useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const DistressSMS = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
    
      <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
  
      <input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
      <input name="Developer" type="radio" value="No" ref={register({ required: true })}/>

      <input type="submit" />
    </form>

    )


}

export default DistressSMS;
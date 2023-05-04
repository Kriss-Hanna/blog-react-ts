import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios";

interface FormData {
  nameAuthor: string;
  email: string;
  message: string;
}
const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    await axios.post('http://localhost:8000/contact', data);   
    setIsSubmitting(false);
  };


  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>

      <TextField id="outlined-basic" label="Prénom" variant="outlined" {...register("nameAuthor", { required: true })}  />
      {errors.nameAuthor && <span>Ce champ est requis</span>}

      <TextField id="outlined-basic" label="Email" variant="outlined"   type="email"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        })} />
      {errors.email && errors.email.type === "required" && (
        <span>Ce champ est requis</span>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <span>Ce champ doit être une adresse email valide</span>
      )}

      <TextField multiline aria-multiline minRows={10}  label="Dites moi tout"  {...register("message", { required: true })} />
      {errors.message && <span>Ce champ est requis</span>}

      <button type="submit" disabled={isSubmitting}>
        Envoyer
      </button>
    </form>
  );
};

export default Contact;

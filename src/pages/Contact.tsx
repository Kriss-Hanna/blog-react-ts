import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import TextField from '@mui/material/TextField';

interface FormData {
  firstName: string;
  lastName: string;
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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setIsSubmitting(true);
    console.log(data); 
    setIsSubmitting(false);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>


      <TextField id="outlined-basic" label="Prénom" variant="outlined" {...register("firstName", { required: true })}  />
      {errors.firstName && <span>Ce champ est requis</span>}

      <TextField id="outlined-basic" label="Nom" variant="outlined" {...register("lastName", { required: true })} />
      {errors.lastName && <span>Ce champ est requis</span>}

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



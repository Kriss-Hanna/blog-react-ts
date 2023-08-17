import React from 'react'

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

interface FormData {
  title: string;
  imageurl: string;
  link: string;
  description: string;
  post: string;
}
const PostArticle = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    await axios.post('http://localhost:8000/posts', data);
    toast('Article posté !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setIsSubmitting(false);
    reset();
  };

  return (
    <>
    <ToastContainer />
    <h2>Ecrire un article</h2>
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>

      <TextField style={{margin:"1em 0"}} id="outlined-basic" label="Titre" variant="outlined" {...register("title", { required: true })}  />
      {errors.title && <span>Ce champ est requis</span>}

      <TextField style={{margin:"1em 0"}} id="outlined-basic" label="Image de l'article" variant="outlined" {...register("imageurl", { required: true })}  />
      {errors.imageurl && <span>Ce champ est requis</span>}

      <TextField style={{margin:"1em 0"}} id="outlined-basic" label="id url" variant="outlined" {...register("link", { required: true })}  />
      {errors.link && <span>Ce champ est requis</span>}

      <TextField style={{margin:"1em 0"}} id="outlined-basic" label="Description" variant="outlined" {...register("description", { required: true })}  />
      {errors.description && <span>Ce champ est requis</span>}


      <TextField style={{margin:"1em 0"}} multiline aria-multiline minRows={10}  label="Ecris ton article"  {...register("post", { required: true })} />
      {errors.post && <span>Ce champ est requis</span>}

      <button type="submit" disabled={isSubmitting}>
        Envoyer
      </button>
    </form>
    </>
  );
};




export default PostArticle

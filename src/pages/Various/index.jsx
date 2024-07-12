// CommentForm.js
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Various = () => {

  const commentSchema = z.object({
    comment: z.string().min(1, { message: "Comment cannot be empty" })
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle your submit logic here
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" {...register("comment")} />
        {errors.comment && <p>{errors.comment.message}</p>}
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default Various;

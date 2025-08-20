import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid Email Pattern")
    .required("Email is required"),
  message: yup.string().required(),
});

const ContactForm = () => {
  const form = useForm<ContactForm>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });
  const Submitter = (data: ContactForm) => {
    console.log(data);
  };

  const { register, formState, handleSubmit, trigger } = form;
  const { errors } = formState;
  return (
    <div>
      <form onSubmit={handleSubmit(Submitter)}>
        <div className="form-control">
          <label htmlFor="name"> Name </label>
          <input type="text" id="name" {...register("name", {})} />

          <p className="error">{errors.name?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email"> Email </label>
          <input type="text" id="email" {...register("email", {})} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="message"> Message </label>
          <input type="text" id="message" {...register("message", {})} />
          <p className="error">{errors.message?.message}</p>
        </div>
        <button> Submit </button>
        <button type="button" onClick={() => trigger("email")}>
          {" "}
          Validate
        </button>
      </form>

      {/* <TextField label="name" type="text" {...register("name")}></TextField>
      <TextField label="email" type="text" {...register("email")}></TextField>
      <TextField
        label="message"
        type="text"
        {...register("message")}
      ></TextField> */}
    </div>
  );
};

export default ContactForm;

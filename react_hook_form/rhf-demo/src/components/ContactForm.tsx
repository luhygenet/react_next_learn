import { useForm } from "react-hook-form";
type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const form = useForm<ContactForm>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const Submitter = (data: ContactForm) => {
    console.log(data);
  };
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;
  return (
    <div>
      <form onSubmit={handleSubmit(Submitter)}>
        <div className="form-control">
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />

          <p className="error">{errors.name?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email"> Email </label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid Pattern",
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="message"> Message </label>
          <input
            type="text"
            id="message"
            {...register("message", {
              required: {
                value: true,
                message: "Message is required",
              },
            })}
          />
          <p className="error">{errors.message?.message}</p>
        </div>
        <button> Submit </button>
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

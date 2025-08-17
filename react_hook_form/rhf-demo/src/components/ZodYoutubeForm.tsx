import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type formvals = {
  username: string;
  email: string;
  channel: string;
};

const schema = z.object({
  username: z.string().nonempty("Username is required"),
  email: z.string().nonempty("Email is required").email("Email is not valid"),
  channel: z.string().nonempty("Channel is required"),
});

let renderCount = 0;
const ZodYoutubeForm = () => {
  const form = useForm<formvals>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
    resolver: zodResolver(schema),
  });
  const { handleSubmit, register, formState } = form;
  const { errors } = formState;

  const OnSubmit = (data: formvals) => {
    console.log("Data", data);
  };
  renderCount++;
  return (
    <div>
      <h1>Zod youtubeform {renderCount / 2}</h1>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
          <p className="error">{errors.username?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel")} />
          <p className="error">{errors.channel?.message}</p>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ZodYoutubeForm;

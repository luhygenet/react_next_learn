import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type formvals = {
  username: string;
  email: string;
  channel: string;
};
const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .trim()
    .email("Invalid email")
    .required("Email is required")
    .notOneOf(["admin@gmail.com"], "This is an admin email")
    .test("blacklist", "This user is blacklisted", (val) =>
      val ? !val.toLowerCase().endsWith("blacklist.com") : true
    )
    .test("exists", "email already exists", async (val) => {
      if (!val) return true;
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?email=${val}`
      );
      const data = await response.json();
      return data.length == 0;
    }),
  channel: yup.string().required("Channel is required"),
});
let renderCount = 0
const YupYoutubeForm = () => {
  const form = useForm<formvals>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
    resolver: yupResolver(schema),
  });
  const { handleSubmit, register, formState } = form;
  const { errors } = formState;

  const OnSubmit = (data: formvals) => {
    console.log("Data", data);
  };
  renderCount ++ 
  return (
    <div>
      <h1>Yup youtubeform {renderCount/2}</h1>
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

export default YupYoutubeForm;

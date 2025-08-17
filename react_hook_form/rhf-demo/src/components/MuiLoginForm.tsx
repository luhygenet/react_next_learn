import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type Formvalues = {
  email: string;
  password: string;
};
const MuiLoginForm = () => {
  const form = useForm<Formvalues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const OnSubmit = (data: Formvalues) => {
    console.log(data);
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(OnSubmit)} noValidate>
        <Stack spacing={2} width={400}>
          <TextField
            label="Email"
            type="email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          ></TextField>
          <TextField
            label="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          ></TextField>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
      <DevTool control={control}></DevTool>
    </>
  );
};

export default MuiLoginForm;

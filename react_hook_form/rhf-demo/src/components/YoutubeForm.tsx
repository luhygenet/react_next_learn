import { useForm, useFieldArray, type FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  pnNums: {
    number: string;
  }[];
  age: Number;
  dob: Date;
};

let rendercount = 0;

const YoutubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "user",
      email: "ema",
      channel: "chan",
      social: {
        twitter: "twit",
        facebook: "face",
      },
      phoneNumbers: ["097", "39U4"],
      pnNums: [{ number: "279" }],
      age: 0,
      dob: new Date(),
    },
   
    // defaultValues: async () => {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    //   const data = await response.json()

    //   return {
    //     username: "batman",
    //     email: data.email,
    //     channel: ""
    //   }
    // }
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
    trigger,
  } = form;
  const {
    errors,
    // touchedFields,
    // dirtyFields,
    isDirty,
    isValid,
    isSubmitSuccessful,
    // isSubmitted,
    isSubmitting,
    // submitCount,
  } = formState;
  // console.log(touchedFields, dirtyFields, isDirty);
  console.log(isValid);
  const { fields, append, remove } = useFieldArray({ name: "pnNums", control });

  const onSubmi = (data: FormValues) => {
    console.log("btton was clicked", data);
  };

  const handleGetValues = () => {
    console.log("Gotten Values", getValues("social"));
  };

  const handleSetValues = () => {
    setValue("username", "", {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  const onErrorhandler = (errors: FieldErrors<FormValues>) => {
    console.log("Form errors", errors);
  };

  // useEffect(() => {
  //   const subscription = watch((value) => {
  //     console.log(value.username);
  //   });
  //   return () => subscription.unsubscribe();
  // }, [watch]);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  //let watchForm = watch()
  rendercount++;
  // const { name, ref, onBlur,onChange} = register("username") we can simplify this by directly spreading the register method on the form control
  return (
    <div>
      <h1>YouTube Form {rendercount / 2}</h1>
      <form onSubmit={handleSubmit(onSubmi, onErrorhandler)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: { value: true, message: "Username is required" },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              setValueAs: (val) => val.trim(),
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              validate: {
                notadmin: (fieldval) => {
                  return (
                    fieldval.trim().toLowerCase() !== "admin@gmail.com" ||
                    "This is an admin email"
                  );
                },
                blackList: (fieldval) => {
                  return (
                    !fieldval.trim().toLowerCase().endsWith("baddomain.com") ||
                    "This user is blacklisted"
                  );
                },
                existsValidate: async (fieldval) => {
                  const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${fieldval}`
                  );
                  const data = await response.json();
                  return data.length === 0 || "Email already exists";
                },
              },
            })}
          />
          <p className="error">{errors.email?.message as string}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", { required: "Channel name is required" })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="twitter">twitter</label>
          <input
            type="text"
            id="twitter"
            {...register("social.twitter", {
              disabled: watch("channel") === "",
              required: {
                value: true,
                message: "Twitter is necessary",
              },
            })}
          />
        </div>
        <p className="error">{errors.social?.twitter?.message}</p>

        <div className="form-control">
          <label htmlFor="facebook">facebook</label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook", {
              required: { value: true, message: "facebook is necessary" },
            })}
          />
        </div>
        <p className="error">{errors.social?.facebook?.message}</p>

        <div className="form-control">
          <label htmlFor="primary">primary</label>
          <input
            type="text"
            id="primary"
            {...register("phoneNumbers.0", {
              required: {
                value: true,
                message: "Primary phone number is required",
              },
            })}
          />
        </div>
        <p className="error">{errors.phoneNumbers?.[0]?.message}</p>

        <div className="form-control">
          <label htmlFor="secondary">secondary</label>
          <input type="text" id="secondary" {...register("phoneNumbers.1")} />
        </div>
        <p className="error">{errors.phoneNumbers?.[1]?.message}</p>
        <div>
          <label>List of Phone Numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div className="form-control" key={field.id}>
                  <input
                    type="text"
                    {...register(`pnNums.${index}.number` as const)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
            <button type="button" onClick={() => append({ number: "" })}>
              {" "}
              Add a phone number
            </button>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: { value: true, message: "Age is required" },
            })}
          />
          <p className="error">{errors.age?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="text"
            id="dob"
            {...register("dob", {
              valueAsDate: true,
              required: { value: true, message: "Date of birth is required" },
            })}
          />
          <p className="error">{errors.dob?.message}</p>
        </div>
        <button disabled={!isDirty || isSubmitting}>Submit</button>
        <button type="button" onClick={handleGetValues}>
          Get Values
        </button>
        <button type="button" onClick={handleSetValues}>
          Set Values
        </button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <button type="button" onClick={() => trigger("email")}>
          Vaildate
        </button>
      </form>
      <DevTool control={control}></DevTool>
    </div>
  );
};

export default YoutubeForm;

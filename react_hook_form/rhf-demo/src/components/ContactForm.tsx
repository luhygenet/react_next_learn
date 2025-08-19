import React from "react";
import { useForm } from "react-hook-form";
type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const form = useForm<ContactForm>(
    {
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    }
  );
  return 
  <div>
    
    

  </div>;
};

export default ContactForm;

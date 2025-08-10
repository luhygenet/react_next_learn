// ContactWrapper.jsx
import { useParams } from "react-router-dom";
import Contact from "./contact";

export default function ContactWrapper() {
  const { contactId } = useParams();
  return <Contact key={contactId} />;
}

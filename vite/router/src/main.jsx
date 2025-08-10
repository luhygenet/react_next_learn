import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import Error from "./error-page";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import Index from "./routes/index";

import ContactWrapper from "./routes/contactWrapper";
import ErrorPage from "./error-page";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<Error />}
      loader={rootLoader}
      action={rootAction}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId"
          element={<ContactWrapper />}
          loader={contactLoader}
        />

        <Route path="contacts/:contactId/destroy" action={destroyAction} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//  {
//     path: "/",
//     element: <Root />,
//     errorElement: <Error />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [{
//       errorElement : <ErrorPage/>,
//       children:
//       [
//       { index: true, element: <Index /> },
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//         loader: contactLoader,
//         action: contactAction
//       },
//       {
//         path: "contacts/:contactId/edit",
//         element: <EditContact />,
//         loader: contactLoader,
//         action: editAction,
//       },
//       {
//         path: "contacts/:contactId",
//         element: <ContactWrapper />,
//         loader: contactLoader,
//       },
//       {
//         path: "contacts/:contactId/destroy",
//         action: destroyAction,
//         errorElement: <div>Oops! There was an error.</div>,
//       },]
//     }],
//   },

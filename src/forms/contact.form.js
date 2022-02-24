import React from 'react';
import { Formik, Field } from 'formik';
import { contactValidator } from '../validations/contact.validation';

const ContactForm = (props) => {
  console.log(props);

  const contactId = props.contactId ? props.contactId : null;

  return (
    <Formik
      initialValues={{
        name: props.data ? props.data.name : "",
        email: props.data ? props.data.email : "",
        phone: props.data ? props.data.phone : "",
      }}
      onSubmit={(values, actions) => {
        props.handleSubmit({
          ...values,
          id: Math.floor((Math.random() * 1000) + 1)
        }, contactId);
      }}
      validationSchema={contactValidator.contactCreate}
      render={({ errors, touched, isSubmitting, handleSubmit, values }) => (
        <form className="user" autoComplete="false" onSubmit={handleSubmit} noValidate>
          {/* {err && <span className="main-error">{err.message}</span>} */}
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control"
              placeholder="Name"
              autoComplete="off"
              name="name" />
            <div className="error-box"><span className={"error " + (errors.name && touched.name ? "show" : "")}>{errors.name}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control"
              placeholder="Email"
              autoComplete="off"
              name="email" />
            <div className="error-box"><span className={"error " + (errors.email && touched.email ? "show" : "")}>{errors.email}</span></div>
          </div>
          <div className="form-group">
            <Field
              component="input"
              type="text"
              className="form-control"
              placeholder="Phone"
              autoComplete="off"
              name="phone" />
            <div className="error-box"><span className={"error " + (errors.phone && touched.phone ? "show" : "")}>{errors.phone}</span></div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-user btn-block"
            disabled={isSubmitting}>{props.data ? "Update" : "Create"}</button>
        </form >
      )} />
  );
}

export default ContactForm;
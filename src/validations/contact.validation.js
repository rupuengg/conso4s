import * as Yup from 'yup';

const contactCreate = Yup.object().shape({
  // employee_id: Yup.string().required("Employee is required"),
  // id: Yup.string().required("Contact is required"),
  name: Yup.string().required("Name is mandatory"),
  email: Yup.string().required("Email is mandatory"),
  phone: Yup.string().required("Phone is mandatory")
});

export const contactValidator = {
  contactCreate
};
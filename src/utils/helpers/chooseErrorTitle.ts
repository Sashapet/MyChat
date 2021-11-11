import { FormikErrors } from 'formik';

interface FormValues {
  firstname: string;
  lastname: string;
  country: string;
  city: string;
  profession: string;
  company: string;
}

export const chooseErrorTitle = (errors: FormikErrors<FormValues>) => {
  // ERROR OBJ
  const errorState = {
    firstname: errors.firstname ? errors.firstname : '',
    lastname: errors.lastname ? errors.lastname : '',
    country: errors.country ? errors.country : '',
    city: errors.city ? errors.city : '',
    profession: errors.profession ? errors.profession : '',
    company: errors.company ? errors.company : '',
  };
  let error = '';
  if (errorState.firstname) {
    error = errorState.firstname;
  } else if (errorState.lastname) {
    error = errorState.lastname;
  } else if (errorState.country) {
    error = errorState.country;
  } else if (errorState.city) {
    error = errorState.city;
  } else if (errorState.profession) {
    error = errorState.profession;
  } else if (errorState.company) {
    error = errorState.company;
  }
  return error;
};

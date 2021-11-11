import * as yup from 'yup';

const letterRegex = /^[aA-zZ\s]+$/;

export const newRecordSchema = yup.object().shape({
  firstname: yup
    .string()
    .max(15, 'first name must be at most 15 characters')
    .required('first name is a required field')
    .matches(letterRegex, 'only alphabets are allowed for first name field'),
  lastname: yup
    .string()
    .max(15, 'last name must be at most 15 characters')
    .required('last name is a required field')
    .matches(letterRegex, 'only alphabets are allowed for last name field'),
  country: yup
    .string()
    .max(20, 'country must be at most 20 characters')
    .required('country is a required field')
    .matches(letterRegex, 'only alphabets are allowed for country field'),
  city: yup
    .string()
    .max(25, 'city must be at most 25 characters')
    .required('city is a required field')
    .matches(letterRegex, 'only alphabets are allowed for city field'),
  profession: yup.string().max(15, 'profession must be at most 15 characters'),
  company: yup.string().max(25, 'company must be at most 25 characters'),
});

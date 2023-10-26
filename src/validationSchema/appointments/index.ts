import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  appointment_date: yup.date().required(),
  patient_id: yup.string().nullable().required(),
  doctor_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});

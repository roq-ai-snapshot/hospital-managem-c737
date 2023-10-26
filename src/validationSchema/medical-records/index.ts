import * as yup from 'yup';

export const medicalRecordValidationSchema = yup.object().shape({
  diagnosis: yup.string().required(),
  prescription: yup.string().required(),
  patient_id: yup.string().nullable().required(),
  doctor_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});

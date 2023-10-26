import { PatientInterface } from 'interfaces/patient';
import { DoctorInterface } from 'interfaces/doctor';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MedicalRecordInterface {
  id?: string;
  patient_id: string;
  doctor_id: string;
  diagnosis: string;
  prescription: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  patient?: PatientInterface;
  doctor?: DoctorInterface;
  user?: UserInterface;
  _count?: {};
}

export interface MedicalRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  doctor_id?: string;
  diagnosis?: string;
  prescription?: string;
  user_id?: string;
}

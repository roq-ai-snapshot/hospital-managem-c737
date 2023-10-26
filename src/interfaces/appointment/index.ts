import { PatientInterface } from 'interfaces/patient';
import { DoctorInterface } from 'interfaces/doctor';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  appointment_date: any;
  patient_id: string;
  doctor_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  patient?: PatientInterface;
  doctor?: DoctorInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  doctor_id?: string;
  user_id?: string;
}

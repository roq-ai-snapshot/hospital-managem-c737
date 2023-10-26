import { AppointmentInterface } from 'interfaces/appointment';
import { MedicalRecordInterface } from 'interfaces/medical-record';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  first_name: string;
  last_name: string;
  dob: any;
  gender: string;
  contact_number: string;
  address: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  medical_record?: MedicalRecordInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    medical_record?: number;
  };
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  contact_number?: string;
  address?: string;
  user_id?: string;
}

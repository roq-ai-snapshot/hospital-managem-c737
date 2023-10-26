import { AppointmentInterface } from 'interfaces/appointment';
import { MedicalRecordInterface } from 'interfaces/medical-record';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DoctorInterface {
  id?: string;
  first_name: string;
  last_name: string;
  specialization: string;
  contact_number: string;
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

export interface DoctorGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  specialization?: string;
  contact_number?: string;
  user_id?: string;
}

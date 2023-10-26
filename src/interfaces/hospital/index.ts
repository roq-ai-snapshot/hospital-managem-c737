import { GetQueryInterface } from 'interfaces';

export interface HospitalInterface {
  id?: string;
  description?: string;
  location?: string;
  contact_number?: string;
  opening_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;

  _count?: {};
}

export interface HospitalGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  contact_number?: string;
  opening_hours?: string;
  name?: string;
  tenant_id?: string;
}

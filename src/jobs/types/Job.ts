export interface JobType {
  id: string;
  company: string;
  address: string;
  phone: string;
  postalZip: string;
  region: string;
  country: string;
  latlng: string;
  urgent_hire: boolean;
  available_until: string;
  title: string;
  summary: string;
  amount_min: number;
  amount_max: number;
  apply_url: string;
  type: string;
  level: string;
  engagement_type: string;
  date_posted: string;
  url: string;
}

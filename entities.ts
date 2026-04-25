export interface Location {
  locationId?: number;
  locationName: string;
  locationAddres: string;
  locationLatLong: number[];
  manager?: Manager;
  region?: any;
  employees?: Employee[];
  //   manager: Manager;
  //   region: Region;
  //   employees: Employee[];
}

export interface Employee {
  employeeId: string;
  employeeName: string;
  employeeLastName: string;
  employeePhoneNumber: string;
  employeeEmail: string;
  employeePhotoUrl?: string;
  location?: Location;
  user?: any;
}

export interface Manager {
  managerId: string;
  managerFullname: string;
  managerSalary: number;
  managerEmail: string;
  managerPhoneNumber: string;
  location?: Location;
  user?: any;
}

export interface Provider {
  providerId: string;
  providerName: string;
  providerEmail: string;
  providerPhoneNumber?: string;
  products?: Product[];
}

export interface Product {
  productId: string;
  productName: string;
  price: number;
  countSeal: number;
  provider: Provider;
}

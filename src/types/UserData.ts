export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  shippingAddress: {
    street: string;
    city: string;
    area: string;
    zipCode: string;
  };
}

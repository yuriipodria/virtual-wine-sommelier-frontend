export interface User {
  id: number;
  email: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  lastName: string;
  shippingAddress: {
    street: string;
    city: string;
    area: string;
    zipCode: string;
  };
}

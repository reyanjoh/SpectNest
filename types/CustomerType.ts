export type CustomerType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  loyaltyPoints: number;
  totalOrders: number;
  totalSpent: number;
  preferences?: string[]; //CustomerPreferences
  createdAt: Date;
  lastOrderDate?: Date;
};

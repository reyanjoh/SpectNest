export type CustomerPreferences = {
  favoriteProducts?: string[];
  dietaryRestrictions?: string[];
  specialOccasions?: string[];
  preferredContactMethod?: "email" | "sms" | "phone";
};

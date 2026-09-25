export type Service = {
  name: string;
  price: number;
  description: string;
  duration?: string;
  benefits?: string[];
  includes?: string[];
  details?: string;
};

export type ServiceCategory = {
  id: string;
  number: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [];

export const formatPrice = (price: number) =>
  `₦${price.toLocaleString("en-NG")}`;

export const serviceSlug = (name: string) =>
  name
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

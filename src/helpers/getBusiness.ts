import { IBusiness, IBusinessName } from "interfaces/IBusiness.interface";
import { v4 as uuid } from "uuid";
const businesss: IBusiness[] = [
  //This would be a simulation of a database.
  {
    id: "59892075-cfa8-41f7-b3ff-e6d101533ff7",
    name: "KredFeed",
    email: "contacto@kredfeed.com",
    dateCreated: "2021-08-01",
    address: {
      street: "Main St",
      streetNumber: "123",
      city: "New York",
      state: "NY",
      unitNumber: "123",
      zipCode: "12345",
      colony: "Colonia 1",
      municipality: "Municipio 1",
      country: "Mexico",
    },
    userRepresentative: "e41333c-0847-4add-8a40-b2bd7d5388f5",
  },
];

// We have some methods that the backend would have to provide us with.
export const getBusiness = () => businesss;

export const getBusinessName = () => {
  const businessName = businesss.map<IBusinessName>((business) => {
    // As we want to minimize the amount of data we send to the frontend, we only send the id and the name of the business.
    return {
      id: business.id,
      name: business.name,
    };
  });
  return businessName;
};

export const getBusinessByUser = (id: string) => {
  const business = businesss.find(
    (business) => business.userRepresentative === id
  );

  return business;
};

export const getBusinessByID = (id: string) => {
  const business = businesss.find((business) => business.id === id);

  return business;
};

export const addBusiness = (business: IBusiness) => {
  businesss.push(business);
};

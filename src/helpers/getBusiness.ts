import { IBusiness, IBusinessName } from "interfaces/IBusiness.interface";

// We have some methods that the backend would have to provide us with.
export const getBusiness = () =>
  JSON.parse(localStorage.getItem("business")!) as IBusiness[];

export const getBusinessName = () => {
  const business = getBusiness();

  const businessName = business.map<IBusinessName>((business) => {
    // As we want to minimize the amount of data we send to the frontend, we only send the id and the name of the business.
    return {
      id: business.id,
      name: business.name,
    };
  });
  return businessName;
};

export const getBusinessByUser = (id: string) => {
  const business = getBusiness();
  const businessId = business.find(
    (business) => business.userRepresentative === id
  );

  return businessId;
};

export const setUserRepresentative = (id: string, userID: string) => {
  let business = getBusiness();
  const businessSpecific = business.map((business) => {
    if (business.id === id) {
      business.userRepresentative = userID;
    }
    return business;
  });
  localStorage.setItem("business", JSON.stringify(businessSpecific));
};

export const getBusinessByID = (id: string) => {
  const business = getBusiness();
  return business.find((business) => business.id === id);
};

export const addBusiness = (business: IBusiness) => {
  const businessList = getBusiness();
  businessList.push(business);
  localStorage.setItem("business", JSON.stringify(businessList));
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import request, { gql } from "graphql-request"

export interface CarProps {
    id: string;
    name: string;
    price: number;
    carAvg: number;
    carBrand : string,
    carType : 'automatic' | 'manual',
    createdAt?: string;
    publishedAt?: string;
    updatedAt?: string;
    image: {
        fileName: string;
        id: string;
        url: string;
    };
}
export interface AddressProps {
    address: string
}
interface CreateBookingProps {
  username: string;
  email: string;
  contactNumber: string;
  dropoffDate: string;
  dropoffTime: string;
  pickupDate: string;
  pickupTime: string;
  carList: {
    connect : {
      id:string
    }
  };
  id? : string
}

export const getCardsList = async (): Promise<CarProps[]> => {
    const query = gql`
    query CarLists {
          carLists {
                  id
                  name
                  price
                  carAvg
                  carBrand
                  carType
                  createdAt
                  publishedAt
                  updatedAt
                  image {
                    fileName
                    id
                   url
                 }
  }
}
    `
    const result = await request<{ carLists: CarProps[] }>(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`, query);
    return result.carLists;
}

export const getStoreLocations = async () => {
    const query = gql `
    query StoreLocations {
  storeLocations {
    address
  }
}
    `
    const result = await request<{storeLocations : AddressProps[]}>(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`, query)
    return result.storeLocations ;
}

export const createBooking = async (formValues : CreateBookingProps ) => {
  const mutation = gql `
  mutation createCarBooking {
  createBooking(
    data: 
    {
    username: "`+formValues.username+`", 
    email: "`+formValues.email+`",
    contactNumber: "`+formValues.contactNumber+`",
    dropoffDate: "`+formValues.dropoffDate+`",
    dropoffTime: "`+formValues.dropoffTime+`", 
    pickupDate: "`+formValues.pickupDate+`",
    pickupTime: "`+formValues.pickupTime+`",
    carList: {connect: {id: "`+formValues.carList?.connect.id+`"}}}
  ) {
    id
  }
}
  `

  const variables = { data: formValues };

  try {
    const response = await request(
      process.env.NEXT_PUBLIC_HYGRAPH_URL as string,
      mutation,
      variables,
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
      }
    );

    console.log("Mutation Response:", response);
    return response;
  } catch (error) {
    console.error("GraphQL Mutation Error:", error);
    if ((error as any)?.response) {
      console.error("Error Response:", JSON.stringify((error as any)?.response, null, 2));
    }
  }
}
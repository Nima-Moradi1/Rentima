import request, { gql } from "graphql-request"

interface Car {
    id: string;
    name: string;
    price: number;
    carAvg: number;
    carBrand : string,
    carType : 'automatic' | 'manual',
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
    image: {
        fileName: string;
        id: string;
        url: string;
    };
}

export const getCardsList = async (): Promise<Car[]> => {
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
    const result = await request<{ carLists: Car[] }>(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`, query);
    return result.carLists;
}
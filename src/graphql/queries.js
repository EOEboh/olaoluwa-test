import { gql } from "@apollo/client";

export const getAllProducts = gql`
  query getProducts {
    category {
      name
      products {
        name
        inStock
        category
        brand
        id
        gallery
        attributes {
          id
          name
          type
          items {
            id
            value
            displayValue
          }
        }
        prices {
          currency{
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;


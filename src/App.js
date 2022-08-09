import logo from './logo.svg';
import './App.css';

import {Query} from "@apollo/client/react/components";

import {
  getAllProducts,
  
} from '../src/graphql/queries';

function App() {
  return (
    <div className="App">
      <Query query={getAllProducts}>
      {({ loading, error, data }) => {
              if (loading) return <h2>Loading..</h2>;
              if (error) return <h2>Error: error</h2>;
              if (data) {
                // destructuring data
                const { products } = data.category;
                return (
                  <div>
                    {products.map((product) => (
                  <div key={product.id}>
                    {product.gallery}
                  </div>
                    ))}
                  </div>
                );
              }
            }}
      </Query>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Comp/Card';
import Data from './Comp/Data';
ReactDOM.render(
  <>
    {/* { */}
    {/* Data.map((data, index) => ( */}
    <div id='show'>
      <Card
        // key={index} // You should add a unique key prop when mapping over elements
        img={Data.products[0].images[0]}
        title={Data.products[0].title}
        category={Data.products[0].category}
        desc={Data.products[0].description}
        price={Data.products[0].price}
      />
      <Card
        // key={index} // You should add a unique key prop when mapping over elements
        img={Data.products[1].images[0]}
        title={Data.products[1].title}
        category={Data.products[1].category}
        desc={Data.products[1].description}
        price={Data.products[1].price}
      />
      <Card
        // key={index} // You should add a unique key prop when mapping over elements
        img={Data.products[2].images[0]}
        title={Data.products[2].title}
        category={Data.products[2].category}
        desc={Data.products[2].description}
        price={Data.products[2].price}
      />
      <Card
        // key={index} // You should add a unique key prop when mapping over elements
        img={Data.products[3].images[0]}
        title={Data.products[3].title}
        category={Data.products[3].category}
        desc={Data.products[3].description}
        price={Data.products[3].price}
      />
      <Card
        // key={index} // You should add a unique key prop when mapping over elements
        img={Data.products[4].images[0]}
        title={Data.products[4].title}
        category={Data.products[4].category}
        desc={Data.products[4].description}
        price={Data.products[4].price}
      />
      <Card
        // key={index} // You should add a unique key prop when mapping over elements
        img={Data.products[6].images[0]}
        title={Data.products[6].title}
        category={Data.products[6].category}
        desc={Data.products[6].description}
        price={Data.products[6].price}
      />
      <Card
        // key={index} // You should add a unique key prop when mapping over elements
        img={Data.products[7].images[0]}
        title={Data.products[7].title}
        category={Data.products[7].category}
        desc={Data.products[7].description}
        price={Data.products[7].price}
      />
      <Card
        // key={index} // You should add a unique key prop when mapping over elements
        img={Data.products[8].images[0]}
        title={Data.products[8].title}
        category={Data.products[8].category}
        desc={Data.products[8].description}
        price={Data.products[8].price}
      />
      <Card
        // key={index} // You should add a unique key prop when mapping over elements
        img={Data.products[9].images[0]}
        title={Data.products[9].title}
        category={Data.products[9].category}
        desc={Data.products[9].description}
        price={Data.products[9].price}
      />
      <Card
        // key={index} // You should add a unique key prop when mapping over elements
        img={Data.products[10].images[0]}
        title={Data.products[10].title}
        category={Data.products[10].category}
        desc={Data.products[10].description}
        price={Data.products[10].price}
      />
    </div>
    {/* )) */}
    {/* } */}
  </>
  , document.getElementById('root'));

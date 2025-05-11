import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'My first book',
    price: 5,
    description: 'First book I ever wrote'
  },
  {
    id: 'p2',
    title: 'My second book',
    price: 10,
    description: 'Second book I ever wrote'
  },
]

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}

      </ul>
    </section>
  );
};

export default Products;

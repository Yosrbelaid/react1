import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

function Product({ name, image, description, footerText }) {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer-custom">
        <small>{footerText}</small>
      </Card.Footer>
    </Card>
  );
}

function ProductList() {
  const products = [
    {
      name: 'Perfume',
      image: 'https://preview.redd.it/kayali-yum-boujee-marshmallow-81-v0-w5migi0i5azd1.jpg?width=1080&crop=smart&auto=webp&s=096a64bd2af5cd5a0872be4bbb1ad0adaf6f64d7', 
      description:
        'This fragrance blends the soft, sugary sweetness of cotton candy with the comforting warmth of fluffy marshmallows. Juicy berries and spun sugar dance at the top, while a creamy vanilla heart is wrapped in the softness of powdered sugar and marshmallow.',
      footerText: 'High quality only!',
    },
    {
      name: 'Makeup',
      image: 'https://images.ctfassets.net/wlke2cbybljx/QSFXGpqbBWm4avxuGL1u3/a7f1c2d7ddea2a8fd75a830a9e0eb636/ILIAP_AND_LIPSTICK.jpg', 
      description:
        'Each product is meticulously crafted using the finest ingredients, offering flawless application and long-lasting wear.',
      footerText: 'High quality only!',
    },
    {
      name: 'Skincare',
      image: 'https://res.cloudinary.com/fyne-associates-ltd/image/upload/c_limit,q_auto,w_1920/v1641902176/OX-magazine/articles/cgbc1i6g_eohu67.jpg', 
      description:
        'Packed with high-quality ingredients, our products work to hydrate, brighten, and support your skin’s natural balance.',
        footerText: 'High quality only!',
    },
  ];

  return (
    <CardGroup>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          image={product.image}
          description={product.description}
          footerText={product.footerText}
        />
      ))}
    </CardGroup>
  );
}

export default ProductList;


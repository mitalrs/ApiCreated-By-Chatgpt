const express = require('express');
const app = express();

// Define some sample property data
const properties = [
  {
    address: '123 Main St',
    price: 200000,
    type: 'sale',
    images: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg'
    ]
  },
  {
    address: '456 Elm St',
    price: 1000,
    type: 'rent',
    images: [
      'https://example.com/image3.jpg',
      'https://example.com/image4.jpg'
    ]
  }
];

// Define a route that takes a URL parameter as a string
app.get('/api/properties/:urlString', (req, res) => {
  const urlString = req.params.urlString;

  // Convert the URL string to real estate data
  const realEstateData = properties.map(property => {
    return {
      address: property.address,
      price: property.price,
      type: property.type,
      images: property.images.map(image => urlString + '/' + image)
    };
  });

  // Send the real estate data as the API response
  res.send(realEstateData);
});

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));

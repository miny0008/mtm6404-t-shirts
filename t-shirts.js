const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]


const { useState } = React;

function App() {
  const [tshirts, setTshirts] = useState([
    { title: 'Blue T-Shirt', image: '/images/blue-t-shirt.jpg', price: 7.99, stock: 4 },
    { title: 'Bright Purple T-Shirt', image: '/images/bright-purple-t-shirt.jpg', price: 5.99, stock: 1 },
    { title: 'Cobalt Blue T-Shirt', image: '/images/cobalt-blue-t-shirt.jpg', price: 9.99, stock: 5 },
    { title: 'Green T-Shirt', image: '/images/green-t-shirt.jpg', price: 6.99, stock: 0 },
    { title: 'Grey T-Shirt', image: '/images/blue-t-shirt.jpg', price: 4.99, stock: 2 },
    { title: 'Light Green T-Shirt', image: '/images/light-green-t-shirt.jpg', price: 7.99, stock: 4 },
    { title: 'Purple T-Shirt', image: '/images/purple-t-shirt.jpg', price: 7.99, stock: 0 },
    { title: 'Red T-Shirt', image: '/images/red-t-shirt.jpg', price: 6.99, stock: 3 },
    { title: 'Teal T-Shirt', image: '/images/teal-t-shirt.jpg', price: 7.99, stock: 2 }
  ]);

  function handlePurchase(index, quantity) {
    setTshirts((prevTshirts) =>
      prevTshirts.map((tshirt, i) =>
        i === index ? { ...tshirt, stock: tshirt.stock - quantity } : tshirt
      )
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>T-Shirt Store</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {tshirts.map((tshirt, index) => (
          <TShirtCard key={index} index={index} tshirt={tshirt} onBuy={handlePurchase} />
        ))}
      </div>
    </div>
  );
}

function TShirtCard({ tshirt, index, onBuy }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      width: '200px',
      textAlign: 'center',
      borderRadius: '10px'
    }}>
      <h3>{tshirt.title}</h3>
      <img src={tshirt.image} alt={tshirt.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <p>Price: ${tshirt.price.toFixed(2)}</p>
      {tshirt.stock > 0 ? (
        <>
          <p>Stock: {tshirt.stock}</p>
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {[...Array(tshirt.stock)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <button onClick={() => onBuy(index, quantity)} style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}>
            Buy
          </button>
        </>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>Out of Stock</p>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

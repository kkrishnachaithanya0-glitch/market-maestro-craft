import { ProductCard } from "./ProductCard";
import headphonesImg from "@/assets/product-headphones.jpg";
import smartwatchImg from "@/assets/product-smartwatch.jpg";
import laptopImg from "@/assets/product-laptop.jpg";
import cameraImg from "@/assets/product-camera.jpg";
import speakerImg from "@/assets/product-speaker.jpg";
import phoneImg from "@/assets/product-phone.jpg";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones with Noise Cancellation",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.5,
    reviewCount: 1248,
    image: headphonesImg,
  },
  {
    id: 2,
    name: "Smart Watch - Fitness Tracker with Heart Rate Monitor",
    price: 149.99,
    originalPrice: 249.99,
    rating: 4.3,
    reviewCount: 856,
    image: smartwatchImg,
  },
  {
    id: 3,
    name: "Gaming Laptop - High Performance RGB Keyboard",
    price: 1299.99,
    originalPrice: 1599.99,
    rating: 4.7,
    reviewCount: 423,
    image: laptopImg,
  },
  {
    id: 4,
    name: "Professional DSLR Camera with 24MP Sensor",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.8,
    reviewCount: 634,
    image: cameraImg,
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker - Waterproof Design",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.4,
    reviewCount: 2145,
    image: speakerImg,
  },
  {
    id: 6,
    name: "Latest Smartphone - 5G Enabled with Triple Camera",
    price: 799.99,
    originalPrice: 999.99,
    rating: 4.6,
    reviewCount: 1876,
    image: phoneImg,
  },
  {
    id: 7,
    name: "Premium Wireless Headphones - Studio Quality",
    price: 249.99,
    rating: 4.5,
    reviewCount: 945,
    image: headphonesImg,
  },
  {
    id: 8,
    name: "Ultra Smart Watch - Advanced Health Tracking",
    price: 299.99,
    rating: 4.7,
    reviewCount: 567,
    image: smartwatchImg,
  },
];

export const ProductGrid = () => {
  return (
    <section className="py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Featured Products</h2>
        <p className="text-muted-foreground">Discover our best deals and top-rated items</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

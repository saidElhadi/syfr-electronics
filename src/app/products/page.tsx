"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductSearch from "@/components/ProductSearch";
import {
  getProducts,
  getProduct,
  getParts,
  getPart,
  getProductCategories,
  getPartsCategories,
  type Product,
  type Part,
} from "@/lib/api";

export default function Products() {
  const [tab, setTab] = useState<"products" | "parts">("products");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [items, setItems] = useState<Product[] | Part[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [productCategories, setProductCategories] = useState<{ id: string; name: string; slug: string }[]>([]);
  const [partCategories, setPartCategories] = useState<{ id: string; name: string; slug: string }[]>([]);

  const dummyProducts: Product[] = [
    {
      id: "1",
      name: "Smartphone X1",
      description: "A high-end smartphone with a stunning display and long battery life.",
      category: "Phones",
      price: 799,
      images: ["/file.svg"],
      specifications: { Display: "6.5\" OLED", Battery: "5000mAh" },
      inStock: true,
      featured: true,
      tags: ["new", "hot"],
      createdAt: "2024-01-01",
      updatedAt: "2024-01-10"
    },
    {
      id: "2",
      name: "Wireless Earbuds",
      description: "Crystal clear sound and noise cancellation.",
      category: "Audio",
      price: 129,
      images: ["/file.svg"],
      specifications: { Battery: "24h", Bluetooth: "5.2" },
      inStock: true,
      featured: false,
      tags: ["audio"],
      createdAt: "2024-01-02",
      updatedAt: "2024-01-11"
    },
    {
      id: "3",
      name: "Gaming Laptop",
      description: "Powerful performance for gaming and productivity.",
      category: "Computers",
      price: 1499,
      images: ["/file.svg"],
      specifications: { CPU: "Intel i7", RAM: "16GB", Storage: "1TB SSD" },
      inStock: true,
      featured: true,
      tags: ["gaming", "laptop"],
      createdAt: "2024-01-03",
      updatedAt: "2024-01-12"
    },
    {
      id: "4",
      name: "Smartwatch Pro",
      description: "Track your health and notifications on the go.",
      category: "Wearables",
      price: 249,
      images: ["/file.svg"],
      specifications: { Display: "1.5\" AMOLED", Battery: "2 days" },
      inStock: true,
      featured: false,
      tags: ["wearable", "health"],
      createdAt: "2024-01-04",
      updatedAt: "2024-01-13"
    },
    {
      id: "5",
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass.",
      category: "Audio",
      price: 89,
      images: ["/file.svg"],
      specifications: { Battery: "20h", Bluetooth: "5.0" },
      inStock: true,
      featured: false,
      tags: ["audio", "portable"],
      createdAt: "2024-01-05",
      updatedAt: "2024-01-14"
    },
    {
      id: "6",
      name: "4K Monitor",
      description: "Ultra HD display for professionals.",
      category: "Monitors",
      price: 399,
      images: ["/file.svg"],
      specifications: { Resolution: "3840x2160", Size: "27\"" },
      inStock: true,
      featured: true,
      tags: ["monitor", "4k"],
      createdAt: "2024-01-06",
      updatedAt: "2024-01-15"
    },
    {
      id: "7",
      name: "Mechanical Keyboard",
      description: "Tactile keys for fast typing.",
      category: "Accessories",
      price: 99,
      images: ["/file.svg"],
      specifications: { Switches: "Cherry MX Brown", RGB: "Yes" },
      inStock: true,
      featured: false,
      tags: ["keyboard", "mechanical"],
      createdAt: "2024-01-07",
      updatedAt: "2024-01-16"
    },
    {
      id: "8",
      name: "Drone Cam",
      description: "Capture stunning aerial footage.",
      category: "Cameras",
      price: 599,
      images: ["/file.svg"],
      specifications: { Camera: "4K", FlightTime: "30min" },
      inStock: true,
      featured: true,
      tags: ["drone", "camera"],
      createdAt: "2024-01-08",
      updatedAt: "2024-01-17"
    },
    {
      id: "9",
      name: "VR Headset",
      description: "Immersive virtual reality experience.",
      category: "Gaming",
      price: 349,
      images: ["/file.svg"],
      specifications: { Resolution: "1832x1920 per eye", RefreshRate: "90Hz" },
      inStock: true,
      featured: false,
      tags: ["vr", "gaming"],
      createdAt: "2024-01-09",
      updatedAt: "2024-01-18"
    },
  ];
  const dummyParts: Part[] = [
    {
      id: "101",
      name: "Resistor Pack",
      partNumber: "R-100",
      description: "Assorted resistors for electronics projects.",
      category: "Passive Components",
      compatibility: ["Arduino", "Raspberry Pi"],
      price: 9.99,
      specifications: { Resistance: "100Ω-1MΩ", Tolerance: "5%" },
      inStock: true,
      images: ["/file.svg"]
    },
    {
      id: "102",
      name: "Capacitor Set",
      partNumber: "C-200",
      description: "High-quality capacitors for repairs.",
      category: "Passive Components",
      compatibility: ["General"],
      price: 12.99,
      specifications: { Capacitance: "10uF-1000uF", Voltage: "16V" },
      inStock: false,
      images: ["/file.svg"]
    },
    {
      id: "103",
      name: "Microcontroller",
      partNumber: "MC-300",
      description: "Programmable microcontroller for DIY.",
      category: "ICs",
      compatibility: ["Arduino", "ESP32"],
      price: 19.99,
      specifications: { CPU: "32-bit", Speed: "240MHz" },
      inStock: true,
      images: ["/file.svg"]
    },
    {
      id: "104",
      name: "LED Strip",
      partNumber: "LS-400",
      description: "Flexible LED lighting for custom builds.",
      category: "Lighting",
      compatibility: ["General"],
      price: 29.99,
      specifications: { Length: "5m", Voltage: "12V" },
      inStock: true,
      images: ["/file.svg"]
    },
    {
      id: "105",
      name: "Switches",
      partNumber: "SW-500",
      description: "Durable switches for control panels.",
      category: "Switches",
      compatibility: ["General"],
      price: 14.99,
      specifications: { Type: "Tactile", Rating: "50mA 12V" },
      inStock: true,
      images: ["/file.svg"]
    },
    {
      id: "106",
      name: "Connectors",
      partNumber: "CN-600",
      description: "Various connectors for wiring.",
      category: "Connectors",
      compatibility: ["General"],
      price: 9.99,
      specifications: { Type: "JST", Pitch: "2.54mm" },
      inStock: true,
      images: ["/file.svg"]
    },
    {
      id: "107",
      name: "Sensors Kit",
      partNumber: "SK-700",
      description: "Sensors for robotics and automation.",
      category: "Sensors",
      compatibility: ["Arduino", "Raspberry Pi"],
      price: 49.99,
      specifications: { Types: "Temperature, Humidity, Motion", Interface: "I2C" },
      inStock: true,
      images: ["/file.svg"]
    },
    {
      id: "108",
      name: "Transistors",
      partNumber: "T-800",
      description: "NPN and PNP transistors pack.",
      category: "Transistors",
      compatibility: ["General"],
      price: 19.99,
      specifications: { Type: "NPN, PNP", Voltage: "60V" },
      inStock: true,
      images: ["/file.svg"]
    },
    {
      id: "109",
      name: "Diodes",
      partNumber: "D-900",
      description: "Assorted diodes for circuit protection.",
      category: "Diodes",
      compatibility: ["General"],
      price: 9.99,
      specifications: { Type: "Zener, Schottky", Voltage: "50V" },
      inStock: true,
      images: ["/file.svg"]
    },
  ];
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        // Try to fetch from API first, fallback to dummy data
        if (tab === "products") {
          const params: Record<string, any> = {};
          if (search) params.search = search;
          if (category) params.category_id = category;
          
          const data = await getProducts(params);
          setItems(data);
        } else {
          const params: Record<string, any> = {};
          if (search) params.search = search;
          if (category) params.category_id = category;
          
          const data = await getParts(params);
          setItems(data);
        }
      } catch (err) {
        console.error("API Error:", err);
        // Fallback to dummy data if API fails
        setError("Using demo data - API connection failed");
        setItems(tab === "products" ? dummyProducts : dummyParts);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [tab, search, category]);
  useEffect(() => {
    async function loadCategories() {
      try {
        const pc = await getProductCategories();
        const ptc = await getPartsCategories();
        setProductCategories(pc.map(c => ({ id: c.id, name: c.name, slug: c.slug })));
        setPartCategories(ptc.map(c => ({ id: c.id, name: c.name, slug: c.slug })));
      } catch (err) {
        console.error("Failed to load categories:", err);
        // Set empty arrays as fallback
        setProductCategories([]);
        setPartCategories([]);
      }
    }
    loadCategories();
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-10 bg-gray-50 dark:bg-gray-900">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Catalog Search</h1>

        {/* Search and Filter */}
        <ProductSearch
          tab={tab}
          setTab={setTab}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          productCategories={productCategories}
          partCategories={partCategories}
        />        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-yellow-100 dark:bg-yellow-900 border border-yellow-400 dark:border-yellow-600 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600 dark:text-gray-300">Loading...</span>
          </div>
        )}

        {/* Results Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {items.map((item) => (
              <Link
                key={item.id}
                href={tab === "products" ? `/products/${item.id}` : `/parts/${item.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-transform border border-gray-100 dark:border-gray-700 min-h-[420px]"
              >
                <div className="relative h-64 bg-gray-100 dark:bg-gray-700">
                  {item.images?.[0] ? (
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 7h18M3 12h18M3 17h18"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mt-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Category: {item.category}
                    </span>
                    {tab === 'products' && (item as Product).price != null && (
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        ${(item as Product).price!.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
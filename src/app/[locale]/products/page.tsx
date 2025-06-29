"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import ProductSearch from "@/components/ProductSearch";
import { useDirection } from '@/hooks/useDirection';
import {
  getProducts,
  getParts,
  getProductCategories,
  getPartsCategories,
  type Product,
  type Part,
  type PartImage,
} from "@/lib/api";

export default function Products() {
  const { isRTL } = useDirection();
  const [tab, setTab] = useState<"products" | "parts">("products");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [items, setItems] = useState<Product[] | Part[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [productCategories, setProductCategories] = useState<{ id: string; name: string; slug: string }[]>([]);  const [partCategories, setPartCategories] = useState<{ id: string; name: string; slug: string }[]>([]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
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
        setError("Failed to load data");
        setItems([]);
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
      <main className="max-w-7xl mx-auto">
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
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 rounded-lg">
            <p className="text-red-800 dark:text-red-200">{error}</p>
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
                      src={typeof item.images[0] === 'string' ? item.images[0] : item.images[0].url}
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
                    <h2 className={`text-lg font-bold text-gray-900 dark:text-white truncate ${isRTL ? 'text-right' : 'text-left'}`}>
                      {item.name}
                    </h2>
                    <p className={`text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mt-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {item.description}
                    </p>
                  </div>                  <div className={`mt-4 flex items-center ${isRTL ? 'justify-between flex-row-reverse' : 'justify-between'}`}>
                    <span className={`text-xs text-gray-500 dark:text-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}>
                      Category: {item.category}
                    </span>
                    <span className={`text-blue-600 dark:text-blue-400 font-semibold text-sm ${isRTL ? 'text-left' : 'text-right'}`}>
                      View Details
                    </span>
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

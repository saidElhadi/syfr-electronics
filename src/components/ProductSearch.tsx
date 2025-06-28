import React from "react";
import { useDirection } from '@/hooks/useDirection';

interface ProductSearchProps {
  tab: "products" | "parts";
  setTab: (tab: "products" | "parts") => void;
  search: string;
  setSearch: (s: string) => void;
  category: string;
  setCategory: (c: string) => void;
  productCategories: { id: string; name: string; slug: string }[];
  partCategories: { id: string; name: string; slug: string }[];
}

const ProductSearch: React.FC<ProductSearchProps> = ({
  tab,
  setTab,
  search,
  setSearch,
  category,
  setCategory,
  productCategories,
  partCategories,
}) => {
  const { isRTL } = useDirection();
  
  return (
    <div className="mb-8 flex flex-col gap-4">
      <div className="flex justify-center gap-2 mb-2">
        <button
          className={`px-4 py-2 ${isRTL ? 'rounded-r-lg' : 'rounded-l-lg'} border border-gray-300 dark:border-gray-700 focus:outline-none ${
            tab === "products"
              ? "bg-white dark:bg-gray-800 font-semibold"
              : "bg-gray-100 dark:bg-gray-700"
          }`}
          onClick={() => setTab("products")}
        >
          Products
        </button>
        <button
          className={`px-4 py-2 ${isRTL ? 'rounded-l-lg border-t border-b border-l' : 'rounded-r-lg border-t border-b border-r'} border-gray-300 dark:border-gray-700 focus:outline-none ${
            tab === "parts"
              ? "bg-white dark:bg-gray-800 font-semibold"
              : "bg-gray-100 dark:bg-gray-700"
          }`}
          onClick={() => setTab("parts")}
        >
          Parts
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <input
          type="text"
          placeholder={`Search ${tab}...`}
          className={`w-full sm:w-72 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none ${isRTL ? 'text-right' : 'text-left'}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className={`w-full sm:w-60 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none ${isRTL ? 'text-right' : 'text-left'}`}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All {tab === "products" ? "Product Categories" : "Part Categories"}</option>
          {(tab === "products" ? productCategories : partCategories).map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductSearch;

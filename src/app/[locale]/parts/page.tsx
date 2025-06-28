"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, Grid, List, ChevronDown, Star, ArrowRight, Zap, Wrench, Shield } from "lucide-react";
import { getParts, getPartsCategories, type Part, type ProductCategory } from "@/lib/api";

interface FilterState {
  category: string;
  manufacturer: string;
  inStock: boolean | null;
  priceRange: string;
}

export default function PartsPage() {
  const router = useRouter();
  
  const [parts, setParts] = useState<Part[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [filteredParts, setFilteredParts] = useState<Part[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // UI States
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  
  // Filter states
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    manufacturer: '',
    inStock: null,
    priceRange: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [partsData, categoriesData] = await Promise.all([
          getParts(),
          getPartsCategories()
        ]);
        
        setParts(partsData);
        setCategories(categoriesData);
        setFilteredParts(partsData);
      } catch (err) {
        console.error('Error fetching parts:', err);
        setError('Failed to load parts. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = [...parts];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(part =>
        part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.part_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.manufacturer?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(part => part.category === filters.category);
    }

    // Manufacturer filter
    if (filters.manufacturer) {
      filtered = filtered.filter(part => part.manufacturer === filters.manufacturer);
    }

    // Stock filter
    if (filters.inStock !== null) {
      filtered = filtered.filter(part => part.inStock === filters.inStock);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'manufacturer':
          return (a.manufacturer || '').localeCompare(b.manufacturer || '');
        case 'category':
          return (a.category || '').localeCompare(b.category || '');
        default:
          return 0;
      }
    });

    setFilteredParts(filtered);
  }, [searchQuery, filters, sortBy, parts]);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      manufacturer: '',
      inStock: null,
      priceRange: ''
    });
    setSearchQuery('');
  };

  const formatPrice = (price: string | number | undefined) => {
    if (!price) return 'Contact for pricing';
    return 'Contact for pricing';
  };

  // Get unique manufacturers
  const manufacturers = Array.from(new Set(parts.map(p => p.manufacturer).filter(Boolean))).sort();
  return <div></div>
//   if (loading) {

//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading parts...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Parts</h1>
//           <p className="text-gray-600 mb-8">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Breadcrumb */}
//           <nav className="flex items-center gap-2 text-sm py-4 border-b border-gray-100">
//             <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
//             <span className="text-gray-300">/</span>
//             <span className="text-gray-900 font-medium">Parts</span>
//           </nav>

//           {/* Page Header */}
//           <div className="py-8">
//             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-900 mb-2">LED Display Parts</h1>
//                 <p className="text-gray-600 max-w-2xl">
//                   Find the perfect components for your LED display projects. From LED modules to power supplies, 
//                   we have everything you need for professional installations.
//                 </p>
//               </div>
              
//               <div className="flex items-center gap-3">
//                 <span className="text-sm text-gray-600">
//                   {filteredParts.length} of {parts.length} parts
//                 </span>
//                 <div className="flex items-center border border-gray-300 rounded-lg">
//                   <button
//                     onClick={() => setViewMode('grid')}
//                     className={`p-2 ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
//                   >
//                     <Grid className="w-4 h-4" />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('list')}
//                     className={`p-2 ${viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
//                   >
//                     <List className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Search and Filters */}
//         <div className="bg-white rounded-lg border p-6 mb-8">
//           <div className="flex flex-col lg:flex-row gap-4">
//             {/* Search */}
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search parts by name, part number, or manufacturer..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               />
//             </div>

//             {/* Filter Toggle */}
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//             >
//               <Filter className="w-5 h-5" />
//               Filters
//               <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
//             </button>

//             {/* Sort */}
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//             >
//               <option value="name">Sort by Name</option>
//               <option value="manufacturer">Sort by Manufacturer</option>
//               <option value="category">Sort by Category</option>
//             </select>
//           </div>

//           {/* Expanded Filters */}
//           {showFilters && (
//             <div className="mt-6 pt-6 border-t border-gray-200">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {/* Category Filter */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
//                   <select
//                     value={filters.category}
//                     onChange={(e) => handleFilterChange('category', e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   >
//                     <option value="">All Categories</option>
//                     {categories.map(category => (
//                       <option key={category.id} value={category.name}>{category.name}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Manufacturer Filter */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturer</label>
//                   <select
//                     value={filters.manufacturer}
//                     onChange={(e) => handleFilterChange('manufacturer', e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   >
//                     <option value="">All Manufacturers</option>
//                     {manufacturers.map(manufacturer => (
//                       <option key={manufacturer} value={manufacturer}>{manufacturer}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Stock Filter */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
//                   <select
//                     value={filters.inStock === null ? '' : filters.inStock.toString()}
//                     onChange={(e) => handleFilterChange('inStock', e.target.value === '' ? null : e.target.value === 'true')}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   >
//                     <option value="">All Items</option>
//                     <option value="true">Available</option>
//                     <option value="false">Contact for Availability</option>
//                   </select>
//                 </div>

//                 {/* Clear Filters */}
//                 <div className="flex items-end">
//                   <button
//                     onClick={clearFilters}
//                     className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                   >
//                     Clear Filters
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Results */}
//         {filteredParts.length === 0 ? (
//           <div className="text-center py-12">
//             <div className="text-gray-400 mb-4">
//               <Search className="w-16 h-16 mx-auto" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No parts found</h3>
//             <p className="text-gray-600 mb-4">
//               Try adjusting your search criteria or filters to find what you're looking for.
//             </p>
//             <button
//               onClick={clearFilters}
//               className="text-green-600 hover:text-green-700 font-medium"
//             >
//               Clear all filters
//             </button>
//           </div>
//         ) : (
//           <div className={viewMode === 'grid' 
//             ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
//             : "space-y-4"
//           }>
//             {filteredParts.map((part) => (
//               <div key={part.id} className={viewMode === 'grid' ? "part-card-grid" : "part-card-list"}>
//                 {viewMode === 'grid' ? (
//                   // Grid View
//                   <div className="bg-white rounded-lg border hover:shadow-lg transition-shadow duration-200 group">
//                     <Link href={`/parts/${part.id}`}>
//                       <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
//                         <Image
//                           src={part.images[0] || '/file.svg'}
//                           alt={part.name}
//                           width={300}
//                           height={300}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                         />
//                       </div>
                      
//                       <div className="p-4">
//                         <div className="flex items-start justify-between mb-2">
//                           <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-green-600 transition-colors">
//                             {part.name}
//                           </h3>
//                           {part.inStock ? (
//                             <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium whitespace-nowrap ml-2">
//                               Available
//                             </span>
//                           ) : (
//                             <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium whitespace-nowrap ml-2">
//                               Contact
//                             </span>
//                           )}
//                         </div>

//                         {part.part_number && (
//                           <p className="text-green-600 text-sm font-medium mb-1">#{part.part_number}</p>
//                         )}

//                         {part.manufacturer && (
//                           <p className="text-gray-600 text-sm mb-2">{part.manufacturer}</p>
//                         )}

//                         {part.category && (
//                           <p className="text-blue-600 text-sm mb-3">{part.category}</p>
//                         )}

//                         <p className="text-gray-600 text-sm line-clamp-2 mb-3">
//                           {part.description || 'Professional LED display component'}
//                         </p>

//                         <div className="flex items-center justify-between">
//                           <span className="font-bold text-green-600">{formatPrice(part.price)}</span>
//                           <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 ) : (
//                   // List View
//                   <div className="bg-white rounded-lg border hover:shadow-md transition-shadow">
//                     <Link href={`/parts/${part.id}`} className="flex items-center p-6 gap-6 group">
//                       <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
//                         <Image
//                           src={part.images[0] || '/file.svg'}
//                           alt={part.name}
//                           width={96}
//                           height={96}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                         />
//                       </div>

//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-start justify-between mb-2">
//                           <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
//                             {part.name}
//                           </h3>
//                           {part.inStock ? (
//                             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
//                               Available
//                             </span>
//                           ) : (
//                             <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
//                               Contact for Availability
//                             </span>
//                           )}
//                         </div>

//                         <div className="flex items-center gap-4 mb-2 text-sm">
//                           {part.part_number && (
//                             <span className="text-green-600 font-medium">#{part.part_number}</span>
//                           )}
//                           {part.manufacturer && (
//                             <span className="text-gray-600">{part.manufacturer}</span>
//                           )}
//                           {part.category && (
//                             <span className="text-blue-600">{part.category}</span>
//                           )}
//                         </div>

//                         <p className="text-gray-600 mb-3 line-clamp-2">
//                           {part.description || 'Professional LED display component for commercial installations'}
//                         </p>

//                         <div className="flex items-center justify-between">
//                           <span className="text-lg font-bold text-green-600">{formatPrice(part.price)}</span>
//                           <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Features Section */}
//         <div className="mt-16 bg-white rounded-lg border p-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//             Why Choose Our LED Display Parts?
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Shield className="w-6 h-6 text-green-600" />
//               </div>
//               <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
//               <p className="text-gray-600 text-sm">
//                 All parts are sourced from trusted manufacturers and undergo rigorous quality testing.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Zap className="w-6 h-6 text-blue-600" />
//               </div>
//               <h3 className="font-semibold text-gray-900 mb-2">High Performance</h3>
//               <p className="text-gray-600 text-sm">
//                 Professional-grade components designed for demanding commercial applications.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Wrench className="w-6 h-6 text-purple-600" />
//               </div>
//               <h3 className="font-semibold text-gray-900 mb-2">Technical Support</h3>
//               <p className="text-gray-600 text-sm">
//                 Expert guidance and support to help you select the right components for your project.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
}

"use client"
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Heart, Share2, Star, Truck, Shield, RefreshCw, Wrench, Zap, Mail, Phone } from "lucide-react";
import { getPart, type Part } from "@/lib/api";

export default function PartDetails() {
  const params = useParams();
  const router = useRouter();
  const partId = params.id as string;

  const [part, setPart] = useState<Part | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);

  useEffect(() => {
    if (!partId) return;

    const fetchPart = async () => {
      try {
        setLoading(true);
        setError(null);
        const partData = await getPart(partId);
        setPart(partData);
      } catch (err) {
        console.error('Error fetching part:', err);
        setError('Failed to load part. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPart();
  }, [partId]);

  const handleShare = async () => {
    if (navigator.share && part) {
      try {
        await navigator.share({
          title: part.name,
          text: part.description,
          url: window.location.href,
        });
      } catch (err) {
        navigator.clipboard.writeText(window.location.href);
        alert('Part URL copied to clipboard!');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Part URL copied to clipboard!');
    }
  };
  const formatPrice = (price: string | number | undefined) => {
    if (!price) return 'Contact for pricing';
    return 'Contact for pricing';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading part details...</p>
        </div>
      </div>
    );
  }

  if (error || !part) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Part Not Found</h1>
          <p className="text-gray-600 mb-8">{error || 'The part you\'re looking for doesn\'t exist.'}</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Parts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/products" className="text-gray-500 hover:text-gray-700">Parts</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">{part.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Part Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white border">
              <Image
                src={part.images[selectedImage] || '/file.svg'}
                alt={part.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {part.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {part.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-green-600' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image || '/file.svg'}
                      alt={`${part.name} ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Part Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{part.name}</h1>
                <button
                  onClick={() => setIsWishlist(!isWishlist)}
                  className={`p-2 rounded-full transition-colors ${
                    isWishlist ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlist ? 'fill-current' : ''}`} />
                </button>
              </div>

              {part.part_number && (
                <p className="text-green-600 font-medium mb-2">Part #: {part.part_number}</p>
              )}

              {part.category && (
                <p className="text-blue-600 font-medium mb-2">{part.category}</p>
              )}

              {part.manufacturer && (
                <p className="text-gray-600 mb-2">Manufacturer: {part.manufacturer}</p>
              )}

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.6) • 89 reviews</span>
              </div>              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-semibold text-green-600">{formatPrice(part.price)}</span>
                {part.inStock ? (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Available
                  </span>
                ) : (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Contact for Availability
                  </span>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{part.description}</p>
            </div>

            {/* Compatibility */}
            {part.compatibility && part.compatibility.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  Compatibility
                </h3>
                <div className="flex flex-wrap gap-2">
                  {part.compatibility.map((item, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications */}
            {part.specifications && Object.keys(part.specifications).length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600" />
                  Technical Specifications
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  {Object.entries(part.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">{key}:</span>
                      <span className="text-gray-900 font-medium">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}            {/* Contact Section */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Interested in this part?</h3>
              
              <div className="flex gap-3 mb-6">
                <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Request Quote
                </button>
                <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Sales
                </button>
                <button
                  onClick={handleShare}
                  className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>              {/* Business Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Truck className="w-4 h-4" />
                  <span>B2B delivery</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-4 h-4" />
                  <span>Quality guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <RefreshCw className="w-4 h-4" />
                  <span>Technical support</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-6 text-sm text-gray-600 space-y-1">
              {part.sku && (
                <p><span className="font-medium">SKU:</span> {part.sku}</p>
              )}
              {part.part_type && (
                <p><span className="font-medium">Type:</span> {part.part_type}</p>
              )}
              {part.status && (
                <p><span className="font-medium">Status:</span> {part.status}</p>
              )}
            </div>
          </div>
        </div>

        {/* Related Parts Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Parts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* This would be populated with actual related parts */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4"></div>                <h3 className="font-medium text-gray-900 mb-2">Related Part {item}</h3>
                <p className="text-gray-600 text-sm mb-2">Short description...</p>
                <p className="font-bold text-green-600">Contact for pricing</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

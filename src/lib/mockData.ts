// Mock data for development - replace with actual CMS integration
export const mockArticles = [
  {
    id: '1',
    title: 'The Future of Electronics: Emerging Technologies in 2025',
    slug: 'future-electronics-2025',
    excerpt: 'Discover the groundbreaking technologies that are reshaping the electronics industry this year, from quantum computing components to advanced IoT sensors.',
    content: `<p>The electronics industry is experiencing unprecedented innovation in 2025. From quantum computing breakthroughs to revolutionary IoT sensors, the landscape is evolving rapidly.</p>
    
    <h2>Quantum Computing Components</h2>
    <p>Quantum processors are becoming more accessible, with new manufacturing techniques reducing costs and improving stability.</p>
    
    <h2>Advanced IoT Sensors</h2>
    <p>Next-generation sensors offer improved accuracy, lower power consumption, and enhanced connectivity options.</p>`,
    author: 'John Doe',
    author_name: 'John Doe',
    category: 'Industry News',
    tags: ['quantum computing', 'IoT', 'sensors', 'technology'],
    featured: true,
    publishedAt: '2025-06-15T10:00:00Z',
    createdAt: '2025-06-15T10:00:00Z',
    updatedAt: '2025-06-15T10:00:00Z',
    status: 'published',
    featuredImage: '/assets/hero-bg-desktop.png',
    hasImage: true,
    meta: {
      readTime: '5 min read',
      views: 1250
    }
  },
  {
    id: '2',
    title: 'LED Display Installation Best Practices',
    slug: 'led-display-installation-guide',
    excerpt: 'Learn the essential steps and considerations for professional LED display installations that ensure optimal performance and longevity.',
    content: `<p>Installing LED displays requires careful planning and attention to detail. This comprehensive guide covers everything you need to know.</p>
    
    <h2>Site Assessment</h2>
    <p>Before installation, conduct a thorough site assessment to identify potential challenges and requirements.</p>
    
    <h2>Mounting Considerations</h2>
    <p>Proper mounting is crucial for safety and optimal display performance.</p>`,
    author: 'Jane Smith',
    author_name: 'Jane Smith',
    category: 'Tutorials',
    tags: ['LED', 'installation', 'mounting', 'best practices'],
    featured: false,
    publishedAt: '2025-06-10T14:30:00Z',
    createdAt: '2025-06-10T14:30:00Z',
    updatedAt: '2025-06-10T14:30:00Z',
    status: 'published',
    featuredImage: '/assets/led-pannel.jpg',
    hasImage: true,
    meta: {
      readTime: '8 min read',
      views: 850
    }
  },
  {
    id: '3',
    title: 'Choosing the Right Power Supply for Your LED Setup',
    slug: 'led-power-supply-guide',
    excerpt: 'Understanding power requirements and selecting the appropriate power supply is critical for LED display reliability and performance.',
    content: `<p>Power supplies are the backbone of any LED installation. Choosing the wrong power supply can lead to performance issues and premature failure.</p>
    
    <h2>Power Calculations</h2>
    <p>Learn how to calculate the power requirements for your specific LED configuration.</p>
    
    <h2>Efficiency Considerations</h2>
    <p>Higher efficiency power supplies reduce operating costs and heat generation.</p>`,
    author: 'Mike Johnson',
    author_name: 'Mike Johnson',
    category: 'Tech Tips',
    tags: ['power supply', 'LED', 'efficiency', 'installation'],
    featured: false,
    publishedAt: '2025-06-05T09:15:00Z',
    createdAt: '2025-06-05T09:15:00Z',
    updatedAt: '2025-06-05T09:15:00Z',
    status: 'published',
    featuredImage: '/assets/power-supply.webp',
    hasImage: true,
    meta: {
      readTime: '6 min read',
      views: 650
    }
  },
  {
    id: '4',
    title: 'Review: Latest 4K LED Modules Performance Analysis',
    slug: '4k-led-modules-review',
    excerpt: 'In-depth review of the newest 4K LED modules, comparing performance, quality, and value across different manufacturers.',
    content: `<p>The latest generation of 4K LED modules offers impressive improvements in brightness, color accuracy, and energy efficiency.</p>
    
    <h2>Performance Metrics</h2>
    <p>We tested modules from five leading manufacturers across multiple performance criteria.</p>
    
    <h2>Value Analysis</h2>
    <p>Find out which modules offer the best performance per dollar invested.</p>`,
    author: 'Sarah Wilson',
    author_name: 'Sarah Wilson',
    category: 'Product Reviews',
    tags: ['4K', 'LED modules', 'review', 'performance'],
    featured: true,
    publishedAt: '2025-06-01T16:45:00Z',
    createdAt: '2025-06-01T16:45:00Z',
    updatedAt: '2025-06-01T16:45:00Z',
    status: 'published',
    featuredImage: '/assets/led-module.jpg',
    hasImage: true,
    meta: {
      readTime: '12 min read',
      views: 1450
    }
  }
];

export const mockProducts = [
  {
    id: '1',
    name: 'Premium LED Display Panel',
    description: 'High-resolution LED display panel perfect for indoor and outdoor applications',
    category: 'LED Displays',
    category_id: '1',
    price: 299.99,
    images: ['/assets/led-pannel.jpg'],
    specifications: {
      resolution: '1920x1080',
      brightness: '5000 nits',
      refresh_rate: '60Hz'
    },
    inStock: true,
    stock_quantity: 50,
    featured: true,
    tags: ['LED', 'display', 'premium'],
    created_at: '2025-06-01T00:00:00Z',
    updated_at: '2025-06-01T00:00:00Z',
    sku: 'LED-DISP-001',
    status: 'active'
  }
];

export const mockParts = [
  {
    id: '1',
    name: 'LED Module Controller',
    description: 'Advanced controller for LED module management',
    category: 'Controllers',
    category_id: '1',
    price: 89.99,
    specifications: {
      input_voltage: '12-24V',
      output_channels: '16',
      communication: 'SPI/I2C'
    },
    inStock: true,
    stock_quantity: 25,
    images: [
      {
        url: '/assets/led-module.jpg',
        tags: ['controller'],
        order: 1
      }
    ],
    created_at: '2025-06-01T00:00:00Z',
    updated_at: '2025-06-01T00:00:00Z',
    sku: 'CTRL-001',
    status: 'active',
    manufacturer: 'SyFr Electronics',
    part_number: 'SFR-CTRL-001'
  }
];

export const mockCategories = [
  {
    id: '1',
    name: 'LED Displays',
    slug: 'led-displays',
    description: 'Complete LED display solutions',
    productCount: 15
  },
  {
    id: '2',
    name: 'Controllers',
    slug: 'controllers',
    description: 'LED controllers and management systems',
    productCount: 8
  }
];

import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, MapPin, Clock, Star, Leaf, Package, Truck } from 'lucide-react';

export default function WUWDelivery() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Flower', 'Edibles', 'Concentrates', 'Vapes', 'Pre-Rolls'];
  
  const brands = [
    { 
      name: 'STIIIZY', 
      logo: (
        <div className="text-2xl font-black tracking-tighter">
          STIIIZY
        </div>
      )
    },
    { 
      name: 'RAW GARDEN', 
      logo: (
        <div className="text-xl font-bold tracking-wide">
          RAW<br/>GARDEN
        </div>
      )
    },
    { 
      name: 'COOKIES', 
      logo: (
        <div className="text-2xl font-black italic">
          Cookies
        </div>
      )
    },
    { 
      name: 'JUNGLE BOYS', 
      logo: (
        <div className="text-xl font-black tracking-tight">
          JUNGLE<br/>BOYS
        </div>
      )
    },
    { 
      name: 'PAX', 
      logo: (
        <div className="text-3xl font-black tracking-wider">
          PAX
        </div>
      )
    },
    { 
      name: 'KIVA', 
      logo: (
        <div className="text-2xl font-bold tracking-widest">
          KIVA
        </div>
      )
    }
  ];

  const products = [
    { 
      id: 1, 
      name: 'Blue Dream', 
      brand: 'Jungle Boys', 
      category: 'Flower', 
      thc: '24%', 
      price: 45, 
      image: '/menu-items/Bluedream.png',
      rating: 4.8, 
      strain: 'Hybrid',
      delivery: true,
      pickup: true
    },
    { 
      id: 2, 
      name: 'Gelato #33', 
      brand: 'Cookies', 
      category: 'Flower', 
      thc: '26%', 
      price: 55, 
      image: '/menu-items/gelato33.png',
      rating: 4.9, 
      strain: 'Indica',
      delivery: true,
      pickup: true
    },
    { 
      id: 3, 
      name: 'Strawberry Cough', 
      brand: 'Raw Garden', 
      category: 'Flower', 
      thc: '22%', 
      price: 40, 
      image: '/menu-items/strawberycough.png',
      rating: 4.7, 
      strain: 'Sativa',
      delivery: true,
      pickup: true
    },
    { 
      id: 4, 
      name: 'Live Resin Cart', 
      brand: 'STIIIZY', 
      category: 'Vapes', 
      thc: '89%', 
      price: 60, 
      image: '/menu-items/live-resin-stiizy.png',
      rating: 4.9, 
      strain: 'Hybrid',
      delivery: true,
      pickup: false
    },
    { 
      id: 5, 
      name: 'Gummies 100mg', 
      brand: 'KIVA', 
      category: 'Edibles', 
      thc: '100mg', 
      price: 25, 
      image: '/menu-items/gummies.png',
      rating: 4.6, 
      strain: 'Hybrid',
      delivery: true,
      pickup: true
    },
    { 
      id: 6, 
      name: 'Pre-Roll Pack', 
      brand: 'Cookies', 
      category: 'Pre-Rolls', 
      thc: '25%', 
      price: 35, 
      image: '/menu-items/prerollpack.png',
      rating: 4.8, 
      strain: 'Indica',
      delivery: true,
      pickup: true
    },
    { 
      id: 7, 
      name: 'Wedding Cake', 
      brand: 'Jungle Boys', 
      category: 'Flower', 
      thc: '27%', 
      price: 50, 
      image: '/menu-items/weddingcake.png',
      rating: 4.9, 
      strain: 'Indica',
      delivery: true,
      pickup: true
    },
    { 
      id: 8, 
      name: 'Diamond Sauce', 
      brand: 'Raw Garden', 
      category: 'Concentrates', 
      thc: '92%', 
      price: 70, 
      image: '/menu-items/diamondsauce.png',
      rating: 4.8, 
      strain: 'Sativa',
      delivery: false,
      pickup: true
    }
  ];

  const filteredProducts = products.filter(p => 
    (selectedCategory === 'All' || p.category === selectedCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleOrderNow = (product) => {
    const options = [];
    if (product.delivery) options.push('Delivery');
    if (product.pickup) options.push('Pickup');
    
    if (options.length === 0) {
      alert('Sorry, this product is currently unavailable.');
      return;
    }
    
    const availableOptions = options.join(' or ');
    alert(`${product.name} - Available for: ${availableOptions}\n\nPrice: $${product.price}\n\nPlease contact us to complete your order.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img src="/logo-1.png" alt="WUW Logo" className="w-24 h-24 object-contain" />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="text-slate-700 hover:text-slate-900 transition font-medium text-sm">Menu</a>
              <a href="#brands" className="text-slate-700 hover:text-slate-900 transition font-medium text-sm">Brands</a>
              <a href="#about" className="text-slate-700 hover:text-slate-900 transition font-medium text-sm">About</a>
              <div className="flex items-center space-x-2 text-slate-900 bg-slate-100 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">New York</span>
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-7xl md:text-9xl font-black mb-6 text-slate-900 tracking-tighter leading-none pb-2 px-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Good
            <br />
            <span className="bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700 bg-clip-text text-transparent inline-block px-1">
              Trees
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 font-light tracking-tight">
            Deliverd in 45 minutes or less.. No Cap !
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl border border-gray-200 shadow-sm">
              <Clock className="w-5 h-5 text-slate-900" />
              <span className="font-medium text-slate-900">Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl border border-gray-200 shadow-sm">
              <Package className="w-5 h-5 text-slate-900" />
              <span className="font-medium text-slate-900">Discreet Packaging</span>
            </div>
            <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl border border-gray-200 shadow-sm">
              <Star className="w-5 h-5 text-slate-900" />
              <span className="font-medium text-slate-900">Top Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section id="brands" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-black text-center mb-4 text-slate-900 tracking-tight">
            Featured Brands
          </h3>
          <p className="text-center text-slate-600 mb-16 font-light">Premium partners we're proud to carry</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-slate-900 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
              >
                <div className="text-slate-900 mb-2 flex items-center justify-center h-16">{brand.logo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-6xl font-black text-center mb-4 text-slate-900 tracking-tight">
            Our Menu
          </h3>
          <p className="text-center text-slate-600 mb-16 font-light text-lg">Carefully curated selections for every preference</p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products or brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-2xl py-4 pl-14 pr-6 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 shadow-sm"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-3 rounded-full font-semibold transition text-sm tracking-wide ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-gray-300 hover:border-slate-900 hover:shadow-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div 
                key={product.id}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition hover:scale-105 transform"
              >
                <div className="h-56 overflow-hidden bg-white flex items-center justify-center p-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-slate-100 text-slate-900 px-3 py-1.5 rounded-full border border-slate-200 font-semibold tracking-wide">
                      {product.strain}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-700 font-semibold">{product.rating}</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-1 text-slate-900 tracking-tight">{product.name}</h4>
                  <p className="text-sm text-slate-500 mb-4 font-medium">{product.brand}</p>
                  <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-200">
                    <span className="text-slate-900 font-bold text-sm">THC: {product.thc}</span>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{product.category}</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      {product.delivery && (
                        <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-200">
                          <Truck className="w-3 h-3" />
                          Delivery
                        </span>
                      )}
                      {product.pickup && (
                        <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200">
                          <Package className="w-3 h-3" />
                          Pickup
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-slate-900">${product.price}</span>
                    <button 
                      onClick={() => handleOrderNow(product)}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-full transition shadow-md hover:shadow-lg text-sm"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-slate-900">Fast Delivery</h4>
              <p className="text-slate-600 font-light">Average delivery time: 45 minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-slate-900">Premium Quality</h4>
              <p className="text-slate-600 font-light">Only the finest cannabis products</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-slate-900">Secure Packaging</h4>
              <p className="text-slate-600 font-light">Discreet and child-proof packaging</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <img src="/logo-1.png" alt="WUW Logo" className="w-20 h-20 object-contain brightness-0 invert" />
          </div>
          <p className="text-white mb-6 font-light">Premium Cannabis Delivery Service</p>
          <p className="text-sm text-gray-300 font-light">
            Must be 21+ to order. Valid ID required upon delivery.
          </p>
          <p className="text-xs text-gray-400 mt-6 font-light">
            © 2025 WUW Delivery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

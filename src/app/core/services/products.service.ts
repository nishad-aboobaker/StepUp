import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
  price: number;
  stock: number;
  thumbnail: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = [
    {
      id: 1,
      name: 'Classic Leather Loafers', // Changed
      brand: 'Urban Outfitters',
      category: 'men',
      description:
        'A timeless classic, these loafers are crafted from genuine leather and feature a stylish, modern fit. Perfect for any occasion, offering both comfort and durability.', // Changed
      rating: 4.5,
      price: 189.99,
      stock: 15,
      thumbnail: 'assets/images/1.jpg',
    },
    {
      id: 2,
      name: 'Air Zoom Pegasus', // Already a shoe
      brand: 'Nike',
      category: 'sports',
      description:
        'Engineered for performance, these running shoes provide excellent cushioning and support. The lightweight design and breathable mesh upper make them ideal for long-distance runs.',
      rating: 4.8,
      price: 120.0,
      stock: 30,
      thumbnail: 'assets/images/2.jpg',
    },
    {
      id: 3,
      name: 'Floral Print Espadrilles', // Changed
      brand: 'Zara',
      category: 'women',
      description:
        'Embrace the summer with these beautiful floral espadrilles. Made from lightweight canvas, they feature a flattering silhouette and a vibrant print. Perfect for casual outings.', // Changed
      rating: 4.6,
      price: 69.9,
      stock: 25,
      thumbnail: 'assets/images/3.jpg',
    },
    {
      id: 4,
      name: 'Light-Up Graphic Sneakers', // Changed
      brand: 'Gap',
      category: 'kids',
      description:
        "Let your kids show off their personality with these fun light-up sneakers. Made from durable materials, they're perfect for everyday play. The vibrant graphics are a hit!", // Changed
      rating: 4.2,
      price: 39.99, // Adjusted price
      stock: 50,
      thumbnail: 'assets/images/4.jpg',
    },
    {
      id: 5,
      name: 'Cap-Toe Oxford Shoes', // Changed
      brand: 'Hugo Boss',
      category: 'men',
      description:
        'Make a statement with these impeccably crafted formal Oxfords. Made from premium calfskin leather, they feature a slim profile and classic cap-toe design.', // Changed
      rating: 4.9,
      price: 398.0, // Adjusted price
      stock: 10,
      thumbnail: 'assets/images/5.jpg',
    },
    {
      id: 6,
      name: 'Blissfeel Training Shoes', // Changed
      brand: 'Lululemon',
      category: 'women',
      description:
        'Experience ultimate comfort and flexibility with these high-performance training shoes. Designed for running and workouts, they offer a supportive, cushioned feel.', // Changed
      rating: 4.9,
      price: 148.0, // Adjusted price
      stock: 40,
      thumbnail: 'assets/images/6.jpg',
    },
    {
      id: 7,
      name: 'Canvas High-Top Sneakers', // Changed
      brand: "Levi's",
      category: 'kids',
      description:
        'A wardrobe essential for every kid, these canvas high-tops are both stylish and durable. They feature a classic design with a sturdy rubber sole. Perfect for school or play.', // Changed
      rating: 4.7,
      price: 49.5,
      stock: 35,
      thumbnail: 'assets/images/7.jpg',
    },
    {
      id: 8,
      name: 'Ultraboost 1.0 Shoes', // Changed
      brand: 'Adidas',
      category: 'sports',
      description:
        'Stay comfortable and energized with these versatile running shoes. The adidas BOOST midsole provides incredible energy return, perfect for runs or casual wear.', // Changed
      rating: 4.6,
      price: 180.0, // Adjusted price
      stock: 20,
      thumbnail: 'assets/images/8.jpg',
    },
    {
      id: 9,
      name: 'Crystal-Embellished Stilettos', // Changed
      brand: 'Vera Wang',
      category: 'women',
      description:
        'Turn heads with these stunning evening stilettos. The elegant design features intricate crystal beading and a slim, high heel. The perfect choice for any formal occasion.', // Changed
      rating: 5.0,
      price: 850.0, // Adjusted price
      stock: 5,
      thumbnail: 'assets/images/9.jpg',
    },
    {
      id: 10,
      name: 'Suede Classic Sneakers', // Already a shoe
      brand: 'Puma',
      category: 'kids',
      description:
        'These stylish and comfortable suede sneakers are perfect for active kids. The durable construction and cushioned insole provide all-day support. A timeless design.',
      rating: 4.4,
      price: 55.0,
      stock: 60,
      thumbnail: 'assets/images/10.jpg',
    },
    {
      id: 11,
      name: 'Canvas Deck Shoes', // Changed
      brand: 'Tommy Hilfiger',
      category: 'men',
      description:
        'A versatile addition to any wardrobe, these canvas deck shoes are perfect for a relaxed yet polished look. Features classic boat-shoe lacing and the iconic Tommy logo.', // Changed
      rating: 4.4,
      price: 79.5,
      stock: 22,
      thumbnail: 'assets/images/11.jpg',
    },
    {
      id: 12,
      name: 'Jet Set Logo Sneakers', // Changed
      brand: 'Michael Kors',
      category: 'women',
      description:
        'Accessorize in style with these elegant logo-print sneakers. Crafted from high-quality materials, they feature gold-tone hardware and a comfortable, modern silhouette.', // Changed
      rating: 4.8,
      price: 165.0, // Adjusted price
      stock: 18,
      thumbnail: 'assets/images/12.jpg',
    },
    {
      id: 13,
      name: 'Cozy Critter Slippers', // Changed
      brand: "Carter's",
      category: 'kids',
      description:
        'Ensure a comfortable night (and morning) with these adorable critter slippers. Made from ultra-soft plush, they feature a fun 3D animal face and a non-slip sole.', // Changed
      rating: 4.7,
      price: 24.99,
      stock: 45,
      thumbnail: 'assets/images/13.jpg',
    },
    {
      id: 14,
      name: 'HOVR Phantom Running Shoes', // Changed
      brand: 'Under Armour',
      category: 'sports',
      description:
        "Dominate your run with these high-performance running shoes. The HOVR cushioning provides a 'zero gravity feel' to maintain energy return and help eliminate impact.", // Changed
      rating: 4.7,
      price: 140.0, // Adjusted price
      stock: 28,
      thumbnail: 'assets/images/14.jpg',
    },
    {
      id: 15,
      name: 'Classic Check Rain Boots', // Changed
      brand: 'Burberry',
      category: 'women',
      description:
        'A timeless icon of British style, these rain boots are a must-have. Made from waterproof rubber, they feature the classic check pattern and a comfortable fit.', // Changed
      rating: 4.9,
      price: 420.0, // Adjusted price
      stock: 8,
      thumbnail: 'assets/images/15.jpg',
    },
    {
      id: 16,
      name: 'Killshot 2 Sneakers', // Changed
      brand: 'J.Crew',
      category: 'men',
      description:
        'The perfect blend of casual and smart, these iconic sneakers are a wardrobe staple. Based on an original 70s design, they feature a mix of leather and suede.', // Changed
      rating: 4.5,
      price: 98.0, // Adjusted price
      stock: 32,
      thumbnail: 'assets/images/16.jpg',
    },
    {
      id: 17,
      name: 'Original Tall Rain Boots', // Already a shoe
      brand: 'Hunter',
      category: 'kids',
      description:
        'Keep little feet dry and happy with these iconic rain boots. Handcrafted from natural rubber, they are fully waterproof and feature a comfortable, non-slip sole.',
      rating: 4.8,
      price: 65.0,
      stock: 40,
      thumbnail: 'assets/images/17.jpg',
    },
    {
      id: 18,
      name: 'Classic Suede Moccasins', // Changed
      brand: 'UGG', // Changed
      category: 'women',
      description:
        'Protect your feet in style with these classic suede moccasins. The timeless design features a plush wool lining and a durable sole for indoor/outdoor wear.', // Changed
      rating: 4.7,
      price: 100.0, // Adjusted price
      stock: 35,
      thumbnail: 'assets/images/18.jpg',
    },
    {
      id: 19,
      name: 'Leather Chukka Boots', // Changed
      brand: 'Clarks', // Changed
      category: 'men',
      description:
        'A perfect blend of classic design and modern functionality, these chukka boots are a stylish accessory. They feature a durable suede upper and a comfortable crepe sole.', // Changed
      rating: 4.6,
      price: 150.0, // Adjusted price
      stock: 20,
      thumbnail: 'assets/images/19.jpg',
    },
    {
      id: 20,
      name: 'LEGO x Adidas Sneakers', // Changed
      brand: 'Adidas', // Changed
      category: 'kids',
      description:
        'Spark creativity and imagination with this engaging LEGO-themed sneaker. With colorful, brick-inspired details, the possibilities for fun are endless.', // Changed
      rating: 4.9,
      price: 65.0, // Adjusted price
      stock: 55,
      thumbnail: 'assets/images/20.jpg',
    },
    {
      id: 21,
      name: 'Salutation Training Shoes', // Changed
      brand: 'Athleta',
      category: 'women',
      description:
        'Designed for the active woman, these shoes are perfect for yoga, studio, or the gym. The seamless construction and breathable fabric provide ultimate comfort and support.', // Changed
      rating: 4.6,
      price: 129.0, // Adjusted price
      stock: 38,
      thumbnail: 'assets/images/21.jpg',
    },
    {
      id: 22,
      name: 'Moab Waterproof Hikers', // Already a shoe
      brand: 'Merrell',
      category: 'men',
      description:
        'Conquer any trail with these durable and comfortable hiking boots. The waterproof leather upper keeps your feet dry, while the rugged outsole provides excellent grip.',
      rating: 4.8,
      price: 140.0,
      stock: 25,
      thumbnail: 'assets/images/22.jpg',
    },
    {
      name: 'Classic Old Skool Sneakers', // Changed
      brand: 'Vans', // Changed
      category: 'kids',
      description:
        'Get ready for school with this durable and spacious backpack. It features multiple compartments to keep books and supplies organized, padded shoulder straps for comfort, and a fun, colorful design. Built to withstand the rigors of the school year.',
      rating: 4.7,
      price: 45.0,
      stock: 50,
      thumbnail: 'assets/images/23.jpg',
    },
    {
      id: 24,
      name: 'Heeled Leather Ankle Boots', // Changed
      brand: 'Steve Madden', // Changed
      category: 'women',
      description:
        'A perfect-fitting pair of ankle boots is a wardrobe essential. These are crafted from premium leather and hug your ankle for a flattering silhouette. The versatile dark wash can be dressed up or down.', // Changed
      rating: 4.7,
      price: 139.95, // Adjusted price
      stock: 30,
      thumbnail: 'assets/images/24.jpg',
    },
    {
      id: 25,
      name: 'Vaughn Canvas Sneakers', // Changed
      brand: 'Ralph Lauren',
      category: 'men',
      description:
        'A timeless classic, this canvas sneaker is the epitome of preppy style. Made from soft, breathable canvas, it features the iconic polo player logo and a comfortable fit.', // Changed
      rating: 4.6,
      price: 75.0, // Adjusted price
      stock: 40,
      thumbnail: 'assets/images/25.jpg',
    },
    {
      id: 26,
      name: 'Waterproof Play Sandals', // Changed
      brand: 'Keen', // Changed
      category: 'kids',
      description:
        "Protect your child's feet with these stylish and effective water sandals. They offer UPF 50+ sun protection and are made from a lightweight, quick-dry fabric. The adjustable strap ensures a secure fit.", // Changed
      rating: 4.9,
      price: 49.99, // Adjusted price
      stock: 45,
      thumbnail: 'assets/images/26.jpg',
    },
    {
      id: 27,
      name: 'Ghost 15 Running Shoes', // Changed
      brand: 'Brooks',
      category: 'sports',
      description:
        'Enjoy a comfortable and unrestricted run with these lightweight running shoes. The DNA LOFT v2 cushioning and built-in liner provide comfort and support.', // Changed
      rating: 4.8,
      price: 140.0, // Adjusted price
      stock: 33,
      thumbnail: 'assets/images/27.jpg',
    },
    {
      id: 28,
      name: 'Ohana Leather Flip-Flops', // Changed         brand: 'OluKai', // Changed
      category: 'men',
      description:
        'Make a splash in these stylish and comfortable flip-flops. Made from water-resistant synthetic leather, they feature a compression-molded EVA midsole.', // Changed
      rating: 4.7,
      price: 75.0, // Adjusted price
      stock: 28,
      thumbnail: 'assets/images/28.jpg',
    },
    {
      id: 29,
      name: 'Chuck Taylor All-Stars', // Changed
      brand: 'Converse', // Changed
      category: 'kids',
      description:
        'A classic high-top sneaker that provides hours of fun. This shoe encourages self-expression and friendly competition. Perfect for school, parties, or a rainy day indoors.', // Changed
      rating: 4.6,
      price: 40.0, // Adjusted price
      stock: 60,
      thumbnail: 'assets/images/29.jpg',
    },
    {
      id: 30,
      name: 'Pointed-Toe Ballet Flats', // Changed
      brand: 'Ann Taylor',
      category: 'women',
      description:
        'A sophisticated and versatile ballet flat that is perfect for the office. The elegant design features a flattering pointed toe and is made from a luxurious, easy-care material.', // Changed
      rating: 4.5,
      price: 118.0, // Adjusted price
      stock: 35,
      thumbnail: 'assets/images/30.jpg',
    },
    {
      id: 31,
      name: 'Park Avenue Oxford Shoes', // Already a shoe
      brand: 'Allen Edmonds',
      category: 'men',
      description:
        'Handcrafted in the USA, these dress shoes are the pinnacle of quality and style. Made from premium calfskin leather, they feature a timeless design and durable construction.',
      rating: 4.9,
      price: 395.0,
      stock: 15,
      thumbnail: 'assets/images/31.jpg',
    },
    {
      id: 32,
      name: 'Classic Clogs (Kids)', // Changed
      brand: 'Crocs', // Changed
      category: 'kids',
      description:
        "Unleash your child's inner artist with these deluxe, colorful clogs. They feature a comfortable footbed and ventilation ports for breathability. Perfect for creative play.", // Changed
      rating: 4.8,
      price: 39.99, // Adjusted price
      stock: 25,
      thumbnail: 'assets/images/32.jpg',
    },
    {
      id: 33,
      name: 'Adrenaline GTS 23', // Changed
      brand: 'Brooks', // Changed
      category: 'sports',
      description:
        'This high-support running shoe is perfect for high-impact activities. The moisture-wicking fabric and mesh panels provide ventilation to keep you cool and dry.', // Changed
      rating: 4.7,
      price: 140.0, // Adjusted price
      stock: 42,
      thumbnail: 'assets/images/33.jpg',
    },
    {
      id: 34,
      name: '6-Inch Waterproof Boots', // Changed
      brand: 'Timberland', // Changed
      category: 'men',
      description:
        'A sleek and durable boot designed for the modern man. Made from premium waterproof leather, it features multiple comfort technologies and a rugged outsole.', // Changed
      rating: 4.8,
      price: 198.0, // Adjusted price
      stock: 30,
      thumbnail: 'assets/images/34.jpg',
    },
    {
      id: 35,
      name: 'Bashful Bunny Slippers', // Changed
      brand: 'Jellycat',
      category: 'kids',
      description:
        "Incredibly soft and cuddly, these bunny slippers are the perfect companion for children. Made from high-quality, huggable materials, they're designed to be cherished.", // Changed
      rating: 4.9,
      price: 35.0,
      stock: 70,
      thumbnail: 'assets/images/35.jpg',
    },
    {
      id: 36,
      name: 'Slingback Logo Pumps', // Changed
      brand: 'Chanel',
      category: 'women',
      description:
        'A timeless and iconic shoe that exudes elegance. With a cap-toe and logo detail, these slingback pumps are a classic choice for any woman who appreciates luxury.', // Changed
      rating: 4.9,
      price: 1150.0, // Adjusted price
      stock: 22,
      thumbnail: 'assets/images/36.jpg',
    },
    {
      id: 37,
      name: 'Leather Driving Moccasins', // Changed
      brand: "Tod's", // Changed
      category: 'men',
      description:
        'Nourish your style with these premium driving moccasins. Formulated with natural rubber pebbles on the sole, they help to soften your step and promote healthy walking.', // Changed
      rating: 4.7,
      price: 495.0, // Adjusted price
      stock: 38,
      thumbnail: 'assets/images/37.jpg',
    },
    {
      id: 38,
      name: 'Mini-Rider Skate Shoes', // Changed
      brand: 'Vans', // Changed
      category: 'kids',
      description:
        'A fun and exciting way for kids to get around, these skate shoes are designed for stability and a smooth ride. The high-quality construction and sticky waffle sole ensure a safe grip.', // Changed
      rating: 4.8,
      price: 50.0, // Adjusted price
      stock: 30,
      thumbnail: 'assets/images/38.jpg',
    },
    {
      id: 39,
      name: 'Cashmere-Lined Loafers', // Changed
      brand: 'Everlane',
      category: 'women',
      description:
        'A cozy and stylish loafer made with a 100% Grade-A cashmere lining. The classic design and relaxed fit make it a versatile piece for any occasion. Exceptionally soft.', // Changed
      rating: 4.8,
      price: 145.0, // Adjusted price
      stock: 28,
      thumbnail: 'assets/images/39.jpg',
    },
    {
      id: 40,
      name: 'Gel-Kayano 30', // Changed
      brand: 'ASICS', // Changed
      category: 'sports',
      description:
        'Engineered for athletic performance, these running shoes provide comfort, support, and durability. The 4D GUIDANCE SYSTEM and PureGEL technology are perfect for any run.', // Changed
      rating: 4.9,
      price: 160.0, // Adjusted price
      stock: 50,
      thumbnail: 'assets/images/40.jpg',
    },
    {
      id: 41,
      name: 'Printed Slip-On Sneakers', // Changed
      brand: 'TOMS', // Changed
      category: 'kids',
      description:
        'Make school time fun and easy with these innovative slip-on sneakers. The playful prints keep things fun, while the durable, kid-friendly design is easy to put on and take off.', // Changed
      rating: 4.9,
      price: 39.95, // Adjusted price
      stock: 55,
      thumbnail: 'assets/images/41.jpg',
    },
    {
      id: 42,
      name: 'Desert Ankle Boots', // Changed
      brand: 'Clarks',
      category: 'women',
      description:
        'Stylish, comfortable, and versatile, these ankle boots are a must-have. Made from genuine suede, they feature a cushioned insole and the iconic crepe sole.', // Changed
      rating: 4.6,
      price: 150.0, // Adjusted price
      stock: 35,
      thumbnail: 'assets/images/42.jpg',
    },
    {
      id: 43,
      name: '1460 Combat Boots', // Changed
      brand: 'Dr. Martens', // Changed
      category: 'men',
      description:
        'An iconic piece of fashion, this combat boot is both stylish and functional. Made from durable leather, it features a classic 8-eye design and an air-cushioned sole.', // Changed
      rating: 4.7,
      price: 170.0, // Adjusted price
      stock: 25,
      thumbnail: 'assets/images/43.jpg',
    },
    {
      id: 44,
      name: 'Color-Block 990v6 Sneakers', // Changed
      brand: 'New Balance', // Changed
      category: 'kids',
      description:
        'A fun and educational shoe that combines math, science, and creativity. These color-block sneakers allow children to create fun, stylish outfits.', // Changed
      rating: 4.9,
      price: 89.99, // Adjusted price
      stock: 40,
      thumbnail: 'assets/images/44.jpg',
    },
    {
      id: 45,
      name: 'Cloud 5 Waterproof Shoes', // Changed
      brand: 'On Running', // Changed
      category: 'sports',
      description:
        "Stay on top of your fitness goals with this sleek and powerful running shoe. It's 100% waterproof and features CloudTec cushioning for soft landings and powerful push-offs.", // Changed
      rating: 4.7,
      price: 169.99, // Adjusted price
      stock: 45,
      thumbnail: 'assets/images/45.jpg',
    },
    {
      id: 46,
      name: 'Nano-Spike Trail Runners', // Changed
      brand: 'Patagonia',
      category: 'men',
      description:
        'Stay sure-footed in cold weather with these lightweight trail runners. The carbide spikes provide excellent grip on ice, while the water-resistant shell keeps you dry.', // Changed
      rating: 4.9,
      price: 229.0,
      stock: 20,
      thumbnail: 'assets/images/46.jpg',
    },
    {
      id: 47,
      name: 'Glitter-Toe Play Sneakers', // Changed
      brand: 'Skechers', // Changed
      category: 'kids',
      description:
        'Inspire hours of imaginative play with this realistic and interactive play sneaker. It features fun, sparkly glitter toes, a cushioned insole, and a non-slip sole.', // Changed
      rating: 4.8,
      price: 45.0, // Adjusted price
      stock: 15,
      thumbnail: 'assets/images/47.jpg',
    },
    {
      id: 48,
      name: 'Water-Resistant Hiking Sandals',
      brand: 'Columbia',
      category: 'sports',
      description:
        'Durable and comfortable open-toe sandals designed for trail hiking and water activities. Features superior cushioning and adjustable straps for a secure fit.',
      rating: 4.3,
      price: 85.0,
      stock: 25,
      thumbnail: 'assets/images/48.jpg',
    },
  ];

  constructor() {}
}

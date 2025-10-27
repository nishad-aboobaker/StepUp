import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {
      name: 'Classic Leather Jacket',
      brand: 'Urban Outfitters',
      category: 'men',
      description: 'A timeless classic, this leather jacket is crafted from genuine leather and features a stylish, modern fit. Perfect for any occasion, it offers both comfort and durability. The jacket has multiple pockets and a smooth satin lining.',
      rating: 4.5,
      stock: 15,
      thumbnail: 'assets/images/product1.jpeg'
    },
    {
      name: 'Running Shoes',
      brand: 'Nike',
      category: 'sports',
      description: 'Engineered for performance, these running shoes provide excellent cushioning and support. The lightweight design and breathable mesh upper make them ideal for long-distance runs. The durable rubber outsole offers superior traction.',
      rating: 4.8,
      stock: 30,
      thumbnail: 'assets/images/product2.jpeg'
    },
    {
      name: 'Summer Floral Dress',
      brand: 'Zara',
      category: 'women',
      description: 'Embrace the summer with this beautiful floral dress. Made from a lightweight and breathable fabric, it features a flattering A-line silhouette and a vibrant floral print. Perfect for casual outings or a day at the beach.',
      rating: 4.6,
      stock: 25,
      thumbnail: 'assets/images/product3.jpeg'
    },
    {
      name: 'Kids\' Graphic T-Shirt',
      brand: 'Gap',
      category: 'kids',
      description: 'Let your kids express their personality with this fun graphic t-shirt. Made from soft and comfortable cotton, it\'s perfect for everyday wear. The vibrant graphic is designed to last, wash after wash.',
      rating: 4.2,
      stock: 50,
      thumbnail: 'assets/images/product4.jpeg'
    },
    {
      name: 'Men\'s Formal Suit',
      brand: 'Hugo Boss',
      category: 'men',
      description: 'Make a statement with this impeccably tailored formal suit. Crafted from premium wool, it features a slim fit and a classic design. Ideal for business meetings or special events, this suit exudes sophistication.',
      rating: 4.9,
      stock: 10,
      thumbnail: 'assets/images/men.jpeg'
    },
    {
      name: 'Women\'s Yoga Pants',
      brand: 'Lululemon',
      category: 'women',
      description: 'Experience ultimate comfort and flexibility with these high-performance yoga pants. Made from a sweat-wicking fabric, they offer a four-way stretch for unrestricted movement. The high-rise waistband provides a secure and flattering fit.',
      rating: 4.9,
      stock: 40,
      thumbnail: 'assets/images/women.jpeg'
    },
    {
      name: 'Kids\' Denim Jacket',
      brand: 'Levi\'s',
      category: 'kids',
      description: 'A wardrobe essential for every kid, this denim jacket is both stylish and durable. Made from high-quality denim, it features a classic design with button-front closure and chest pockets. Perfect for layering in any season.',
      rating: 4.7,
      stock: 35,
      thumbnail: 'assets/images/kids.jpeg'
    },
    {
      name: 'Men\'s Sports Hoodie',
      brand: 'Adidas',
      category: 'sports',
      description: 'Stay warm and comfortable with this versatile sports hoodie. Made from a soft and breathable fleece, it\'s perfect for workouts or casual wear. The hoodie features a drawstring hood and a kangaroo pocket for added convenience.',
      rating: 4.6,
      stock: 20,
      thumbnail: 'assets/images/sports.jpeg'
    },
    {
      name: 'Women\'s Evening Gown',
      brand: 'Vera Wang',
      category: 'women',
      description: 'Turn heads with this stunning evening gown. The elegant design features intricate beading and a flowing silhouette. Made from luxurious silk, it\'s the perfect choice for any formal occasion.',
      rating: 5.0,
      stock: 5,
      thumbnail: 'assets/images/women.jpeg'
    },
    {
      name: 'Kids\' Sneakers',
      brand: 'Puma',
      category: 'kids',
      description: 'These stylish and comfortable sneakers are perfect for active kids. The durable construction and cushioned insole provide all-day support. The fun and colorful design will make them a favorite.',
      rating: 4.4,
      stock: 60,
      thumbnail: 'assets/images/kids.jpeg'
    },
    {
        name: 'Men\'s Casual Shirt',
        brand: 'Tommy Hilfiger',
        category: 'men',
        description: 'A versatile addition to any wardrobe, this casual shirt is perfect for a relaxed yet polished look. Made from soft, breathable cotton, it features a classic button-down design and the iconic Tommy Hilfiger logo. Ideal for weekend outings or casual Fridays.',
        rating: 4.4,
        stock: 22,
        thumbnail: 'assets/images/men.jpeg'
      },
      {
        name: 'Women\'s Handbag',
        brand: 'Michael Kors',
        category: 'women',
        description: 'Accessorize in style with this elegant handbag. Crafted from high-quality leather, it features a spacious interior and multiple compartments to keep you organized. The timeless design and gold-tone hardware add a touch of luxury.',
        rating: 4.8,
        stock: 18,
        thumbnail: 'assets/images/women.jpeg'
      },
      {
        name: 'Kids\' Pajama Set',
        brand: 'Carter\'s',
        category: 'kids',
        description: 'Ensure a comfortable night\'s sleep with this adorable pajama set. Made from ultra-soft, flame-resistant cotton, it features a playful print and a snug fit. The set includes a long-sleeved top and matching pants.',
        rating: 4.7,
        stock: 45,
        thumbnail: 'assets/images/kids.jpeg'
      },
      {
        name: 'Men\'s Basketball Shorts',
        brand: 'Under Armour',
        category: 'sports',
        description: 'Dominate the court with these high-performance basketball shorts. The lightweight, moisture-wicking fabric keeps you cool and dry, while the elastic waistband provides a secure fit. The loose, comfortable design allows for maximum mobility.',
        rating: 4.7,
        stock: 28,
        thumbnail: 'assets/images/sports.jpeg'
      },
      {
        name: 'Women\'s Trench Coat',
        brand: 'Burberry',
        category: 'women',
        description: 'A timeless icon of British style, this trench coat is a must-have for any fashion-conscious woman. Made from weatherproof gabardine, it features the classic double-breasted closure, epaulets, and a belted waist. A symbol of sophistication and elegance.',
        rating: 4.9,
        stock: 8,
        thumbnail: 'assets/images/women.jpeg'
      },
      {
        name: 'Men\'s Chino Pants',
        brand: 'J.Crew',
        category: 'men',
        description: 'The perfect blend of casual and smart, these chino pants are a wardrobe staple. Made from comfortable stretch cotton, they offer a slim, modern fit. Versatile enough to be dressed up with a blazer or down with a t-shirt.',
        rating: 4.5,
        stock: 32,
        thumbnail: 'assets/images/men.jpeg'
      },
      {
        name: 'Kids\' Rain Boots',
        brand: 'Hunter',
        category: 'kids',
        description: 'Keep little feet dry and happy with these iconic rain boots. Handcrafted from natural rubber, they are fully waterproof and feature a comfortable, non-slip sole. The bright, fun colors make puddle-jumping even more exciting.',
        rating: 4.8,
        stock: 40,
        thumbnail: 'assets/images/kids.jpeg'
      },
      {
        name: 'Women\'s Sunglasses',
        brand: 'Ray-Ban',
        category: 'women',
        description: 'Protect your eyes in style with these classic aviator sunglasses. The timeless design features a lightweight metal frame and high-quality lenses that provide 100% UV protection. A perfect accessory for any sunny day.',
        rating: 4.7,
        stock: 35,
        thumbnail: 'assets/images/women.jpeg'
      },
      {
        name: 'Men\'s Watch',
        brand: 'Fossil',
        category: 'men',
        description: 'A perfect blend of classic design and modern functionality, this watch is a stylish accessory for any man. It features a durable stainless steel case, a genuine leather strap, and a multi-function dial. Water-resistant and built to last.',
        rating: 4.6,
        stock: 20,
        thumbnail: 'assets/images/men.jpeg'
      },
      {
        name: 'Kids\' LEGO Set',
        brand: 'LEGO',
        category: 'kids',
        description: 'Spark creativity and imagination with this engaging LEGO set. With hundreds of colorful bricks, the possibilities are endless. This set helps develop fine motor skills and problem-solving abilities in a fun and interactive way.',
        rating: 4.9,
        stock: 55,
        thumbnail: 'assets/images/kids.jpeg'
      },
      {
        name: 'Women\'s Activewear Top',
        brand: 'Athleta',
        category: 'women',
        description: 'Designed for the active woman, this top is perfect for yoga, running, or the gym. The seamless construction and breathable, sweat-wicking fabric provide ultimate comfort and support. The stylish design can easily transition from workout to casual wear.',
        rating: 4.6,
        stock: 38,
        thumbnail: 'assets/images/women.jpeg'
      },
      {
        name: 'Men\'s Hiking Boots',
        brand: 'Merrell',
        category: 'men',
        description: 'Conquer any trail with these durable and comfortable hiking boots. The waterproof leather upper keeps your feet dry, while the rugged outsole provides excellent grip and stability. The cushioned footbed ensures comfort on long hikes.',
        rating: 4.8,
        stock: 25,
        thumbnail: 'assets/images/men.jpeg'
      },
      {
        name: 'Kids\' School Backpack',
        brand: 'JanSport',
        category: 'kids',
        description: 'Get ready for school with this durable and spacious backpack. It features multiple compartments to keep books and supplies organized, padded shoulder straps for comfort, and a fun, colorful design. Built to withstand the rigors of the school year.',
        rating: 4.7,
        stock: 50,
        thumbnail: 'assets/images/kids.jpeg'
      },
      {
        name: 'Women\'s Skinny Jeans',
        brand: 'AG Jeans',
        category: 'women',
        description: 'A perfect-fitting pair of skinny jeans is a wardrobe essential. These are crafted from premium stretch denim that hugs your curves for a flattering silhouette. The versatile dark wash can be dressed up or down for any occasion.',
        rating: 4.7,
        stock: 30,
        thumbnail: 'assets/images/women.jpeg'
      },
      {
        name: 'Men\'s Polo Shirt',
        brand: 'Ralph Lauren',
        category: 'men',
        description: 'A timeless classic, this polo shirt is the epitome of preppy style. Made from soft, breathable cotton pique, it features the iconic polo player logo and a comfortable, relaxed fit. Perfect for a smart-casual look.',
        rating: 4.6,
        stock: 40,
        thumbnail: 'assets/images/men.jpeg'
      },
      {
        name: 'Kids\' Sun Hat',
        brand: 'Coolibar',
        category: 'kids',
        description: 'Protect your child from the sun with this stylish and effective sun hat. It offers UPF 50+ sun protection and is made from a lightweight, breathable fabric. The adjustable chin strap ensures a secure fit during all their outdoor adventures.',
        rating: 4.9,
        stock: 45,
        thumbnail: 'assets/images/kids.jpeg'
      },
      {
        name: 'Women\'s Running Shorts',
        brand: 'Brooks',
        category: 'sports',
        description: 'Enjoy a comfortable and unrestricted run with these lightweight running shorts. The moisture-wicking fabric and built-in liner provide comfort and support, while the split-leg design allows for a full range of motion.',
        rating: 4.8,
        stock: 33,
        thumbnail: 'assets/images/sports.jpeg'
      },
      {
        name: 'Men\'s Swim Trunks',
        brand: 'Vilebrequin',
        category: 'men',
        description: 'Make a splash in these stylish and comfortable swim trunks. Made from quick-drying fabric, they feature a vibrant print and a comfortable mesh lining. Perfect for the beach, pool, or a tropical vacation.',
        rating: 4.7,
        stock: 28,
        thumbnail: 'assets/images/men.jpeg'
      },
      {
        name: 'Kids\' Board Game',
        brand: 'Hasbro',
        category: 'kids',
        description: 'A classic board game that provides hours of fun for the whole family. This game encourages strategic thinking and friendly competition. Perfect for game nights, parties, or a rainy day indoors.',
        rating: 4.6,
        stock: 60,
        thumbnail: 'assets/images/kids.jpeg'
      },
      {
        name: 'Women\'s Blouse',
        brand: 'Ann Taylor',
        category: 'women',
        description: 'A sophisticated and versatile blouse that is perfect for the office or a special occasion. The elegant design features a flattering drape and is made from a luxurious, easy-care fabric. A timeless addition to any professional wardrobe.',
        rating: 4.5,
        stock: 35,
        thumbnail: 'assets/images/women.jpeg'
      },
      {
        name: 'Men\'s Dress Shoes',
        brand: 'Allen Edmonds',
        category: 'men',
        description: 'Handcrafted in the USA, these dress shoes are the pinnacle of quality and style. Made from premium calfskin leather, they feature a timeless design and a durable, Goodyear-welted construction. An investment in style that will last for years.',
        rating: 4.9,
        stock: 15,
        thumbnail: 'assets/images/men.jpeg'
      },
      {
        name: 'Kids\' Art Easel',
        brand: 'Melissa & Doug',
        category: 'kids',
        description: 'Unleash your child\'s inner artist with this deluxe wooden art easel. It features a chalkboard on one side and a dry-erase board on the other, plus a paper roll for painting and drawing. A perfect tool for creative expression.',
        rating: 4.8,
        stock: 25,
        thumbnail: 'assets/images/kids.jpeg'
      },
      {
        name: 'Women\'s Sports Bra',
        brand: 'Zella',
        category: 'sports',
        description: 'This high-support sports bra is perfect for high-impact activities. The moisture-wicking fabric and mesh panels provide ventilation to keep you cool and dry. The comfortable, compressive fit offers excellent support and minimizes bounce.',
        rating: 4.7,
        stock: 42,
        thumbnail: 'assets/images/sports.jpeg'
      },
      {
        name: 'Men\'s Wallet',
        brand: 'Tumi',
        category: 'men',
        description: 'A sleek and durable wallet designed for the modern man. Made from Tumi\'s signature ballistic nylon, it features multiple card slots, a bill compartment, and ID window. The slim design fits comfortably in your pocket.',
        rating: 4.8,
        stock: 30,
        thumbnail: 'assets/images/men.jpeg'
      },
      {
        name: 'Kids\' Stuffed Animal',
        brand: 'Jellycat',
        category: 'kids',
        description: 'Incredibly soft and cuddly, this stuffed animal is the perfect companion for children of all ages. Made from high-quality, huggable materials, it\'s designed to be a cherished friend for years to come.',
        rating: 4.9,
        stock: 70,
        thumbnail: 'assets/images/kids.jpeg'
      },
      {
        name: 'Women\'s Perfume',
        brand: 'Chanel',
        category: 'women',
        description: 'A timeless and iconic fragrance that exudes elegance and sophistication. With notes of jasmine, rose, and sandalwood, this perfume is a classic choice for any woman who appreciates luxury and style.',
        rating: 4.9,
        stock: 22,
        thumbnail: 'assets/images/women.jpeg'
      },
      {
        name: 'Men\'s Beard Oil',
        brand: 'Art of Shaving',
        category: 'men',
        description: 'Nourish and condition your beard with this premium beard oil. Formulated with natural oils, it helps to soften beard hair, reduce itchiness, and promote healthy growth. The subtle, masculine scent is an added bonus.',
        rating: 4.7,
        stock: 38,
        thumbnail: 'assets/images/men.jpeg'
      },
      {
        name: 'Kids\' Scooter',
        brand: 'Micro Kickboard',
        category: 'kids',
        description: 'A fun and exciting way for kids to get around, this scooter is designed for stability and smooth riding. The high-quality construction and adjustable handlebars ensure a safe and comfortable ride as your child grows.',
        rating: 4.8,
        stock: 30,
        thumbnail: 'assets/images/kids.jpeg'
      },
      {
        name: 'Women\'s Sweater',
        brand: 'Everlane',
        category: 'women',
        description: 'A cozy and stylish sweater made from 100% Grade-A cashmere. The classic crewneck design and relaxed fit make it a versatile piece for any occasion. Ethically sourced and exceptionally soft, it\'s a luxury you can feel good about.',
        rating: 4.8,
        stock: 28,
        thumbnail: 'assets/images/women.jpeg'
      },
      {
        name: 'Men\'s Athletic Socks',
        brand: 'Bombas',
        category: 'sports',
        description: 'Engineered for athletic performance, these socks provide comfort, support, and durability. The cushioned footbed, arch support, and seamless toe make them perfect for any workout. For every pair purchased, a pair is donated to someone in need.',
        rating: 4.9,
        stock: 50,
        thumbnail: 'assets/images/sports.jpeg'
      },
      {
        name: 'Kids\' Lunch Box',
        brand: 'Bentgo',
        category: 'kids',
        description: 'Make lunchtime fun and easy with this innovative bento-style lunch box. The leak-proof compartments keep food fresh and separate, making it perfect for a variety of healthy meals and snacks. The durable, kid-friendly design is easy to open and close.',
        rating: 4.9,
        stock: 55,
        thumbnail: 'assets/images/kids.jpeg'
      },
      {
        name: 'Women\'s Ankle Boots',
        brand: 'Clarks',
        category: 'women',
        description: 'Stylish, comfortable, and versatile, these ankle boots are a must-have for any wardrobe. Made from genuine leather, they feature a cushioned insole and a durable, flexible sole. Perfect for work, weekends, and everything in between.',
        rating: 4.6,
        stock: 35,
        thumbnail: 'assets/images/women.jpeg'
      },
      {
        name: 'Men\'s Bomber Jacket',
        brand: 'Alpha Industries',
        category: 'men',
        description: 'An iconic piece of military-inspired fashion, this bomber jacket is both stylish and functional. Made from water-resistant nylon, it features a classic design with a reversible orange lining. A cool and versatile addition to any casual wardrobe.',
        rating: 4.7,
        stock: 25,
        thumbnail: 'assets/images/men.jpeg'
      },
      {
        name: 'Kids\' Building Blocks',
        brand: 'Magna-Tiles',
        category: 'kids',
        description: 'A fun and educational toy that combines math, science, and creativity. These magnetic building blocks allow children to create colorful, 3D structures. A great way to develop spatial reasoning and fine motor skills.',
        rating: 4.9,
        stock: 40,
        thumbnail: 'assets/images/kids.jpeg'
      },
      {
        name: 'Women\'s Fitness Tracker',
        brand: 'Fitbit',
        category: 'sports',
        description: 'Stay on top of your health and fitness goals with this sleek and powerful fitness tracker. It tracks steps, distance, calories burned, and sleep quality. The slim, comfortable design makes it perfect for all-day wear.',
        rating: 4.7,
        stock: 45,
        thumbnail: 'assets/images/sports.jpeg'
      },
      {
        name: 'Men\'s Down Jacket',
        brand: 'Patagonia',
        category: 'men',
        description: 'Stay warm and comfortable in cold weather with this lightweight and packable down jacket. The ethically sourced down provides excellent insulation, while the water-resistant shell keeps you dry. A perfect layer for all your outdoor adventures.',
        rating: 4.9,
        stock: 20,
        thumbnail: 'assets/images/men.jpeg'
      },
      {
        name: 'Kids\' Play Kitchen',
        brand: 'KidKraft',
        category: 'kids',
        description: 'Inspire hours of imaginative play with this realistic and interactive play kitchen. It features clicking oven knobs, a sink with a faucet, and plenty of storage for play food and accessories. A wonderful toy for aspiring little chefs.',
        rating: 4.8,
        stock: 15,
        thumbnail: 'assets/images/kids.jpeg'
      }
  ];

  constructor() { }
}

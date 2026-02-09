const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image:
      "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image:
      "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image:
      "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image:
      "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image:
      "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image:
      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image:
      "https://images.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image:
      "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image:
      "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image:
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image:
      "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image:
      "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image:
      "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },

  // ✅ Your Additional Listings Start Here

  {
    title: "Oceanview Cliff House",
    description: "A stunning modern home perched on a cliff with breathtaking ocean views.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 2300,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Scandinavian Forest Cabin",
    description: "A cozy wooden cabin surrounded by dense pine forests and serene nature.",
    image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    price: 900,
    location: "Oslo",
    country: "Norway"
  },
  {
    title: "Urban Studio Apartment",
    description: "Compact yet stylish studio apartment perfectly located in the city center.",
    image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
    price: 1100,
    location: "Berlin",
    country: "Germany"
  },
  {
    title: "Lake Cabin Retreat",
    description: "Quiet lakeside cabin ideal for fishing, kayaking, and weekend relaxation.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    price: 850,
    location: "Vancouver",
    country: "Canada"
  },
  {
    title: "Mediterranean Villa",
    description: "Bright and airy villa overlooking olive groves and the dazzling coastline.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 2600,
    location: "Nice",
    country: "France"
  },
  {
    title: "City Penthouse Suite",
    description: "Luxurious penthouse with private rooftop access and skyline views.",
    image: "https://images.unsplash.com/photo-1537726235470-8504e3beef77",
    price: 3400,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Countryside Cottage",
    description: "Quaint cottage surrounded by meadows, ideal for a peaceful getaway.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    price: 700,
    location: "York",
    country: "United Kingdom"
  },
  {
    title: "Luxury Mountain Lodge",
    description: "A spacious lodge with panoramic mountain views and rustic charm.",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9",
    price: 2800,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Sahara Desert Camp",
    description: "Unique glamping tents offering comfort and unforgettable desert sunsets.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: 600,
    location: "Merzouga",
    country: "Morocco"
  },
  {
    title: "Tropical Jungle Bungalow",
    description: "Nature-immersed bungalow surrounded by lush rainforest and wildlife.",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
    price: 900,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Coastal Surf Hut",
    description: "Simple hut located right on the beach, perfect for surfers and backpackers.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 400,
    location: "Goa",
    country: "India"
  },
  {
    title: "Modern Glass House",
    description: "A sleek home made almost entirely of glass for full nature immersion.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    price: 3200,
    location: "Auckland",
    country: "New Zealand"
  },
  {
    title: "Garden Villa",
    description: "A peaceful villa featuring private gardens and serene walking paths.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 1800,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Snow Cabin",
    description: "Warm and comfortable cabin ideal for winter sports and snowy adventures.",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc",
    price: 1200,
    location: "Reykjavik",
    country: "Iceland"
  },
  {
    title: "Beachside Bamboo Villa",
    description: "Eco-friendly bamboo villa just steps away from the turquoise sea.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 1500,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Historic Manor House",
    description: "An elegant manor with vintage architecture and beautiful gardens.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    price: 2900,
    location: "Dublin",
    country: "Ireland"
  },
  {
    title: "Skyline Apartment",
    description: "A modern apartment with huge windows overlooking the entire city skyline.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 2000,
    location: "Singapore",
    country: "Singapore"
  },
  {
    title: "Riverside Cottage",
    description: "Traditional riverside home with calm water views and scenic trails.",
    image: "https://images.unsplash.com/photo-1534081333815-ae5019106622",
    price: 750,
    location: "Brisbane",
    country: "Australia"
  },
  {
    title: "Hillside Stone House",
    description: "Rustic stone home overlooking dramatic hills and green landscapes.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    price: 1300,
    location: "Lisbon",
    country: "Portugal"
  },
  {
    title: "Sunset Beach Cottage",
    description: "Cozy cottage located directly on a beach famous for stunning sunsets.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 1400,
    location: "Honolulu",
    country: "USA"
  },
  {
    title: "Island Cliff Resort",
    description: "Private villas built on dramatic cliffs with panoramic ocean views.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: 2700,
    location: "Madeira",
    country: "Portugal"
  },
  {
    title: "Minimalist Desert Home",
    description: "A modern minimalist home located deep in the desert for complete privacy.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 1900,
    location: "Phoenix",
    country: "USA"
  },
  {
    title: "Hilltop Farmhouse",
    description: "Beautiful farmhouse on a hill with orchards and stunning countryside views.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    price: 900,
    location: "Florence",
    country: "Italy"
  },
  {
    title: "Luxury River Lodge",
    description: "A tranquil lodge beside a peaceful river with premium wooden interiors.",
    image: "https://images.unsplash.com/photo-1488381297031-e05e476a008c",
    price: 2400,
    location: "Kruger",
    country: "South Africa"
  },
  {
    title: "Sky Tower Suite",
    description: "Exclusive suite at the top of a skyscraper with unmatched skyline views.",
    image: "https://images.unsplash.com/photo-1537726235470-8504e3beef77",
    price: 3500,
    location: "Shanghai",
    country: "China"
  },
  {
    title: "Forest Treehouse Cabin",
    description: "Wooden treehouse elevated high among old forest trees. Perfect for adventure.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    price: 950,
    location: "Nairobi",
    country: "Kenya"
  },
  {
    title: "Ocean Pearl Villa",
    description: "White-washed villa offering direct beach access and sea breeze all year.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 2200,
    location: "Mykonos",
    country: "Greece"
  },
  {
    title: "Vintage Wooden Chalet",
    description: "Classic-style chalet with wooden interiors and a cozy atmosphere.",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc",
    price: 2100,
    location: "Innsbruck",
    country: "Austria"
  },
  {
    title: "Tropical Overwater Hut",
    description: "Stay above the turquoise ocean in this exotic overwater hut.",
    image: "https://images.unsplash.com/photo-1505731132164-cca7d3a0c3f3",
    price: 3800,
    location: "Bora Bora",
    country: "French Polynesia"
  },
  {
    title: "Green Mountain Cabin",
    description: "Winter-friendly cabin surrounded by green pines and mountain trails.",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9",
    price: 1000,
    location: "Denver",
    country: "USA"
  },
  {
    title: "Urban Designer Loft",
    description: "Open-plan designer loft with industrial elements and creative décor.",
    image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
    price: 1600,
    location: "Toronto",
    country: "Canada"
  },
  {
    title: "Palmtree Island Hut",
    description: "A peaceful beach hut hidden among palm trees on a private island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 700,
    location: "Langkawi",
    country: "Malaysia"
  },
  {
    title: "Tuscany Vineyard Home",
    description: "Charming countryside house surrounded by vineyards and olive groves.",
    image: "https://images.unsplash.com/photo-1564866657312-26bf04b6c36c",
    price: 2300,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Highland Stone Cottage",
    description: "Traditional stone cottage deep in the Scottish Highlands.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 950,
    location: "Inverness",
    country: "United Kingdom"
  },
  {
    title: "Meditation Bamboo Hut",
    description: "Eco bamboo hut built for silent retreats and meditation lovers.",
    image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    price: 550,
    location: "Chiang Mai",
    country: "Thailand"
  },
  {
    title: "Northern Lights Cabin",
    description: "Glass-roof cabin to watch the magical northern lights at night.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    price: 2700,
    location: "Rovaniemi",
    country: "Finland"
  },
  {
    title: "Sunny Beach Villa",
    description: "A light-filled villa right on the shoreline with brilliant sea views.",
    image: "https://images.unsplash.com/photo-1505731132164-cca7d3a0c3f3",
    price: 2100,
    location: "Gold Coast",
    country: "Australia"
  },
  {
    title: "Mountain Top Chalet",
    description: "Chalet located at the peak of a mountain, offering surreal landscapes.",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9",
    price: 3000,
    location: "Chamonix",
    country: "France"
  },
  {
    title: "Zen Garden House",
    description: "Traditional Japanese house overlooking a tranquil koi pond.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 2500,
    location: "Osaka",
    country: "Japan"
  },
  {
    title: "Modern Coastal Apartment",
    description: "Stylish apartment facing the ocean, ideal for a relaxing vacation.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 1800,
    location: "Barcelona",
    country: "Spain"
  }
];

module.exports = { data: sampleListings };

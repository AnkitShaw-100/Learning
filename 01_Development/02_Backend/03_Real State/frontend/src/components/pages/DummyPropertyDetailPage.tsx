import { useParams } from "react-router-dom";
import image1 from "../../assets/interior/image1.jpg";
import image2 from "../../assets/interior/image2.jpg";
import image3 from "../../assets/interior/image3.jpg";
import image4 from "../../assets/interior/image4.jpg";
import image5 from "../../assets/interior/image5.jpg";
import image6 from "../../assets/interior/image6.jpg";
import dummyMap from "../../assets/exterior/map.jpeg";

const residences = [
  {
    name: "DLF Cyber Residency",
    img: image1,
    price: "₹1.25 Cr",
    owner: "DLF Group",
    location: "Gurgaon, Haryana",
    type: "3 BHK Apartment",
    area: "1800 sq.ft",
    amenities: ["Swimming Pool", "Gym", "Park", "24/7 Security"],
    rating: 4.8,
    reviews: 124,
    readyToMove: true
  },
  {
    name: "Lodha Altamount",
    img: image2,
    price: "₹5.7 Cr",
    owner: "Lodha Group",
    location: "Mumbai, Maharashtra",
    type: "4 BHK Luxury Flat",
    area: "3200 sq.ft",
    amenities: ["Clubhouse", "Jacuzzi", "Concierge", "Private Theater"],
    rating: 4.9,
    reviews: 89,
    readyToMove: true
  },
  {
    name: "Prestige Lakeside Habitat",
    img: image3,
    price: "₹2.1 Cr",
    owner: "Prestige Group",
    location: "Bangalore, Karnataka",
    type: "3 BHK Villa",
    area: "2400 sq.ft",
    amenities: ["Private Garden", "Lake View", "Modular Kitchen", "Solar Panels"],
    rating: 4.7,
    reviews: 156,
    readyToMove: false,
    possession: "Dec 2024"
  },
  {
    name: "Sobha City",
    img: image4,
    price: "₹1.6 Cr",
    owner: "Sobha Developers",
    location: "Delhi NCR",
    type: "3 BHK Apartment",
    area: "1650 sq.ft",
    amenities: ["Kids Play Area", "Party Hall", "Jogging Track", "Power Backup"],
    rating: 4.6,
    reviews: 210,
    readyToMove: true
  },
  {
    name: "Godrej Garden City",
    img: image5,
    price: "₹85 Lakh",
    owner: "Godrej Properties",
    location: "Ahmedabad, Gujarat",
    type: "2 BHK Flat",
    area: "1200 sq.ft",
    amenities: ["Landscaped Gardens", "Yoga Deck", "Badminton Court", "Cafeteria"],
    rating: 4.5,
    reviews: 178,
    readyToMove: true
  },
  {
    name: "Brigade Orchards",
    img: image6,
    price: "₹2.75 Cr",
    owner: "Brigade Group",
    location: "Chennai, Tamil Nadu",
    type: "3 BHK Farmhouse",
    area: "2800 sq.ft",
    amenities: ["Organic Farm", "Pool", "Gym", "Walking Trails"],
    rating: 4.7,
    reviews: 92,
    readyToMove: false,
    possession: "Mar 2025"
  }
];

const DummyPropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const property = residences[Number(id)];

  if (!property) {
    return <div className="p-8 text-center text-red-600 font-bold text-xl">Property not found.</div>;
  }

  return (
  <div className="w-full min-h-screen bg-gray-50 pt-0 flex flex-col">
      {/* Banner Image */}
      <div className="relative w-full" style={{height: '55vh', minHeight: '350px'}}>
        <img src={property.img} alt={property.name} className="w-full h-full object-cover" style={{height: '55vh', minHeight: '350px'}} />
        {property.readyToMove && (
          <div className="absolute top-8 right-8 bg-green-500/90 text-white px-6 py-2 rounded-full text-base font-bold shadow">Ready to Move</div>
        )}
        {property.possession && !property.readyToMove && (
          <div className="absolute top-8 right-8 bg-amber-500/90 text-white px-6 py-2 rounded-full text-base font-bold shadow">Possession: {property.possession}</div>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 py-12 px-4 md:px-0">
        {/* Left: Details */}
        <div className="md:col-span-2">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">{property.name}</h1>
          <div className="flex items-center gap-3 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span className="text-gray-700 text-xl font-medium">{property.location}</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-base font-semibold">{property.type}</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-base font-semibold">{property.area}</span>
            <span className="bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-base font-semibold">Builder: {property.owner}</span>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-yellow-500 font-bold text-2xl">★ {property.rating}</span>
            <span className="text-gray-500 text-lg">({property.reviews} reviews)</span>
          </div>
          {/* Dummy Description */}
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Welcome to <span className="font-semibold text-blue-900">{property.name}</span>, a premium property located in the heart of {property.location}. This spacious {property.type.toLowerCase()} offers modern amenities and a serene environment, perfect for families and professionals alike. Enjoy top-notch facilities including {property.amenities.slice(0,2).join(', ')}, and more. The property is designed with attention to detail, ensuring comfort, security, and luxury. <br /><br />
            <span className="font-semibold">About the Neighborhood:</span> The area boasts excellent schools, hospitals, shopping centers, and parks. Residents enjoy easy access to public transport and major highways, making daily commutes hassle-free.
          </p>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">Property Highlights</h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
              <li>24/7 Power Backup and Water Supply</li>
              <li>Earthquake-resistant structure</li>
              <li>Children's play area and landscaped gardens</li>
              <li>Dedicated security and CCTV surveillance</li>
              <li>Rainwater harvesting and solar panels</li>
              <li>Clubhouse, gym, and swimming pool</li>
              <li>High-speed elevators and ample parking</li>
              <li>Pet-friendly and eco-friendly community</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">Nearby Landmarks</h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
              <li>2 km from City Center Mall</li>
              <li>1.5 km from Metro Station</li>
              <li>500m from Green Park</li>
              <li>Close to top schools and hospitals</li>
              <li>Easy access to IT hubs and business parks</li>
            </ul>
          </div>
          {/* Features Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">Key Amenities</h2>
            <div className="flex flex-wrap gap-3">
              {property.amenities.map((amenity, i) => (
                <span key={i} className="bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-100">{amenity}</span>
              ))}
            </div>
          </div>
          {/* More Dummy Details */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-gray-500 text-xs mb-1">Floor</div>
              <div className="font-semibold text-gray-800 text-lg">{Math.floor(Math.random()*20)+1} (of 20)</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-gray-500 text-xs mb-1">Facing</div>
              <div className="font-semibold text-gray-800 text-lg">{["East","West","North","South"][Number(id)%4]}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-gray-500 text-xs mb-1">Furnishing</div>
              <div className="font-semibold text-gray-800 text-lg">{["Fully Furnished","Semi Furnished","Unfurnished"][Number(id)%3]}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-gray-500 text-xs mb-1">Bathrooms</div>
              <div className="font-semibold text-gray-800 text-lg">{property.type.match(/\d+/)?.[0] || 3}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-gray-500 text-xs mb-1">Parking</div>
              <div className="font-semibold text-gray-800 text-lg">Yes, 2 covered spots</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-gray-500 text-xs mb-1">Year Built</div>
              <div className="font-semibold text-gray-800 text-lg">{2015 + (Number(id)%8)}</div>
            </div>
          </div>
          {/* Contact Section */}
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-3">Contact Agent</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">Call Now</button>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">WhatsApp</button>
              <button className="bg-gray-200 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">Email</button>
            </div>
          </div>
        </div>
        {/* Right: Map & Highlights */}
        <div className="space-y-8">
          <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-3 text-lg">Location Map</h3>
            <img src={dummyMap} alt="Map" className="w-full h-48 object-cover rounded-lg border border-gray-200" />
            <div className="text-xs text-gray-500 mt-2">*Map is for illustration purposes only</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-blue-900 mb-3 text-lg">Why Choose This Property?</h3>
            <ul className="list-disc list-inside text-blue-900 text-base space-y-1">
              <li>Prime location with excellent connectivity</li>
              <li>Modern amenities and security</li>
              <li>Spacious layout and natural light</li>
              <li>Reputed builder: {property.owner}</li>
              <li>High rental yield potential</li>
              <li>24/7 water and electricity supply</li>
              <li>Eco-friendly and sustainable design</li>
              <li>Pet-friendly community</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Buy Now Button fixed at the bottom */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center z-30 pt-6 pb-8">
        <button className="bg-blue-900 text-white px-16 py-4 rounded-full text-2xl font-bold shadow-xl hover:bg-blue-800 transition-all duration-200">Buy Now</button>
      </div>
    </div>
  );
};

export default DummyPropertyDetailPage;

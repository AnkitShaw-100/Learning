import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";


const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [user, setUser] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [socket, setSocket] = useState(null);
  // payment feature removed - no paymentLoading state needed

  useEffect(() => {
    axios.get(`http://localhost:5000/api/properties/${id}`)
      .then(res => setProperty(res.data))
      .catch(err => console.error(err));
    // Fetch user
    const token = localStorage.getItem("token");
    if (token) {
      axios.get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      }).then(res => setUser(res.data)).catch(() => {});
    }
  }, [id]);

  // setup socket when component mounts and property id is available
  useEffect(() => {
    if (!id) return;
    const s = io("http://localhost:5000");
    setSocket(s);
    s.emit("joinProperty", { propertyId: id });
    s.on("newMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      s.emit("leaveProperty", { propertyId: id });
      s.disconnect();
    };
  }, [id]);

  const fetchMessages = async () => {
    setLoadingMessages(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/messages", {
        params: { propertyId: id },
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(res.data);
    } catch (e) {
      setMessages([]);
    } finally {
      setLoadingMessages(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:5000/api/messages", {
        propertyId: id,
        message: newMessage,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewMessage("");
      fetchMessages();
    } catch (e) {
      // Optionally handle error
    }
  };

  if (!property) return <p className="text-center mt-10">Loading...</p>;

  const isBuyer = user && user.role === "buyer";

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-6 overflow-hidden">
      <img
        src={property.images?.[0] || "https://via.placeholder.com/800x400"}
        alt={property.title}
        className="w-full h-96 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-lg font-bold text-green-600 mt-2">₹{property.price}</p>
        <p className="mt-4">{property.description}</p>


        {/* Contact Seller button for buyers */}
        {isBuyer && (
          <div className="flex gap-4 mt-6">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => { setShowChat(true); fetchMessages(); }}
            >
              Contact Seller
            </button>
          </div>
        )}

        {/* Chat Modal */}
        {showChat && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
              <button className="absolute top-2 right-2 text-xl" onClick={() => setShowChat(false)}>&times;</button>
              <h2 className="text-xl font-bold mb-2">Chat with Seller</h2>
              <div className="h-48 overflow-y-auto border p-2 mb-2 bg-gray-50">
                {loadingMessages ? (
                  <div>Loading messages...</div>
                ) : messages.length === 0 ? (
                  <div className="text-gray-500">No messages yet.</div>
                ) : (
                  messages.map((msg, idx) => (
                    <div key={idx} className={msg.buyer._id === user._id ? "text-right" : "text-left"}>
                      <span className="inline-block bg-blue-100 px-2 py-1 rounded mb-1">
                        <b>{msg.buyer._id === user._id ? "You" : msg.seller.name}:</b> {msg.message}
                      </span>
                    </div>
                  ))
                )}
              </div>
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                  className="border p-2 flex-1"
                  placeholder="Type your message..."
                  required
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;

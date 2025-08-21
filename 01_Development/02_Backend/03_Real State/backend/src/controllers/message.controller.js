import Message from "../models/Message.js";
import Listing from "../models/Listing.js";
import User from "../models/User.js";

// Buyer sends message to seller about a property
export const sendMessage = async (req, res) => {
  try {
    const { propertyId, message } = req.body;
    const property = await Listing.findById(propertyId);
    if (!property) return res.status(404).json({ message: "Property not found" });
    const seller = property.owner;
    const buyer = req.user.id;
    const msg = await Message.create({ property: propertyId, buyer, seller, message });
    // Emit real-time event to sockets in the property's room
    try {
      const io = req.app.get("io");
      if (io) {
        const populated = await msg.populate("buyer seller", "name email");
        io.to(`property_${propertyId}`).emit("newMessage", populated);
        // also notify the seller's personal room for dashboard notifications
        io.to(`user_${seller.toString()}`).emit("newMessageNotification", {
          propertyId,
          message: populated,
        });
      }
    } catch (socketErr) {
      console.error("Socket emit error:", socketErr.message);
    }
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Seller or buyer fetches messages for a property
export const getMessages = async (req, res) => {
  try {
    const { propertyId } = req.query;
    const userId = req.user.id;
    const filter = { property: propertyId };
    // Only allow buyer or seller to fetch
    filter.$or = [{ buyer: userId }, { seller: userId }];
    const messages = await Message.find(filter).sort({ createdAt: 1 }).populate("buyer seller", "name email");
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

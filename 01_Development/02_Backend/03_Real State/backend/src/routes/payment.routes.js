import express from "express";
import Stripe from "stripe";
import { protect } from "../middleware/auth.js";
import Listing from "../models/Listing.js";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create Stripe Checkout session for a property
router.post("/create-checkout-session", protect, async (req, res) => {
  try {
    const { propertyId } = req.body;
    const property = await Listing.findById(propertyId);
    if (!property) return res.status(404).json({ message: "Property not found" });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: property.title,
              description: property.description,
            },
            unit_amount: property.price * 100, // in paise
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/dashboard?payment=success`,
      cancel_url: `${process.env.CLIENT_URL}/properties/${propertyId}?payment=cancel`,
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

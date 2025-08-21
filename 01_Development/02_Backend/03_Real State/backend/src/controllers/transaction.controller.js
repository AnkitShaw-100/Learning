import Transaction from "../models/Transaction.js";
import Listing from "../models/Listing.js";

// Buyer creates transaction request
export const createTransaction = async (req, res) => {
  try {
    const { listingId } = req.params;

    const listing = await Listing.findById(listingId).populate("owner");
    if (!listing) return res.status(404).json({ message: "Listing not found" });

    // Prevent seller from buying own property
    if (listing.owner._id.toString() === req.user.id) {
      return res.status(400).json({ message: "You cannot buy your own property" });
    }

    const transaction = new Transaction({
      listing: listing._id,
      buyer: req.user.id,
      seller: listing.owner._id
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Seller/Admin updates transaction status
export const updateTransactionStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ message: "Transaction not found" });

    // Only seller or admin can approve/reject
    if (transaction.seller.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized to update this transaction" });
    }

    transaction.status = status;
    await transaction.save();

    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all transactions for current user
export const getMyTransactions = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "buyer") filter.buyer = req.user.id;
    if (req.user.role === "seller") filter.seller = req.user.id;

    const transactions = await Transaction.find(filter)
      .populate("listing buyer seller");

    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

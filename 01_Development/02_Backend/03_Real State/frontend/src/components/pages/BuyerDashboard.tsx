import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEdit, FaSave, FaTimes, FaHeart } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import apiClient from "../../services/api";

// property type
interface Property {
  _id: string;
  title: string;
  location: string;
  price: number;
  description: string;
  image?: string;
}

// state type
type State = {
  favorites: Property[];
  loading: boolean;
  error: string;
};

// reducer
function reducer(state: State, action: any): State {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { favorites: action.payload, loading: false, error: "" };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((p) => p._id !== action.payload),
      };
    default:
      return state;
  }
}

// Alert component
const AlertBox = ({
  type,
  message,
}: {
  type: "success" | "error" | null;
  message: string;
}) => {
  if (!type || !message) return null;

  const baseStyle =
    "p-3 mb-4 rounded text-center font-medium transition-all duration-300";
  const styles: Record<"success" | "error" | null, string> = {
    success: "bg-green-100 text-green-800 border border-green-300",
    error: "bg-red-100 text-red-800 border border-red-300",
    null: "",
  };

  return <div className={`${baseStyle} ${styles[type]}`}>{message}</div>;
};

const BuyerDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    loading: true,
    error: "",
  });

  const [editing, setEditing] = useState(false);
  const [updatingProfile, setUpdatingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  // alert state
  const [alert, setAlert] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  // show alert
  const showAlert = (type: "success" | "error", message: string) => {
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: null, message: "" }), 3000);
  };

  // fetch favorites
  const fetchFavorites = async () => {
    try {
      dispatch({ type: "FETCH_START" });
      const response = await apiClient.getFavorites();
      if (response.success && response.data) {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } else {
        dispatch({ type: "FETCH_ERROR", payload: "Failed to load favorites" });
        showAlert("error", "Failed to load favorites");
      }
    } catch {
      dispatch({ type: "FETCH_ERROR", payload: "Error loading favorites" });
      showAlert("error", "Error loading favorites");
    }
  };

  // remove favorite
  const handleRemoveFavorite = async (propertyId: string) => {
    try {
      const response = await apiClient.removeFromFavorites(propertyId);
      if (response.success) {
        dispatch({ type: "REMOVE_FAVORITE", payload: propertyId });
        showAlert("success", "Removed from favorites");
      } else {
        showAlert("error", "Failed to remove favorite");
      }
    } catch {
      showAlert("error", "Error removing favorite");
    }
  };

  // profile update
  const handleProfileUpdate = async () => {
    try {
      setUpdatingProfile(true);
      const response = await apiClient.updateUserProfile(profileForm);
      if (response.success) {
        showAlert("success", "Profile updated successfully");
        setEditing(false);
      } else {
        showAlert("error", response.message || "Failed to update profile");
      }
    } catch {
      showAlert("error", "Error updating profile");
    } finally {
      setUpdatingProfile(false);
    }
  };

  // auth + fetch
  useEffect(() => {
    if (!user || user.role !== "buyer") {
      navigate("/login");
    } else {
      fetchFavorites();
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <AlertBox type={alert.type} message={alert.message} />

      {/* profile card */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-900">My Profile</h2>
          {editing ? (
            <div className="flex gap-3">
              <button
                onClick={handleProfileUpdate}
                disabled={updatingProfile}
                className={`text-green-600 hover:text-green-700 ${
                  updatingProfile ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FaSave />
              </button>
              <button
                onClick={() => setEditing(false)}
                className="text-red-600 hover:text-red-700"
              >
                <FaTimes />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="text-blue-600 hover:text-blue-700"
            >
              <FaEdit />
            </button>
          )}
        </div>

        {editing ? (
          <div className="mt-4 space-y-4">
            <input
              type="text"
              value={profileForm.name}
              onChange={(e) =>
                setProfileForm({ ...profileForm, name: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="email"
              value={profileForm.email}
              onChange={(e) =>
                setProfileForm({ ...profileForm, email: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        ) : (
          <div className="mt-4 text-gray-700">
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
          </div>
        )}
      </div>

      {/* favorites section */}
      <h2 className="text-2xl font-bold text-blue-900 mb-6">My Favorites</h2>

      {state.loading && <p className="text-gray-500">Loading favorites...</p>}
      {state.error && (
        <p className="text-red-500 mb-4">Error: {state.error}</p>
      )}

      {state.favorites.length === 0 && !state.loading ? (
        <p className="text-gray-500">No favorites found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.favorites.map((property) => (
            <motion.div
              key={property._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {property.image && (
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
              )}
              <h3 className="text-lg font-semibold text-gray-900">
                {property.title}
              </h3>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-blue-900 font-medium">${property.price}</p>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {property.description}
              </p>
              <button
                onClick={() => handleRemoveFavorite(property._id)}
                className="mt-3 text-red-500 hover:text-red-600 flex items-center gap-1"
              >
                <FaHeart /> Remove
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuyerDashboard;

import React from "react";

const ReportCard = ({ report }) => {
return (
    <div className="bg-white rounded-xl shadow-md p-4 w-[320px] h-[350px] hover:scale-105 transition-transform">
        {/* Image section */}
      <img
        src={report.image || "/placeholder.png"} // Update this path based on your assets
        alt={report.product || "Lost item"}
        className="h-[200px] w-full object-cover rounded mb-4"
      />

      {/* Info section */}
      <p className="text-sm text-gray-800 font-semibold">
        {report.product} - {report.category}
      </p>
      <p className="text-sm text-gray-600">{report.location}</p>
      <p className="text-sm text-gray-600">{report.time}</p>
      <p className="text-sm text-gray-600">{report.date}</p>
      <p className="text-sm text-gray-600">
        Held by: <span className="font-medium">{report.heldBy || report.holder}</span>
      </p>
    </div>
  );
};

export default ReportCard;

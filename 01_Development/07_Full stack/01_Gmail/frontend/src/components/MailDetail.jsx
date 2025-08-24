import React from 'react';

const MailDetail = ({ email, onClose }) => {
  if (!email) return null;
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-gray-50 rounded-t-lg">
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="text-gray-700 hover:bg-gray-200 rounded-full p-2 text-xl" title="Back">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button className="text-gray-700 hover:bg-gray-200 rounded-full p-2" title="Archive">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2" /><polyline points="3 8 12 13 21 8" /></svg>
          </button>
          <button className="text-gray-700 hover:bg-gray-200 rounded-full p-2" title="Delete">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m5 0V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" /></svg>
          </button>
        </div>
        <div className="text-xs text-gray-500">{email.createdAt ? new Date(email.createdAt).toLocaleString() : ''}</div>
      </div>
      {/* Subject */}
      <div className="px-8 pt-6 pb-2">
        <h2 className="text-2xl font-normal text-gray-900 mb-1 flex items-center gap-2">
          {email.subject}
          {/* Star icon placeholder */}
          <svg width="20" height="20" fill="none" stroke="#eab308" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 17.27 18.18 21 15.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 8.46 13.97 5.82 21 12 17.27" /></svg>
        </h2>
      </div>
      {/* Sender/Recipient */}
      <div className="flex items-center px-8 pb-2">
        <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-lg font-bold text-blue-700 mr-3">
          {email.from?.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1">
          <div className="text-sm text-gray-900 font-medium">{email.from}</div>
          <div className="text-xs text-gray-500">to <span className="font-medium text-gray-700">{email.to}</span></div>
        </div>
      </div>
      {/* Body */}
      <div className="px-8 pt-2 pb-8 text-gray-800 whitespace-pre-line min-h-[120px] text-[15px] leading-relaxed">
        {email.body}
      </div>
    </div>
  );
};

export default MailDetail;

import React, { useState, useEffect } from 'react';
import { MdDeleteOutline, MdOutlineMarkEmailRead } from 'react-icons/md';
import { BiArchiveIn } from 'react-icons/bi';


// Backend se emails fetch karne ke liye
const fetchEmails = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch('http://localhost:5000/api/emails', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!res.ok) return [];
  return await res.json();
};



const Messages = ({ refreshKey }) => {
  const [searchText] = useState('');
  const [emails, setEmails] = useState([]);

  // Emails ko fetch karo jab refreshKey change ho
  useEffect(() => {
    fetchEmails().then(setEmails);
  }, [refreshKey]);

  const filterEmail = emails.filter((email) => {
    return (
      email.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
      email.to?.toLowerCase().includes(searchText.toLowerCase()) ||
      email.body?.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  // Hover par delete button dikhane ke liye state
  const [hoveredId, setHoveredId] = useState(null);

  // Email delete karne ka function
  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await fetch(`http://localhost:5000/api/emails/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    setEmails(emails => emails.filter(m => m._id !== id));
  };

  return (
    <div>
      {filterEmail.map((email) => (
        <div
          key={email._id}
          className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
          onMouseEnter={() => setHoveredId(email._id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="flex items-center gap-3">
            <div className="flex-none text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
            </div>
            <div className="flex-none text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 17.27 18.18 21 15.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 8.46 13.97 5.82 21 12 17.27" /></svg>
            </div>
            <div>
              <h1 className={email.read ? '' : 'font-semibold'}>{email?.from}</h1>
            </div>
          </div>
          <div className="flex-1 ml-4">
            <p className="text-gray-600 truncate inline-block max-w-full">{`${email.body?.length > 130 ? `${email?.body.substring(0, 130)}...` : email.body}`}</p>
          </div>
          <div className="flex-none text-gray-400 text-sm flex items-center gap-2">
            {hoveredId === email.id ? (
              <>
                <button className="hover:bg-gray-100 p-1 rounded" title="Archive">
                  <BiArchiveIn size={20} />
                </button>
                <button
                  className="hover:bg-gray-100 p-1 rounded"
                  title="Mark as Read"
                  onClick={e => {
                    e.stopPropagation();
                    setEmails(emails => emails.map(m => m.id === email.id ? { ...m, read: true } : m));
                  }}
                >
                  <MdOutlineMarkEmailRead size={20} />
                </button>
                <button
                  className="hover:bg-red-100 p-1 rounded text-red-500"
                  title="Delete"
                  onClick={e => {
                    e.stopPropagation();
                    handleDelete(email._id);
                  }}
                >
                  <MdDeleteOutline size={20} />
                </button>
              </>
            ) : (
              <p>{email?.createdAt ? new Date(email.createdAt).toUTCString() : ''}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages
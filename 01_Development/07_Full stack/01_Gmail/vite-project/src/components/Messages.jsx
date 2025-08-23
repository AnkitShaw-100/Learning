import React, { useState } from 'react';
import { MdDeleteOutline, MdOutlineMarkEmailRead } from 'react-icons/md';
import { BiArchiveIn } from 'react-icons/bi';

const dummyEmails = [
  { id: '1', to: 'alice@example.com', subject: 'Welcome!', message: 'Hello Alice, welcome to Gmail!', createdAt: { seconds: Date.now() / 1000 }, read: false },
  { id: '2', to: 'bob@example.com', subject: 'React Project', message: 'Hi Bob, here is your React project update.', createdAt: { seconds: Date.now() / 1000 }, read: false },
  { id: '3', to: 'carol@example.com', subject: 'Meeting Reminder', message: 'Don’t forget our meeting at 3pm today.', createdAt: { seconds: Date.now() / 1000 }, read: false },
  { id: '4', to: 'dave@example.com', subject: 'Invoice Attached', message: 'Please find the attached invoice for your records.', createdAt: { seconds: Date.now() / 1000 }, read: false },
  { id: '5', to: 'eve@example.com', subject: 'Party Invitation', message: 'You are invited to the party this weekend!', createdAt: { seconds: Date.now() / 1000 }, read: false },
];

const Messages = () => {
  const [searchText] = useState('');
  const [emails, setEmails] = useState(dummyEmails);

  const filterEmail = emails.filter((email) => {
    return (
      email.subject.toLowerCase().includes(searchText.toLowerCase()) ||
      email.to.toLowerCase().includes(searchText.toLowerCase()) ||
      email.message.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  // Hover par delete button dikhane ke liye state
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div>
      {filterEmail.map((email) => (
        <div
          key={email.id}
          className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
          onMouseEnter={() => setHoveredId(email.id)}
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
              <h1 className={email.read ? '' : 'font-semibold'}>{email?.to}</h1>
            </div>
          </div>
          <div className="flex-1 ml-4">
            <p className="text-gray-600 truncate inline-block max-w-full">{`${email.message.length > 130 ? `${email?.message.substring(0, 130)}...` : email.message}`}</p>
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
                    setEmails(emails => emails.filter(m => m.id !== email.id));
                  }}
                >
                  <MdDeleteOutline size={20} />
                </button>
              </>
            ) : (
              <p>{new Date(email?.createdAt?.seconds * 1000).toUTCString()}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages
import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Toolbar from '../../../Shared/Toolbar/Toolbar';

const EmailPage = () => {
  const [activeTab, setActiveTab] = useState('Compose');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [sentEmails, setSentEmails] = useState([]);
  const [drafts, setDrafts] = useState([]);

  const [inboxEmails, setInboxEmails] = useState([
    {
      to: 'me@example.com',
      subject: 'Welcome to the platform!',
      message: '<p>Thank you for joining us. Let us know if you need help!</p>',
      date: 'August 5, 2025 10:00 AM'
    },
    {
      to: 'me@example.com',
      subject: 'Meeting Reminder',
      message: '<p>Don’t forget our meeting at 3 PM today.</p>',
      date: 'August 4, 2025 9:00 AM'
    }
  ]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: '',
  });

  const handleSend = () => {
    const message = editor?.getHTML() || '';
    const newEmail = { to, subject, message, date: new Date().toLocaleString() };
    setSentEmails((prev) => [...prev, newEmail]);
    setTo('');
    setSubject('');
    editor?.commands.setContent('');
  };

  const handleSaveDraft = () => {
    const message = editor?.getHTML() || '';
    const draft = { to, subject, message, date: new Date().toLocaleString() };
    setDrafts((prev) => [...prev, draft]);
    setTo('');
    setSubject('');
    editor?.commands.setContent('');
  };

  const renderEmailList = (list) => (
    <ul className="space-y-3">
      {list.map((email, index) => (
        <li key={index} className="border rounded p-4 bg-gray-50">
          <p><strong>To:</strong> {email.to}</p>
          <p><strong>Subject:</strong> {email.subject}</p>
          <p className="text-xs text-gray-500">{email.date}</p>
          <div
            className="mt-2 text-sm prose max-w-none"
            dangerouslySetInnerHTML={{ __html: email.message }}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-xl font-semibold mb-6">Emails</h1>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
          <div className="space-y-2">
            {['Compose', 'Inbox', 'Sent', 'Draft'].map((tab) => (
              <button
                key={tab}
                className={`w-full px-4 py-2 rounded-md text-left font-medium border ${activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 border-gray-200'
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {tab === 'Inbox' && (
                  <span className="ml-2 inline-flex items-center justify-center text-xs font-bold bg-white text-blue-600 w-5 h-5 rounded-full">
                    {inboxEmails.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {activeTab === 'Compose' && (
              <>
                <h2 className="text-lg font-semibold">Compose Email</h2>
                <input
                  type="text"
                  placeholder="To"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full border rounded-md px-4 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border rounded-md px-4 py-2 text-sm"
                />

                <div className="border rounded-md">
                  <Toolbar editor={editor} />
                  <EditorContent editor={editor} className="p-3 min-h-[150px] text-sm" />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    className="px-4 py-2 text-sm border rounded-md"
                    onClick={handleSaveDraft}
                  >
                    Save as Draft
                  </button>
                  <button
                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md"
                    onClick={handleSend}
                  >
                    Send
                  </button>
                </div>
              </>
            )}

            {activeTab === 'Inbox' && (
              <>
                <h2 className="text-lg font-semibold">Inbox</h2>
                {renderEmailList(inboxEmails)}
              </>
            )}

            {activeTab === 'Sent' && (
              <>
                <h2 className="text-lg font-semibold">Sent Emails</h2>
                {renderEmailList(sentEmails)}
              </>
            )}

            {activeTab === 'Draft' && (
              <>
                <h2 className="text-lg font-semibold">Drafts</h2>
                {renderEmailList(drafts)}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPage;

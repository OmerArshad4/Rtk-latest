const LeadNotesCard = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
    {/* Latest Interaction */}
    <div className="text-sm text-gray-500">
      Latest Interaction: <span className="text-black">12 Apr, 2025 • 18 minutes</span>
    </div>

    {/* Key Points */}
    <div>
      <h3 className="text-sm font-semibold">Key Points to Discuss:</h3>
      <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
        <li>Looking for a scalable CRM solution for a 25-member sales team.</li>
        <li>Currently using outdated tools and facing issues with lead tracking and reporting.</li>
        <li>Interested in automation and integration with Slack and HubSpot.</li>
      </ul>
    </div>

    {/* Email */}
    <div className="bg-[#F1F5F9] p-4 rounded-lg">
      <p className="text-blue-700 font-medium text-sm mb-2">
        You called 1 time X days ago – try sending a follow up email or calling again
      </p>
      <h4 className="font-semibold mb-2">Subject: Product Demo Scheduled for May 24 + Follow-Up Details</h4>
      <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
        Hi Jane,{"\n"}
        Thank you for your interest in our platform. I’ve scheduled a product demo for May 24...{"\n\n"}
        • Trial Access: [Your Trial Link or Credentials]{"\n"}
        • Pricing Overview: [Link or attachment to pricing sheet]{"\n"}
        • Feature Comparison Sheet: [Link or attachment comparing key features]{"\n\n"}
        Let us know if you'd like to add any demo topics...{"\n\n"}
        Best regards,{"\n"}
        Jon Doe
      </p>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md text-sm">
        Send Email
      </button>
    </div>
  </div>
);

export default LeadNotesCard;

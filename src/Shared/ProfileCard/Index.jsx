// ProfileCard.jsx
export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center py-6 px-4">
      <div className="relative">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <button className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full border-2 border-white">
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M...Z" /> {/* Replace with Lucide icon */}
          </svg>
        </button>
      </div>
      <h3 className="mt-3 font-semibold text-gray-900">John Doe</h3>
      <p className="text-sm text-gray-500">john.doe@email.com</p>
    </div>
  );
}

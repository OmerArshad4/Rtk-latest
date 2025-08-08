// InfoListCard.jsx
export default function InfoListCard({ label, value, icon }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b last:border-b-0 cursor-pointer hover:bg-gray-50">
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm text-gray-900">{value}</p>
      </div>
      {icon}
    </div>
  );
}

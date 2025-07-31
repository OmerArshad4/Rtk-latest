const StatCard = ({ title, value, color = "text-black" }) => (
  <div className="text-center">
    <p className="text-sm font-normal text-[#64748B]">{title}</p>
    <p className={`text-[24px] font-semibold ${color}`}>{value}</p>
  </div>
);

export default StatCard;
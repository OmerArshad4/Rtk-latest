
const Icon = ({ label }) => (
    <div className="w-5 h-5 bg-gray-300 rounded" title={label}></div>
);
const CallStatCard = ({ title, value, subtitle, subtitleColor, borderColor }) => (
    <div className={`bg-white rounded-lg p-4 shadow-sm w-full border-l-4 ${borderColor}`}>
        <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-[#020817]">{title}</p>
            <Icon label={title} />
        </div>
        <h3 className="text-3xl font-bold text-[#020817]">{value}</h3>
        <div className={`text-xs font-medium mt-1 ${subtitleColor}`}>{subtitle}</div>
    </div>
);
export default CallStatCard
const InteractionSummaryCard = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((item, index) => (
                <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-5  w-full"
                >
                    <div>
                        <p className="font-medium text-[12px] leading-[18px] tracking-normal text-[#21333D] font-['Inter']">
                            {item.title}
                        </p>
                        <p className="font-semibold text-[18px] leading-[25.2px] tracking-normal text-[#21333D] font-['Inter']">
                            {item.value}
                        </p>
                    </div>
                    <div className="mb-3">
                        <img src={item.icon} alt={item.title} className="w-[60px] h-[60px]" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InteractionSummaryCard;

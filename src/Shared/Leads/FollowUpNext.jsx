const NextFollowUpCard = ({ date }) => (
  <div className="bg-[#EFF6FF] border-l-4 border-[#3B76F6] rounded-md p-3 shadow-sm">
    <p className="text-sm text-[#1A2232] font-medium">
      Next Follow up: <span className="font-semibold">{date}</span>
    </p>
  </div>
);

export default NextFollowUpCard;

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import EnterpriseCard from "../../../Shared/EnterPriseCard/Index";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="m-4 md:m-8 lg:mx-12 grid grid-cols-1">
      <h2 className="font-dm-sans my-2 font-semibold text-[18px] leading-[28px] text-[#111827] md:mt-4">
        Quick Actions
      </h2>
      <div className="space-y-5">
        <EnterpriseCard />
        <EnterpriseCard />
        <EnterpriseCard />
      </div>

    </div>
  );
};

export default Dashboard;

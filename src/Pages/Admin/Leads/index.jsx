import Images from "../../../HelperMethods/ImgConstants";
import LeadInfoCard from "../../../Shared/Leads/LeadInfoCard";
import LeadNotesCard from "../../../Shared/Leads/LeadNotesCard";
import SectionHeader from "../../../Shared/SectionHeader/imdex";
import NextFollowUpCard from "../../../Shared/Leads/FollowUpNext";
import RecentInteractionsCard from "../../../Shared/RecentTabs/Index";
import InteractionSummaryCard from "../../../Shared/Leads/InteractionSummaryCard";
import LeadsTable from "../LeadsView/Index";

const Leads = () => {
  const statsData = [
    {
      title: "Total Follow Ups",
      value: "18",
      icon: Images.lead1Logo,
    },
    {
      title: "Outgoing Calls",
      value: "18",
      icon: Images.lead2Logo,
    },
    {
      title: "Incoming Calls",
      value: "18",
      icon: Images.lead3Logo,
    },
    {
      title: "Emails",
      value: "6",
      icon: Images.lead4Logo,
    },
  ];
  return (
    <div className="p-6 bg-[#F8FAFB] min-h-screen space-y-6">

      <SectionHeader title="Lead Details" />

      <div className="flex flex-col lg:flex-row gap-4">

        <div className="w-full lg:w-[70%] space-y-4">
          <InteractionSummaryCard
            stats={statsData}
          />

          <NextFollowUpCard date="12 July, 2025 05:00 PM" />

          <LeadNotesCard />
        </div>
        <div className="w-full lg:w-[30%] space-y-4">
          <LeadInfoCard />
          <RecentInteractionsCard />
        </div>
      </div>
    </div>
  );
};

export default Leads;

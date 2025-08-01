import Images from "../../HelperMethods/ImgConstants";

const LeadInfoCard = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm relative">
    {/* Header: Lead Info + Add Info Button */}
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-gray-800 text-sm">Lead Info</h3>
      <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
        Add Info
      </button>
    </div>

 
    <div className="flex flex-col  space-y-1">
      <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-semibold">
        <img src={Images.leadInfoLogo}/>
      </div>
      <p className="font-medium text-sm">John Doe</p>
      <p className="text-sm text-gray-500">johndoe@gmail.com</p>
      <p className="text-sm text-gray-500">+17 345 085 230</p>
      <p className="text-sm text-gray-500">Silicon Nexus</p>
    </div>

    {/* Buttons */}
    <div className="pt-4 space-y-2">
      <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700">
        Call
      </button>
      <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-md text-sm hover:bg-blue-50">
        Mark Converted
      </button>
    </div>
  </div>
);

export default LeadInfoCard;

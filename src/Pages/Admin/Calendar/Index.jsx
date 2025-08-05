import React, { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaFilter } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const localizer = momentLocalizer(moment);

const events = [
    {
        title: "2 Hot Leads\n1 Follow up",
        start: new Date(2025, 3, 7),
        end: new Date(2025, 3, 7),
        type: "leads",
    },
    {
        title: "Lead_name\nClient_name",
        start: new Date(2025, 3, 16),
        end: new Date(2025, 3, 16),
        type: "client",
    },
];

const CalendarPage = () => {
    const [view, setView] = useState("month");
    const [date, setDate] = useState(new Date(2025, 3, 1));

    const handlePrev = () => {
        const newDate = moment(date).subtract(1, view === "month" ? "months" : "weeks").toDate();
        setDate(newDate);
    };

    const handleNext = () => {
        const newDate = moment(date).add(1, view === "month" ? "months" : "weeks").toDate();
        setDate(newDate);
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] p-4 sm:p-6 md:p-10">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <h1 className="text-xl sm:text-2xl font-semibold">Calendar</h1>
                <div className="flex items-center gap-3 text-sm">
                    <button className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white hover:shadow-sm">
                        <FaFilter className="text-gray-500" /> Filter
                    </button>
                    <button className="px-3 py-2 border rounded-md bg-white text-gray-700">
                        22 Mar - 22 Apr
                    </button>
                    <button className="px-3 py-2 border rounded-md bg-white text-gray-700">Export CSV</button>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4">

                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <p className="text-sm font-medium text-gray-700">April 16, 2025</p>
                        <div className="mt-4 space-y-4">
                            <div className="bg-yellow-50 border-l-4 border-yellow-300 p-3 rounded">
                                <p className="text-sm font-semibold text-gray-800">Ricardo Miles</p>
                                <p className="text-sm text-gray-600 truncate">Ut enim ad minim veniam, quis nostrud exercitation ullamco lab...</p>
                                <p className="text-xs text-gray-500 mt-2">16/04/2025</p>
                            </div>
                            <div className="bg-red-50 border-l-4 border-red-300 p-3 rounded">
                                <p className="text-sm font-semibold text-gray-800">Dianne Russell</p>
                                <p className="text-sm text-gray-600 truncate">Title</p>
                                <p className="text-xs text-gray-500 mt-2">16/04/2025</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-lg shadow-sm border p-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <FiChevronLeft className="cursor-pointer" onClick={handlePrev} />
                            <p className="font-medium text-gray-800">
                                {moment(date).format("MMMM YYYY")}
                            </p>
                            <FiChevronRight className="cursor-pointer" onClick={handleNext} />
                        </div>
                        <div className="flex gap-2 text-sm">
                            <button
                                className={`px-3 py-1.5 rounded-md border font-medium ${view === "month" ? "bg-blue-50 text-blue-600" : "border-gray-300 text-gray-700"}`}
                                onClick={() => setView("month")}
                            >
                                Monthly
                            </button>
                            <button
                                className={`px-3 py-1.5 rounded-md border font-medium ${view === "week" ? "bg-blue-50 text-blue-600" : "border-gray-300 text-gray-700"}`}
                                onClick={() => setView("week")}
                            >
                                Weekly
                            </button>
                        </div>
                    </div>

                    <div style={{ height: 550 }}>
                        <BigCalendar
                            localizer={localizer}
                            events={events}
                            defaultView="month"
                            view={view}
                            date={date}
                            onNavigate={(newDate) => setDate(newDate)}
                            onView={(v) => setView(v)}
                            startAccessor="start"
                            endAccessor="end"
                            className="text-sm"
                            components={{
                                event: ({ event }) => (
                                    <div className={`text-[12px] whitespace-pre-line ${event.type === "leads" ? "text-white" : "text-white"}`}>
                                        {event.title}
                                    </div>
                                ),
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;
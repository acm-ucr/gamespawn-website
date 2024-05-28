"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.js";
import CustomEvent from "./CustomEvent.js";
import CustomHeader from "./CustomHeader.js";
import axios from "axios";
// import Modal from "./Modal.js";
const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const startDate = moment().subtract(10, "weeks").toISOString();
    const endDate = moment().add(10, "weeks").toISOString();
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=starttime&timeMin=${startDate}&timeMax=${endDate}`
      )
      .then((response) => {
        const calendarEvents = response.data.items.map((a) => {
          a.start = new Date(a.start.dateTime);
          a.end = new Date(a.end.dateTime);
          return a;
        });
        setEvents(calendarEvents);
        console.log(calendarEvents);
      });
  });

  return (
    events && (
      <section className="w-full flex justify-center items-center flex-col">
        <div className="mb-5 w-10/12 flex justify-center items-center">
          <div className="h-[100vh] w-full relative">
            <Calendar
              className="w-full font-russo text-2xl"
              date={date}
              events={events}
              localizer={mLocalizer}
              defaultView="month"
              views={["month"]}
              components={{
                event: CustomEvent,
                toolbar: CustomToolbar,
                header: CustomHeader,
              }}
              onNavigate={(newDate) => {
                setDate(newDate);
              }}
              eventPropGetter={(event) => {
                return { className: `` };
              }}
              dayPropGetter={(event) => {
                const bg =
                  new Date(event).toLocaleDateString() ==
                  new Date().toLocaleDateString()
                    ? "!bg-blue-100"
                    : "!bg-white";
                return {
                  className: `${bg} m-0 p-0 border-x-4 border-b-4 border-black`,
                };
              }}
            />
          </div>
        </div>
      </section>
    )
  );
};

export default CalendarEvents;
import React from 'react';

const MobileDayView = () => {
  // Sample events data
  const events = [
    { id: 1, title: 'Ab Workout', start: '2024-04-24T09:00:00', end: '2024-04-24T10:00:00' },
    { id: 3, title: 'Lower Body Workout', start: '2024-04-24T14:00:00', end: '2024-04-24T15:30:00' },
    { id: 4, title: 'Full Workout', start: '2024-04-24T16:30:00', end: '2024-04-24T19:00:00' },
  ];

  // Function to render time slots
  const renderTimeSlots = () => {
    const timeSlots = [];
    for (let i = 0; i < 24; i++) {
      const hour = i % 12 === 0 ? 12 : i % 12; // Convert 24-hour format to 12-hour format
      const period = i < 12 ? 'AM' : 'PM'; // Determine AM or PM
      const time = `${hour < 10 ? '0' + hour : hour}:00 ${period}`; // Format time
  
      timeSlots.push(
        <div key={i} className="flex items-center justify-start border-b border-gray-300 px-2 h-8 text-right text-xs relative">
          <div className="relative">
          {i === new Date().getHours() && <div className="absolute top-[-0.69rem] left-[-1rem] w-2 h-2 bg-blue-500 rounded-full"></div>} 
            {time}
          </div>
          {i === new Date().getHours() && <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500"></div>}
        </div>
      );
    }
    return timeSlots;
  };

  // Function to calculate event position and height
  const calculateEventPosition = (start, end) => {
    const startHour = new Date(start).getHours();
    const endHour = new Date(end).getHours();
    const startMinute = new Date(start).getMinutes();
    const endMinute = new Date(end).getMinutes();

    const totalStartMinutes = startHour * 60 + startMinute;
    const totalEndMinutes = endHour * 60 + endMinute;

    const eventTop = (totalStartMinutes / 60);
    const eventHeight = ((totalEndMinutes - totalStartMinutes) / 60);

    return {
      top: `${eventTop*2}rem`, 
      height: `${eventHeight*2}rem`, 
    };
  };

  const renderEvents = () => {
    return events.map(event => (
      <div
        key={event.id}
        className="absolute bg-gradient-to-l from-[#D3A4F4] to-[#E9B1E0] text-white p-2 rounded-3xl ml-[20%] z-10 w-full"
        style={{
          ...calculateEventPosition(event.start, event.end), 
        }}
      >
        <div className="text-xs">{event.title}, {new Date(event.start).getHours() % 12 === 0 ? 12 : new Date(event.start).getHours() % 12}:{new Date(event.start).getMinutes() == 0 ? '00' : new Date(event.start).getMinutes()} {new Date(event.start).getHours() < 12 ? 'AM' : 'PM'} - {new Date(event.end).getHours() % 12 === 0 ? 12 : new Date(event.end).getHours() % 12}:{new Date(event.end).getMinutes() == 0 ? '00' : new Date(event.end).getMinutes()} {new Date(event.end).getHours() < 12 ? 'AM' : 'PM'}</div>
      </div>
    ));
  };

  return (
    <div className="p-4 relative">
      <div className="flex">
        <div className="flex-none w-full relative">
          <div className="flex flex-col justify-between h-[48rem] w-full mb-32">{renderTimeSlots()}</div>
        </div>
        <div className="absolute pl-4 w-[70%] h-full">
          {renderEvents()}
        </div>
      </div>
    </div>
  );
};

export default MobileDayView;

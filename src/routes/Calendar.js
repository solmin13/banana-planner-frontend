import { useEffect, useState } from 'react';
import DayBlock from '../components/DayBlock';

const Calendar = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const [year, setYear] = useState(currentYear);
    const [month, setMonth] = useState(currentMonth);
    const [days, setDays] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
  
    useEffect(() => {
      setDays(createCalendarDays(year, month));
    }, [year, month]);
  
    function prevMonthBtn() {
      setMonth(month === 1 ? 12 : month - 1);
      setYear(month === 1 ? year - 1 : year);
    }
  
    const nextMonthBtn = () => {
      setMonth(month === 12 ? 1 : month + 1);
      setYear(month === 12 ? year + 1 : year);
    };
  
    const onSelectDay = (day) => {
      setSelectedDate(`${year}-${month}-${day}`);
    };

    return(
        <div>
            <div className="calendar-header">
                <button onClick={prevMonthBtn}>&lt;</button>
                <h2>{year}년 {month}월</h2>
                <button onClick={nextMonthBtn}>&gt;</button>
            </div>
            <div className="calendar">
                {days.map((day, index) => (
                <DayBlock key={index} day={day} onSelectDay={onSelectDay} />
                ))}
            </div>
            {selectedDate && <div className="selected-date">선택된 날짜: {selectedDate}</div>}
        </div>
    )
}

function getMonthDetails(year, month) {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    return { totalDays: lastDay.getDate(), startDayOfWeek: firstDay.getDay() };
}

function createCalendarDays(year, month) {
    const { totalDays, startDayOfWeek } = getMonthDetails(year, month);
    return Array.from({ length: startDayOfWeek + totalDays }, (_, i) =>
      i < startDayOfWeek ? null : i - startDayOfWeek + 1
    );
  }

export default Calendar;
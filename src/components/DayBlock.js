const DayBlock = ({ day, onSelectDay }) => {
    return (
        <div className={`day-block ${!day ? 'empty' : ''}`} onClick={() => day && onSelectDay(day)}>
        {day}
        </div>
    );
}

export default DayBlock;
import React, { useState } from 'react';
import { 
  format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, 
  eachDayOfInterval, isSameMonth, isSameDay, addMonths, 
  subMonths, isToday, isBefore, startOfDay, parseISO
} from 'date-fns';

export default function BookingCalendar({ availableDates, closedDates, selectedDate, onSelect, theme = 'var(--primary)' }) {
  const [viewMonth, setViewMonth] = useState(new Date());
  
  let availableList = [];
  try {
    if (typeof availableDates === 'string') {
      availableList = JSON.parse(availableDates);
    } else if (Array.isArray(availableDates)) {
      availableList = availableDates;
    }
  } catch (e) {
    availableList = [];
  }

  let closedList = [];
  try {
    if (typeof closedDates === 'string') {
      closedList = JSON.parse(closedDates);
    } else if (Array.isArray(closedDates)) {
      closedList = closedDates;
    }
  } catch (e) {
    closedList = [];
  }

  const monthStart = startOfMonth(viewMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

  const isDateAvailable = (d) => {
    if (closedList && closedList.length > 0) {
      if (closedList.some(cd => isSameDay(parseISO(cd), d))) {
        return false;
      }
    }
    if (!availableList || availableList.length === 0) return true;
    return availableList.some(ad => isSameDay(parseISO(ad), d));
  };

  const handleDateClick = (day) => {
    const isCurrentMonth = isSameMonth(day, monthStart);
    const isPast = isBefore(day, startOfDay(new Date()));
    const available = isDateAvailable(day);

    if (isCurrentMonth && !isPast && available) {
      onSelect(format(day, 'yyyy-MM-dd'));
    }
  };

  return (
    <div className="mini-calendar" style={{
      background: 'var(--bg-card2, #121d30)',
      border: '1px solid var(--border, rgba(255,255,255,0.1))',
      borderRadius: '16px',
      padding: '20px',
      color: '#fff'
    }}>
      <div className="calendar-header" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px'
      }}>
        <button
          type="button"
          onClick={() => setViewMonth(subMonths(viewMonth, 1))}
          style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}
        >
          ‹
        </button>
        <div style={{ fontWeight: 800, fontSize: '1.05rem', color: theme }}>
          {format(viewMonth, 'MMMM yyyy')}
        </div>
        <button
          type="button"
          onClick={() => setViewMonth(addMonths(viewMonth, 1))}
          style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}
        >
          ›
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', textAlign: 'center' }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700, paddingBottom: '6px' }}>{d}</div>
        ))}
        {calendarDays.map((day, i) => {
          const isCurrentMonth = isSameMonth(day, monthStart);
          const isPast = isBefore(day, startOfDay(new Date()));
          const available = isDateAvailable(day);
          const isSel = selectedDate === format(day, 'yyyy-MM-dd');
          const isTod = isToday(day);
          const isDisabled = !isCurrentMonth || isPast || !available;

          return (
            <div
              key={i}
              onClick={() => handleDateClick(day)}
              style={{
                padding: '10px 4px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: isSel || isTod ? 800 : 600,
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                opacity: isDisabled ? 0.3 : 1,
                background: isSel ? theme : (isTod ? 'rgba(255,255,255,0.08)' : 'transparent'),
                color: isSel ? '#fff' : (isDisabled ? '#64748b' : '#fff'),
                border: isSel ? `1px solid ${theme}` : '1px solid transparent',
                position: 'relative'
              }}
            >
              {format(day, 'd')}
              {available && isCurrentMonth && !isPast && !isSel && (
                <div style={{
                  position: 'absolute',
                  bottom: '3px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: theme
                }} />
              )}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div style={{
          marginTop: '16px',
          padding: '10px 14px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '8px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          fontSize: '0.85rem'
        }}>
          <span>📅 Selected Date: <strong>{format(parseISO(selectedDate), 'EEEE, MMMM do, yyyy')}</strong></span>
          <button type="button" onClick={() => onSelect('')} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 700 }}>✕</button>
        </div>
      )}
    </div>
  );
}

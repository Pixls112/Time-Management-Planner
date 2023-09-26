document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prevYear,prev,next,nextYear today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        navLinks: true
    });

    calendar.addEventSource(
        [
            {
                title: 'event1',
                start: '2023-09-23'
            },
            {
                title: 'event2',
                start: '2023-09-01',
                end: '2023-09-07'
            },
            {
                title: 'event3',
                start: '2023-09-20T12:30:00',
                allDay: false // will make the time show
            }
        ]
    );

    calendar.render();
});
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        themeSystem: 'bootstrap5',
        customButtons: {
            createEventButton: {
                text: 'Create Event',
                click: function () {
                    document.location.replace('/api/userinput')
                }
            }
        },

        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prevYear,prev,next,nextYear today',
            center: 'title',
            right: 'createEventButton dayGridMonth,timeGridWeek,timeGridDay'
        },
        navLinks: true,

        eventSources: [
            {
                url: '/api/calendar/events'
            }
        ]
    });

    calendar.render();
});
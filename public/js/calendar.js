document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
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
        navLinks: true
    });

    calendar.render();
});
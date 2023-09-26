document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        customButtons: {
            createEventButton: {
                text: 'Create Event',
                click: function () {
                    alert('clicked the custom button!');
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
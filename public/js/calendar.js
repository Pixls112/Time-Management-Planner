document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        customButtons: {
            createEventButton: {
                text: 'Create Event',
                click: function () {
                    document.location.replace('/api/userinput')
                }
            },
            logOutButton: {
                text: 'Logout',
                click: function () {

                }
            }
        },

        eventClick: function (info) {
            alert('title: ' + info.event.id);
        },

        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prevYear,prev,next,nextYear today',
            center: 'title',
            right: 'logOutButton createEventButton dayGridMonth,timeGridWeek,timeGridDay'
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
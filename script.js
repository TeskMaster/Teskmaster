// Main JavaScript file for Teskmaster frontend interactions

// --------------------------------------------------------------------------------
// Event Listeners for Navigation (Conceptual)
// --------------------------------------------------------------------------------
// While most navigation in this project is handled by standard <a> tags,
// dynamic navigation can be achieved using JavaScript. For example, if you
// want to navigate to a new page after a button click or some other event:
//
// Example:
// const myButton = document.getElementById('myButton');
// if (myButton) {
//     myButton.addEventListener('click', function() {
//         window.location.href = 'newpage.html';
//     });
// }
//
// This is useful for scenarios where navigation depends on JavaScript logic,
// like form submissions, user authentication, or dynamic content loading.
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// Placeholder for Dynamic Content Loading (Dashboard - event-list)
// --------------------------------------------------------------------------------
// The following is a conceptual placeholder for loading events onto the dashboard.
// This code would typically run when the dashboard page is loaded.

// document.addEventListener('DOMContentLoaded', function() {
//   if (window.location.pathname.endsWith('dashboard.html')) { // Check if on dashboard page
//      const eventList = document.getElementById('event-list');
//      if (eventList) {
//          // TODO: Fetch events from an API or local storage
//          // Example of how to populate:
//          // eventList.innerHTML = '<li>Sample Event 1</li><li>Sample Event 2</li>';
//          console.log("Dashboard event list loading placeholder.");
//      }
//   }
// });
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// Placeholder for Dynamic Content Loading (Event Details)
// --------------------------------------------------------------------------------
// The following is a conceptual placeholder for loading specific event details.
// This code would typically run when the event details page is loaded.

// document.addEventListener('DOMContentLoaded', function() {
//   if (window.location.pathname.endsWith('event-details.html')) { // Check if on event details page
//      const eventTitleHeader = document.querySelector('header h1'); // Placeholder selector
//      const eventDateElement = document.querySelector('section:nth-of-type(1) p'); // Placeholder
//      const eventDescriptionElement = document.querySelector('section:nth-of-type(2) p'); // Placeholder
//      const participantList = document.getElementById('participant-list');

//      if (eventTitleHeader && eventDateElement && eventDescriptionElement && participantList) {
//          // TODO: Fetch specific event data using an event ID (e.g., from URL query parameter)
//          // Example of how to populate:
//          // eventTitleHeader.textContent = 'Fetched Event Title';
//          // eventDateElement.textContent = 'Fetched Event Date';
//          // eventDescriptionElement.textContent = 'Fetched Event Description';
//          // participantList.innerHTML = '<li>Participant A</li><li>Participant B</li>';
//          console.log("Event details loading placeholder.");
//      }
//   }
// });
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// Form Validation for create-event.html
// --------------------------------------------------------------------------------
// This block adds an event listener to the form on the 'create-event.html' page.
// It executes when the DOM is fully loaded to ensure all elements are available.
document.addEventListener('DOMContentLoaded', function() {
    // Select the form by its ID. This ID must be present on the <form> tag in create-event.html.
    const createEventForm = document.getElementById('createEventForm');

    // Check if the form element exists on the current page to prevent errors on other pages.
    if (createEventForm) {
        // Attach an event listener for the 'submit' event on the form.
        createEventForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission (which would cause a page reload).

            // Get the values from the form fields.
            // .trim() is used to remove any leading/trailing whitespace.
            const eventTitle = document.getElementById('event-title').value.trim();
            const eventDate = document.getElementById('event-date').value; // Date input doesn't typically need trim().
            const eventDescription = document.getElementById('event-description').value.trim();

            // --- Basic Validation ---
            // Check if the event title is empty.
            if (eventTitle === '') {
                alert('Event Title cannot be empty.'); // Display an alert to the user.
                return; // Stop further execution of this function.
            }

            // Check if the event date is empty.
            if (eventDate === '') {
                alert('Event Date cannot be empty.'); // Display an alert to the user.
                return; // Stop further execution of this function.
            }

            // The event description is considered optional, so no validation for emptiness here.
            // More complex validation (e.g., date format, character limits) could be added here.

            // --- Placeholder for Submission Logic ---
            // If validation passes, show a confirmation message.
            // In a real application, this is where you would send data to a backend server.
            alert('Event creation form submitted (Display only - no backend integration yet).');
            console.log('Form Data Captured:', { title: eventTitle, date: eventDate, description: eventDescription });

            // TODO: Implement backend API call for event creation.
            // Example of what an API call might look like:
            // fetch('/api/events', { // Replace with your actual API endpoint
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ title: eventTitle, date: eventDate, description: eventDescription })
            // })
            // .then(response => {
            //     if (!response.ok) {
            //         throw new Error('Network response was not ok');
            //     }
            //     return response.json();
            // })
            // .then(data => {
            //     console.log('Event created successfully:', data);
            //     alert('Event created successfully!');
            //     // Optionally, redirect to the dashboard or clear the form:
            //     // window.location.href = 'dashboard.html';
            //     // createEventForm.reset();
            // })
            // .catch(error => {
            //     console.error('Error creating event:', error);
            //     alert('There was an error creating the event. Please try again.');
            // });

            // For now, as a placeholder, the form is not reset to allow users to see their input.
            // If you want to clear the form after submission, uncomment the line below:
            // createEventForm.reset();
        });
    }
});
// --------------------------------------------------------------------------------

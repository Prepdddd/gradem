# Grade-Em Site

This is the complete static website for "Grade-Em", built using HTML, CSS, and JavaScript, with a Node.js backend for handling suggestions.

## Project Structure

```
/
|-- index.html
|-- school.html
|-- css/
|   |-- styles.css
|-- js/
|   |-- main.js
|   |-- data.js
|-- suggestions.txt (for suggested schools)
|-- README.md
```

## How to Run

1. **Frontend**: Open `index.html` in a web browser to view the site.
2. **Backend**: Run the Node.js server to handle school suggestions.

## Features

- **Suggest a School**: Users can suggest new schools to be added.
- **Review Professors**: Users can leave reviews for professors on various criteria.

## Future Enhancements

- Implement a database to store real-time reviews and suggestions.
- Admin panel for approving or rejecting suggestions and reviews.
- Improved styling and mobile responsiveness.

## Backend Server

To run the backend server, navigate to the backend directory and run:

```
node server.js
```

Ensure you have Node.js installed and configured properly.

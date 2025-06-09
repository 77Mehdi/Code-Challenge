This is a React + Vite project built for the React coding challenge. The goal was to create an interactive, user-friendly interface that fetches and displays skip hire options using data from an API.


🚀 Features
Dynamic Data Fetching using Axios + custom hook (useFetchData)

Reusable Card UI using styled and animated components

Conditional Rendering: display warning only when skip is not allowed on road

Image-based Card Layout with smooth hover animation

Routing with react-router-dom between pages

Responsive Design for desktop and mobile



/components
 ┣ /ui
 ┃ ┣ FocusCards.jsx     → Renders skip cards dynamically
 ┃ ┗ utils.jsx          → Utility styling/classnames
 ┣ Nav.jsx              → Navigation bar with routing
 ┣ PermintPage.jsx      → Placeholder for a sample page

/hooks
 ┗ useFetchData.js      → Custom hook to fetch skip data

App.jsx                 → Handles routing using react-router-dom
main.jsx                → Vite root


💡 My Approach
Set up a Vite + React project

Used a folder-based architecture to keep components and logic organized

Created a custom hook to fetch API data cleanly

Applied smooth UI/UX animations and layout from ui.aceternity.com

Used conditional rendering and state to handle display logic

Focused on responsive layout and clear user feedback

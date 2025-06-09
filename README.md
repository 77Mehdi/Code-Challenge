This is a React + Vite project built for the React coding challenge. The goal was to create an interactive, user-friendly interface that fetches and displays skip hire options using data from an API.


.<br>
.<br>
.<br>
.<br>
.<br>
.<br>

🚀 Features
Dynamic Data Fetching using Axios + custom hook (useFetchData)

Reusable Card UI using styled and animated components

Conditional Rendering: display warning only when skip is not allowed on road

Image-based Card Layout with smooth hover animation

Routing with react-router-dom between pages

Responsive Design for desktop and mobile

.<br>
.<br>
.<br>
.<br>
.<br>
.<br>

/components
 ┣ /ui .<br>
 ┃ ┣ FocusCards.jsx     → Renders skip cards dynamically .<br>
 ┃ ┗ utils.jsx          → Utility styling/classnames .<br>
 ┣ Nav.jsx              → Navigation bar with routing .<br>
 ┣ PermintPage.jsx      → Placeholder for a sample page .<br>

/hooks .<br>
 ┗ useFetchData.js      → Custom hook to fetch skip data .<br>

App.jsx                 → Handles routing using react-router-dom .<br>
main.jsx                → Vite root .<br>


.<br>
.<br>
.<br>
.<br>
.<br>
.<br>
.<br>



💡 My Approach
Set up a Vite + React project

Used a folder-based architecture to keep components and logic organized

Created a custom hook to fetch API data cleanly

Applied smooth UI/UX animations and layout from ui.aceternity.com

Used conditional rendering and state to handle display logic

Focused on responsive layout and clear user feedback

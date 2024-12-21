// document.addEventListener("DOMContentLoaded", function () {
//   const appIcons = document.querySelectorAll(".app-icon"); // Select all app icons

//   appIcons.forEach((icon) => {
//     icon.addEventListener("click", function (event) {
//       const appName = event.target.getAttribute("data-app-name"); // Get app name using event.target

//       if (appName) {
//         // Check if appName is valid
//         console.log(`Opening app: ${appName}`); // Print app name in the console
//         openAppWindow(appName); // Open the app window
//       } else {
//         console.log("App name is missing.");
//       }
//     });
//   });

//   function openAppWindow(appName) {
//     const appWindow = document.createElement("div");
//     appWindow.classList.add("app-window");
//     appWindow.id = `window-${appName.toLowerCase().replace(/\s/g, "-")}`; // Make ID URL friendly
//     const windowContent = document.createElement("div");
//     windowContent.classList.add("window-content");
//     windowContent.innerText = appName;
//     appWindow.appendChild(windowContent);

//     // Append the new window to the body
//     document.body.appendChild(appWindow);

//     // Set full screen and apply animation
//     setFullScreenWindow(appWindow);
//     applyZoomInAnimation(appWindow);

//     // Add close button
//     addCloseButton(appWindow);
//   }

//   function setFullScreenWindow(windowElement) {
//     const dockHeight = document.querySelector(".dock")
//       ? document.querySelector(".dock").offsetHeight
//       : 0;
//     windowElement.style.position = "absolute";
//     windowElement.style.top = "0";
//     windowElement.style.left = "0";
//     windowElement.style.width = "100vw";
//     windowElement.style.height = `100vh`;
//     windowElement.style.zIndex = "99";
//   }

//   function applyZoomInAnimation(windowElement) {
//     // Define the zoom-in animation using CSS
//     windowElement.style.animation = "zoomIn 0.5s ease-in-out"; // Apply zoom-in animation

//     // CSS for the zoom-in effect
//     const style = document.createElement("style");
//     style.innerHTML = `
//           @keyframes zoomIn {
//               0% {
//                   transform: scale(0.1); /* Start from small size */
//                   opacity: 0;
//                   }
//               70%{
//                   transform: scale(0.5); /* Start from small size */
//                   opacity: 0.5;
//               }
//               100% {
//                   transform: scale(1); /* Full size */
//                   opacity: 1;
//               }
//           }
//       `;
//     document.head.appendChild(style);
//   }

//   function addCloseButton(windowElement) {
//     const closeButton = document.createElement("button");
//     closeButton.innerText = "X";
//     closeButton.classList.add("close-btn");
//     closeButton.onclick = function () {
//       windowElement.remove();
//     };
//     windowElement.appendChild(closeButton);
//   }
// });


document.addEventListener('DOMContentLoaded', function() {
  const appIcons = document.querySelectorAll('.app-icon'); // Select all app icons
  
  appIcons.forEach(icon => {
      icon.addEventListener('click', function(event) {
          const appName = event.target.getAttribute('data-app-name'); // Get app name using event.target
          
          if (appName) { // Check if appName is valid
              console.log(`Opening app: ${appName}`);  // Print app name in the console
              openAppWindow(event.target, appName); // Open the app window
          } else {
              console.log('App name is missing.');
          }
      });
  });

  function openAppWindow(iconElement, appName) {
      const appWindow = document.createElement('div');
      appWindow.classList.add('app-window');
      appWindow.id = `window-${appName.toLowerCase().replace(/\s/g, '-')}`; // Make ID URL friendly
      const windowContent = document.createElement('div');
      windowContent.classList.add('window-content');
      windowContent.innerText = appName;
      appWindow.appendChild(windowContent);

      // Add close button
      addCloseButton(appWindow);

      // Append the new window to the body
      document.body.appendChild(appWindow);

      // Get position and size of the clicked icon
      const iconRect = iconElement.getBoundingClientRect();
      const initialWidth = iconRect.width;
      const initialHeight = iconRect.height;
      const initialX = iconRect.left + window.scrollX;
      const initialY = iconRect.top + window.scrollY;

      // Set the app window to start from the app icon
      appWindow.style.position = 'absolute';
      appWindow.style.left = `${initialX}px`;
      appWindow.style.top = `${initialY}px`;
      appWindow.style.width = `${initialWidth}px`;
      appWindow.style.height = `${initialHeight}px`;
      appWindow.style.zIndex = '999';

      // Apply the expand animation
      setExpandAnimation(appWindow, initialX, initialY, appName);
  }

  function setExpandAnimation(windowElement, initialX, initialY, appName) {
      // Set initial transform and opacity
      windowElement.style.transform = 'scale(0)';
      windowElement.style.opacity = '0';

      // Apply animation properties to expand
      windowElement.style.transition = 'all 0.5s ease-out';
      
      // After a slight delay, apply the final state
      setTimeout(() => {
          windowElement.style.left = '0';
          windowElement.style.top = '0';
          windowElement.style.width = '100vw';
          windowElement.style.height = '100vh';
          windowElement.style.transform = 'scale(1)';
          windowElement.style.opacity = '1';
      }, 0);

      // After the animation, remove the animation settings (to allow further animations if needed)
      windowElement.addEventListener('transitionend', function() {
          windowElement.style.transition = ''; // Remove transition after the animation is complete
      });
  }

  function addCloseButton(windowElement) {
      const closeButton = document.createElement('button');
      closeButton.innerText = 'X';
      closeButton.classList.add('close-btn');
      closeButton.onclick = function () {
          windowElement.remove();
      };
      windowElement.appendChild(closeButton);
  }
});


// Function to get the current day and date
function updateCalendar() {
  const dayElement = document.querySelector('.calendar-day');
  const dateElement = document.querySelector('.calendar-date');
  
  const currentDate = new Date();
  
  // Array of days of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Get current day (0-6) and date (1-31)
  const currentDay = daysOfWeek[currentDate.getDay()];
  const currentDateNumber = currentDate.getDate();
  
  // Update the calendar day and date
  dayElement.textContent = currentDay;
  dateElement.textContent = currentDateNumber;
}

// Update calendar on page load
window.onload = updateCalendar;



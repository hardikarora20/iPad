document.addEventListener('DOMContentLoaded', function() {
    const appIcons = document.querySelectorAll('.app-icon'); // Select all app icons
    const dockAppsArray = []; // Array to store the recently opened apps (up to 3)
    const fixedApps = ['App1', 'App2', 'App3']; // Fixed apps that always stay in the dock

    appIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            const appName = event.target.getAttribute('data-app-name'); // Get app name using event.target
            
            if (appName) { // Check if appName is valid
                console.log(`Opening app: ${appName}`);  // Print app name in the console
                openAppWindow(event.target, appName); // Open the app window
                
                // Check if the app is a fixed app
                if (!fixedApps.includes(appName)) {
                    // Add the app to the recent apps array
                    if (!dockAppsArray.includes(appName)) {
                        if (dockAppsArray.length >= 3) {
                            dockAppsArray.shift(); // Remove the oldest app if there are already 3 apps
                        }
                        dockAppsArray.push(appName);
                    }
                }
                
                // Update the dock display
                updateDock();
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
        appWindow.style.zIndex = '100';

        // Apply the expand animation
        setExpandAnimation(appWindow, initialX, initialY, appName);
    }

    function setExpandAnimation(windowElement, initialX, initialY, appName) {
        // Set initial transform and opacity
        windowElement.style.transform = 'scale(0)';
        windowElement.style.opacity = '0';

        // Apply animation properties to expand
        windowElement.style.transition = 'all 0.3s ease-out';
        
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
            // Just remove the window when closed, no need to remove from dock
            windowElement.remove();
        };
        windowElement.appendChild(closeButton);
    }

    function updateDock() {
        const dockSelector = document.querySelector("div.dock");
        dockSelector.innerHTML = ''; // Clear the current dock content

        // Add the fixed apps to the dock
        fixedApps.forEach(app => {
            const fixedDockApp = document.createElement("div");
            fixedDockApp.classList.add("dock-app");
            fixedDockApp.innerHTML = `
                <div class="app-icon" data-app-name="${app}"></div>
                <div class="app-title">${app}</div>`;
            dockSelector.appendChild(fixedDockApp);
        });

        // Add the recent apps to the dock (only if they are not in fixedApps)
        dockAppsArray.forEach(app => {
            const recentDockApp = document.createElement("div");
            recentDockApp.classList.add("dock-app");
            recentDockApp.innerHTML = `
                <div class="app-icon" data-app-name="${app}"></div>
                <div class="app-title">${app}</div>`;

            // Add animation class for smooth appearance
            recentDockApp.classList.add('dock-app-animation');
            dockSelector.appendChild(recentDockApp);
        });
    }
});

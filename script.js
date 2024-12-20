Got it! Let’s adjust the layout for a horizontal orientation while keeping it responsive for vertical screens too. I'll place the widget in the top-left corner and align the apps on the right side of the widget, while keeping the dock consistent. I'll also tweak the colors for better visibility. Here’s the updated HTML and CSS:

Updated Code

HTML

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>iPad Layout</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="ipad-layout">
    <!-- Widget -->
    <div class="widget">
      <h2>Big Widget</h2>
      <p>Your content goes here!</p>
    </div>

    <!-- Apps Section -->
    <div class="apps">
      <div class="app">App 1</div>
      <div class="app">App 2</div>
      <div class="app">App 3</div>
      <div class="app">App 4</div>
    </div>

    <!-- Dock -->
    <div class="dock">
      <div class="dock-app">Dock App 1</div>
      <div class="dock-app">Dock App 2</div>
      <div class="dock-app">Dock App 3</div>
    </div>
  </div>
</body>
</html>

CSS

/* Reset and basic styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

/* iPad Layout */
.ipad-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* Widget */
.widget {
  background-color: #d8e3f0;
  width: 60%;
  height: 40%;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #333;
  font-size: 1.2rem;
}

/* Apps Section */
.apps {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: -30%;
  margin-left: 60%;
}
.app {
  background-color: #eef2f7;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.app:hover {
  transform: scale(1.1);
}

/* Dock */
.dock {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  width: 80%;
  height: 80px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}
.dock-app {
  background-color: #eef2f7;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  font-size: 0.8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.dock-app:hover {
  transform: scale(1.2);
}

Key Changes:

1. Horizontal Layout: Apps are aligned to the right of the widget for a horizontal setup.


2. Colors: The widget and apps have subtle contrasting colors for better visibility.


3. Responsive Dock: The dock remains centered at the bottom with animated hover effects for apps.


4. Flexbox Wrapping: Apps automatically wrap if the screen size changes.



Let me know if you'd like to tweak anything further!


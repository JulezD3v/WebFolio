// Theme Toggle Functionality
export function toggleTheme() {
  const body = document.body;
  
  // Toggle light-theme class on body
  body.classList.toggle('light-theme');
  
  // Save preference to localStorage
  const isDarkMode = !body.classList.contains('light-theme');
  localStorage.setItem('darkMode', isDarkMode);
}

// Initialize theme based on saved preference
export function initTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('darkMode');
  
  // If user has a saved preference, use that
  // Otherwise, use system preference
  if (savedTheme !== null) {
    document.body.classList.toggle('light-theme', savedTheme === 'false');
  } else if (!prefersDark) {
    document.body.classList.add('light-theme');
  }
}

// Initialize theme when imported
initTheme();
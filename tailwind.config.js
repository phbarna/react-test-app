/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  keyframes: {
    'fade-up': {
      '0%': {
        opacity: 0,
        transform: 'translateY(10px)', // Move the element down
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)', // Reset the element to its original position
      },
    },
    // You can define more keyframes here if needed
  },
  animations: {
    'fade-up': 'fade-up', // Using the 'fade-up' keyframes for the 'fade-up' animation
    // You can define more animations here if needed
  },
}


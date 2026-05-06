/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rounded: ['"Nunito"', '"Varela Round"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-once': 'bounce 0.6s ease-in-out 1',
        'wiggle': 'wiggle 0.4s ease-in-out',
        'pop-in': 'popIn 0.3s ease-out',
      },
      keyframes: {
        wiggle: {
          '0%,100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-8deg)' },
          '75%': { transform: 'rotate(8deg)' },
        },
        popIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-500', 'bg-blue-100', 'bg-blue-50', 'border-blue-400', 'border-blue-500', 'text-blue-700', 'text-blue-800', 'from-blue-400', 'to-blue-600',
    'bg-orange-500', 'bg-orange-100', 'bg-orange-50', 'border-orange-400', 'border-orange-500', 'text-orange-700', 'text-orange-800', 'from-orange-400', 'to-orange-600',
    'bg-green-500', 'bg-green-100', 'bg-green-50', 'border-green-400', 'border-green-500', 'text-green-700', 'text-green-800', 'from-green-400', 'to-green-600',
  ],
}

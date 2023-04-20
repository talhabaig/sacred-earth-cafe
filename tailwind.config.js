/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A5662",
        light: "rgb(74 86 98 / 45%)",
        active: "#3CBCB4",
        offwhite: "#F1F1F1",
      },
      boxShadow: {
        'regular': '-5px 5px 10px rgba(217, 217, 217, 0.2), 5px -5px 10px rgba(217, 217, 217, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(217, 217, 217, 0.9)',
        'inset' : ' inset -2px 2px 4px rgba(222, 222, 222, 0.2), inset 2px -2px 4px rgba(222, 222, 222, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.9), inset 2px 2px 5px rgba(222, 222, 222, 0.9)',
        "btn": "-5px 5px 10px rgba(221, 221, 224, 0.2), 5px -5px 10px rgba(221, 221, 224, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(221, 221, 224, 0.9)",
        'inset-sm' : 'inset -2px 2px 4px rgba(205, 205, 205, 0.2), inset 2px -2px 4px rgba(205, 205, 205, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.9), inset 2px 2px 5px rgba(205, 205, 205, 0.9);',
        "sm": "-1px -1px 3px #FFFFFF, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4)",
        "lg" : "inset -3px -3px 7px #FFFFFF, inset 2px 2px 5px rgba(174, 174, 192, 0.4)"
      }
    },
  },
  plugins: [],
};

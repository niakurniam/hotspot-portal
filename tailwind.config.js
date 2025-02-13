/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js,php}'],
    theme: {
        extend: {
          fontFamily: {
              sans: ['Figtree', ...defaultTheme.fontFamily.sans],
              lato: ['Lato', ...defaultTheme.fontFamily.sans],
              montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
              nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
          },
      },
    },
    plugins: [],
}
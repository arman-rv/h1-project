/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
     "./ecommerce/*.html",
      "./assets/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        "mainCol" :"rgb(191,244,228)",
        "mainCol2" :"rgb(164,246,222)",
        "mainCol3" :"rgb(204, 242, 231)",        
        "backCol" :"rgb(251,246,246)",
        "textCol":"rgb(109,103,103)",
        "textCol2":"rgb(65,167,137)",
        "textCol3":"rgb(8,158,113)",
        "textCol4":"rgb(33, 57, 75)",

        "textHover":"rgb(18,111,148)",

        "blueTheme" : "#088FFA",
        "orangeTheme" : "rgb(255, 77, 0)",
        "pinkTheme" : "#FF007F",
      },
      fontFamily:{'vzr':['vazir']},
      boxShadow:{
      'cardShadow3':'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
      'cardShadow2':'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      'cardShadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'},
      
      backgroundImage: {
        'karbar':"url('./assets/image/karbar.svg')",
        'email':"url('./assets/image/email.svg')",
        'pass':"url('./assets/image/pass.svg')",
        'rePass':"url('./assets/image/rePass.svg')",

        'home': "url('./src/assets/image/icons8-home-24.svg')",
        'editProfile': "url('./src/assets/image/icons8-registration-24.png')",
        'myCourses': "url('./src/assets/image/icons-list-24.png')",
        'courses': "url('./src/assets/image/icons8-list-24.png')",
        'exit': "url('./src/assets/image/icons8-exit-24.png')",
        'search': "url('./src/assets/image/icons8-search-30.png')",
        'bgCourses': "url('./src/assets/image/4.webp')",
      }

    }, 
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailgrids/plugin")
  ],

}

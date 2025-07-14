const forms = require("@tailwindcss/forms")

module.exports ={
   content: ['./*.html', './*.js'],

    theme:{
        extend:{
            colors:{
                primary:'#274029',
                brand:'#0B6E4F',
                secondary:'#9EA93F',
                ternary : '#60712F'

            },
        
        fontfamily:{
            headline:['Poppins', 'sans-serif'],
            body:['Poppins', 'sans-serif'],
        },
        spacing:{
            '128':'32rem',
            '144':'36rem',
            '160':'40rem',
        },
        borderradius:{
            'xl':'1rem',
            '2xl':'2rem',
        },
    
        screens:{
            'xs':'480px',
            '3xl': '1600px',
        },
        },
    
plugins:[forms],
    }
}
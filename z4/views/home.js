function renderPage() {
  return `
     <html lang="pl">
       <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Home</title>
       </head>
       <body>
         <form action="/student" method="post">
           <input type="text" name="name">
           <input type="text" name="lastname">
           <input type="number" name="age">
           <select name="gender">
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="other">Other</option>
           </select>
           <input type="number" name="code">
           <input type="text" name="studyField">
           <button type="submit">Submit</button>
         </form>
       </body>
     </html>
  `;
 }
 
 module.exports = { renderPage };
 
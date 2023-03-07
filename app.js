//plantill abajo
const  express = require('express');
const app =express();
const puerto=3000;
const hbs = require("hbs");
//  plantilla abajo

app.set("view engine", "hbs")

app.get("/sodiaco/:fecha",(req,res)=>{
   
    const fecha = new Date(req.params.fecha);
    let diaEntero= fecha.getDate()+1
    let mesEntero= fecha.getMonth() + 1

    
    if ( (diaEntero>=12 & diaEntero<=30  & mesEntero==3  )|| (diaEntero>=1 & diaEntero<=18 & mesEntero==4) ){
        
        res.render("sodiaco",{signo: "Piscis", descripcion:"Es el duodécimo signo del zodiaco y se caracteriza por su sensibilidad, imaginación, compasión y espiritualidad. Le gusta el arte, la música, el sueño y la magia. Es empático, romántico y soñador, pero también puede ser iluso, escapista y víctima."})

    } else  if ( (diaEntero>=19 & diaEntero<=30   & mesEntero==4  )|| diaEntero>=1 &diaEntero<=14 & mesEntero==5){
        res.render("sodiaco",{signo: "aries", descripcion:"Es el duodécimo signo del zodiaco y se caracteriza por su sensibilidad, imaginación, compasión y espiritualidad. Le gusta el arte, la música, el sueño y la magia. Es empático, romántico y soñador, pero también puede ser iluso, escapista y víctima."})
    } else {
        // Fecha inválida
        resultado.nombre = "Fecha inválida";
        resultado.descripcion = "La fecha que ingresaste no corresponde a ningún signo zodiacal. Por favor, verifica que el formato sea yyyymmdd y que los valores sean correctos.";
      }

});






// plantilla abajo
app.all("*",(req,res)=>{
    res.status(404).send("pagina no existe")
})
//plantilla abajo
app.listen(puerto,()=>{
    console.log("servicio levantado")
})
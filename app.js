const app =require('express')();
const bodyParser =require("body-parser");
const moment=require('moment-timezone');
const a=moment.tz("America/New_York");
const b=moment.tz("Australia/Sydney");
const c=moment.tz("Europe/Warsaw");
const PORT=8080;
const HOST='0.0.0.0';

app.set("view engine", "ejs");
app.set("views", __dirname+"/views");
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res) => {res.render("index", {datalublin:c.format('DD/MM H:mm'),datanowyyork:a.format('DD/MM H:mm'),datasydney:b.format('DD/MM H:mm') })
});
app.listen(PORT,HOST);
console.log('Server is up');



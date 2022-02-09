const app = require ('express')();


app.use((req,res,next)=>{
  res.send('working my server');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{console.log('server started at port ' + PORT)});


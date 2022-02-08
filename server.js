const app = require ('express')();


app.use((req,res,next)=>{
  res.send('working my server');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{console.log('server started at port ' + PORT)});


// sudo docker build -t server:0.1 -f ./Dockerfile-dev .
// sudo docker run -dit -p 8080:3000 -v $(pwd):/app:ro --name server_docker server:0.1
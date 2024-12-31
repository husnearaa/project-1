import express, { Request, Response }  from 'express'

const app = express();
// import cookieParser from "cookie-parser";
const port = 3000;


//parsers
app.use(express.json());
// app.use(cookieParser());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello Developers!')
});

app.post("/", (req: Request, res: Response) =>{
  console.log(req.body);
  res.send({
    message:"Success"
  });
});




export default app;






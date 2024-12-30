// import express, { Request, Response }  from 'express'

// const app = express();
// // import cookieParser from "cookie-parser";
// const port = 3000;


// //parsers
// app.use(express.json());
// // app.use(cookieParser());


// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello Developers!')
// });

// app.post("/product", (req: Request, res: Response) =>{
//   // console.log(req.body);
//   res.send({
//     message:"Success"
//   });
// });


// // app.post("/notfound", (req, res) => {
// //   console.log("hello");
// //   try {
   
// //     res.send({
// //       message: "Success"
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send({ message: "Internal Server Error" });
// //   }
// // });


// export default app;






import express, { Request, Response } from "express"
const app = express() 

// parser
app.use(express.json())



app.post("/product",async(req:Request,res:Response)=>{

  console.log("data")

  res.send(req.body)

})


app.get('/', async(req:Request, res:Response) => {
  res.send('Hello World Now 5!')
})





export default app
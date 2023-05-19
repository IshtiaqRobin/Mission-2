import express, { Application, urlencoded } from "express";
import cors from "cors";
const app: Application = express();

// Application routes
import userRoute from './app/modules/user/user.route';

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/api/v1/user', userRoute);

export default app;

// Pattern MVC, Modular

/* 
Break Down:
1. Interface -> user.interface.ts
2. Schema and Model -> user.model.ts
3. Route Function -> controller.ts
4. Database Query Function -> service.ts
*/
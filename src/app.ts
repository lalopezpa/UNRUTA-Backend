// import cors from "cors";
// import express, { Application } from "express";
// import helmet from "helmet";

// import errorMiddleware from "@/middlewares/error.middleware";
// import helloRoutes from "@/routes/hello.routes";

// export class App {
// 	private readonly _app: Application;

// 	constructor() {
// 		this._app = express();
// 		this.initMiddlewares();
// 	}

// 	private initMiddlewares() {
// 		this._app.use(cors());
// 		this._app.use(helmet());
// 		this._app.use(express.json());
// 		this._app.use(express.urlencoded({ extended: true }));
// 		this._app.use("/", helloRoutes);
// 		this._app.use(errorMiddleware);
// 	}

// 	public get app(): Application {
// 		return this._app;
// 	}
// }
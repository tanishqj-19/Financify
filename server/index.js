import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import { kpis ,  products, transactions} from "./data/data.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";


/* Configurations */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


/* Routes */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

/* Mongo DB */
const PORT = process.env.PORT || 9000;
var uri = process.env.MONGO_URL;

mongoose
.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () =>{
    app.listen(PORT, () => console.log(`Serving Port: ${PORT}`));
    const db = mongoose.connection.db;

    // Get all collections
    // const collections = await db.listCollections().toArray();

    // // // Create an array of collection names and drop each collection
    // collections
    //   .map((collection) => collection.name)
    //   .forEach(async (collectionName) => {
    //     db.dropCollection(collectionName);
    //   });

    // KPI.insertMany(kpis);

    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
    
    
})
.catch((error) => console.log(`${error.message} did not connect`));


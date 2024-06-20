import express from "express";
import clientesRoutes from "./routes/clientes.routes.js";
import indexRoutes from "./routes/index.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use(indexRoutes);
app.use("/api", clientesRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(3000);
console.log("server started on port 3000");

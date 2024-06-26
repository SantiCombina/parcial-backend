import cors from "cors";
import express from "express";
import clientesRoutes from "./routes/clientes.routes.js";
import promotoresRoutes from "./routes/promotores.routes.js";
import localidadesRoutes from "./routes/localidades.routes.js";

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions.js";

const specs = swaggerJsDoc(options);

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", clientesRoutes);
app.use("/api", promotoresRoutes);
app.use("/api", localidadesRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use((req, res, next) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(3000);
console.log("server started on port 3000");

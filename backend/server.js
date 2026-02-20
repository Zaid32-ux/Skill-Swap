import app from "./app.js";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3001;
   const server =app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});


const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "*", // in production put your frontend URL
  },
});


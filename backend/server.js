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

io.on("connection", (socket) => {
  console.log("🔌 User connected:", socket.id);

  // ✅ user setup
  socket.on("setup", (userData) => {
    socket.userId = userData._id;
    socket.join(userData._id);

    console.log("✅ User setup:", userData.username);
    socket.emit("connected");
  });

  // ✅ join chat room
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("📦 Joined chat:", room);
  });
});
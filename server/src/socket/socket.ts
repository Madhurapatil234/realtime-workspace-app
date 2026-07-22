import { Server } from "socket.io";

let io: Server;

export const initializeSocket = (server: any) => {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("✅ User Connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("❌ User Disconnected:", socket.id);
    });
  });

  return io;
};

export const getIO = () => io;

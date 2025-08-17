import app from "./src/app.js";
import http from "http";
import { Server } from "socket.io";

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

// Create Socket.IO server and attach to app so controllers can emit events
const io = new Server(server, {
	cors: { origin: true, methods: ["GET", "POST"] },
});
app.set("io", io);

io.on("connection", (socket) => {
	console.log("Socket connected:", socket.id);

	socket.on("joinProperty", ({ propertyId }) => {
		if (propertyId) socket.join(`property_${propertyId}`);
	});

		socket.on("joinUser", ({ userId }) => {
			if (userId) socket.join(`user_${userId}`);
		});

		socket.on("leaveUser", ({ userId }) => {
			if (userId) socket.leave(`user_${userId}`);
		});

	socket.on("leaveProperty", ({ propertyId }) => {
		if (propertyId) socket.leave(`property_${propertyId}`);
	});

	socket.on("disconnect", () => {
		console.log("Socket disconnected:", socket.id);
	});
});

server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

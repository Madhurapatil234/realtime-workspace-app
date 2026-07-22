import { useState } from "react";
import socket from "../services/socket";

function Workspace() {

  const [message, setMessage] = useState("");

  const sendMessage = () => {

    if (message.trim() === "") return;

    socket.emit("chat message", message);

    setMessage("");
  };

  return (
    <div className="flex h-screen">

      <div className="w-64 bg-gray-900 text-white p-5">

        <h1 className="text-2xl font-bold mb-6">
          Workspaces
        </h1>

        <ul className="space-y-3">
          <li className="bg-gray-700 p-2 rounded">
            General
          </li>
        </ul>

      </div>

      <div className="flex-1 flex flex-col">

        <div className="bg-blue-600 text-white p-4 text-xl font-semibold">
          General Chat
        </div>

        <div className="flex-1 p-5">

          <p>Start chatting...</p>

        </div>

        <div className="p-4 border-t flex">

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded px-3 py-2"
          />

          <button
            onClick={sendMessage}
            className="ml-3 bg-blue-600 text-white px-5 rounded"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}

export default Workspace;
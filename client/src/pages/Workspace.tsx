function Workspace() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">

        <h1 className="text-2xl font-bold mb-6">
          Workspaces
        </h1>

        <ul className="space-y-3">
          <li className="bg-gray-700 p-2 rounded">
            General
          </li>

          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Development
          </li>

          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Testing
          </li>
        </ul>

      </div>

      {/* Chat Area */}

      <div className="flex-1 flex flex-col">

        <div className="bg-blue-600 text-white p-4 text-xl font-semibold">
          General Chat
        </div>

        <div className="flex-1 p-5 overflow-y-auto">

          <div className="mb-4">
            <strong>John:</strong> Hello 👋
          </div>

          <div className="mb-4">
            <strong>Madhura:</strong> Hi Everyone!
          </div>

        </div>

        <div className="p-4 border-t flex">

          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded px-3 py-2"
          />

          <button className="ml-3 bg-blue-600 text-white px-5 rounded">
            Send
          </button>

        </div>

      </div>

    </div>
  );
}

export default Workspace;
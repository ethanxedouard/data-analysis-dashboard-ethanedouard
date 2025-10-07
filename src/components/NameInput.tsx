import { useState, useEffect } from "react";

const NameInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  // ✅ Bonus: Remember last entered name
  useEffect(() => {
    const savedName = localStorage.getItem("savedName");
    if (savedName) setName(savedName);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔍 Validation logic
    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }

    if (email && (!email.includes("@") || !email.includes("."))) {
      setError("Please enter a valid email address.");
      return;
    }

    // ✅ Passed validation
    setError("");
    setSubmittedName(name);
    localStorage.setItem("savedName", name);
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setSubmittedName("");
    setError("");
    localStorage.removeItem("savedName");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
        👋 Interactive Name Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
          />
          <p className="text-sm text-gray-500">Characters: {name.length}</p>
        </div>

        <div>
          <label className="block font-medium mb-1">Email (optional):</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="flex justify-center gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Clear
          </button>
        </div>
      </form>

      {submittedName && (
        <p className="text-green-600 text-center mt-4">
          ✅ Hello, {submittedName}!
        </p>
      )}
    </div>
  );
};

export default NameInput;

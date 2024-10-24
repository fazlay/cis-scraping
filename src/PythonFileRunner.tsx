import React, { useState, useEffect } from "react";

const PythonFileRunner = () => {
  const [pyodide, setPyodide] = useState(null);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(true);
  const [pythonCode, setPythonCode] = useState("");

  // Static URL of the Python file in the assets folder
  const pythonFileUrl = "/assets/script.py"; // Adjust this path based on your structure

  useEffect(() => {
    // Load Pyodide
    const loadPyodide = async () => {
      try {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
        script.async = true;

        script.onload = async () => {
          const pyodideInstance = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
          });
          setPyodide(pyodideInstance);
          setLoading(false);
        };

        document.body.appendChild(script);
      } catch (error) {
        setOutput("Error loading Pyodide: " + error.message);
        setLoading(false);
      }
    };

    loadPyodide();
  }, []);

  useEffect(() => {
    // Fetch the Python code from the static URL
    const fetchPythonCode = async () => {
      try {
        const response = await fetch(pythonFileUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        const code = await response.text();
        setPythonCode(code); // Set the Python code from the fetched file
      } catch (error) {
        setOutput("Error fetching Python code: " + error.message);
      }
    };

    fetchPythonCode();
  }, [pythonFileUrl]);

  const runPythonScript = async () => {
    if (!pyodide || !pythonCode) return;

    try {
      const output = await pyodide.runPython(pythonCode); // Run the loaded Python code
      setOutput(output);
    } catch (error) {
      setOutput("Error running script: " + error.message);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={runPythonScript}
        disabled={loading || !pythonCode}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
      >
        {loading ? "Loading Python..." : "Run Python Script"}
      </button>

      {output && (
        <div className="p-4 border rounded bg-gray-50">
          <p className="font-medium mb-2">Python Output:</p>
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
};

export default PythonFileRunner;

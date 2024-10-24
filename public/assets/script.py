import sys
from io import StringIO

# Redirect standard output to a string (to capture print statements)
output = StringIO()
sys.stdout = output

# Example Python code
print("Hello from Python!")
print("Running in the browser using Pyodide.")

# Reset redirect.
sys.stdout = sys.__stdout__

# Get the string output and return it.
output.getvalue()
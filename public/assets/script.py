import sys
from io import StringIO
import time

# Redirect standard output to a string (to capture print statements)
output = StringIO()
sys.stdout = output

# Example Python code
print("Hello from Python!")
print("Running in the browser using Pyodide.")


# Delay for 3 seconds
time.sleep(3)

# Print statement
print("This message prints after a 3-second delay.")

# Reset redirect.
sys.stdout = sys.__stdout__

# Get the string output and return it.
output.getvalue()
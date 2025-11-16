#!/bin/bash

# Script to pull the user-overrides.js file into the current directory.

URL="https://raw.githubusercontent.com/hearot/user.js/master/user-overrides.js"
OUTPUT_FILE="user-overrides.js"

echo "-----------------------------------------------------------------"
echo "Downloading $OUTPUT_FILE from GitHub..."
echo "-----------------------------------------------------------------"

# Use curl to fetch the file:
# -s: Silent mode (no progress bar)
# -S: Show error if silent mode is enabled
# -L: Follow redirects
# -o: Save to specified output filename
curl -sSL "$URL" -o "$OUTPUT_FILE"

# Check the exit status of the curl command
if [ $? -eq 0 ]; then
    echo "Success! File saved as: $OUTPUT_FILE"
else
    echo "ERROR: Download failed. Check your network connection or the URL."
fi
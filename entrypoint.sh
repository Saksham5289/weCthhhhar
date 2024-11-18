#!/bin/sh

# Replace placeholders in .next files with environment variables
printenv | grep NEXT_PUBLIC_ | while read -r line; do
  key=$(echo $line | cut -d "=" -f1)  # Extract the env variable name
  value=$(echo $line | cut -d "=" -f2-)  # Extract the env variable value
  find /app/.next/ -type f -exec sed -i "s|$key|$value|g" {} \;  # Replace placeholders
done

# Start the Next.js application
npm start

#!/bin/bash

set -e

echo "Starting React application..."


# Start the serve command to serve the static files
exec serve -s build -l 80

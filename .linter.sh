#!/bin/bash
cd /home/kavia/workspace/code-generation/errandease-31179-a71c828b/errand_management
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


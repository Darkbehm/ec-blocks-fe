#!/bin/bash
if [[ $VERCEL_GIT_COMMIT_REF == "main"  ]] ; then
  echo "This is our main branch"
  ng build --configuration=production
else
  echo "This is not our main branch"
  ng build --configuration=development
fi

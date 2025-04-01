#!/bin/bash

# Keep these essential components
KEEP_COMPONENTS=(
  "button.tsx"
  "card.tsx"
)

# Keep utils.ts as it's likely used by the kept components
mkdir -p src/lib
touch src/lib/utils.ts

cd src/components/ui

# Delete all files except those in the KEEP_COMPONENTS array
for file in *.tsx; do
  keep=false
  for keep_file in "${KEEP_COMPONENTS[@]}"; do
    if [ "$file" = "$keep_file" ]; then
      keep=true
      break
    fi
  done
  
  if [ "$keep" = false ]; then
    echo "Removing unused component: $file"
    rm "$file"
  else
    echo "Keeping component: $file"
  fi
done

echo "Cleanup complete!" 
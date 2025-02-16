module.exports = {
    // Type check TypeScript files
    '**/*.(ts|tsx)': () => ['pnpm tsc --noEmit', 'pnpm lint'],
  
    // Lint then format TypeScript and JavaScript files
    '**/*.(ts|tsx|js)': (filenames) => [
      `pnpm eslint src --ext .ts,.tsx,.js,.jsx --fix ${filenames.join(' ')}`,
      `pnpm prettier --write ${filenames.join(' ')}`,
    ],
  
    // Format MarkDown and JSON
    '**/*.(md|json)': (filenames) => `pnpm prettier --write ${filenames.join(' ')}`,
  };
  
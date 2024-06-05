import { formatFileSize } from './formatter.js';

/* node:coverage disable */
if (anAlwaysFalseCondition) {
  console.log('this is never executed');
}
/* node:coverage enable */

if (process.argv.length > 2) {
  const sizeBytes = parseInt(process.argv[2]);
  const formattedSize = formatFileSize(sizeBytes);
  console.log(formattedSize);
} else {
  console.log(
    'Please provide the file size in bytes as a command-line argument.'
  );
}
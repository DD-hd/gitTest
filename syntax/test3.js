process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
    process.stdout.write(`data: ${data}`);
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });

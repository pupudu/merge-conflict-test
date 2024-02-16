#!/usr/bin/env zx

import 'zx/globals'

console.log(`
##################
MERGE TOOL RUNNING
##################
`);

let base = await fs.readFile($.env.O, 'utf8')
let master = await fs.readFile($.env.A, 'utf8')
let branch = await fs.readFile($.env.B, 'utf8')

console.log('#####################');
console.log(`Changes in base commit:\n`, base);


console.log('%%%%%%%%%%%%%%%%%%%%%');
console.log(`New change in master:\n`, master);


console.log('&&&&&&&&&&&&&&&&&&&&&');
console.log(`New change in demo branch:\n`, branch);

await fs.writeFile($.env.A, `
// Merged using custom merge driver
${branch}
`);

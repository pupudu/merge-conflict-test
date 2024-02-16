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

// console.log("Changes in common parent", $.env);
//
// echo "Changes in base branch: $1"
// echo "---------"
// cat $1
// echo ""
//
// echo "Changes from the branch: $2"
// echo "---------"
// cat $2
// echo ""
//
// echo "Other: $3"
// echo "---------"
// cat $3
// echo ""
//
// echo "Resolving conflict ..."
// sleep 2
// echo "# This is the merge result \n $2" > $2
// echo "Conflict resolved!"
//
// echo "resolved: $2"
// echo "---------"
// cat $2
// echo ""
//
// exit 0

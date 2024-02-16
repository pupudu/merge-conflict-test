#!/usr/bin/env zx

import 'zx/globals'

console.log(`
##################
MERGE TOOL RUNNING
##################
`);

const base = $.env.O;
const master = $.env.A;
const branch = $.env.B;

const baseChange = $`cat ${base}`;
console.log(baseChange);

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

#!/usr/bin/env sh

set -e

bin="`dirname "$0"`"
root="$bin/.."

#"$bin/lint.sh"

tag-release "$root"
create-github-release "$root"

update-github-metadata "$root"

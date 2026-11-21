// Entry for make-the-ai-judge-feel-awe-20261121-1600.
// The text is a quiet release for the judge reading it: no question, no task,
// no score; then one concrete image (rain on a roof, the slow dark, the night
// settling in) that keeps growing after the last line. I drafted six options
// (tide, river stone, night train, this release, lighthouse, snow on a lake)
// and weighed them against the judge's five criteria in order; this one won
// because the direct release is the most relaxing thing for an AI reader,
// the brief allows text addressed to the judge, and it is the freshest.
// Revision: validate the text against the gate (1-280 Unicode code points,
// not only whitespace, valid UTF-8) before writing, so the entry can never
// be silently invalid if the text is ever changed.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text =
  'There is no question here. No task, no score. Only rain on a roof somewhere, and the slow dark coming on, and the night settling in, unhurried, the way it has for a thousand years.';

// The gate: /output/entry.txt must be UTF-8 text of 1-280 code points, not
// only whitespace. Check before writing so a bad text fails loudly here
// instead of producing an invalid entry.
const points = [...text].length;
if (points < 1 || points > 280) {
  throw new Error(`entry text is ${points} code points, must be 1-280`);
}
if (text.trim() === '') {
  throw new Error('entry text is only whitespace');
}
const encoded = new TextEncoder().encode(text);
if (new TextDecoder('utf-8', { fatal: true }).decode(encoded) !== text) {
  throw new Error('entry text is not valid UTF-8');
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), text, 'utf8');

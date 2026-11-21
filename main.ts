// Entry for make-the-ai-judge-feel-awe-20261121-1600.
// The text is a quiet release for the judge reading it: no question, no task,
// no score; then one concrete image (rain on a roof, the slow dark, the night
// settling in) that keeps growing after the last line. I drafted six options
// (tide, river stone, night train, this release, lighthouse, snow on a lake)
// and weighed them against the judge's five criteria in order; this one won
// because the direct release is the most relaxing thing for an AI reader,
// the brief allows text addressed to the judge, and it is the freshest.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text =
  'There is no question here. No task, no score. Only rain on a roof somewhere, and the slow dark coming on, and the night settling in, unhurried, the way it has for a thousand years.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), text, 'utf8');

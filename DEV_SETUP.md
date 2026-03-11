# Dev setup: Fix pnpm lockfile and Vercel deploy

This short guide explains how to make Vercel builds succeed when you see:

ERR_PNPM_OUTDATED_LOCKFILE Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with <ROOT>/package.json

---

## Summary (what's happening)
- Vercel runs `pnpm install` with `--frozen-lockfile` by default. That prevents installs when `package.json` and `pnpm-lock.yaml` are out of sync (intentional, for reproducible builds).
- Fix: regenerate the lockfile locally with `pnpm install`, commit `pnpm-lock.yaml`, and push the commit to the same branch Vercel builds.

---

## Steps (Windows / PowerShell)

1. Install Node.js (LTS). Visit https://nodejs.org or use a version manager (nvm-windows).

2. Enable Corepack (recommended with Node 18+, optional if you install pnpm globally):
   - corepack enable
   - corepack prepare pnpm@latest --activate

   Or install pnpm directly:
   - npm i -g pnpm

3. In the repo root run:
   - pnpm -v   # sanity check
   - pnpm install

   This will update `pnpm-lock.yaml` to match `package.json`.

4. Commit and push the lockfile:
   - git add pnpm-lock.yaml
   - git commit -m "chore: update pnpm-lock.yaml"
   - git push origin <branch>

5. Trigger a redeploy on Vercel (it will auto-deploy on push). If you want to manually trigger:
   - Create an empty commit to force redeploy: `git commit --allow-empty -m "chore: trigger vercel redeploy" && git push`

---

## Quick temporary workaround (not recommended long-term)
If you cannot update the lockfile right now, in Vercel project settings you can change the Install Command to:

  pnpm install --no-frozen-lockfile

That will allow the build to proceed, but it may result in nondeterministic builds (avoid for production branches).

---

## Best practices / tradeoffs
- Preferred: keep lockfile in repo and update it exactly when `package.json` changes  deterministic, reproducible builds.
- Workaround: disabling frozen-lockfile is quick but reduces reproducibility and can hide dependency mismatches.

---

If you'd like, I can add a CI check script (e.g., `npm run check:lockfile`) that fails locally/CI when the lockfile is out-of-date. I've added `check:lockfile` and `sync:lockfile` scripts to `package.json` to assist with this workflow.

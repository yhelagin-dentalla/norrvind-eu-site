# NORRVIND EU Site

Clean production source for **https://norrvind.app**.

## Deployment

This repository is intended for native **Cloudflare Pages Git integration**.

Recommended Cloudflare settings:

- Production branch: `main`
- Framework preset: `None`
- Build command: leave empty
- Build output directory: `public`
- Root directory: repository root

Every push to `main` should trigger a new production deployment after the repository is connected in Cloudflare.

## Public routes

- `/`
- `/norrnote/`
- `/norrplan/`
- `/privacy/norrnote/`
- `/support/`
- `/legal/`

No Timeweb FTP workflow, Worker route, or legacy deployment configuration is used in this repository.

# billing-worker

Prepared training repository for **Hands-on Activity 2** in the **Codex Deployment Practitioner — Half Day** workshop.

This small JavaScript project is an intentionally failing exercise. Use the workshop activity pack to inspect the reported failure, make a bounded correction, run the tests, and review the resulting diff.

## Requirements

- Node.js 18 or later
- npm

The exercise uses CommonJS and Node's built-in test runner. It has no external package dependencies, and its tests do not need network access.

## Run the exercise

From the repository root:

```sh
npm test
```

The starting test run is expected to fail. Preserve the original result, follow the activity pack, and record the test output and exact diff after your change. Work in your own assigned training environment or disposable copy so the shared starting fixture remains available for other learners.

## Files

- `package.json` — project metadata and test command
- `src/invoice-handler.js` — invoice handler
- `schema/invoiceCheck.js` — invoice validation
- `test/invoice-handler.test.js` — exercise tests

## Original workshop ZIP

[Download billing-worker.zip](downloads/billing-worker.zip?raw=true)

The ZIP is preserved unchanged from the supplied workshop package. The four project files above match the ZIP contents byte for byte; macOS Finder metadata is omitted from the extracted project tree.

ZIP SHA-256:

```text
6d1ce616718b2e98ab77af9fb61563e48976d5e94e294ef6c9e9c824476417b6
```

## Workshop setup

The organizer provides the Codex environment and verifies learner access to inspect files, make the bounded edit, run tests, and view the diff and test logs. Public repository access alone does not provision that environment.

This repository contains synthetic training code. It is not a production billing service.

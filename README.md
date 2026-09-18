# Train to Mumbai Playwright Tests

This project contains end-to-end UI tests for the [Train to Mumbai](https://www.traintomumbai.com/) restaurant website. The tests use [Playwright](https://playwright.dev/) and run against Chromium, Firefox, and WebKit desktop browsers.

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

Install the project dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

## Running tests

Run the complete test suite across all configured browsers:

```bash
npx playwright test
```

Run tests in a single browser:

```bash
npx playwright test --project=chromium
```

Run one test file:

```bash
npx playwright test tests/traintomumbai/homepage.spec.ts
```

Run tests with the interactive Playwright UI:

```bash
npx playwright test --ui
```

Open the HTML report after a test run:

```bash
npx playwright show-report
```

## Test coverage

The current automated test verifies that the homepage:

- Loads with the title `Train to Mumbai`
- Displays the brand logo, main navigation, and `Order Now` call to action
- Shows the hero headline and street-food introduction
- Displays the address, phone numbers, and opening hours in the footer

The broader planned journeys are documented in [traintomumbai-ui-test-plan.md](./traintomumbai-ui-test-plan.md). The plan also covers the Spice Route, Concept, Catering, contact and hours, and external ordering flows; dedicated test files for those journeys are not yet present in the repository.

## Project structure

```text
.
├── playwright.config.ts       # Playwright projects and shared test settings
├── tests/
│   ├── pages/                 # Page objects
│   ├── traintomumbai/         # Website journey tests
│   └── seed.spec.ts           # Seed file used for test generation
└── specs/
	├── README.md              # This document
	└── traintomumbai-ui-test-plan.md
```

## Configuration notes

- The test suite targets `https://www.traintomumbai.com/` directly.
- Tests use the HTML reporter.
- Failed tests collect a trace on the first retry.
- CI runs with one worker and retries failed tests twice.
- Mobile and branded-browser projects are defined as optional examples in `playwright.config.ts`, but are currently disabled.

## Adding a test

1. Add the scenario and expected behavior to [traintomumbai-ui-test-plan.md](./traintomumbai-ui-test-plan.md).
2. Add or update a page object under `tests/pages/` when selectors are shared.
3. Add the test under `tests/traintomumbai/`.
4. Run the focused test locally, then run the full suite before opening a pull request.

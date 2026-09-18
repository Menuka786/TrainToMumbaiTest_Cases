# Train to Mumbai UI and core user journeys

## Application Overview

Train to Mumbai is a restaurant landing site with a homepage, informational pages, contact details, and an external ordering CTA. The plan covers the primary end-user activities a visitor would typically complete on the site.

## Test Scenarios

### 1. Core user journeys

**Seed:** `tests/seed.spec.ts`

#### 1.1. Homepage loads and core navigation is discoverable

**File:** `tests/traintomumbai/homepage.spec.ts`

**Steps:**
  1. Open the homepage at https://www.traintomumbai.com/
    - expect: The page loads successfully and the title is 'Train to Mumbai'.
    - expect: The header brand/logo, main navigation links, and primary CTA are visible.
  2. Review the initial hero section and suggested content blocks
    - expect: The page shows the main promotional headline and supporting text about Indian street food.
    - expect: The page conveys the restaurant’s identity and value proposition clearly.
  3. Scan the footer details
    - expect: The address, phone numbers, and hours are visible in the footer.
    - expect: No broken or missing core content is evident on the first screen.

#### 1.2. User explores the Spice Route content

**File:** `tests/traintomumbai/spice-route.spec.ts`

**Steps:**
  1. Click the 'Spice Route' navigation link from the header
    - expect: The user is taken to the Spice Route page or relevant section without an error.
    - expect: The page loads with content related to the restaurant offering and brand story.
  2. Review the page structure and any menu or feature highlights
    - expect: Primary content is readable and properly formatted.
    - expect: Navigation remains functional after the page change.
  3. Return to the homepage using the brand logo or Home link
    - expect: The user can navigate back to the homepage and resume browsing without issue.

#### 1.3. User learns about the brand concept and catering offering

**File:** `tests/traintomumbai/concept-catering.spec.ts`

**Steps:**
  1. Open the 'Concept' page from the main navigation
    - expect: The page loads and presents the restaurant concept or story.
    - expect: The layout is consistent with the brand and readable on desktop.
  2. Open the 'Catering' page from the header menu or footer links
    - expect: The Catering page loads and provides relevant service information or call-to-action content.
    - expect: The user can understand whether catering is offered and how to proceed.
  3. Confirm that navigation and page titles remain coherent across sections
    - expect: Page-to-page movement is consistent and intuitive.
    - expect: No dead links or navigation mismatches are observed.

#### 1.4. User identifies contact and operating information

**File:** `tests/traintomumbai/contact-hours.spec.ts`

**Steps:**
  1. Review the footer information or navigate to the Contact page
    - expect: The restaurant address, phone numbers, and timing details are clearly available.
    - expect: The information is consistent and easy to read.
  2. Check the open/closed status and schedule text
    - expect: Operating hours match the visible schedule in the footer or contact section.
    - expect: Any special notes or days closed are understandable to users.
  3. Use the phone links
    - expect: Clicking a phone number initiates a valid tel: action on the device/browser.
    - expect: The user can contact the business easily.

#### 1.5. User completes an order via the primary CTA

**File:** `tests/traintomumbai/order-now.spec.ts`

**Steps:**
  1. Click the 'Order Now' button from the homepage header or hero section
    - expect: The browser opens the external Toast ordering page or relevant checkout flow.
    - expect: The user exits the site’s main flow to a dedicated ordering destination.
  2. Verify the order destination is valid and usable
    - expect: The order page loads without obvious broken redirects or blank screens.
    - expect: The external ordering experience is accessible and clearly connected to the restaurant brand.
  3. Return to the original site if needed
    - expect: The user can navigate back to the main website from the external page or continue browsing as expected.

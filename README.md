# Kiddiwear — Interactive Multi-Fidelity Prototype

A 51-screen interactive prototype for **Kiddiwear**, a peer-to-peer marketplace for buying and selling pre-loved children's clothing in the UK. Built with React 19, Tailwind CSS 4, and shadcn/ui. Every screen supports three rendering modes — **Lo-Fi**, **Mid-Fi**, and **Hi-Fi** — toggled from the top toolbar or via keyboard shortcut.

**Live demo:** [elifsue.github.io/kiddiwear](https://elifsue.github.io/kiddiwear/)

---

## Getting Started

```bash
pnpm install
pnpm dev
```

The app runs at `http://localhost:3000`. Hi-Fi mode is the default.

---

## Three-Mode Fidelity System

Every screen renders in three distinct modes, each designed for a different stage of the design review process.

| Mode       | Visual Style                                                                     | Images                                | Text                                                            |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------------------------------------- |
| **Lo-Fi**  | Black-and-white, no rounded corners                                              | Diagonal-line crossbox placeholders   | TextBar / TextLines placeholders; key titles shown as real text |
| **Mid-Fi** | Grayscale with borders and labels                                                | Grey boxes with descriptive labels    | Full real text content with grey typography                     |
| **Hi-Fi**  | Full colour with Material Design 3 palette, reactive to real-time colour changes | Real product photography (CDN-hosted) | Full real text with styled typography                           |

The mode toggle sits in the centre of the top toolbar. Press **T** to cycle through modes.

**Lo-Fi mode** uses only black and white. Image placeholders render as bordered rectangles with diagonal crossed lines (no rounded corners). Brand logos are replaced with crossbox placeholders. Map areas show full-size crossbox placeholders.

**Mid-Fi mode** uses grayscale with descriptive labels on image placeholders. Full text content is displayed. Brand logos are replaced with labelled grey circle placeholders. Map areas show crossbox placeholders with a centred "Map" label.

**Hi-Fi mode** uses the full M3 colour palette with real CDN-hosted photography, styled typography, rounded corners, and real brand logos. Map areas display a grid-based map with coloured carrier markers (InPost yellow #FFCB03, Evri blue #027BC4).

---

## Design System (Hi-Fi Mode)

The Hi-Fi colour palette uses a Material Design 3 (M3) token structure with 30+ colour roles including Primary, Secondary, Tertiary, Surface, Success, and Error groups. The palette is fully customisable via the built-in **Colors** panel (accessible from the toolbar), which includes:

- Grouped token editing by role (Primary, Secondary, Tertiary, Surface, Success, Error, Outline)
- Built-in preset management with 7 presets (default: Terracotta & Gold)
- Custom preset support (save, update, reset)
- Export/Import palettes as JSON
- Eyedropper tool for inspecting token assignments on any element
- WCAG contrast ratio checking for all token pairs

### Built-in Colour Presets

| Preset                      | Primary   | Secondary | Tertiary  |
| --------------------------- | --------- | --------- | --------- |
| Terracotta & Gold (default) | `#BF5836` | `#8D5E3C` | `#C59B26` |
| Ocean Breeze                | `#0D47A1` | `#2E7D72` | `#C62828` |
| Midnight Violet             | `#6957A0` | `#37474F` | `#BF4000` |
| Emerald Garden              | `#1B5E20` | `#3E2723` | `#BF4000` |
| Arctic Frost                | `#263238` | `#37474F` | `#005662` |
| Berry Dusk                  | `#880E4F` | `#2C2C2C` | `#BF360C` |
| Slate & Citrus              | `#1A252F` | `#3D5A1E` | `#7C5800` |

### Non-Colour Tokens

| Token      | Default                | Usage                              |
| ---------- | ---------------------- | ---------------------------------- |
| `radius`   | `12px`                 | Standard border radius             |
| `radiusSm` | `8px`                  | Search bars, input fields, buttons |
| `radiusLg` | `16px`                 | Large containers, dialogs          |
| `shadow`   | `0 2px 8px rgba(...)`  | Subtle elevation                   |
| `shadowMd` | `0 4px 16px rgba(...)` | Medium elevation                   |

### Real-Time Reactivity

Hi-fi mode components use `useDSSync()` to subscribe to design system colour changes. When a user modifies any colour token via the Colors panel, all components referencing that token update immediately without page reload. The `DS` object is a mutable singleton synced by `DesignSystemContext`, and components that call `useDSSync()` re-render on every colour change.

---

## Screens (51 Total)

| #   | Screen                     | Route                      | File                        |
| --- | -------------------------- | -------------------------- | --------------------------- |
| 1   | Home Page                  | `/`                        | `Home.tsx`                  |
| 2   | Sign Up                    | `/signup`                  | `SignUp.tsx`                |
| 3   | Log In                     | `/login`                   | `Login.tsx`                 |
| 4   | Forgot Password            | `/forgot-password`         | `ForgotPassword.tsx`        |
| 5   | Verify Code                | `/verify-code`             | `VerifyCode.tsx`            |
| 6   | Reset Password             | `/reset-password`          | `ResetPassword.tsx`         |
| 7   | Products Listing           | `/products`                | `Products.tsx`              |
| 8   | Product Detail (Buy)       | `/product-detail-buy`      | `ProductDetailBuy.tsx`      |
| 9   | Product Detail (Sell)      | `/product-detail-sell`     | `ProductDetailSell.tsx`     |
| 10  | My Profile                 | `/profile`                 | `Profile.tsx`               |
| 11  | Followers                  | `/followers`               | `Followers.tsx`             |
| 12  | Followings                 | `/followings`              | `Followings.tsx`            |
| 13  | Notifications              | `/notifications`           | `Notifications.tsx`         |
| 14  | Saved Items                | `/saved-items`             | `SavedItems.tsx`            |
| 15  | Wallet                     | `/wallet`                  | `Wallet.tsx`                |
| 16  | Seller Profile             | `/seller-profile`          | `SellerProfile.tsx`         |
| 17  | Seller Reviews             | `/seller-reviews`          | `SellerReviews.tsx`         |
| 18  | Sell an Item               | `/sell-item`               | `SellItem.tsx`              |
| 19  | Edit Item                  | `/edit-item`               | `EditItem.tsx`              |
| 20  | Create Bundle              | `/create-bundle`           | `CreateBundle.tsx`          |
| 21  | Checkout (Delivery)        | `/checkout-delivery`       | `CheckoutDelivery.tsx`      |
| 22  | Checkout (Collection)      | `/checkout-collection`     | `CheckoutCollection.tsx`    |
| 23  | Order Confirmation         | `/order-confirmation`      | `OrderConfirmation.tsx`     |
| 24  | My Purchases               | `/my-purchases`            | `MyPurchases.tsx`           |
| 25  | My Sales                   | `/my-sales`                | `MySales.tsx`               |
| 26  | Track Order                | `/track-order`             | `TrackOrder.tsx`            |
| 27  | Leave a Review             | `/leave-review`            | `LeaveReview.tsx`           |
| 28  | Dispute Request            | `/dispute`                 | `DisputeRequest.tsx`        |
| 29  | Dispute Status             | `/dispute-status`          | `DisputeStatus.tsx`         |
| 30  | Settings (Profile Details) | `/settings-profile`        | `SettingsProfile.tsx`       |
| 31  | Settings (Payments)        | `/settings-payments`       | `SettingsPayments.tsx`      |
| 32  | Settings (Selling)         | `/settings-selling`        | `SettingsSelling.tsx`       |
| 33  | Settings (Notifications)   | `/settings-notifications`  | `SettingsNotifications.tsx` |
| 34  | Settings (Account)         | `/settings-account`        | `SettingsAccount.tsx`       |
| 35  | Add Payment Card           | `/add-payment-card`        | `AddPaymentCard.tsx`        |
| 36  | Add Withdrawal Method      | `/add-withdrawal-method`   | `AddWithdrawalMethod.tsx`   |
| 37  | Change Password            | `/change-password`         | `ChangePassword.tsx`        |
| 38  | Messages                   | `/messages`                | `Messages.tsx`              |
| 39  | Offer Sent (Pending)       | `/offer-sent-pending`      | `OfferSentPending.tsx`      |
| 40  | Offer Sent (Cancelled)     | `/offer-sent-cancelled`    | `OfferSentCancelled.tsx`    |
| 41  | Offer Sent (Counter)       | `/offer-sent-counter`      | `OfferSentCounter.tsx`      |
| 42  | Offer Sent (Accepted)      | `/offer-sent-accepted`     | `OfferSentAccepted.tsx`     |
| 43  | Offer Received (Pending)   | `/offer-received-pending`  | `OfferReceivedPending.tsx`  |
| 44  | Offer Received (Counter)   | `/offer-received-counter`  | `OfferReceivedCounter.tsx`  |
| 45  | Offer Received (Accepted)  | `/offer-received-accepted` | `OfferReceivedAccepted.tsx` |
| 46  | About Us                   | `/about`                   | `About.tsx`                 |
| 47  | How It Works               | `/how-it-works`            | `HowItWorks.tsx`            |
| 48  | Buyer Protection           | `/buyer-protection`        | `BuyerProtection.tsx`       |
| 49  | Help Centre                | `/help-centre`             | `HelpCentre.tsx`            |
| 50  | Terms & Conditions         | `/terms`                   | `TermsAndConditions.tsx`    |
| 51  | Privacy Policy             | `/privacy`                 | `PrivacyPolicy.tsx`         |

---

## Navigation Shell

The prototype is wrapped in a **WireframeShell** component providing the sidebar, top toolbar, and full-screen mode.

**Sidebar** (left panel): Lists all 51 screens with numbered indices. The active screen is highlighted and auto-scrolled into view. The header displays the Kiddiwear logo with "PROTOTYPES" beneath it.

**Top Toolbar** (left to right): Current screen name, three-mode fidelity toggle (Lo-Fi / Mid-Fi / Hi-Fi), container size display, Colors panel button (hi-fi only), Figma Capture Mode toggle, Full Screen button, Help button, screen counter (e.g. "1 / 51"), and Prev/Next navigation arrows.

**Full-Screen Mode**: Hides the sidebar and toolbar entirely. Exit via Escape or F key.

---

## Toolbar Controls

| Control                    | Description                                                                                                                                                                                                                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Lo-Fi / Mid-Fi / Hi-Fi** | Switches the rendering fidelity of the current screen                                                                                                                                                                                                                                                |
| **Container Size**         | Displays the current viewport dimensions (width × height)                                                                                                                                                                                                                                            |
| **Colors**                 | Opens the M3 colour editor panel (hi-fi mode only)                                                                                                                                                                                                                                                   |
| **Figma Capture**          | Toggles Figma Capture Mode for screenshot-friendly states. When ON (purple): dialogs stay open, overlays are removed, and background elements remain clickable — ideal for capturing dialog screens in Figma. When OFF (default): dialogs auto-dismiss on outside click and display a modal overlay. |
| **Full Screen**            | Enters distraction-free full-screen mode                                                                                                                                                                                                                                                             |
| **Help (?)**               | Shows keyboard shortcuts overlay                                                                                                                                                                                                                                                                     |
| **Prev / Next**            | Navigates between screens sequentially                                                                                                                                                                                                                                                               |

---

## Keyboard Shortcuts

| Key   | Action                              |
| ----- | ----------------------------------- |
| `←`   | Previous screen                     |
| `→`   | Next screen                         |
| `T`   | Cycle Lo-Fi → Mid-Fi → Hi-Fi mode   |
| `F`   | Toggle full-screen mode             |
| `Esc` | Exit full-screen or close overlay   |
| `?`   | Show / hide keyboard shortcuts help |

---

## Dialogs and Overlays

The prototype includes interactive dialogs that demonstrate key user flows:

| Dialog                   | Triggered From               | Features                                                                                                                      |
| ------------------------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Profile Dropdown**     | Navigation bar (user avatar) | Quick links to Profile, My Orders, Wallet, Settings, Sign Out                                                                 |
| **Category Dropdown**    | Sell an Item / Edit Item     | Hierarchical category selection with subcategories, back navigation, right chevron indicators                                 |
| **Make an Offer Dialog** | Product Detail (Buy)         | Price input, optional message, item preview, submit/cancel actions                                                            |
| **Pickup Point Dialog**  | Checkout (Collection)        | Searchable list of InPost/Evri pickup points with map view (hi-fi), available hours display, carrier logos, confirm selection |

All four overlays respect the **Figma Capture Mode** toolbar toggle. When Figma Capture Mode is ON, overlays remain open (no auto-dismiss), the dark backdrop is removed, and background elements are fully clickable — this allows capturing clean screenshots of dialog states. When Figma Capture Mode is OFF (default), dialogs behave normally with modal overlay and auto-dismiss on outside click.

---

## Icon Components

Icons are organised into three dedicated component files:

| File                | Icons                                                       |
| ------------------- | ----------------------------------------------------------- |
| `DeliveryIcons.tsx` | RoyalMail, Evri, InPost                                     |
| `SocialIcons.tsx`   | Google, Facebook, Apple, Instagram, LinkedIn                |
| `PaymentIcons.tsx`  | Bank, PayPal, Card, Visa, Mastercard, Google Pay, Apple Pay |

---

## Image Assets

All images are hosted on CDN and referenced via direct URL. No images are stored in the project directory.

| Asset Type                           | Count | Storage        |
| ------------------------------------ | ----- | -------------- |
| Product photos                       | 20    | CloudFront CDN |
| Category photos                      | 5     | CloudFront CDN |
| Hero kid photos                      | 2     | CloudFront CDN |
| Brand logos (wordmark + square icon) | 2     | Manus CDN      |
| Profile photos                       | 17    | CloudFront CDN |
| Carrier map marker icons (SVG)       | 2     | CloudFront CDN |

---

## Tech Stack

| Technology   | Version | Purpose                                         |
| ------------ | ------- | ----------------------------------------------- |
| React        | 19      | UI framework                                    |
| TypeScript   | 5.9     | Type safety                                     |
| Tailwind CSS | 4       | Utility-first styling                           |
| shadcn/ui    | Latest  | Component library (Dialog, Button, Input, etc.) |
| Wouter       | Latest  | Client-side routing                             |
| Lucide React | Latest  | Icon library                                    |
| Vite         | 7.x     | Development server and bundling                 |
| tRPC         | 11      | Type-safe API layer                             |
| Drizzle ORM  | Latest  | Database schema and queries                     |
| Express      | 4       | Backend server                                  |

---

## Components

All components are fidelity-aware — they automatically render differently in Lo-Fi, Mid-Fi, and Hi-Fi modes. Each component uses `useFidelityMode()` to detect the current mode and `useDSSync()` to reactively apply DS colour tokens in Hi-Fi mode.

### Layout & Navigation

| Component         | File                | Description                                                                     | Key Props                                            |
| ----------------- | ------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **NavigationBar** | `NavigationBar.tsx` | Global top navigation bar with search, notification/message icons, profile menu | `hideAccountLinks?: boolean`                         |
| **Footer**        | `Footer.tsx`        | Global footer with links, social icons, and copyright                           | —                                                    |
| **PageHeader**    | `PageHeader.tsx`    | Page-level header with title and back arrow navigation                          | `title: string`, `backTo: string`                    |
| **SectionHeader** | `SectionHeader.tsx` | Section heading with optional horizontal divider line                           | `children`, `noLine?: boolean`, `noMargin?: boolean` |

### Buttons & Actions

| Component        | File               | Description                                                        | Key Props                                             |
| ---------------- | ------------------ | ------------------------------------------------------------------ | ----------------------------------------------------- |
| **ActionButton** | `ActionButton.tsx` | Multi-variant button (primary, secondary, outlined, destructive)   | `variant`, `to?: string`, `full?: boolean`, `onClick` |
| **ChipItem**     | `ChipItem.tsx`     | Filter/category chip with active state, supports link navigation   | `active?: boolean`, `to?: string`, `onClick`          |
| **TabItem**      | `TabItem.tsx`      | Underline tab item with active indicator, supports link navigation | `active?: boolean`, `to?: string`                     |

### Form Inputs

| Component                   | File                          | Description                                           | Key Props                                                                                             |
| --------------------------- | ----------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **TextInputField**          | `TextInputField.tsx`          | Single-line text input with label                     | `label`, `placeholder`, `type`, `value`                                                               |
| **TextInputFieldMultiLine** | `TextInputFieldMultiLine.tsx` | Multi-line textarea input with label                  | `label`, `placeholder`, `value`, `rows`                                                               |
| **SelectInputField**        | `SelectInputField.tsx`        | Dropdown select field with label                      | `label`, `placeholder`, `value`                                                                       |
| **SearchBar**               | `SearchBar.tsx`               | Search input with icon, two sizes                     | `placeholder`, `size?: "default" \| "small"`, `value`                                                 |
| **Checkbox**                | `Checkbox.tsx`                | Checkbox with checked state                           | `checked?: boolean`                                                                                   |
| **RadioButton**             | `RadioButton.tsx`             | Radio button with selected state                      | `selected?: boolean`                                                                                  |
| **Switch**                  | `Switch.tsx`                  | Toggle switch with enabled/disabled state             | `enabled: boolean`                                                                                    |
| **AttachmentsInputField**   | `AttachmentsInputField.tsx`   | Dashed-border file drop zone with label and hint text | `label`, `hint`                                                                                       |
| **PhotoInputField**         | `PhotoInputField.tsx`         | Photo upload box with three variants                  | `variant?: "cover" \| "slot" \| "filled"`, `iconSize?: "default" \| "small"`, `src?: string`, `label` |

### Data Display

| Component         | File                | Description                                         | Key Props                                                                                                      |
| ----------------- | ------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **ProductCard**   | `ProductCard.tsx`   | Product listing card with image, price, seller info | `showFavorite?: boolean`, `filled?: boolean`, `to?: string`                                                    |
| **BadgeLabel**    | `BadgeLabel.tsx`    | Status badge with colour variants                   | `variant: "neutral" \| "alert" \| "positive" \| "negative"`, `size?: "default" \| "large"`, `shadow?: boolean` |
| **Avatar**        | `Avatar.tsx`        | User avatar circle with 5 sizes                     | `size?: "xs" \| "sm" \| "md" \| "lg" \| "xl"`, `src?: string`                                                  |
| **RatingBar**     | `RatingBar.tsx`     | Star rating display (0–5 stars)                     | `rating: number`, `size?: "sm" \| "md" \| "lg"`, `interactive?: boolean`                                       |
| **ProgressBar**   | `ProgressBar.tsx`   | Horizontal progress bar                             | `value: number` (0–100)                                                                                        |
| **PaginationBar** | `PaginationBar.tsx` | Page navigation with arrows and numbered pages      | `pages: number[]`, `activePage?: number`, `totalPages?: number`                                                |

### Containers & Layout Helpers

| Component     | File            | Description                                                   | Key Props                                |
| ------------- | --------------- | ------------------------------------------------------------- | ---------------------------------------- |
| **Carousel**  | `Carousel.tsx`  | Horizontal scrollable container with left/right arrow buttons | `children`                               |
| **Accordion** | `Accordion.tsx` | Expandable accordion list with chevron icons                  | `items: { label?, placeholderWidth? }[]` |

### Placeholders & Media

| Component            | File                   | Description                                                                         | Key Props                        |
| -------------------- | ---------------------- | ----------------------------------------------------------------------------------- | -------------------------------- |
| **TextPlaceholder**  | `TextPlaceholder.tsx`  | Placeholder text bar (lo-fi: black bar, mid-fi: grey bar, hi-fi: real text)         | `lines`, `width`, `detailedText` |
| **ImagePlaceholder** | `ImagePlaceholder.tsx` | Image placeholder (lo-fi: crossbox, mid-fi: grey box with label, hi-fi: real image) | `label`, `aspectRatio`, `src`    |

### Utility

| Component         | File                | Description                           | Key Props  |
| ----------------- | ------------------- | ------------------------------------- | ---------- |
| **ErrorBoundary** | `ErrorBoundary.tsx` | React error boundary with fallback UI | `children` |

---

## Project Structure

```
client/
  src/
    components/
      Accordion.tsx                  ← Expandable accordion list
      ActionButton.tsx               ← Button (primary / secondary / outlined / destructive)
      AttachmentsInputField.tsx      ← File attachment drop zone with label
      Avatar.tsx                     ← User avatar (xs / sm / md / lg / xl)
      BadgeLabel.tsx                 ← Status badge (neutral / alert / positive / negative)
      Carousel.tsx                   ← Horizontal scroll container with arrows
      Checkbox.tsx                   ← Checkbox input
      ChipItem.tsx                   ← Filter/category chip (active / default)
      ErrorBoundary.tsx              ← React error boundary
      Footer.tsx                     ← Global footer (links, social, copyright)
      ImagePlaceholder.tsx           ← Image placeholder (lo-fi crossbox / hi-fi real image)
      NavigationBar.tsx              ← Global navigation bar (search, icons, profile menu)
      PageHeader.tsx                 ← Page header with back navigation
      PaginationBar.tsx              ← Page navigation (arrows + numbered pages)
      PhotoInputField.tsx            ← Photo upload box (cover / slot / filled)
      ProductCard.tsx                ← Product card with image, price, seller info
      ProgressBar.tsx                ← Horizontal progress bar (0–100%)
      RadioButton.tsx                ← Radio button input
      RatingBar.tsx                  ← Star rating display (0–5)
      SearchBar.tsx                  ← Search input (default / small)
      SectionHeader.tsx              ← Section heading with optional divider line
      SelectInputField.tsx           ← Dropdown select field
      Switch.tsx                     ← Toggle switch
      TabItem.tsx                    ← Underline tab with active state
      TextInputField.tsx             ← Text input field with label
      TextInputFieldMultiLine.tsx    ← Multi-line textarea input
      TextPlaceholder.tsx            ← Placeholder text (bar / paragraph)
    contexts/
      DesignSystem.ts                ← DS token object & useDSSync hook (reactive colour bridge)
      DesignSystemContext.tsx        ← M3 colour state, presets, import/export, AI generation
      FidelityModeContext.tsx        ← Lo-Fi / Mid-Fi / Hi-Fi toggle + auto-dismiss state
      ThemeContext.tsx               ← Light/dark theme provider
    dialogs/
      CategorySelect.tsx             ← Interactive category dropdown with subcategories
      MakeOfferDialog.tsx            ← Make an offer modal with price input and message
      PickupPointDialog.tsx          ← Pickup point selection with map, search, hours display
      ProfileDropdownMenu.tsx        ← User profile dropdown with navigation links and log out
    hooks/
      useComposition.ts              ← Composition utilities
      useMobile.tsx                  ← Mobile breakpoint detection
      usePersistFn.ts                ← Persistent function reference
    icons/
      DeliveryIcons.tsx              ← Delivery carrier icons (RoyalMail, Evri, InPost)
      PaymentIcons.tsx               ← Payment method icons (Bank, PayPal, Card, Visa, Mastercard, GPay, APay)
      SocialIcons.tsx                ← Social media icons (Google, Facebook, Apple, Instagram, LinkedIn)
    tools/
      AppShell.tsx                   ← Shell wrapper (sidebar + toolbar + canvas)
      ScreensSidebar.tsx             ← Left sidebar with screen navigation
      Toolbar.tsx                    ← Top toolbar with fidelity toggle and tools
      ColorPaletteTool.tsx           ← M3 colour system editor with presets & WCAG checker
      screens.ts                     ← Screen definitions (label + path)
      projectConfig.ts               ← Project name & initials for sidebar logo
    layout/
      SettingsLayout.tsx             ← Settings sidebar navigation layout (screens 30–34)
    lib/
      trpc.ts                        ← tRPC client binding
      utils.ts                       ← Utility helpers
    photos/
      productPhotos.ts               ← 20 product image CDN URLs & getProductImg() helper
      profilePhotos.ts               ← 17 profile photo CDN URL mappings
    screens/                         ← All 51 screen components
    ui/                              ← shadcn/ui components
    App.tsx                          ← Routes & layout
    index.css                        ← Global styles & Tailwind design tokens
    main.tsx                         ← React entry point with tRPC/QueryClient providers
    routes.ts                        ← Route constants (single source of truth for all paths)
drizzle/
  schema.ts                          ← Database schema
server/
  _core/                             ← Framework plumbing (OAuth, LLM, context)
  db.ts                              ← Database query helpers
  routers.ts                         ← tRPC procedures (AI colour generation, etc.)
  storage.ts                         ← S3 file storage helpers
shared/
  const.ts                           ← Shared constants
.github/
  workflows/
    deploy.yml                       ← GitHub Pages deployment workflow
M3_COLOR_ROLES_REFERENCE.md          ← Material Design 3 colour role guidelines
```

---

## Deployment

### GitHub Pages

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages on push to `main`. The base path is configured via the `VITE_BASE_PATH` environment variable (currently set to `/kiddiwear`).

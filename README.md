# Elite Vacations

A premium luxury vacation rental platform built with Next.js, featuring a modern UI/UX for holiday property management in Dubai.

## Features

### Guest-Facing Platform
- **Home Page** - Hero section, featured properties, popular areas
- **Properties Search** - Advanced filtering, grid/list views
- **Property Details** - Image gallery, amenities, location map, booking card
- **Booking Flow** - Multi-step form with guest details, add-ons, payment
- **Virtual Concierge** - Premium services and custom experiences

### Admin Dashboard
- **Dashboard Overview** - Stats, recent bookings, maintenance overview
- **Property Management** - Add, edit, manage property inventory
- **Booking Calendar** - Visual calendar, check-ins/check-outs, blocked dates
- **Pricing Engine** - Seasonal rates, special events, automated pricing rules
- **Maintenance Ticketing** - Track issues, assign staff, priority management

### Owner Portal
- **Earnings Dashboard** - Total earnings, monthly breakdown, charts
- **Expense Tracking** - Categorized expenses with visual breakdown
- **Statements** - Downloadable monthly statements

### Maintenance & Operations
- **Property Inspections** - Mobile-optimized checklists for turnovers
- **Smart Lock Management** - Generate and manage digital access codes
- **Asset Tracking** - Furniture, appliances, warranty status

### Technical Integration
- **Channel Manager** - Sync with Airbnb, Booking.com, VRBO, Expedia
- **XML Feed Export** - Auto-generated feed for channel distribution
- **SEO Manager** - AI-generated meta tags for property pages

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── admin/           # Admin dashboard pages
│   │   ├── bookings/    # Booking calendar
│   │   ├── channels/    # Channel manager
│   │   ├── maintenance/ # Maintenance tickets
│   │   ├── pricing/     # Pricing engine
│   │   ├── properties/  # Property management
│   │   └── seo/         # SEO manager
│   ├── booking/         # Booking flow
│   ├── concierge/       # Concierge services
│   ├── maintenance/     # Maintenance operations
│   │   ├── assets/      # Asset tracking
│   │   ├── inspections/ # Property inspections
│   │   └── locks/       # Smart lock management
│   ├── owner/           # Owner portal
│   └── properties/      # Property listings
├── components/          # Reusable components
└── lib/                 # Utilities and data
```

## Branding

- **Primary Color**: Elite Gold (#D4AF37)
- **Fonts**: Inter (body), Playfair Display (headings)
- **Theme**: Dark luxury aesthetic

## License

MIT

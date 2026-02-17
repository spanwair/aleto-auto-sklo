# ALETO autosklo servis - Project Requirements

## Project Overview

Build a modern, mobile-first Astro landing page for ALETO autosklo servis, an automotive service company in Czech Republic specializing in auto glass replacement (with mobile service), tire service, and vehicle repairs.

## Must-Have Features

### Core Features

- [ ] **Responsive Design** - Mobile, tablet, desktop optimization
- [ ] **Czech Language** - All content in Czech
- [ ] **Contact Form** - Web3Forms integration with two phone numbers
- [ ] **Mobile Service Emphasis** - Highlight free mobile auto glass service
- [ ] **Emergency Contact Button** - Prominent "Call Now" buttons with both numbers
- [ ] **Google Maps Integration** - GPS: 49.5981017N, 16.9170522E
- [ ] **Social Media Integration** - Facebook, Instagram, TikTok links
- [ ] **Insurance Info Section** - Explain insurance handling service
- [ ] **Service Overview** - All 6 services clearly explained
- [ ] **QR Code** - Contact QR code similar to business card
- [ ] **Click-to-Call** - Both phone numbers clickable on mobile

### SEO & Technical

- [ ] **SEO Optimization** - Czech keywords for auto glass, tire service
- [ ] **Fast Loading** - Optimized images and performance
- [ ] **Accessibility** - WCAG 2.1 AA compliance
- [ ] **Meta Descriptions** - Czech language SEO
- [ ] **Schema Markup** - Local business structured data
- [ ] **Sitemap & Robots.txt** - Proper indexing

## Page Structure

### 1. Home Page (Úvodní stránka)

**Sections:**

- **Hero Section**
  - Main headline: "Autoskla i mobilně - přijedeme k vám domů!"
  - Subheadline: Comprehensive auto services in Ochoz u Konice
  - Two prominent CTA buttons: "Zavolat nyní" (both numbers)
  - Background: Modern automotive theme

- **Emergency Banner**
  - "Prasklé sklo? Zavoláme hned!" (Cracked glass? Call now!)
  - Mobile: 731 409 899 | 608 102 471

- **Services Grid** (6 services)
  1. Auto Glass (Autoskla) - FEATURED SERVICE
  2. Tire Service (Pneuservis)
  3. Vehicle Repair (Servis vozidel)
  4. Diagnostics (Diagnostika)
  5. Headlight Restoration (Leštění světel)
  6. MOT Preparation (Příprava na STK)

- **Mobile Service Highlight Section**
  - "NOVINKA! Měníme autoskla mobilně!"
  - Benefits: No travel needed, we come to you, save time
  - Insurance handling included
  - Photo of mobile service (if available)

- **Why Choose Us Section**
  - Professional Redats equipment
  - Insurance paperwork handled
  - All vehicle brands
  - Fast & reliable service
  - Mobile service available
  - Expert technicians

- **Equipment Showcase**
  - Photo of tire service equipment
  - Modern diagnostic tools
  - Professional facilities

- **Location Section**
  - Interactive Google Map
  - GPS coordinates: 49.5981017N, 16.9170522E
  - Address: Ochoz u Konice
  - Service area coverage

- **Contact Form**
  - Name, Phone, Email, Service Type, Message
  - Web3Forms integration
  - Success message with phone numbers

- **Footer**
  - All services listed
  - Contact: Both phones, email
  - Social media icons
  - Business hours
  - QR code for mobile contact

### 2. Services Page (Služby)

Detailed descriptions of all 6 services with sections for each

### 3. Contact Page (Kontakt)

- **Contact Form** (main feature)
- **Direct Contact Info** (both phones, email)
- **Location** (Google Maps embedded)
- **Business Hours**
- **Social Media** links

## Nice-to-Have Features

- [ ] **Online Booking System**
- [ ] **Price Calculator**
- [ ] **Before/After Gallery**
- [ ] **FAQ Section**
- [ ] **Customer Reviews**
- [ ] **Newsletter Signup**

## Technical Requirements

### Framework & Tools

- **Framework:** Astro 4.x with Nebulix template
- **Styling:** Tailwind CSS
- **Forms:** Web3Forms for contact form
- **Analytics:** Google Analytics or Plausible
- **Maps:** Google Maps API
- **Language:** Czech (primary)
- **Hosting:** Netlify or Vercel

### Integrations

#### Web3Forms Contact Form

```
Fields:
- Jméno (Name)
- Telefon (Phone)*
- E-mail (Email)*
- Typ služby (Service Type) - Dropdown
- Naléhavost (Urgency)
- Zpráva (Message)
```

#### Google Maps

- Pin at: 49.5981017N, 16.9170522E
- Directions link

### Performance Targets

- **Lighthouse Score:** 95-100
- **First Contentful Paint:** <1.0s
- **Mobile Performance:** 90+
- **Accessibility:** 100 (WCAG 2.1 AA)

## Design Requirements

### Brand Colors

- **Primary:** Dark blue/black (#1a1a2e)
- **Secondary:** White (#FFFFFF)
- **Accent:** Yellow (#FFD700)

### Typography

- Modern sans-serif (Inter, Plus Jakarta Sans)
- Full Czech character support (á, č, ď, é, ě, í, ň, ó, ř, š, ť, ú, ů, ý, ž)

### Visual Style

- Modern automotive theme
- Clean, professional layout
- Blue/dark color scheme with yellow accents
- Mobile-first design
- Large, tappable call buttons

## Content Strategy

### Key Messages

1. **Mobile Service is FREE**
2. **Insurance Handled**
3. **Professional Equipment**
4. **Safety First**
5. **All Brands Welcome**
6. **Fast & Reliable**

### Call-to-Actions

- **Primary:** "Zavolat nyní" - 731 409 899 / 608 102 471
- **Secondary:** "Objednat se online"

### SEO Keywords (Czech)

- autoskla
- výměna autoskla
- mobilní výměna autoskla
- pneuservis
- servis vozidel
- diagnostika auta
- Ochoz u Konice

## Timeline

- **Phase 1: Planning** (Day 1)
- **Phase 2: Content & Design** (Day 1-2)
- **Phase 3: Development** (Day 2)
- **Phase 4: Testing** (Day 2-3)
- **Phase 5: Launch** (Day 3)

**Target Launch:** 3 days from start

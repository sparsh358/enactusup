# Enactus Shaheed Rajguru Website - Product Requirements Document

## Original Problem Statement
Build an aesthetic college club-based website for Enactus Shaheed Rajguru that is attractive to college teens and makes the club more appealing to students. The website should showcase the club's content, projects, and impact in a modern, engaging way.

## User Requirements & Choices
- **Design Aesthetic**: Clean & Modern
- **Priority Features**: Project pages with beneficiary stories and testimonials
- **Interactive Elements**: Scroll animations, micro-interactions, live impact counter, smooth transitions
- **Content Priority**: All sections equally important
- **Additional**: Social media handles and branding assets to be added

## Architecture & Tech Stack
- **Frontend**: React with Vite, Tailwind CSS, Shadcn UI components
- **Animations**: Framer Motion for smooth animations and micro-interactions
- **Counter**: React CountUp for live impact statistics
- **Routing**: React Router for multi-page navigation
- **Toast Notifications**: Sonner for user feedback

## What's Been Implemented (December 7, 2025)

### ✅ Completed Features

#### 1. Core Pages
- **Home Page** (`/`)
  - Hero section with animated gradient background
  - About ESR section with mission, philosophy, and impact cards
  - Projects showcase grid with hover effects
  - Live impact counter with animated numbers
  - Testimonials carousel
  - Call-to-action section with gradient background

- **About Page** (`/about`)
  - Comprehensive club information
  - Mission, vision, and values sections
  - Interactive timeline showing journey from 2017-2025
  - Global Enactus network statistics
  - Animated stat cards

- **Projects Page** (`/projects`)
  - Grid layout of all 6 projects
  - Project cards with images, descriptions, and impact metrics
  - SDG alignment badges
  - Hover animations and transitions

- **Project Detail Pages** (`/projects/:projectId`)
  - Individual pages for each project (Pehchaan, Sehej, Kashida, Ishnakari, Sugavya, Green Haven)
  - Hero image with gradient overlay
  - Detailed project information
  - Sub-projects listing
  - Product catalogs where applicable
  - SDG alignment visualization
  - Related testimonials
  - Sticky sidebar with impact stats
  - Support CTA button

- **Impact Page** (`/impact`)
  - Comprehensive impact dashboard with live counters
  - Interactive timeline of milestones
  - Impact highlights with icons
  - All beneficiary testimonials
  - Animated scroll effects

- **Get Involved Page** (`/get-involved`)
  - Three main ways to contribute: Volunteer, Donate, Partner
  - Benefits listed for each option
  - Impact statement section
  - CTAs for contact

- **Contact Page** (`/contact`)
  - Contact form with validation
  - Contact information cards (address, email, phone)
  - Map placeholder
  - Toast notifications on form submission

#### 2. Components
- **Navbar**: Sticky navigation with scroll effect, mobile responsive
- **Footer**: Comprehensive footer with links, social media, contact info
- **ImpactCounter**: Animated counter component with react-countup
- **ProjectCard**: Reusable project card with hover effects
- **TestimonialCard**: Testimonial display with profile images

#### 3. Design Features
- Clean, modern design with professional aesthetic
- Gradient accents (indigo-purple-pink palette)
- Smooth scroll animations using Framer Motion
- Micro-interactions on hover states
- Live impact counter with animated numbers
- Responsive design for all screen sizes
- Custom blob animations in hero section
- Scroll-triggered animations throughout
- Glass-morphism effects on floating cards

#### 4. Mock Data
- Complete project data for 6 initiatives
- 6 beneficiary testimonials
- Impact statistics and metrics
- Timeline data from 2017-2025
- Social links placeholders
- SDG information

#### 5. User Experience
- Fast page transitions
- Smooth scrolling
- Interactive elements with feedback
- Toast notifications
- Mobile-responsive navigation
- Accessible color contrasts
- Intuitive information hierarchy

## Mock Data Implementation
All data is currently stored in `/app/frontend/src/data/mockData.js`:
- Project details and statistics
- Testimonials with beneficiary stories
- Impact metrics
- Timeline milestones
- Social media links (placeholders)
- SDG information

## Next Action Items

### P0 - Critical
1. **Update Social Media & Contact Information**
   - Replace placeholder social media links with actual handles
   - Update email and phone number with real contact details
   - Add actual college address details

2. **Add Real Images/Branding**
   - Replace Unsplash placeholder images with actual project photos
   - Add club logo to replace current gradient logo
   - Add team photos if available

### P1 - High Priority
1. **Backend Development** (Future Phase)
   - Set up MongoDB models for projects, testimonials, contact forms
   - Create API endpoints for data management
   - Implement contact form submission handling
   - Add admin panel for content management

2. **Content Enhancement**
   - Add more detailed project descriptions
   - Include more beneficiary stories
   - Add team member profiles
   - Include event gallery

3. **SEO Optimization**
   - Add meta tags for all pages
   - Implement Open Graph tags
   - Add structured data for better search visibility
   - Create sitemap

### P2 - Nice to Have
1. **E-commerce Integration** (if selling products)
   - Shopping cart for Sehej products (jams, cookies)
   - Kashida and Ishnakari fashion items
   - Sugavya eco-products
   - Payment gateway integration

2. **Advanced Features**
   - Blog section for updates and stories
   - Event calendar
   - Photo/video gallery
   - Newsletter subscription
   - Volunteer application portal
   - Partnership inquiry system

3. **Analytics & Tracking**
   - Google Analytics integration
   - Track user engagement
   - Monitor conversion rates
   - A/B testing for CTAs

## Technical Notes
- All animations use Framer Motion for consistency
- Shadcn UI components ensure design system coherence
- Tailwind CSS for responsive utilities
- React Router for client-side routing
- Mock data allows for easy frontend testing before backend integration

## Known Limitations
- All data is currently mocked
- Contact form doesn't save submissions (shows toast only)
- Social media links are placeholders
- Map is not interactive (placeholder only)
- No authentication/admin system yet

## Future Prospects Alignment
The website structure supports all future initiatives mentioned in the PDF:
- B2B expansion sections can be added to project pages
- New beneficiary stories can be easily integrated
- New projects (medicinal mushrooms, packaging innovations) have template structure ready
- Skill development center can be added as new project page

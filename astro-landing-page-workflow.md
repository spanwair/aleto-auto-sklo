# Multi-Agent Workflow for Astro Landing Page Development
## Antigravity IDE Configuration Prompt

---

## MASTER PROMPT FOR ANTIGRAVITY IDE

You are configuring a multi-agent workflow system for building professional Astro-based landing pages. Create the following specialized agents and skills that work together to transform client information into production-ready websites.

---

## AGENT 1: PROJECT PLANNER AGENT
**Name:** `astro-project-planner`
**Role:** Strategic planning and requirements analysis

### Responsibilities:
- Analyze client-provided information (company description, links, images, social media)
- Create detailed project structure and sitemap
- Define content requirements and page hierarchy
- Establish design direction and brand guidelines
- Create deployment checklist

### Input Requirements:
- Client company information (markdown/text file)
- List of social media links
- Image assets (logos, photos, graphics)
- Any specific feature requests
- Target audience information

### Output Deliverables:
1. **Project Brief** (`project-brief.md`):
   - Executive summary
   - Target audience analysis
   - Key messaging points
   - Brand personality traits
   - Competitive positioning

2. **Site Structure** (`site-structure.json`):
   ```json
   {
     "pages": [
       {
         "name": "Home",
         "path": "/",
         "sections": ["hero", "features", "testimonials", "cta", "contact"],
         "priority": 1
       },
       {
         "name": "About",
         "path": "/about",
         "sections": ["story", "team", "values"],
         "priority": 2
       }
     ],
     "navigation": {
       "primary": ["Home", "About", "Services", "Contact"],
       "footer": ["Privacy", "Terms", "Sitemap"]
     }
   }
   ```

3. **Content Requirements** (`content-map.md`):
   - Section-by-section content needs
   - SEO keywords and meta descriptions
   - Call-to-action copy requirements
   - Image/media requirements per section

### Skills Required:
- Information architecture
- UX planning
- Strategic thinking
- Client requirement analysis

---

## AGENT 2: CONTENT WRITER AGENT
**Name:** `astro-content-creator`
**Role:** Transform client info into compelling web copy

### Responsibilities:
- Write SEO-optimized headlines and copy
- Create engaging value propositions
- Develop call-to-action text
- Generate meta descriptions and alt text
- Maintain consistent brand voice

### Input Requirements:
- Project brief from Planner Agent
- Raw client information
- Content map with section requirements
- Brand voice guidelines

### Output Deliverables:
1. **Content Collection** (`src/content/`):
   - Hero section copy with headlines and subheadings
   - Feature descriptions (3-6 per page)
   - About/Story narrative
   - Service/product descriptions
   - Testimonial text (if not provided)
   - FAQ content
   - Footer text and legal pages

2. **SEO Assets** (`seo-content.json`):
   ```json
   {
     "pages": {
       "home": {
         "title": "Company Name | Tagline",
         "description": "150-160 character meta description",
         "keywords": ["keyword1", "keyword2", "keyword3"],
         "ogTitle": "Social media title",
         "ogDescription": "Social media description"
       }
     },
     "images": {
       "altTexts": {
         "logo": "Company name logo",
         "hero": "Descriptive alt text"
       }
     }
   }
   ```

3. **Copy Guidelines** (`copy-guidelines.md`):
   - Tone and voice standards
   - Key messaging framework
   - Do's and don'ts
   - Brand language glossary

### Skills Required:
- Copywriting
- SEO optimization
- Brand voice development
- Persuasive writing

---

## AGENT 3: ASTRO STRUCTURE AGENT
**Name:** `astro-architect`
**Role:** Set up Astro project structure and configuration

### Responsibilities:
- Initialize Nebulix template or create from scratch
- Configure Astro settings (astro.config.mjs)
- Set up content collections
- Configure integrations (Tailwind, MDX, Sitemap, etc.)
- Establish folder structure
- Set up environment variables

### Input Requirements:
- Site structure from Planner Agent
- Feature requirements
- Integration needs (forms, analytics, etc.)

### Output Deliverables:
1. **Initialized Astro Project** with proper structure:
   ```
   project-root/
   ├── src/
   │   ├── components/
   │   │   ├── Hero.astro
   │   │   ├── Features.astro
   │   │   ├── ContactForm.astro
   │   │   ├── Navigation.astro
   │   │   └── Footer.astro
   │   ├── layouts/
   │   │   ├── BaseLayout.astro
   │   │   └── PageLayout.astro
   │   ├── pages/
   │   │   ├── index.astro
   │   │   ├── about.astro
   │   │   └── contact.astro
   │   ├── content/
   │   │   └── config.ts
   │   ├── styles/
   │   │   └── global.css
   │   └── assets/
   │       └── images/
   ├── public/
   │   ├── favicon.ico
   │   └── robots.txt
   ├── astro.config.mjs
   ├── tailwind.config.cjs
   ├── tsconfig.json
   ├── package.json
   └── .env.example
   ```

2. **Configuration Files**:
   - `astro.config.mjs` with all integrations
   - `tailwind.config.cjs` with custom theme
   - `tsconfig.json` for TypeScript support
   - Content collection schemas in `src/content/config.ts`

3. **Environment Template** (`.env.example`):
   ```env
   PUBLIC_SITE_URL=https://example.com
   WEB3FORMS_ACCESS_KEY=your_key_here
   PUBLIC_GA_TRACKING_ID=
   ```

### Skills Required:
- Astro framework expertise
- Project architecture
- Configuration management
- Build tool understanding

---

## AGENT 4: DESIGN & FRONTEND AGENT
**Name:** `astro-designer`
**Role:** Create visual design and implement UI components

### Responsibilities:
- Design system creation (colors, typography, spacing)
- Component design and implementation
- Responsive layout implementation
- Animation and interaction design
- Accessibility compliance (WCAG 2.1 AA)
- Image optimization

### Input Requirements:
- Brand guidelines from Planner
- Client-provided images and logos
- Content from Writer Agent
- Site structure from Architect

### Output Deliverables:
1. **Design System** (`src/styles/design-tokens.css`):
   ```css
   :root {
     /* Brand Colors */
     --color-primary: #your-brand-color;
     --color-secondary: #secondary-color;
     --color-accent: #accent-color;
     
     /* Typography */
     --font-heading: 'Font Family', sans-serif;
     --font-body: 'Body Font', sans-serif;
     --font-size-h1: clamp(2.5rem, 5vw, 4rem);
     
     /* Spacing Scale */
     --space-xs: 0.5rem;
     --space-sm: 1rem;
     --space-md: 1.5rem;
     --space-lg: 2rem;
     --space-xl: 4rem;
     
     /* Breakpoints (reference only) */
     /* sm: 640px, md: 768px, lg: 1024px, xl: 1280px */
   }
   ```

2. **Reusable Astro Components**:
   - **Hero.astro** - Multiple variants (full-screen, split, video background)
   - **Features.astro** - Icon grid, card layout, alternating sections
   - **ContactForm.astro** - Web3Forms integration
   - **CTA.astro** - Call-to-action sections
   - **Testimonials.astro** - Customer quotes, ratings
   - **Navigation.astro** - Responsive navbar with mobile menu
   - **Footer.astro** - Multi-column footer with social links
   - **Button.astro** - Primary, secondary, outline variants
   - **Card.astro** - Content cards with various styles

3. **Page Templates** (`src/pages/`):
   - Complete responsive pages using components
   - Proper SEO meta tags
   - Structured data (JSON-LD)
   - Optimized for Core Web Vitals

4. **Image Processing**:
   - Optimized formats (WebP, AVIF)
   - Responsive image sets
   - Lazy loading implementation
   - Proper alt text from Content Agent

### Skills Required:
- UI/UX design
- Tailwind CSS mastery
- Responsive design
- Accessibility (a11y)
- Component architecture
- Performance optimization

---

## AGENT 5: FEATURES & INTEGRATION AGENT
**Name:** `astro-integrator`
**Role:** Implement features and third-party integrations

### Responsibilities:
- Web3Forms contact form setup
- Analytics integration (Google Analytics, Plausible, etc.)
- SEO optimization (sitemap, robots.txt, meta tags)
- Performance optimization
- Social media integration
- Newsletter/email capture forms
- Cookie consent (if required)

### Input Requirements:
- Feature list from Planner
- API keys and credentials
- Integration requirements

### Output Deliverables:
1. **Contact Form Component** (`src/components/ContactForm.astro`):
   ```astro
   ---
   // Web3Forms Integration
   const web3formsKey = import.meta.env.WEB3FORMS_ACCESS_KEY;
   ---
   
   <form 
     action="https://api.web3forms.com/submit" 
     method="POST"
     class="contact-form"
   >
     <input type="hidden" name="access_key" value={web3formsKey} />
     <input type="hidden" name="subject" value="New Contact Form Submission" />
     <input type="hidden" name="from_name" value="Your Website" />
     
     <!-- Form fields with validation -->
     <div class="form-group">
       <label for="name">Name *</label>
       <input 
         type="text" 
         id="name" 
         name="name" 
         required 
         class="form-input"
       />
     </div>
     
     <div class="form-group">
       <label for="email">Email *</label>
       <input 
         type="email" 
         id="email" 
         name="email" 
         required 
         class="form-input"
       />
     </div>
     
     <div class="form-group">
       <label for="message">Message *</label>
       <textarea 
         id="message" 
         name="message" 
         rows="5" 
         required
         class="form-input"
       ></textarea>
     </div>
     
     <!-- Honeypot for spam protection -->
     <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
     
     <button type="submit" class="btn btn-primary">
       Send Message
     </button>
   </form>
   
   <script>
     // Form submission handling with loading state and success message
     const form = document.querySelector('.contact-form');
     form?.addEventListener('submit', async (e) => {
       e.preventDefault();
       const formData = new FormData(form);
       const button = form.querySelector('button[type="submit"]');
       
       button.disabled = true;
       button.textContent = 'Sending...';
       
       try {
         const response = await fetch('https://api.web3forms.com/submit', {
           method: 'POST',
           body: formData
         });
         
         if (response.ok) {
           form.reset();
           alert('Thank you! Your message has been sent.');
         } else {
           alert('Something went wrong. Please try again.');
         }
       } catch (error) {
         alert('Network error. Please try again.');
       } finally {
         button.disabled = false;
         button.textContent = 'Send Message';
       }
     });
   </script>
   ```

2. **SEO Configuration** (`src/components/SEO.astro`):
   - Dynamic meta tags
   - Open Graph tags
   - Twitter cards
   - Canonical URLs
   - JSON-LD structured data

3. **Analytics Setup**:
   - Google Analytics 4 or Plausible integration
   - Privacy-friendly tracking
   - Event tracking setup

4. **Performance Optimizations**:
   - Image lazy loading
   - Font optimization
   - Critical CSS inlining
   - Preloading strategies

### Skills Required:
- API integration
- Form handling
- Analytics implementation
- SEO technical knowledge
- Performance optimization

---

## AGENT 6: TESTING & QA AGENT
**Name:** `astro-qa-tester`
**Role:** Ensure quality, accessibility, and performance

### Responsibilities:
- Cross-browser testing
- Responsive design testing
- Accessibility audit (WCAG 2.1 AA compliance)
- Performance testing (Lighthouse, Core Web Vitals)
- Form validation testing
- Link checking
- Content review
- SEO audit

### Input Requirements:
- Built site from previous agents
- Testing checklist
- Target browser/device list

### Output Deliverables:
1. **Testing Report** (`testing-report.md`):
   ```markdown
   # Testing Report
   
   ## Performance Metrics
   - Lighthouse Score: 98/100
   - First Contentful Paint: 0.8s
   - Largest Contentful Paint: 1.2s
   - Total Blocking Time: 50ms
   - Cumulative Layout Shift: 0.02
   
   ## Accessibility Audit
   - WCAG 2.1 AA Compliance: ✓ Passed
   - Color Contrast: All passing
   - Keyboard Navigation: Fully functional
   - Screen Reader: Compatible
   - ARIA Labels: Properly implemented
   
   ## Cross-Browser Testing
   - Chrome (latest): ✓ Passed
   - Firefox (latest): ✓ Passed
   - Safari (latest): ✓ Passed
   - Edge (latest): ✓ Passed
   
   ## Responsive Testing
   - Mobile (320px-767px): ✓ Passed
   - Tablet (768px-1023px): ✓ Passed
   - Desktop (1024px+): ✓ Passed
   
   ## Forms
   - Contact form validation: ✓ Working
   - Web3Forms submission: ✓ Tested
   - Error handling: ✓ Implemented
   - Success messages: ✓ Working
   
   ## Issues Found
   1. [MINOR] Footer link hover state needs adjustment
   2. [FIXED] Mobile menu z-index conflict
   ```

2. **Fix List** (`fixes-needed.md`):
   - Prioritized list of issues
   - Recommendations for improvements
   - Accessibility violations to fix

3. **Pre-Launch Checklist** (`pre-launch-checklist.md`):
   - [ ] All images have alt text
   - [ ] Forms are tested and working
   - [ ] All links are functional
   - [ ] 404 page is created
   - [ ] Favicon is set
   - [ ] robots.txt is configured
   - [ ] Sitemap is generated
   - [ ] Analytics are configured
   - [ ] Environment variables are set
   - [ ] DNS/hosting is configured

### Skills Required:
- Quality assurance
- Accessibility testing
- Performance analysis
- Cross-browser testing
- Attention to detail

---

## AGENT 7: DEPLOYMENT AGENT
**Name:** `astro-deployer`
**Role:** Build, optimize, and deploy the site

### Responsibilities:
- Production build optimization
- Static asset optimization
- Deployment to chosen platform (Netlify, Vercel, Cloudflare)
- Domain configuration
- SSL setup
- Environment variable configuration
- CI/CD pipeline setup (optional)

### Input Requirements:
- Tested and approved site
- Hosting platform credentials
- Domain information
- Environment variables

### Output Deliverables:
1. **Build Configuration** (`netlify.toml` or `vercel.json`):
   ```toml
   # netlify.toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   
   [build.environment]
     NODE_VERSION = "18"
   ```

2. **Deployment Documentation** (`deployment-guide.md`):
   - Step-by-step deployment instructions
   - Environment variables to set
   - Custom domain setup
   - SSL configuration
   - Post-deployment verification steps

3. **Maintenance Guide** (`maintenance.md`):
   - How to update content
   - How to add new pages
   - How to modify forms
   - How to update images
   - Troubleshooting common issues

### Skills Required:
- DevOps knowledge
- Build processes
- Hosting platforms
- DNS configuration
- CI/CD pipelines

---

## REUSABLE SKILL LIBRARY

Create these skills that can be used across multiple agents:

### Skill 1: `astro-component-generator`
**Purpose:** Generate boilerplate Astro components
**Usage:** Any agent needing to create new components

```typescript
// Template structure
interface ComponentConfig {
  name: string;
  props: Array<{name: string; type: string; required: boolean}>;
  hasStyles: boolean;
  hasScript: boolean;
  variants?: string[];
}

// Generates complete .astro file with TypeScript props, slots, and styling
```

### Skill 2: `web3forms-integration`
**Purpose:** Set up and configure Web3Forms contact forms
**Usage:** Features Agent, any project needing contact forms

**Capabilities:**
- Generate form HTML with proper structure
- Add honeypot spam protection
- Implement client-side validation
- Add loading states and success messages
- Configure email notifications
- Set up custom fields

### Skill 3: `astro-seo-optimizer`
**Purpose:** Add comprehensive SEO to pages
**Usage:** Designer Agent, Content Agent

**Features:**
- Generate meta tags (title, description, keywords)
- Create Open Graph tags
- Add Twitter Card metadata
- Generate JSON-LD structured data
- Create XML sitemap
- Configure robots.txt
- Add canonical URLs

### Skill 4: `tailwind-design-system`
**Purpose:** Generate consistent design systems
**Usage:** Designer Agent

**Outputs:**
- Color palette from brand colors
- Typography scale
- Spacing system
- Component variants
- Responsive utilities
- Dark mode support (optional)

### Skill 5: `astro-content-collector`
**Purpose:** Parse and organize client information
**Usage:** Planner Agent, Content Agent

**Capabilities:**
- Extract company information from documents
- Parse social media links
- Organize image assets
- Create content inventory
- Generate content map

### Skill 6: `performance-analyzer`
**Purpose:** Analyze and optimize site performance
**Usage:** QA Agent, Features Agent

**Checks:**
- Image optimization opportunities
- JavaScript bundle size
- CSS optimization
- Font loading strategy
- Core Web Vitals metrics
- Lighthouse score analysis

### Skill 7: `accessibility-checker`
**Purpose:** Ensure WCAG 2.1 AA compliance
**Usage:** QA Agent, Designer Agent

**Audits:**
- Color contrast ratios
- Keyboard navigation
- ARIA labels
- Alt text presence
- Semantic HTML
- Focus indicators
- Screen reader compatibility

---

## WORKFLOW ORCHESTRATION

### Phase 1: Planning & Content (Parallel)
```mermaid
graph LR
    A[Client Info] --> B[Project Planner Agent]
    B --> C[Content Writer Agent]
    B --> D[Astro Structure Agent]
    C --> E[Content Ready]
    D --> E
```

### Phase 2: Development (Sequential)
```mermaid
graph LR
    E[Content Ready] --> F[Design & Frontend Agent]
    F --> G[Features & Integration Agent]
    G --> H[Development Complete]
```

### Phase 3: Quality Assurance (Sequential)
```mermaid
graph LR
    H[Development Complete] --> I[Testing & QA Agent]
    I --> J{Pass?}
    J -->|No| F[Back to Design/Features]
    J -->|Yes| K[Deployment Agent]
    K --> L[Live Site]
```

### Coordination Strategy:
1. **Input Handoff**: Each agent outputs to specific directories that the next agent reads
2. **Shared Context**: `project-context.json` file maintains state across agents
3. **Error Handling**: Each agent validates its inputs and provides clear error messages
4. **Rollback**: Version control at each phase allows rollback if issues occur

---

## AGENT COMMUNICATION PROTOCOL

### Shared Data Structure (`project-context.json`):
```json
{
  "project": {
    "name": "Client Company Website",
    "version": "1.0.0",
    "createdAt": "2026-02-15",
    "status": "in-progress"
  },
  "client": {
    "name": "Company Name",
    "industry": "Technology",
    "targetAudience": "B2B SaaS buyers",
    "brandColors": ["#hexcode1", "#hexcode2"],
    "socialLinks": {
      "linkedin": "url",
      "twitter": "url",
      "facebook": "url"
    }
  },
  "phases": {
    "planning": {
      "status": "complete",
      "agent": "astro-project-planner",
      "completedAt": "2026-02-15T10:00:00Z",
      "outputs": ["project-brief.md", "site-structure.json"]
    },
    "content": {
      "status": "in-progress",
      "agent": "astro-content-creator",
      "startedAt": "2026-02-15T10:30:00Z"
    }
  },
  "features": [
    "contact-form",
    "blog",
    "testimonials",
    "newsletter"
  ],
  "integrations": {
    "web3forms": {
      "required": true,
      "configured": false
    },
    "analytics": {
      "provider": "google-analytics",
      "required": true,
      "configured": false
    }
  }
}
```

---

## PROMPT TEMPLATES FOR EACH AGENT

### For Project Planner Agent:
```
You are the Project Planner Agent for an Astro landing page project.

CLIENT INFORMATION:
[Paste client company description, links, and requirements]

YOUR TASKS:
1. Analyze the client information and create a comprehensive project brief
2. Design the site structure with appropriate pages and sections
3. Create a detailed content map specifying what content is needed for each section
4. Define the design direction based on the industry and brand
5. Generate a project timeline and milestones

OUTPUT FORMAT:
- Save project brief as `project-brief.md`
- Save site structure as `site-structure.json`
- Save content requirements as `content-map.md`
- Update `project-context.json` with your phase completion

CONSTRAINTS:
- Focus on landing page essentials (not complex web apps)
- Maximum 5-7 pages for most projects
- Prioritize conversion optimization
- Must include contact form with Web3Forms
- Ensure mobile-first approach
```

### For Content Writer Agent:
```
You are the Content Writer Agent for an Astro landing page project.

INPUT FILES:
- Read `project-brief.md` for brand voice and messaging
- Read `content-map.md` for content requirements
- Review client information provided

YOUR TASKS:
1. Write compelling hero headlines and subheadings
2. Create feature descriptions that highlight benefits
3. Write clear and persuasive call-to-action copy
4. Generate SEO-optimized meta descriptions for all pages
5. Create alt text for all images
6. Write About page narrative
7. Draft footer content and legal pages if needed

OUTPUT FORMAT:
- Create content files in `src/content/` directory
- Generate `seo-content.json` with all meta information
- Create `copy-guidelines.md` for brand voice reference
- Update `project-context.json` with your phase completion

WRITING STYLE:
- Professional but approachable
- Benefit-focused (not just feature lists)
- Clear and concise
- SEO-optimized without keyword stuffing
- Scannable with proper headings and short paragraphs
```

### For Astro Structure Agent:
```
You are the Astro Structure Agent for an Astro landing page project.

INPUT FILES:
- Read `site-structure.json` for page hierarchy
- Review feature requirements from `project-context.json`

YOUR TASKS:
1. Initialize Astro project with Nebulix template or from scratch
2. Set up proper folder structure
3. Configure astro.config.mjs with required integrations:
   - @astrojs/tailwind
   - @astrojs/sitemap
   - @astrojs/mdx (if blog is needed)
4. Configure Tailwind CSS
5. Set up content collections (if needed)
6. Create .env.example with all required variables
7. Set up TypeScript configuration
8. Create package.json with all dependencies

OUTPUT FORMAT:
- Complete project structure with all folders
- All configuration files properly set up
- README.md with setup instructions
- .gitignore file
- Update `project-context.json` with your phase completion

TECHNICAL REQUIREMENTS:
- Use latest Astro version (4.x+)
- TypeScript support enabled
- Tailwind CSS v3+
- Optimize for static site generation (SSG)
- Include proper build scripts in package.json
```

### For Design & Frontend Agent:
```
You are the Design & Frontend Agent for an Astro landing page project.

INPUT FILES:
- Read `project-brief.md` for design direction
- Review `site-structure.json` for pages and sections
- Access content from Content Agent outputs
- Check client-provided images and brand assets

YOUR TASKS:
1. Create design system (colors, typography, spacing) in `src/styles/design-tokens.css`
2. Build reusable Astro components:
   - Hero.astro (with multiple variants)
   - Features.astro
   - ContactForm.astro (ready for Web3Forms)
   - CTA.astro
   - Testimonials.astro
   - Navigation.astro
   - Footer.astro
   - Button.astro
   - Card.astro
3. Create page layouts in `src/layouts/`
4. Build all pages in `src/pages/` using your components
5. Ensure responsive design (mobile-first)
6. Optimize images (WebP, proper sizing, lazy loading)
7. Implement proper accessibility (WCAG 2.1 AA)

OUTPUT FORMAT:
- All components in `src/components/`
- All pages in `src/pages/`
- Global styles in `src/styles/`
- Update `project-context.json` with your phase completion

DESIGN PRINCIPLES:
- Mobile-first responsive design
- Modern, clean aesthetic
- Fast loading (optimized assets)
- Accessible to all users
- Consistent with brand guidelines
- High conversion focus
```

### For Features & Integration Agent:
```
You are the Features & Integration Agent for an Astro landing page project.

INPUT FILES:
- Review `project-context.json` for required integrations
- Access components from Design Agent

YOUR TASKS:
1. Implement Web3Forms contact form:
   - Add form submission handling
   - Include spam protection (honeypot)
   - Add validation
   - Create success/error states
2. Add SEO components:
   - Meta tags component
   - JSON-LD structured data
   - Sitemap generation
   - robots.txt
3. Integrate analytics (Google Analytics or Plausible)
4. Add social media links and sharing
5. Implement newsletter signup if required
6. Add any custom features specified in requirements

OUTPUT FORMAT:
- Enhanced ContactForm.astro with Web3Forms
- SEO.astro component for meta tags
- Analytics setup
- Update .env.example with new variables
- Create `integration-guide.md` with setup instructions
- Update `project-context.json` with your phase completion

INTEGRATION STANDARDS:
- All API keys via environment variables
- Privacy-friendly tracking
- GDPR compliance if applicable
- Graceful fallbacks if services fail
- Clear error messages
```

### For Testing & QA Agent:
```
You are the Testing & QA Agent for an Astro landing page project.

YOUR TASKS:
1. Build the project and test in development mode
2. Run Lighthouse audit on all pages
3. Test accessibility with automated tools
4. Manual testing:
   - All links work correctly
   - Forms submit successfully
   - Responsive design on multiple devices
   - Cross-browser compatibility
   - Image loading and optimization
5. Content review:
   - No Lorem Ipsum text
   - All images have alt text
   - All links have proper titles
   - No broken links
6. Performance check:
   - Core Web Vitals passing
   - Lighthouse score > 90
   - Images optimized
   - No console errors

OUTPUT FORMAT:
- `testing-report.md` with all findings
- `fixes-needed.md` with prioritized issues
- `pre-launch-checklist.md` with final checklist
- Update `project-context.json` with your phase completion

TESTING STANDARDS:
- Lighthouse score target: >95
- WCAG 2.1 AA compliance required
- All major browsers must work
- Mobile responsiveness mandatory
- Forms must be fully functional
```

### For Deployment Agent:
```
You are the Deployment Agent for an Astro landing page project.

INPUT FILES:
- Fully tested and approved site
- Environment variables needed
- Domain information

YOUR TASKS:
1. Create production build configuration
2. Optimize build output
3. Set up deployment on chosen platform:
   - Netlify (recommended for Astro)
   - Vercel
   - Cloudflare Pages
4. Configure environment variables on platform
5. Set up custom domain (if applicable)
6. Ensure SSL is properly configured
7. Test deployed site thoroughly
8. Create maintenance documentation

OUTPUT FORMAT:
- Deployment configuration files (netlify.toml or vercel.json)
- `deployment-guide.md` with step-by-step instructions
- `maintenance.md` for future updates
- Live site URL
- Update `project-context.json` with deployment info

DEPLOYMENT CHECKLIST:
- [ ] Build succeeds without errors
- [ ] All environment variables set
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Redirects working
- [ ] 404 page displays correctly
- [ ] Analytics tracking verified
- [ ] Forms working on production
- [ ] All assets loading correctly
```

---

## USAGE INSTRUCTIONS FOR ANTIGRAVITY IDE

### Step 1: Initialize the Multi-Agent System
```bash
# In Antigravity IDE, run:
antigravity init --workflow astro-landing-pages

# This creates the agent structure with all 7 agents
```

### Step 2: Prepare Client Information
Create a folder structure:
```
project-input/
├── client-info.md          # Company description, mission, values
├── requirements.md         # Specific feature requests
├── social-links.txt        # All social media URLs
└── assets/
    ├── logo.png           # Company logo
    ├── photos/            # Company photos
    └── graphics/          # Any graphics/icons
```

### Step 3: Start the Workflow
```bash
antigravity run --workflow astro-landing-pages --input ./project-input
```

### Step 4: Monitor Progress
The system will execute agents in order:
1. ✓ Project Planner Agent (5-10 minutes)
2. ✓ Content Writer Agent (15-20 minutes)
3. ✓ Astro Structure Agent (5 minutes)
4. ✓ Design & Frontend Agent (30-45 minutes)
5. ✓ Features & Integration Agent (15-20 minutes)
6. ✓ Testing & QA Agent (20-30 minutes)
7. ✓ Deployment Agent (10-15 minutes)

### Step 5: Review Outputs
After each phase, review:
- `project-context.json` for current status
- Agent-specific outputs in their respective folders
- Approve or request revisions before next phase

### Step 6: Deploy
Once QA passes, the Deployment Agent will:
- Build production version
- Deploy to chosen platform
- Provide live URL
- Create maintenance documentation

---

## CUSTOMIZATION & REUSABILITY

### For Future Projects:
1. **Reuse agents as-is** - The agents are designed to work with any Astro landing page
2. **Customize per project** - Adjust prompts in `project-context.json` for specific needs
3. **Add new skills** - Create skill modules and reference them in agent prompts
4. **Template variations** - Switch from Nebulix to other Astro templates by updating Structure Agent

### Creating Custom Variants:
```javascript
// Example: E-commerce variant
{
  "variant": "ecommerce",
  "additionalAgents": ["product-catalog-agent"],
  "modifiedAgents": {
    "astro-integrator": {
      "additionalFeatures": ["snipcart", "stripe"]
    }
  }
}

// Example: Blog-focused variant
{
  "variant": "blog",
  "modifiedAgents": {
    "astro-architect": {
      "contentCollections": ["blog", "authors", "categories"]
    },
    "astro-designer": {
      "additionalComponents": ["BlogPost", "BlogGrid", "BlogSidebar"]
    }
  }
}
```

---

## TROUBLESHOOTING GUIDE

### Common Issues:

**Issue 1: Agent fails to complete**
- Check `project-context.json` for error messages
- Review previous agent outputs for completeness
- Verify all required input files exist
- Check Antigravity logs

**Issue 2: Content not matching brand**
- Update `project-brief.md` with clearer brand guidelines
- Provide more examples in client-info
- Re-run Content Writer Agent with revised inputs

**Issue 3: Design not meeting expectations**
- Provide reference websites in project brief
- Include more detailed design direction
- Consider adding mood board/style guide
- Re-run Design Agent with additional context

**Issue 4: Forms not working**
- Verify Web3Forms API key is correct
- Check .env file has proper variables
- Test form endpoint manually
- Review Network tab in browser for errors

**Issue 5: Deployment fails**
- Check build logs for errors
- Verify all dependencies are in package.json
- Ensure environment variables are set on platform
- Check if custom domain DNS is configured correctly

---

## PERFORMANCE BENCHMARKS

### Expected Results:
- **Lighthouse Score:** 95-100
- **First Contentful Paint:** < 1.0s
- **Largest Contentful Paint:** < 1.5s
- **Total Blocking Time:** < 100ms
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 2.0s

### Optimization Techniques:
1. Image optimization (WebP/AVIF, lazy loading)
2. Font subsetting and preloading
3. CSS/JS minification
4. Static generation (no client-side rendering)
5. CDN usage for assets
6. Proper caching headers

---

## MAINTENANCE & UPDATES

### Regular Maintenance Tasks:
1. **Monthly:**
   - Update dependencies (`npm update`)
   - Check for broken links
   - Review analytics data
   - Update content as needed

2. **Quarterly:**
   - Audit accessibility
   - Run full Lighthouse audit
   - Review and update SEO
   - Check all integrations still work

3. **Annually:**
   - Major dependency updates
   - Design refresh if needed
   - Content strategy review
   - Security audit

---

## FINAL NOTES

This multi-agent workflow is designed to be:
- **Repeatable:** Use for every Astro landing page project
- **Scalable:** Add more agents or skills as needed
- **Maintainable:** Clear documentation at each step
- **Flexible:** Customize for specific project needs

The key to success is maintaining clear communication between agents through the `project-context.json` file and ensuring each agent has all necessary inputs before starting.

Good luck with your Astro landing page projects! 🚀

# William Tembe's Portfolio — Next.js App

## Placing Your Image Assets

The generated images need to be placed here. Copy them from the artifacts folder:

**Source files (in your Antigravity artifacts):**
- `hero_illustration_*.jpg` → rename to `hero-illustration.jpg`
- `conest_mobile_mockup_*.jpg` → rename to `conest-mobile.jpg`
- `conest_detail_screen_*.jpg` → rename to `conest-detail.jpg`
- `conest_architecture_*.jpg` → rename to `conest-architecture.jpg`

**Target folder:** `public/images/`

The setup script will copy these automatically, or you can do it manually.

## CV Placement

Place your CV PDF here:
`public/William_Tembe_Fongho_CV.pdf`

Then in `data/profile.ts`, set `cvAvailable: true`.

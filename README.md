# NOIR & OAK INTERIORS — Luxury Interior Design Studio

A production-quality, responsive website for **NOIR & OAK INTERIORS**, built with React, TypeScript, Vite, and modern styling.

---

## 1. Local Development

### Prerequisites
- Node.js (version 18+ or 20+ recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Run Locally
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port specified by Vite).

---

## 2. Production Build

To compile and optimize the website for production:
```bash
npm run build
```
- The production-ready static assets will be generated in the **`dist`** directory.
- This includes optimized HTML, bundled JavaScript, CSS, and compressed media files.

You can preview the production build locally with:
```bash
npm run preview
```

---

## 3. Hostinger Deployment Guide

Hostinger provides high-performance static hosting via hPanel File Manager, Git, or FTP.

### Step-by-Step Upload to Hostinger:

1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Access Hostinger hPanel**:
   - Log in to your Hostinger account and select your hosting plan.
   - Go to **Websites** &rarr; **Manage** next to your domain.
3. **Open File Manager**:
   - Navigate to **Files** &rarr; **File Manager** (or connect via SFTP/FTP using FileZilla).
   - Enter your website's root folder: **`public_html`**.
4. **Upload files**:
   - Open your local **`dist/`** folder.
   - Select **all files and folders inside `dist/`** (`index.html`, `assets/`, etc.).
   - Upload them directly into **`public_html`** (so `public_html/index.html` exists).
   - *(Optional)* If uploading a zip file, upload `dist.zip` and extract its contents into `public_html`.
5. **Configure Domain & SSL**:
   - Under hPanel &rarr; **Security** &rarr; **SSL**, ensure your free Lifetime SSL is active for `https://`.
6. **Verify the Live Website**:
   - Visit your domain (e.g., `https://yourdomain.com`). Your Noir & Oak website is now live!

---

## 4. Connecting the Consultation Form Backend

The consultation form is fully functional on the frontend with field validation, budget & method selections, error handling, and a summary confirmation screen.

To route real inquiry emails to your studio inbox on Hostinger:
1. Open `src/components/ConsultationFormSection.tsx`.
2. Locate the configuration constant:
   ```typescript
   export const CONSULTATION_API_ENDPOINT: string | null = null;
   ```
3. Set it to your desired form handler:
   - **Formspree**: `"https://formspree.io/f/your_formspree_id"`
   - **Basin**: `"https://usebasin.com/f/your_basin_id"`
   - **Custom PHP mailer on Hostinger**: `"/api/send-consultation.php"`
4. Rebuild with `npm run build` and re-upload `dist/` to Hostinger.

---

## 5. Customizing Content & Business Information

- **Brand Details & Statistics**:
  Edit `src/data/content.ts` to adjust:
  - Phone, email, and studio address
  - Statistics (years in business, completed spaces, satisfaction rate)
  - Portfolio projects, categories, specifications, and materials
  - Service descriptions and deliverables
- **Colors & Typography**:
  Configured in `src/index.css` via the `@theme` block:
  - Backgrounds: `#0B0C0F`, `#121419`, `#191B20`
  - Champagne Gold accents: `#D9B66F`, `#F3D59A`, `#80643A`
  - Editorial Typography: `Cormorant Garamond` (Google Fonts)
  - Clean Body Text: `Plus Jakarta Sans`

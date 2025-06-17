# How to Add Your Images to the Portfolio

## Quick Fix for Images Not Appearing

### Step 1: Add Your Graduation Photo
1. Copy your graduation photo to the `public` folder
2. Rename it to something simple like `graduation-photo.jpg`
3. The file path should be: `myPortfolio/public/graduation-photo.jpg`

### Step 2: Update the Image Paths
Once your photo is in the public folder, update these files:

**Header.jsx** - Replace the initials with your photo:
```jsx
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-warm-taupe">
  <img 
    src="/graduation-photo.jpg"
    alt="Osama Taweel"
    className="w-full h-full object-cover"
  />
</div>
```

**About.jsx** - Replace the placeholder with your photo:
```jsx
<div className="w-80 h-80 rounded-3xl overflow-hidden border-4 border-warm-taupe/30 shadow-2xl shadow-charcoal/50">
  <img 
    src="/graduation-photo.jpg" 
    alt="Osama Taweel" 
    className="w-full h-full object-cover"
  />
</div>
```

### Step 3: Add a Resume Icon (Optional)
1. Download a resume/portfolio icon (PNG format)
2. Save it as `resume-icon.png` in the `public` folder
3. Update the header logo:
```jsx
<span className="text-2xl">
  <img src="/resume-icon.png" alt="portfolio" className="w-8 h-8" />
</span>
```

## Current Status
- ✅ Portfolio structure is ready
- ✅ Styling is complete
- ⏳ Images need to be added to `public` folder
- ⏳ Image paths need to be updated in components

## File Structure Should Look Like:
```
myPortfolio/
├── public/
│   ├── graduation-photo.jpg    ← Add your photo here
│   ├── resume-icon.png         ← Optional: Add resume icon
│   └── vite.svg
├── src/
│   └── components/
└── ...
```

Once you add the images, the portfolio will display them perfectly! 
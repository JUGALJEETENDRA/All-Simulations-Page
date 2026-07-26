const fs = require('fs');
const path = require('path');

const SIM_DIR = path.join(__dirname, 'simulations');

// Viewport tag to ensure correct scaling on mobile devices
const MOBILE_VIEWPORT = '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">';

// Bernardo Castilho's DragDropTouch Polyfill to map touch events to HTML5 drag-and-drop
const POLYFILL_SCRIPT = '<script src="https://cdn.jsdelivr.net/npm/drag-drop-touch-polyfill@1.0.0/DragDropTouch.min.js"></script>';

// Mobile-responsive CSS overrides targeting tablet/mobile sizes up to 1024px
const MOBILE_RESPONSIVE_STYLE = `
<style>
/* ========================================================
   UNIVERSAL MOBILE RESPONSIVE OVERRIDES (AUTOMATICALLY INJECTED)
   ======================================================== */
@media (max-width: 1024px) {
  /* Scroll & body structure adjustments to prevent layout lockouts */
  html, body {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    min-height: 100vh !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    position: relative !important;
  }

  /* App shell header & body scaling */
  .app-header {
    height: auto !important;
    padding: 12px 16px !important;
    flex-direction: column !important;
    gap: 10px !important;
  }
  .logo-area {
    width: 100% !important;
    justify-content: center !important;
  }
  .header-center {
    width: 100% !important;
    justify-content: center !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
  }

  /* UI Programming Track layouts */
  .app-body {
    flex-direction: column !important;
    height: auto !important;
    overflow: visible !important;
  }
  .app-sidebar {
    width: 100% !important;
    border-right: none !important;
    border-bottom: 1.5px solid var(--border-grey) !important;
    height: auto !important;
    max-height: 220px !important;
    overflow-y: auto !important;
    padding: 12px 16px !important;
  }
  .app-viewport {
    width: 100% !important;
    padding: 16px 12px !important;
    height: auto !important;
    overflow: visible !important;
  }
  .app-learning-panel {
    width: 100% !important;
    border-left: none !important;
    border-top: 1.5px solid var(--border-grey) !important;
    height: auto !important;
    max-height: none !important;
    overflow: visible !important;
  }
  .learning-panel-content {
    min-width: 100% !important;
    padding: 16px !important;
  }
  
  /* Grids and flex containers stack vertically */
  .detective-container, .repair-layout-grid, .builder-layout, .side-by-side-screens {
    grid-template-columns: 1fr !important;
    display: flex !important;
    flex-direction: column !important;
    height: auto !important;
    gap: 16px !important;
  }
  .builder-toolbox {
    max-height: 180px !important;
    width: 100% !important;
  }
  .builder-sandbox {
    padding: 10px !important;
    width: 100% !important;
  }
  .mock-banking-screen {
    padding: 12px !important;
  }
  .detective-sandbox-wrapper.touch-active .loupe-cursor {
    display: block !important;
  }
  .welcome-card-grid {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }
  .hint-popover {
    width: calc(100% - 32px) !important;
    right: 16px !important;
    left: 16px !important;
    top: 70px !important;
  }
  .inspect-modal-card {
    width: 90% !important;
    max-width: 380px !important;
  }
  .audit-report-container {
    padding: 16px !important;
  }

  /* Digital Business Transformation Track layouts */
  .layout {
    flex-direction: column !important;
    height: auto !important;
    overflow: visible !important;
  }
  .sidebar {
    width: 100% !important;
    height: auto !important;
    max-height: 220px !important;
    border-right: none !important;
    border-bottom: 1.5px solid var(--border-color) !important;
    overflow-y: auto !important;
  }
  .main-area {
    width: 100% !important;
    height: auto !important;
    min-height: 480px !important;
    overflow: visible !important;
  }
  .builder-area {
    flex-direction: column !important;
    width: 100% !important;
    height: auto !important;
    gap: 1rem !important;
  }
  .inventory {
    width: 100% !important;
    max-height: 150px !important;
  }
  .dropzones {
    flex-direction: column !important;
    width: 100% !important;
    height: auto !important;
    gap: 1rem !important;
  }
  .chart-container {
    width: 100% !important;
    height: 320px !important;
    padding: 10px !important;
  }
  .chart-controls {
    width: 100% !important;
    flex-direction: column !important;
    gap: 1rem !important;
    padding: 10px !important;
  }
  .swipe-container {
    max-width: 100% !important;
    width: 320px !important;
    height: 380px !important;
  }
  .legend {
    flex-direction: column !important;
    align-items: center !important;
    gap: 0.5rem !important;
  }

  /* Python Programming Track layouts */
  header.dashboard-header {
    flex-direction: column !important;
    gap: 1rem !important;
    text-align: center !important;
    padding: 16px !important;
  }
  header.dashboard-header h1 {
    font-size: 1.5rem !important;
  }
  .level-navigator {
    margin-top: 16px !important;
    grid-template-columns: 1fr !important;
  }
  .activity-bar {
    flex-wrap: wrap !important;
    gap: 8px !important;
    margin: 16px auto !important;
  }
  .activity-tab {
    padding: 6px 16px !important;
    font-size: 0.75rem !important;
  }
  .workspace {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
    padding: 0 10px 40px !important;
  }
  .activity-canvas {
    padding: 16px !important;
    min-height: 350px !important;
  }
  .code-visualizer {
    padding: 10px !important;
    font-size: 0.75rem !important;
  }
  .terminal {
    padding: 10px !important;
    min-height: 120px !important;
  }
  .conveyor-belt {
    padding: 0 10px !important;
    gap: 10px !important;
  }
  .scanner-gate {
    width: 60px !important;
  }
}
</style>
`;

// Touch interaction helper script to automatically attach touch coordinates to the UI detective magnifier loupe
const TOUCH_INTERACTION_SCRIPT = `
<script>
/* ========================================================
   UNIVERSAL MOBILE TOUCH INTERACTION HELPERS (AUTOMATICALLY INJECTED)
   ======================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const sandbox = document.getElementById('det-sandbox');
  const loupe = document.getElementById('det-loupe');
  if (sandbox && loupe) {
    const updateLoupe = (clientX, clientY) => {
      const rect = sandbox.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      // Offset vertically on touch screens so the user's finger does not block the magnifier view
      const isMobile = window.matchMedia('(max-width: 1024px)').matches;
      const offsetY = isMobile ? -45 : 0;
      
      loupe.style.left = \`\${x}px\`;
      loupe.style.top = \`\${y + offsetY}px\`;
    };
    
    sandbox.addEventListener('touchstart', (e) => {
      sandbox.classList.add('touch-active');
      if (e.touches && e.touches[0]) {
        updateLoupe(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });
    
    sandbox.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        // Prevent scrolling background while dragging magnifier loupe
        e.preventDefault();
        updateLoupe(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: false });
    
    sandbox.addEventListener('touchend', () => {
      sandbox.classList.remove('touch-active');
    });
    
    sandbox.addEventListener('touchcancel', () => {
      sandbox.classList.remove('touch-active');
    });
  }
});
</script>
`;

// Recursively find all simulation files and inject mobile updates
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file === 'index.html') {
      // Skip main subject portals indices, only target individual simulation index.htmls
      // The subject indices are: simulations/ui-programming/index.html, simulations/python-programming/index.html, simulations/digital-business-transformation/index.html
      const relative = path.relative(SIM_DIR, fullPath);
      const isSubjectPortal = relative.split(path.sep).length === 2; // e.g. "ui-programming/index.html"
      
      if (!isSubjectPortal) {
        optimizeFile(fullPath);
      }
    }
  });
}

function optimizeFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Manage Viewport tag
  // Remove any existing viewport tags first to keep it clean and unified
  content = content.replace(/<meta\s+name="viewport"\s+content="[^"]*"\s*\/?>/gi, '');
  
  // Inject mobile viewport at the start of the <head>
  content = content.replace(/<head>/i, `<head>\n  ${MOBILE_VIEWPORT}`);
  
  // 2. Inject DragDropTouch Polyfill
  if (!content.includes('DragDropTouch.min.js')) {
    // Inject polyfill script right before </head>
    content = content.replace(/<\/head>/i, `  ${POLYFILL_SCRIPT}\n</head>`);
  }

  // 3. Inject CSS Mobile Responsive Overrides
  // If it was already injected, replace the old override block with the updated one
  if (content.includes('UNIVERSAL MOBILE RESPONSIVE OVERRIDES')) {
    content = content.replace(/<style>\s*\/\*\s*={10,}\s*UNIVERSAL MOBILE RESPONSIVE OVERRIDES[\s\S]*?<\/style>/i, MOBILE_RESPONSIVE_STYLE);
  } else {
    content = content.replace(/<\/head>/i, `  ${MOBILE_RESPONSIVE_STYLE}\n</head>`);
  }

  // 4. Inject Touch event logic helper
  if (!content.includes('UNIVERSAL MOBILE TOUCH INTERACTION HELPERS')) {
    content = content.replace(/<\/body>/i, `${TOUCH_INTERACTION_SCRIPT}\n</body>`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Optimized: ${path.relative(__dirname, filePath)}`);
}

console.log('Starting optimization of simulations...');
processDirectory(SIM_DIR);
console.log('All simulations optimized successfully!');

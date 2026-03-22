// nav.js — shared sidebar navigation
// Include this in every page with: <script src="nav.js"></script>
// Add a <div id="nav-root"></div> where you want the sidebar to appear.

(function () {
  const links = [
    { label: "Home",     href: "index.html" },
    { label: "Survivor Log", href: "survivor.html" },
    { label: "Survivor Characters", href: "cast.html" },
    // Additions go here
  ];

  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  const navHTML = `
    <style>
      /* ── Shared sidebar styles ── */
      #nav-root {
        font-family: 'DM Sans', sans-serif;
      }
      .ob-sidebar {
        height: 100vh;
        width: 210px;
        background-color: #1a1a1a;
        color: #fff;
        display: flex;
        flex-direction: column;
        padding: 28px 20px;
        position: sticky;
        top: 0;
        box-sizing: border-box;
        flex-shrink: 0;
        border-right: 1px solid #2a2a2a;
      }
      .ob-sidebar-name {
        font-family: 'Libre Baskerville', serif;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: -0.2px;
        margin: 0 0 6px;
        color: #fff;
      }
      .ob-sidebar-sub {
        font-size: 0.72rem;
        color: #666;
        margin: 0 0 32px;
        font-weight: 300;
        letter-spacing: 0.02em;
      }
      .ob-nav-links {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .ob-nav-link {
        color: #888;
        text-decoration: none;
        padding: 8px 10px;
        display: block;
        font-size: 0.85rem;
        border-radius: 4px;
        transition: color 0.15s ease, background 0.15s ease;
        font-weight: 300;
        letter-spacing: 0.01em;
      }
      .ob-nav-link:hover {
        color: #fff;
        background: #2a2a2a;
      }
      .ob-nav-link.active {
        color: #fff;
        background: #2a2a2a;
        font-weight: 400;
      }
      .ob-sidebar-footer {
        margin-top: auto;
        font-size: 0.68rem;
        color: #444;
        font-weight: 300;
      }
    </style>
    <nav class="ob-sidebar">
      <p class="ob-sidebar-name">Oliver Beeby</p>
      <p class="ob-sidebar-sub">Howdy</p>
      <div class="ob-nav-links">
        ${links.map(l => `
          <a href="${l.href}"
             class="ob-nav-link${currentFile === l.href || (currentFile === '' && l.href === 'index.html') ? ' active' : ''}">
            ${l.label}
          </a>
        `).join('')}
      </div>
      <div class="ob-sidebar-footer">oliverbeeby.github.io</div>
    </nav>
  `;

  const root = document.getElementById("nav-root");
  if (root) root.innerHTML = navHTML;
})();

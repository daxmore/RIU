/**
 * --- GLOBAL NAVIGATION SYSTEM ---
 * Shared logic for the site-wide Draggable Adaptive Menu.
 * Automatically handles dropdowns, dragging, and relative paths.
 */

function initGlobalNav(relPath = "./") {
    // 1. Define the Navbar HTML structure
    const navHTML = `
    <div class="global-nav-container" id="adaptiveMenu">
        <div class="global-nav-toggle" id="globalMenuToggle">
            <span class="global-nav-line" id="gLine1"></span>
            <span class="global-nav-line" id="gLine2"></span>
        </div>
        <div class="global-nav-content" id="globalMenuContent">
            <a href="${relPath}index.html" class="global-nav-link" style="opacity: 1;">Home</a>
            
            <div class="global-menu-item">
                <span class="global-nav-link has-dropdown">Interactions</span>
                <div class="dropdown">
                    <a href="${relPath}experiments/interactions/draggable-video-mask.html" class="dropdown-link">Draggable Mask <span class="new-badge">NEW</span></a>
                    <a href="${relPath}experiments/interactions/video-hover-collage.html" class="dropdown-link">Video Collage</a>
                    <a href="${relPath}experiments/interactions/cursor-media-reveal-premium.html" class="dropdown-link">Premium Cursor</a>
                    <a href="${relPath}experiments/interactions/rogue-hover-reveal.html" class="dropdown-link">Rogue Hover</a>
                    <a href="${relPath}experiments/interactions/physics-service-reveal.html" class="dropdown-link">Physics Service</a>
                    <a href="${relPath}experiments/interactions/terminal-scramble-grid.html" class="dropdown-link">Terminal Scramble</a>
                    <a href="${relPath}experiments/interactions/infinite-3d-tunnel.html" class="dropdown-link">3D Tunnel</a>
                </div>
            </div>

            <div class="global-menu-item">
                <span class="global-nav-link has-dropdown">Navigation</span>
                <div class="dropdown">
                    <a href="${relPath}experiments/navigation/draggable-adaptive-menu.html" class="dropdown-link">Draggable Menu</a>
                    <a href="${relPath}experiments/navigation/navigation-system.html" class="dropdown-link">Nav System</a>
                    <a href="${relPath}experiments/navigation/radial-aperture-reveal.html" class="dropdown-link">Aperture Reveal</a>
                    <a href="${relPath}experiments/navigation/push-down-reveal.html" class="dropdown-link">Push-Down</a>
                    <a href="${relPath}experiments/navigation/curved-wipe-menu.html" class="dropdown-link">Curved Wipe</a>
                    <a href="${relPath}experiments/navigation/layered-drawer-nav.html" class="dropdown-link">Layered Drawer <span class="new-badge">NEW</span></a>
                    <a href="${relPath}experiments/navigation/clip-path-reveal-menu.html" class="dropdown-link">Clip-Path Reveal <span class="new-badge">NEW</span></a>
                </div>
            </div>

            <div class="global-menu-item">
                <span class="global-nav-link has-dropdown">Reveals</span>
                <div class="dropdown">
                    <a href="${relPath}experiments/reveals/ascii-image-reveal.html" class="dropdown-link">ASCII Reveal</a>
                    <a href="${relPath}experiments/reveals/cinematic-preloader-reveal.html" class="dropdown-link">Preloader Reveal</a>
                    <a href="${relPath}experiments/reveals/cinematic-interactive-reveal.html" class="dropdown-link">Interactive Preloader <span class="new-badge">NEW</span></a>
                    <a href="${relPath}experiments/reveals/staggered-character-reveal.html" class="dropdown-link">Character Reveal <span class="new-badge">NEW</span></a>
                    <a href="${relPath}experiments/reveals/fluid-mask-reveal.html" class="dropdown-link">Fluid Mask</a>
                    <a href="${relPath}experiments/reveals/snake-transition.html" class="dropdown-link">Snake Transition</a>
                    <a href="${relPath}experiments/reveals/staggered-grid-reveal.html" class="dropdown-link">Grid Reveal</a>
                    <a href="${relPath}experiments/reveals/staggered-folder-reveal.html" class="dropdown-link">Folder Reveal</a>
                    <a href="${relPath}experiments/reveals/center-out-clip-path-image-reveal.html" class="dropdown-link">Clip Path</a>
                    <a href="${relPath}experiments/reveals/cinematic-zoom-reveal.html" class="dropdown-link">Zoom Reveal</a>
                    <a href="${relPath}experiments/reveals/landing-page-reveal.html" class="dropdown-link">Landing Reveal</a>
                    <a href="${relPath}experiments/reveals/diagonal-swoop-preloader.html" class="dropdown-link">Diagonal Swoop</a>
                    <a href="${relPath}experiments/reveals/shutter-nav-reveal.html" class="dropdown-link">Shutter Reveal</a>
                    <a href="${relPath}experiments/reveals/kinetic-terminal-reveal.html" class="dropdown-link">Kinetic Terminal</a>
                    <a href="${relPath}experiments/reveals/overlay-wipe-transition.html" class="dropdown-link">Overlay Wipe</a>
                </div>
            </div>

            <div class="global-menu-item">
                <span class="global-nav-link has-dropdown">Scroll</span>
                <div class="dropdown">
                    <a href="${relPath}experiments/scroll/scroll-3d-card-stack.html" class="dropdown-link">3D Card Stack <span class="new-badge">NEW</span></a>
                    <a href="${relPath}experiments/scroll/sticky-scroll-cards.html" class="dropdown-link">Sticky Cards</a>
                    <a href="${relPath}experiments/scroll/sticky-stacking-cards.html" class="dropdown-link">Stacking Cards</a>
                    <a href="${relPath}experiments/scroll/cinematic-scroll-slider-v3.html" class="dropdown-link">Scroll Slider V3</a>
                    <a href="${relPath}experiments/scroll/pinned-hero.html" class="dropdown-link">Pinned Hero V1</a>
                    <a href="${relPath}experiments/scroll/pinned-hero-v2.html" class="dropdown-link">Pinned Hero V2</a>
                    <a href="${relPath}experiments/scroll/scroll-card-split-flip.html" class="dropdown-link">Split Flip</a>
                    <a href="${relPath}experiments/scroll/wave-scroll.html" class="dropdown-link">Wave Scroll</a>
                    <a href="${relPath}experiments/scroll/parallax-zoom-reveal.html" class="dropdown-link">Parallax Zoom</a>
                    <a href="${relPath}experiments/scroll/scroll-zoom-parallax.html" class="dropdown-link">Cinematic Zoom</a>
                    <a href="${relPath}experiments/scroll/scroll-mask-parallax.html" class="dropdown-link">Mask Reveal</a>
                    <a href="${relPath}experiments/scroll/winding-path-scroll.html" class="dropdown-link">Winding Path</a>
                </div>
            </div>

            <div class="global-menu-item">
                <span class="global-nav-link has-dropdown">Sliders</span>
                <div class="dropdown">
                    <a href="${relPath}experiments/sliders/scroll-3d-stack-slider.html" class="dropdown-link">3D Stack Slider <span class="new-badge">NEW</span></a>
                    <a href="${relPath}experiments/sliders/awwwards-cinematic-slider.html" class="dropdown-link">Cinematic V1</a>
                    <a href="${relPath}experiments/sliders/awwwards-cinematic-slider-v2.html" class="dropdown-link">Cinematic V2</a>
                    <a href="${relPath}experiments/sliders/arc-slider.html" class="dropdown-link">Arc Slider</a>
                    <a href="${relPath}experiments/sliders/circular-text-gallery.html" class="dropdown-link">Circular Gallery</a>
                    <a href="${relPath}experiments/sliders/mood-layouts.html" class="dropdown-link">Mood Layouts</a>
                    <a href="${relPath}experiments/sliders/cinematic-synchronized-slider.html" class="dropdown-link">Cinematic Sync Slider</a>
                </div>
            </div>
        </div>
    </div>
    <a href="${relPath}index.html" class="index-back-link">Back to Index</a>
    `;

    // 2. Inject HTML into the body
    document.body.insertAdjacentHTML('beforeend', navHTML);

    // 3. Initialize GSAP Elements
    const menu = document.getElementById('adaptiveMenu');
    const toggle = document.getElementById('globalMenuToggle');
    const content = document.getElementById('globalMenuContent');
    const l1 = document.getElementById('gLine1');
    const l2 = document.getElementById('gLine2');

    let isOpen = false;
    let isDragging = false;

    // Expand/Collapse Timeline
    const tl = gsap.timeline({ paused: true });
    tl.to(menu, { width: "auto", maxWidth: "90vw", borderRadius: "30px", duration: 0.6, ease: "back.out(1.5)" })
        .to(l1, { y: 3, rotate: 45, duration: 0.3 }, 0)
        .to(l2, { y: -3, rotate: -45, duration: 0.3 }, 0)
        .to(content, { autoAlpha: 1, duration: 0.3 }, 0.2);

    // Toggle Handler
    toggle.addEventListener('click', () => {
        if (isDragging) return;
        if (isOpen) {
            tl.reverse();
            menu.classList.remove('is-active');
        } else {
            tl.play();
            menu.classList.add('is-active');
        }
        isOpen = !isOpen;
    });

    // 4. Dropdown Interactions
    const menuItems = document.querySelectorAll('.global-menu-item');
    const isTouch = window.matchMedia('(hover: none)').matches;

    menuItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown');
        const links = dropdown.querySelectorAll('.dropdown-link');
        const link = item.querySelector('.global-nav-link');

        const show = () => {
            if (!isOpen) return;
            gsap.set(dropdown, { display: 'flex' });
            gsap.to(dropdown, { opacity: 1, y: -10, duration: 0.4, ease: "power3.out" });
            gsap.fromTo(links, { x: -10, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: "power2.out", delay: 0.1 });
        };

        const hide = () => {
            gsap.to(dropdown, { opacity: 0, y: 0, duration: 0.3, ease: "power3.in", onComplete: () => gsap.set(dropdown, { display: 'none' }) });
        };

        if (!isTouch) {
            item.addEventListener('mouseenter', show);
            item.addEventListener('mouseleave', hide);
        } else {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const isVisible = gsap.getProperty(dropdown, "display") === "flex" && gsap.getProperty(dropdown, "opacity") > 0;
                isVisible ? hide() : show();
            });
            document.addEventListener('touchstart', (e) => { if (!item.contains(e.target)) hide(); });
        }
    });

    // 5. Draggable Support
    if (typeof Draggable !== 'undefined') {
        Draggable.create(menu, {
            type: "x,y",
            onDragStart: () => {
                isDragging = true;
                // Optional: visual feedback when dragging
                gsap.to(menu, { scale: 1.05, duration: 0.2 });
            },
            onDragEnd: () => {
                setTimeout(() => { isDragging = false; }, 100);
                gsap.to(menu, { scale: 1, duration: 0.2 });
            }
        });
    }
}

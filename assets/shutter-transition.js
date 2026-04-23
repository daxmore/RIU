/**
 * --- GRID SHUTTER TRANSITION SYSTEM ---
 * Handles global page transitions with cinematic grid animations.
 */

const ShutterTransition = {
    config: {
        row1Blocks: 10,
        row2Blocks: 10,
        duration: 0.8,
        stagger: 0.05,
        ease: "expo.inOut"
    },

    init() {
        this.createDOM();
        this.interceptLinks();
        this.playIn();
    },

    createDOM() {
        if (document.querySelector('.shutter-container')) return;

        const container = document.createElement('div');
        container.className = 'shutter-container';
        
        const row1 = document.createElement('div');
        row1.className = 'shutter-row shutter-row-1';
        for (let i = 0; i < this.config.row1Blocks; i++) {
            const block = document.createElement('div');
            block.className = 'shutter-block';
            row1.appendChild(block);
        }

        const row2 = document.createElement('div');
        row2.className = 'shutter-row shutter-row-2';
        for (let i = 0; i < this.config.row2Blocks; i++) {
            const block = document.createElement('div');
            block.className = 'shutter-block';
            row2.appendChild(block);
        }

        container.appendChild(row1);
        container.appendChild(row2);
        document.body.appendChild(container);
        
        this.container = container;
        this.blocks = container.querySelectorAll('.shutter-block');
    },

    interceptLinks() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            
            // Filters
            if (!link) return;
            if (link.target === '_blank') return;
            if (link.href.includes('#')) return;
            if (link.origin !== window.location.origin) return;
            if (link.hasAttribute('data-no-transition')) return;

            e.preventDefault();
            const targetURL = link.href;
            this.playOut(() => {
                window.location.href = targetURL;
            });
        });
    },

    playOut(callback) {
        this.container.classList.add('is-active');
        gsap.to(this.blocks, {
            scaleY: 1,
            duration: this.config.duration,
            stagger: {
                each: this.config.stagger,
                from: "random"
            },
            ease: this.config.ease,
            onComplete: callback
        });
    },

    playIn() {
        // Initially, the blocks might be at scaleY(1) if coming from another page
        // But the CSS sets them to scaleY(0). We need to force them to 1 then animate to 0.
        // Or if we just landed, they are 0.
        
        // Logical check: If we just loaded, we want them to "open".
        // To open, they must first be "closed" (scaleY: 1).
        gsap.set(this.blocks, { scaleY: 1 });
        
        gsap.to(this.blocks, {
            scaleY: 0,
            duration: this.config.duration,
            stagger: {
                each: this.config.stagger,
                from: "random"
            },
            ease: this.config.ease,
            onComplete: () => {
                this.container.classList.remove('is-active');
            }
        });
    }
};

// Auto-init when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Ensure GSAP is loaded
    if (window.gsap) {
        ShutterTransition.init();
    } else {
        console.warn('GSAP not found. Shutter transition disabled.');
    }
});

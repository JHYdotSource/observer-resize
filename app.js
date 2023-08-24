(() => {
    'use_strict'

    const selectors = {
        'container_el': '#container_el',
        'container_ro': '#container_ro'
    }

    // Event Listener
    const co_el = document.querySelector(selectors.container_el);
    if (co_el) {
        window.addEventListener("resize", (event) => {
            if (event.target.innerWidth > 768) {
                if (co_el.clientWidth >= 576) {
                    co_el.classList.toggle("flex__it", true);
                } else {
                    co_el.classList.toggle("flex__it", false);
                }
            }
            if (co_el.clientWidth < 460) {
                co_el.classList.toggle("small__size", true);
            } else {
                co_el.classList.toggle("small__size", false);
            }
        });
        const resizeEvent = new Event("resize");
        window.dispatchEvent(resizeEvent);
    }

    // Resize Observer
    const co_ro = document.querySelector(selectors.container_ro);
    if (co_ro) {
        const resizeObserverCallback = (entries) => {
            for (const entry of entries) {
                const inlineSize = entry.borderBoxSize[0].inlineSize;
                const blockSize = entry.borderBoxSize[0].blockSize
                const windowSize = window.innerWidth;
                if (window.innerWidth > 768) {
                    if (inlineSize >= 576) {
                        entry.target.classList.toggle("flex__it", true);
                    } else {
                        entry.target.classList.toggle("flex__it", false);
                    }
                }
                if (inlineSize < 460) {
                    entry.target.classList.toggle("small__size", true);
                } else {
                    entry.target.classList.toggle("small__size", false);
                }
            }
        }
        const resizeObserver = new ResizeObserver(resizeObserverCallback);
        resizeObserver.observe(co_ro);
    }

})();
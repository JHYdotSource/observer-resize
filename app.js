(() => {
    'use_strict'

    const selectors = {
        'container_el': '#container_el',
        'container_ro': '#container_ro',
        'container_cq': '#container_cq'
    }

    // Named function to remove later
    const elFunc = (event) => {
        console.log("Resize Event Listener Fired");
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
    }

    // Event Listener
    const co_el = document.querySelector(selectors.container_el);
    if (co_el) {
        window.addEventListener("resize", elFunc);
        const resizeEvent = new Event("resize");
        window.dispatchEvent(resizeEvent);
    }

    // Resize Observer
    const co_ro = document.querySelector(selectors.container_ro);
    if (co_ro) {
        const resizeObserverCallback = (entries) => {
            console.log("Resize Observer Fired");
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

    // Container Queries
    const co_cq = document.querySelector(selectors.container_cq);

    // Remove Containers
    const remove__cq__btn = document.querySelector('#remove__cq');
    if (remove__cq__btn) {
        remove__cq__btn.addEventListener('click', () => {
            if (co_cq) co_cq.remove();
        });
    }

    const remove__ro__btn = document.querySelector('#remove__ro');
    if (remove__ro__btn) {
        remove__ro__btn.addEventListener('click', () => {
            if (co_ro) co_ro.remove();
        });
    }

    const remove__el__btn = document.querySelector('#remove__el');
    if (remove__el__btn) {
        remove__el__btn.addEventListener('click', () => {
            if (co_el) {
                co_el.remove();
                window.removeEventListener('resize', elFunc);
            };
        });
    }

})();
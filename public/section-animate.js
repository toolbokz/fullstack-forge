// Intersection observer to add 'visible' class to sections.
// Uses MutationObserver to also catch sections added by client-side navigation.
// Includes a fallback check for mobile where IntersectionObserver may not fire
// reliably during client-side navigation.
if (typeof window !== 'undefined') {
    (function () {
        var observed = new WeakSet();
        var io = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.05, rootMargin: '50px' }
        );

        // Fallback: manually check if sections are in or above the viewport
        function forceCheckVisibility() {
            var vh = window.innerHeight;
            document.querySelectorAll('section:not(.visible)').forEach(function (s) {
                var rect = s.getBoundingClientRect();
                if (rect.top < vh + 50 && rect.bottom > 0) {
                    s.classList.add('visible');
                    io.unobserve(s);
                }
            });
        }

        function observeSections(root) {
            root.querySelectorAll('section').forEach(function (s) {
                if (!observed.has(s)) {
                    observed.add(s);
                    io.observe(s);
                }
            });
        }

        // Observe sections already in the DOM
        observeSections(document);
        forceCheckVisibility();

        // Watch for sections added later (Next.js client-side navigation)
        new MutationObserver(function (mutations) {
            var hasNew = false;
            for (var i = 0; i < mutations.length; i++) {
                var added = mutations[i].addedNodes;
                for (var j = 0; j < added.length; j++) {
                    var node = added[j];
                    if (node.nodeType !== 1) continue;
                    if (node.tagName === 'SECTION') {
                        if (!observed.has(node)) {
                            observed.add(node);
                            io.observe(node);
                            hasNew = true;
                        }
                    }
                    if (node.querySelectorAll) {
                        var before = hasNew;
                        observeSections(node);
                        hasNew = true;
                    }
                }
            }
            // After new sections are added, give the browser a frame to
            // lay out the content then force-check visibility as a fallback
            if (hasNew) {
                requestAnimationFrame(function () {
                    forceCheckVisibility();
                });
            }
        }).observe(document.body || document.documentElement, {
            childList: true,
            subtree: true,
        });
    })();
}

// Intersection observer to add 'visible' class to sections.
// Uses MutationObserver to also catch sections added by client-side navigation.
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
            { threshold: 0.15 }
        );

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

        // Watch for sections added later (Next.js client-side navigation)
        new MutationObserver(function (mutations) {
            for (var i = 0; i < mutations.length; i++) {
                var added = mutations[i].addedNodes;
                for (var j = 0; j < added.length; j++) {
                    var node = added[j];
                    if (node.nodeType !== 1) continue;
                    if (node.tagName === 'SECTION') {
                        if (!observed.has(node)) {
                            observed.add(node);
                            io.observe(node);
                        }
                    }
                    if (node.querySelectorAll) observeSections(node);
                }
            }
        }).observe(document.body || document.documentElement, {
            childList: true,
            subtree: true,
        });
    })();
}

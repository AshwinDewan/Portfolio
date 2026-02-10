/**
 * HTML Include Loader
 * Loads external HTML files into elements with data-include attribute
 */
(function() {
    'use strict';

    function loadIncludes() {
        const includes = document.querySelectorAll('[data-include]');
        
        includes.forEach(element => {
            const file = element.getAttribute('data-include');
            
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    element.innerHTML = data;
                    
                    // Execute any scripts in the loaded content
                    const scripts = element.querySelectorAll('script');
                    scripts.forEach(script => {
                        const newScript = document.createElement('script');
                        if (script.src) {
                            newScript.src = script.src;
                        } else {
                            newScript.textContent = script.textContent;
                        }
                        document.body.appendChild(newScript);
                        script.remove();
                    });
                })
                .catch(error => {
                    console.error('Error loading include:', file, error);
                });
        });
    }

    // Load includes when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadIncludes);
    } else {
        loadIncludes();
    }
})();

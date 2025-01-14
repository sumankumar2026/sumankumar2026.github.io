const tabLinks = document.querySelectorAll('.tab-link');
const tabPanes = document.querySelectorAll('.tab-pane');

let activePane = document.querySelector('.tab-pane.active');

// Add click event listeners to each tab link
tabLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all links
        tabLinks.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');

        // Get the target tab-pane id
        const tabId = this.getAttribute('data-tab');
        const targetPane = document.getElementById(tabId);

        if (activePane !== targetPane) {
            // Exit animation for current active pane
            activePane.classList.remove('active');
            activePane.classList.add('exit');

            // After animation ends, reset its classes
            setTimeout(() => {
                activePane.classList.remove('exit');
            }, 500);

            // Show the new pane
            targetPane.classList.add('active');
            activePane = targetPane;
        }
    });
});
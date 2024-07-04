document.addEventListener('DOMContentLoaded', () => {
    twemoji.parse(document.body);

    function updateTime() {
        const options = { timeZone: 'Europe/Bucharest', hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const currentTime = new Date().toLocaleTimeString('en-US', options);
        document.getElementById('current-time').textContent = currentTime;
    }
    
    updateTime(); // Initial call to display time immediately
    
    // Update time every second
    setInterval(updateTime, 1000);

    document.getElementById('toggle-mode').addEventListener('click', function() {
        if (document.documentElement.classList.contains('dark_mode')) {
            document.documentElement.classList.remove('dark_mode');
            document.documentElement.classList.add('light_mode');
        } else {
            document.documentElement.classList.remove('light_mode');
            document.documentElement.classList.add('dark_mode');
        }
    });


    document.querySelectorAll('nav.icons a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


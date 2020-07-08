const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Telegram Live chat | admin
// window.replainSettings = { id: '305a47b8-6dd8-4fbf-8fca-87d6448d7864' };
// (fu?nction(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src=u;
// var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
// })('https://widget.replain.cc/dist/client.js');
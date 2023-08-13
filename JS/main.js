const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');

    menuToggle.addEventListener('click', () => {
        const sidebarLeft = parseInt(getComputedStyle(sidebar).left);
        if (sidebarLeft < 0) {
            sidebar.style.left = '0';
        } else {
            sidebar.style.left = '-300px';
        }
    });

    closeSidebarBtn.addEventListener('click', () => {
        sidebar.style.left = '-300px';
    });

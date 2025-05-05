// דואג שהתמונות תמיד יתאימו לגודל המסך
window.addEventListener('resize', adjustGallery);

function adjustGallery() {
    const images = document.querySelectorAll('#gallery img');
    images.forEach(img => {
        if (window.innerWidth < 600) {
            img.style.maxWidth = '90%';
        } else {
            img.style.maxWidth = '300px';
        }
    });
}

// מפעיל שינוי מיידי כשהדף נטען
adjustGallery();

// אנימציה לקופסה בטעינת העמוד
window.addEventListener('load', () => {
    const box = document.querySelector('.box');
    box.classList.add('show');
});






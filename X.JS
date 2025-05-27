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












// קוד שמחליף תמונות שבורות בלוגו שלך
document.addEventListener("DOMContentLoaded", function () {
  const allImages = document.querySelectorAll("img");

  allImages.forEach(function (img) {
    img.addEventListener("error", function () {
      this.src = "https://lh3.googleusercontent.com/pw/AP1GczPCicApIN7dJ6fO9fqUounMMMK2xrofgJetS7eonUFLbbhesNZTrm1ENoPcYM-eDPRe4xFi8uPQeeIK9o4xDIUDUz25ER5kgxKwCHPW2AD7FCj1-HDt2zt8O2wGGSI9yzjU7NuXOvC4SW3MsVQEpQ2YVg=w869-h869-s-no-gm?authuser=0"; // שנה לנתיב של הלוגו שלך
    });
  });

  // קוד שבודק אם עמוד היעד של כפתור לעמוד הבא קיים
  const nextButtons = document.querySelectorAll("a.card");

  nextButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // מונע מעבר מיידי

      const href = btn.getAttribute("href");

      // בדיקה אם הדף קיים בעזרת fetch
      fetch(href, { method: "HEAD" })
        .then((res) => {
          if (res.ok) {
            window.location.href = href; // אם קיים – לעבור
          } else {
            window.location.href = "/404.html"; // אם לא – לעמוד 404
          }
        })
        .catch(() => {
          window.location.href = "/404.html"; // תקלה כללית – גם לעמוד 404
        });
    });
  });
});





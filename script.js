// وظيفة لتحميل المحتوى الديناميكي
function loadPage(page) {
    const contentDiv = document.getElementById('content');
    fetch(page + '.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            contentDiv.innerHTML = '<p>حدث خطأ أثناء تحميل المحتوى. يرجى المحاولة لاحقًا.</p>';
        });
}

// إضافة أحداث النقر على الروابط
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.dynamic-link');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    // تحميل الصفحة الرئيسية عند تحميل الصفحة
    loadPage('index');
});

// التحقق من صحة نموذج الاتصال
function validateContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('يرجى ملء جميع الحقول.');
        return;
    }

    // هنا يمكنك إضافة كود لإرسال النموذج إلى الخادم
    alert('تم إرسال النموذج بنجاح!');
}

// إضافة حدث التحقق من النموذج
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateContactForm);
    }
});
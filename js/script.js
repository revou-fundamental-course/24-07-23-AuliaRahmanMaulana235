function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.querySelector('a[href="#home"]');
    const packageButton = document.querySelector('a[href="#package"]');
    const contactButton = document.querySelector('a[href="#contact"]');

    homeButton.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('home');
    });

    packageButton.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('package');
    });

    contactButton.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('contact');
    });
});
//fungsi untuk validasi form saat submit
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasError = false;

    if (name.trim() === '') {
        alert('Mohon Masukan Nama Anda');
        hasError = true;
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
        alert('Nama Hanya Boleh Mengandung Huruf');
        hasError = true;
    } else if (/\d/.test(name)) {
        alert('Nama Tidak Boleh Mengandung Angka');
        hasError = true;
    }

    if (email.trim() === '') {
        alert('Mohon Masukan Email Anda');
        hasError = true;
    } else if (!emailPattern.test(email)) {
        alert('Masukan Alamat Email Yang Valid');
        hasError = true;
    }

    if (destination === '') {
        alert('Masukan Destinasi Terlebih Dahulu');
        hasError = true;
    }

    if (!hasError) {
        alert('Data Berhasil Terkirim, Akan Kami Proses Secepatnya !');
        return true;
    }

    return false;
}

const callUsButton = document.querySelector('.contact-button');

callUsButton.addEventListener('click', function() {
    alert('Silahkan Hubungi Nomor +6285381029321');
});
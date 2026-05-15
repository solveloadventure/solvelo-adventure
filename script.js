const i18n = {
    fr: { heroTitle: 'Votre Aventure Commence Ici !' },
    ar: { heroTitle: 'مغامرتك تبدأ هنا!' }
};

function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.textContent;
}

class App {
    constructor() {
        this.lang = 'fr';
        this.init();
    }

    init() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.onclick = () => {
                this.lang = btn.dataset.lang;
                document.documentElement.lang = this.lang;
                document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
                this.updateUI();
            };
        });

        document.getElementById('whatsappBtn').onclick = () => {
            const name = sanitize(document.getElementById('fullName').value);
            const bike = document.getElementById('bikeModel').value;
            const days = document.getElementById('duration').value;
            const phone = document.getElementById('phone').value;

            const msg = `🚴‍♂️ Réservation: ${name}\n🚲 Vélo: ${bike}\n📅 Durée: ${days} jours`;
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
        };
    }

    updateUI() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = i18n[this.lang][el.dataset.i18n];
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.lang);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new App());

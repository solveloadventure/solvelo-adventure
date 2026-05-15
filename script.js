const i18n = {
  fr: {
    heroTitle: 'Votre Aventure Commence Ici !',
    heroText: 'Location vélos premium & circuits touristiques.',
    orderTitle: 'Résumé Commande',
    labelName: 'Nom Complet',
    labelBike: 'Modèle Vélo',
    labelDuration: 'Durée (jours)',
    labelPhone: 'WhatsApp',
    whatsappBtn: '📱 Envoyer WhatsApp'
  },
  ar: {
    heroTitle: 'مغامرتك تبدأ هنا!',
    heroText: 'تأجير دراجات فاخرة ورحلات سياحية.',
    orderTitle: 'ملخص الطلب',
    labelName: 'الاسم الكامل',
    labelBike: 'نوع الدراجة',
    labelDuration: 'المدة (أيام)',
    labelPhone: 'واتساب',
    whatsappBtn: '📱 إرسال واتساب'
  }
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

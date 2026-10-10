/* =====================================================================
   shop-i18n.js — terjemahan ID / EN untuk shop.html
   Pasang SATU baris ini tepat sebelum </body> (setelah <script> utama):
       <script src="shop-i18n.js"></script>
   Bahasa disimpan di localStorage 'klikva_lang' (sama dengan login/register).
===================================================================== */
(function () {
  'use strict';

  var STORE = 'klikva_lang';
  var lang = localStorage.getItem(STORE) === 'en' ? 'en' : 'id';

  /* ---------- Kamus: teks persis (Indonesia -> Inggris) ---------- */
  var EXACT = {
    // Navbar & menu
    'Masuk': 'Sign in', 'Belanja': 'Shop', 'Belanja Sekarang': 'Shop Now', 'Keluar': 'Sign out',
    'Produk': 'Products', 'Kenapa Klikva': 'Why Klikva', 'Layanan': 'Services', 'Ulasan': 'Reviews',
    'Cari reptil, aksesori...': 'Search reptiles, accessories...',
    'Cari produk': 'Search products', 'Tutup pencarian': 'Close search', 'Ganti tema': 'Toggle theme',
    'Produk tidak ditemukan...': 'No products found...',

    // Hero
    'Penawaran Spesial': 'Special Offer',
    'Koleksi Eksklusif': 'Exclusive Collection',
    'Temukan reptil dan perlengkapan pilihan, dikurasi khusus untuk kamu.': 'Discover handpicked reptiles and supplies, curated just for you.',
    'Lihat Produk': 'View Products',

    // Section titles
    'Belanja Kategori Teratas': 'Shop Top Categories',
    'Geser untuk melihat semua →': 'Swipe to see all →',
    'Penawaran Terbaik Hari Ini': "Today's Best Deals",
    'Kenapa Belanja di Klikva': 'Why Shop at Klikva',
    'Jelajahi Koleksi': 'Explore Collections',
    'Pilihan Mingguan': 'Weekly Picks',
    'Janji Klikva': 'The Klikva Promise',
    'Semua Produk': 'All Products',
    'Layanan untuk Membantu Belanja': 'Services to Help You Shop',

    // Keunggulan
    'Garansi Kesehatan 30 Hari': '30-Day Health Guarantee',
    'Setiap reptil dicek dokter hewan': 'Every reptile is vet-checked',
    'Genetika Pilihan': 'Selected Genetics',
    'Morph langka dan terkurasi': 'Rare, curated morphs',
    'Pengiriman Aman': 'Safe Shipping',
    'Dikemas ahli, suhu terkontrol': 'Expertly packed, temperature controlled',
    'Paket Pemula': 'Starter Pack',
    'Perlengkapan lengkap untuk memulai': 'Complete supplies to get started',

    // Banner tengah
    'Reptil sehat, dirawat dengan penuh perhatian': 'Healthy reptiles, raised with care',
    'Dari pemula hingga kolektor, kami bantu kamu menemukan pendamping yang tepat, lengkap dengan garansi kesehatan.':
      'From beginners to collectors, we help you find the right companion, backed by a health guarantee.',

    // Kategori & filter
    'Reptil': 'Reptiles', 'Pakaian': 'Clothing', 'Aksesori': 'Accessories', 'Sepatu': 'Sneakers',
    'Elektronik': 'Electronics', 'Kosmetik': 'Cosmetics',
    'Semua': 'All',
    '🐍 Reptil': '🐍 Reptiles', '👕 Pakaian': '👕 Clothing', '💎 Aksesori': '💎 Accessories',
    '👟 Sepatu': '👟 Sneakers', '📱 Elektronik': '📱 Electronics', '💄 Kosmetik': '💄 Cosmetics',
    'Koleksi': 'Collection', 'Lihat pilihan terbaik →': 'See top picks →',

    // Status daftar produk
    'Memuat produk...': 'Loading products...',
    'Tidak ada produk di kategori ini': 'No products in this category',
    'Gagal terhubung ke server': 'Could not connect to the server',
    '🔄 Coba Lagi': '🔄 Try Again',
    '🚫 Habis': '🚫 Sold out',

    // Layanan
    'Pertanyaan Umum': 'FAQ', 'Info belanja aman di Klikva': 'Safe shopping info at Klikva',
    'Proses Pembayaran': 'Payment Process', 'Cara bayar yang mudah dan aman': 'Easy and secure ways to pay',
    'Opsi Pengiriman': 'Shipping Options', 'Dikirim ke seluruh Indonesia': 'Shipped across Indonesia',

    // Footer
    'Reptil premium dengan genetika eksklusif, dirawat dengan penuh perhatian.':
      'Premium reptiles with exclusive genetics, raised with care.',
    'Bantuan': 'Help', 'Pengiriman': 'Shipping', 'Garansi': 'Guarantee', 'Akun': 'Account', 'Keranjang': 'Cart',
    '© 2025 Klikva. Dibuat dengan semangat, dirawat dengan penuh perhatian.':
      '© 2025 Klikva. Made with passion, raised with care.',

    // Modal profil
    'Lengkapi Profil': 'Complete Your Profile',
    'Isi data pengiriman untuk melanjutkan pembelian': 'Fill in your shipping details to continue',
    'Kota': 'City', 'Alamat Lengkap': 'Full Address', 'Kecamatan': 'District', 'Kode Pos': 'Postal Code',
    'Contoh: Jakarta': 'e.g. Jakarta',
    'Jl. Merdeka No. 123, RT 01/RW 02, Kelurahan...': '123 Main St, Neighborhood, Sub-district...',
    'Simpan & Lanjut Belanja →': 'Save & Continue Shopping →',
    'Nanti saja': 'Maybe later',
    'Menyimpan...': 'Saving...',
    'Tutup': 'Close',

    // Toast statis & dinamis
    '💳 Pembayaran segera tersedia': '💳 Payments coming soon',
    '🚚 Pengiriman 2-5 hari kerja': '🚚 Shipping takes 2-5 business days',
    '🚚 2-5 hari kerja': '🚚 2-5 business days',
    '🔄 Garansi kesehatan 30 hari': '🔄 30-day health guarantee',
    '⚠️ Menggunakan data cache (offline mode)': '⚠️ Using cached data (offline mode)',
    '🔒 Silakan daftar/masuk dulu untuk belanja': '🔒 Please sign up / sign in to shop',
    '🔒 Silakan daftar/masuk dulu': '🔒 Please sign up / sign in first',
    '🔍 Memeriksa profil...': '🔍 Checking your profile...',
    '🔒 Sesi login hilang. Silakan login ulang.': '🔒 Session expired. Please sign in again.',
    '✅ Profil tersimpan!': '✅ Profile saved!'
  };

  var FIELD_MAP = {
    'WhatsApp (format salah)': 'WhatsApp (invalid format)',
    'Kota': 'City', 'Alamat': 'Address', 'Kecamatan': 'District', 'Kode Pos': 'Postal Code'
  };

  /* ---------- Pola dengan angka / nama dinamis ---------- */
  var PATTERNS = [
    [/^(\d+) produk sale$/, function (m) { return m[1] + (m[1] === '1' ? ' product' : ' products') + ' on sale'; }],
    [/^(\d+) produk$/,      function (m) { return m[1] + (m[1] === '1' ? ' product' : ' products'); }],
    [/^⚠️ Sisa (\d+)$/,     function (m) { return '⚠️ ' + m[1] + ' left'; }],
    [/^✓ Stok (\d+)$/,      function (m) { return '✓ Stock ' + m[1]; }],
    [/^⚠️ Stok hanya tersisa (\d+)$/, function (m) { return '⚠️ Only ' + m[1] + ' left in stock'; }],
    [/^📦 (.*) \+1 di keranjang$/,    function (m) { return '📦 ' + m[1] + ' +1 in cart'; }],
    [/^🛒 (.*) ditambahkan!$/,        function (m) { return '🛒 ' + m[1] + ' added to cart!'; }],
    [/^❌ Gagal menyimpan: (.*)$/,    function (m) { return '❌ Failed to save: ' + (m[1] === 'Coba lagi' ? 'Try again' : m[1]); }],
    [/^Gagal memuat produk: (.*)$/,   function (m) { return 'Failed to load products: ' + m[1]; }],
    [/^⚠️ Lengkapi: (.*)$/, function (m) {
      return '⚠️ Please complete: ' + m[1].split(', ').map(function (f) { return FIELD_MAP[f] || f; }).join(', ');
    }]
  ];

  /* ---------- Penerjemah string (jaga spasi di awal/akhir) ---------- */
  function tr(s) {
    if (!s) return null;
    var t = s.trim();
    if (!t) return null;
    var lead = s.slice(0, s.indexOf(t));
    var trail = s.slice(lead.length + t.length);
    if (Object.prototype.hasOwnProperty.call(EXACT, t)) return lead + EXACT[t] + trail;
    for (var i = 0; i < PATTERNS.length; i++) {
      var m = t.match(PATTERNS[i][0]);
      if (m) return lead + PATTERNS[i][1](m) + trail;
    }
    return null;
  }

  /* ---------- Teks (node) ---------- */
  var rec = new WeakMap(); // node -> { orig, tr }
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1 };

  function tNode(n) {
    var p = n.parentNode;
    if (!p || SKIP[p.nodeName]) return;
    var r = rec.get(n);
    if (r && n.nodeValue === r.tr) return;
    var out = tr(n.nodeValue);
    if (out !== null && out !== n.nodeValue) {
      rec.set(n, { orig: n.nodeValue, tr: out });
      n.nodeValue = out;
    }
  }

  function textNodes(root) {
    var list = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) list.push(n);
    return list;
  }

  function restoreTexts() {
    textNodes(document.body).forEach(function (n) {
      var r = rec.get(n);
      if (r && n.nodeValue === r.tr) { n.nodeValue = r.orig; rec.delete(n); }
    });
  }

  /* ---------- Atribut (placeholder, aria-label, title) ---------- */
  var ATTRS = ['placeholder', 'aria-label', 'title'];

  function syncAttrs() {
    document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(function (el) {
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        var key = 'data-orig-' + a;
        if (lang === 'en') {
          var cur = el.hasAttribute(key) ? el.getAttribute(key) : el.getAttribute(a);
          var out = tr(cur);
          if (out !== null) {
            if (!el.hasAttribute(key)) el.setAttribute(key, cur);
            el.setAttribute(a, out);
          }
        } else if (el.hasAttribute(key)) {
          el.setAttribute(a, el.getAttribute(key));
          el.removeAttribute(key);
        }
      });
    });
  }

  /* ---------- Ganti bahasa ---------- */
  function setLang(l) {
    lang = l === 'en' ? 'en' : 'id';
    localStorage.setItem(STORE, lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    if (lang === 'en') textNodes(document.body).forEach(tNode); else restoreTexts();
    syncAttrs();
  }

  /* ---------- Terjemahkan konten yang dirender belakangan ---------- */
  new MutationObserver(function (muts) {
    if (lang !== 'en') return;
    muts.forEach(function (m) {
      if (m.type === 'characterData') { tNode(m.target); return; }
      m.addedNodes.forEach(function (nd) {
        if (nd.nodeType === 3) tNode(nd);
        else if (nd.nodeType === 1) textNodes(nd).forEach(tNode);
      });
    });
  }).observe(document.body, { childList: true, subtree: true, characterData: true });

  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  setLang(lang);
})();

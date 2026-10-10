// ============================================================
// LANGUAGE MANAGEMENT SYSTEM - KLIKVA
// ============================================================

// Dictionary of all translations
const translations = {
  id: {
    // ==================== ADMIN PANEL KEYS ====================
    idx_title: "Admin Panel — Klikva",
    idx_admin_badge: "🔒 AKSES ADMIN",
    idx_login_title: "Admin Login",
    idx_login_desc: "Masukkan password untuk akses dashboard",
    idx_password_label: "Password",
    idx_login_btn: "Login →",
    idx_admin_title: "⚡ Klikva Admin Panel",
    idx_refresh_btn: "🔄 Refresh Data",
    idx_logout_btn: "Logout →",
    idx_logout: "Keluar",
    idx_dashboard: "Dashboard",
    idx_stat_products: "Total Produk",
    idx_stat_lowstock: "Stok Menipis (<5)",
    idx_stat_orders: "Total Pesanan",
    idx_stat_members: "Total Member",
    idx_tab_products: "📦 Produk",
    idx_tab_orders: "📋 Pesanan",
    idx_tab_members: "👥 Member",
    idx_tab_reviews: "⭐ Ulasan",
    idx_tab_analytics: "📊 Analytics",
    idx_tab_chat: "💬 Live Chat",
    idx_search_placeholder: "🔍 Cari nama, email, order ID…",
    idx_export_btn: "📎 Export CSV",
    idx_add_product_btn: "➕ Tambah Produk",
    idx_loading: "⏳ Memuat data...",
    idx_loading_orders: "⏳ Memuat data orders...",
    idx_loading_members: "⏳ Memuat data members...",
    idx_loading_reviews: "⏳ Memuat data review...",
    idx_th_image: "Gambar",
    idx_th_name: "Nama",
    idx_th_category: "Kategori",
    idx_th_price: "Harga",
    idx_th_stock: "Stok",
    idx_th_gender: "Gender",
    idx_th_actions: "Aksi",
    idx_edit_btn: "✏️",
    idx_delete_btn: "🗑️",
    idx_no_products: "😢 Produk tidak ditemukan",
    idx_order_id: "Order ID",
    idx_date: "Tanggal",
    idx_customer: "Customer",
    idx_total: "Total",
    idx_payment: "Bayar",
    idx_status: "Status",
    idx_resi: "Resi",
    idx_notification: "Notifikasi",
    idx_save_resi: "💾 Simpan",
    idx_send_email: "📧 Kirim Email",
    idx_no_orders: "😢 Tidak ada order",
    idx_member_no: "#",
    idx_member_name: "Nama",
    idx_member_email: "Email",
    idx_member_wa: "WhatsApp",
    idx_member_city: "Kota",
    idx_member_joined: "Bergabung",
    idx_member_promo: "Promo",
    idx_no_members: "😢 Tidak ada member",
    idx_review_product: "Produk",
    idx_review_customer: "Customer",
    idx_review_rating: "Rating",
    idx_review_text: "Review",
    idx_review_date: "Tanggal",
    idx_review_action: "Aksi",
    idx_delete_review_btn: "🗑️ Hapus",
    idx_no_reviews: "😢 Tidak ada review",
    idx_kpi_revenue: "Pendapatan",
    idx_kpi_orders: "Total Order",
    idx_kpi_avg_order: "Rata-rata Order",
    idx_kpi_conversion: "Konversi Member",
    idx_period_7d: "7H",
    idx_period_30d: "30H",
    idx_period_90d: "3B",
    idx_status_chart_title: "🔄 Status Order",
    idx_top_products_title: "🏆 Produk Terlaris",
    idx_add_product_title: "Tambah Produk Baru",
    idx_edit_product_title: "Edit Produk",
    idx_upload_text: "Klik atau drag & drop gambar produk",
    idx_product_name_placeholder: "Nama produk",
    idx_product_price_placeholder: "Harga jual (Rp)",
    idx_product_oldprice_placeholder: "Harga asli / coret (Rp)",
    idx_product_stock_placeholder: "Jumlah stok",
    idx_save_btn: "Simpan",
    idx_cancel_btn: "Batal",
    idx_cat_clothing: "PAKAIAN",
    idx_cat_accessories: "AKSESORIS",
    idx_cat_electronics: "ELEKTRONIK",
    idx_cat_sneakers: "SEPATU SNEAKERS",
    idx_cat_cosmetics: "KOSMETIK",
    idx_cat_phone: "HP",
    idx_cat_computers: "KOMPUTER",
    idx_gender_men: "PRIA",
    idx_gender_women: "WANITA",
    idx_gender_unisex: "UNISEX",
    idx_chat_empty: "💬 Belum ada percakapan. Customer akan muncul di sini saat mereka memulai chat.",
    idx_chat_active_sessions: "💬 Percakapan Aktif",
    idx_chat_select_session: "👈 Pilih percakapan di sebelah kiri",
    idx_chat_no_messages: "Belum ada pesan. Mulai percakapan!",
    idx_chat_input_placeholder: "Ketik pesan...",
    idx_chat_send_btn: "Kirim",
    
    // ==================== HOMEPAGE KEYS ====================
    idx_home_title: "Klikva — Produk Lokal. Gaya Global.",
    idx_nav_products: "Produk",
    idx_nav_why: "Kenapa Klikva",
    idx_nav_story: "Cerita Kami",
    idx_nav_reviews: "Ulasan",
    idx_nav_login: "Masuk",
    idx_nav_shop: "Belanja",
    idx_hero_eyebrow: "Marketplace Produk Lokal Terbaik",
    idx_hero_title_line1: "Produk Lokal.",
    idx_hero_title_line2: "Gaya Global.",
    idx_hero_desc: "Klikva menghadirkan produk lokal berkualitas tinggi yang dikurasi khusus untuk gaya hidup modern. Dari fashion hingga aksesori — semua dari tangan kreator Indonesia terbaik.",
    idx_hero_btn_shop: "Belanja Sekarang",
    idx_hero_btn_collection: "Lihat Koleksi",
    idx_hero_social_proof: "Dipercaya oleh <strong>5.000+ pelanggan</strong><br>di seluruh Indonesia",
    idx_hero_badge_label: "Rating Toko",
    idx_hero_badge_brands: "100+ Merek Lokal",
    idx_marquee_1: "Fashion Lokal",
    idx_marquee_2: "Aksesori Premium",
    idx_marquee_3: "Desainer Independen",
    idx_marquee_4: "Produk Handmade",
    idx_marquee_5: "Kreasi Indonesia",
    idx_marquee_6: "Sustainable Fashion",
    idx_marquee_7: "Koleksi Eksklusif",
    idx_marquee_8: "Gratis Ongkir",
    idx_products_eyebrow: "Koleksi Terpilih",
    idx_products_title_line1: "Pilihan Terbaik",
    idx_products_title_line2: "Untuk Kamu",
    idx_products_link: "Lihat Semua",
    idx_product_tag_new: "Baru",
    idx_product_tag_best: "Terlaris",
    idx_product_tag_limited: "Edisi Terbatas",
    idx_product_cat_outer: "Outer / Jaket",
    idx_product_cat_dress: "Dress",
    idx_product_cat_bag: "Tas / Aksesori",
    idx_product_cat_tshirt: "Kaos / Atasan",
    idx_product_cat_accessories: "Aksesori",
    idx_product_cat_shoes: "Alas Kaki",
    idx_why_eyebrow: "Kenapa Klikva",
    idx_why_title_line1: "Lebih dari Sekadar",
    idx_why_title_line2: "Belanja Online",
    idx_feature_1_title: "Produk Lokal Terkurasi",
    idx_feature_1_desc: "Setiap produk dipilih dengan teliti dari kreator dan merek lokal terpercaya yang melewati proses seleksi ketat.",
    idx_feature_2_title: "Kualitas Terjamin",
    idx_feature_2_desc: "Kami menjamin keaslian dan kualitas setiap produk. Tidak puas? Kembalikan dalam 7 hari tanpa pertanyaan.",
    idx_feature_3_title: "Pengiriman Cepat",
    idx_feature_3_desc: "Pengiriman ke seluruh Indonesia dalam 1–3 hari kerja. Gratis ongkir untuk pembelian di atas Rp 200.000.",
    idx_feature_4_title: "Berbasis Komunitas",
    idx_feature_4_desc: "Bergabunglah dengan komunitas pecinta produk lokal. Setiap pembelian mendukung langsung kreator Indonesia.",
    idx_story_eyebrow: "Cerita Kami",
    idx_story_title_line1: "Kami Ada untuk",
    idx_story_title_line2: "Para Kreator Lokal",
    idx_story_badge: "Made in Indonesia",
    idx_story_body_1: "Klikva lahir dari keyakinan sederhana: produk lokal Indonesia layak tampil di panggung global. Kami bukan sekadar marketplace — kami adalah jembatan antara kreator berbakat dan konsumen yang menghargai keaslian.",
    idx_story_body_2: "Dari workshop kecil di Bandung hingga studio desain di Jakarta, kami percaya bahwa setiap produk menyimpan cerita. Dan cerita itu layak untuk didengar.",
    idx_story_stat_1: "Didirikan",
    idx_story_stat_2: "Merek Lokal",
    idx_story_stat_3: "Kota di Indonesia",
    idx_testimonial_eyebrow: "Ulasan Pelanggan",
    idx_testimonial_title_line1: "Kata Mereka",
    idx_testimonial_title_line2: "Tentang Klikva",
    idx_testimonial_1_text: "\"Akhirnya ada platform yang beneran ngerti kebutuhan anak muda. Produknya premium tapi harganya masih masuk akal. Udah repeat order 3 kali!\"",
    idx_testimonial_2_text: "\"Suka banget sama kurasi produknya. Setiap beli pasti kena. Packaging-nya juga estetik banget, berasa beli dari brand premium luar negeri.\"",
    idx_testimonial_3_text: "\"Klikva tuh kayak edisi spesial dari marketplace biasa. Produknya niche, pilihan bagus, dan yang paling penting — buatan Indonesia. Bangga!\"",
    idx_testimonial_4_text: "\"Pengirimannya cepet banget, produknya sesuai foto bahkan lebih bagus. Customer service-nya responsif. 10/10 bakal terus belanja di sini.\"",
    idx_testimonial_5_text: "\"Dari pertama kali buka website-nya udah langsung jatuh hati. Desainnya clean, produknya curated, dan vibe-nya beneran beda dari marketplace lain.\"",
    idx_stat_customers: "Pelanggan Aktif",
    idx_stat_brands: "Merek Lokal Terdaftar",
    idx_stat_sold: "Produk Terjual",
    idx_cta_eyebrow: "Mulai Sekarang",
    idx_cta_title_line1: "Temukan Produk Lokal",
    idx_cta_title_line2: "Favoritmu Hari Ini.",
    idx_cta_desc: "Ribuan produk lokal terbaik menunggu. Dukung kreator Indonesia sambil tampil gaya.",
    idx_cta_btn_shop: "Belanja Sekarang",
    idx_cta_btn_contact: "Hubungi Kami",
    idx_footer_desc: "Platform marketplace produk lokal Indonesia yang menghadirkan pilihan premium untuk gaya hidup modern.",
    idx_footer_explore: "Jelajahi",
    idx_footer_all_products: "Semua Produk",
    idx_footer_fashion: "Fashion",
    idx_footer_accessories: "Aksesori",
    idx_footer_new: "Koleksi Baru",
    idx_footer_best: "Terlaris",
    idx_footer_company: "Perusahaan",
    idx_footer_about: "Tentang Kami",
    idx_footer_seller: "Bergabung Sebagai Penjual",
    idx_footer_career: "Karir",
    idx_footer_blog: "Blog",
    idx_footer_press: "Press Kit",
    idx_footer_help: "Bantuan",
    idx_footer_help_center: "Pusat Bantuan",
    idx_footer_return: "Kebijakan Pengembalian",
    idx_footer_track: "Lacak Pesanan",
    idx_footer_contact: "Hubungi Kami",
    idx_footer_copyright: "© 2025 Klikva. Semua hak dilindungi. Dibuat dengan bangga di Indonesia.",
    idx_footer_privacy: "Kebijakan Privasi",
    idx_footer_terms: "Syarat & Ketentuan"
  },
  
  en: {
    // ==================== ADMIN PANEL KEYS ====================
    idx_title: "Admin Panel — Klikva",
    idx_admin_badge: "🔒 ADMIN ACCESS",
    idx_login_title: "Admin Login",
    idx_login_desc: "Enter password to access dashboard",
    idx_password_label: "Password",
    idx_login_btn: "Login →",
    idx_admin_title: "⚡ Klikva Admin Panel",
    idx_refresh_btn: "🔄 Refresh Data",
    idx_logout_btn: "Logout →",
    idx_logout: "Logout",
    idx_dashboard: "Dashboard",
    idx_stat_products: "Total Products",
    idx_stat_lowstock: "Low Stock (<5)",
    idx_stat_orders: "Total Orders",
    idx_stat_members: "Total Members",
    idx_tab_products: "📦 Products",
    idx_tab_orders: "📋 Orders",
    idx_tab_members: "👥 Members",
    idx_tab_reviews: "⭐ Reviews",
    idx_tab_analytics: "📊 Analytics",
    idx_tab_chat: "💬 Live Chat",
    idx_search_placeholder: "🔍 Search name, email, order ID…",
    idx_export_btn: "📎 Export CSV",
    idx_add_product_btn: "➕ Add Product",
    idx_loading: "⏳ Loading data...",
    idx_loading_orders: "⏳ Loading orders data...",
    idx_loading_members: "⏳ Loading members data...",
    idx_loading_reviews: "⏳ Loading reviews data...",
    idx_th_image: "Image",
    idx_th_name: "Name",
    idx_th_category: "Category",
    idx_th_price: "Price",
    idx_th_stock: "Stock",
    idx_th_gender: "Gender",
    idx_th_actions: "Actions",
    idx_edit_btn: "✏️ Edit",
    idx_delete_btn: "🗑️ Delete",
    idx_no_products: "😢 No products found",
    idx_order_id: "Order ID",
    idx_date: "Date",
    idx_customer: "Customer",
    idx_total: "Total",
    idx_payment: "Payment",
    idx_status: "Status",
    idx_resi: "Tracking No.",
    idx_notification: "Notification",
    idx_save_resi: "💾 Save",
    idx_send_email: "📧 Send Email",
    idx_no_orders: "😢 No orders found",
    idx_member_no: "#",
    idx_member_name: "Name",
    idx_member_email: "Email",
    idx_member_wa: "WhatsApp",
    idx_member_city: "City",
    idx_member_joined: "Joined",
    idx_member_promo: "Promo",
    idx_no_members: "😢 No members found",
    idx_review_product: "Product",
    idx_review_customer: "Customer",
    idx_review_rating: "Rating",
    idx_review_text: "Review",
    idx_review_date: "Date",
    idx_review_action: "Action",
    idx_delete_review_btn: "🗑️ Delete",
    idx_no_reviews: "😢 No reviews found",
    idx_kpi_revenue: "Revenue",
    idx_kpi_orders: "Total Orders",
    idx_kpi_avg_order: "Average Order",
    idx_kpi_conversion: "Member Conversion",
    idx_period_7d: "7D",
    idx_period_30d: "30D",
    idx_period_90d: "90D",
    idx_status_chart_title: "🔄 Order Status",
    idx_top_products_title: "🏆 Top Products",
    idx_add_product_title: "Add New Product",
    idx_edit_product_title: "Edit Product",
    idx_upload_text: "Click or drag & drop product images",
    idx_product_name_placeholder: "Product name",
    idx_product_price_placeholder: "Selling price (Rp)",
    idx_product_oldprice_placeholder: "Original price (Rp)",
    idx_product_stock_placeholder: "Stock quantity",
    idx_save_btn: "Save",
    idx_cancel_btn: "Cancel",
    idx_cat_clothing: "CLOTHING",
    idx_cat_accessories: "ACCESSORIES",
    idx_cat_electronics: "ELECTRONICS",
    idx_cat_sneakers: "SNEAKERS",
    idx_cat_cosmetics: "COSMETICS",
    idx_cat_phone: "PHONE",
    idx_cat_computers: "COMPUTERS",
    idx_gender_men: "MEN",
    idx_gender_women: "WOMEN",
    idx_gender_unisex: "UNISEX",
    idx_chat_empty: "💬 No conversations yet. Customers will appear here when they start a chat.",
    idx_chat_active_sessions: "💬 Active Conversations",
    idx_chat_select_session: "👈 Select a conversation on the left",
    idx_chat_no_messages: "No messages yet. Start a conversation!",
    idx_chat_input_placeholder: "Type a message...",
    idx_chat_send_btn: "Send",
    
    // ==================== HOMEPAGE KEYS ====================
    idx_home_title: "Klikva — Local Products. Global Style.",
    idx_nav_products: "Products",
    idx_nav_why: "Why Klikva",
    idx_nav_story: "Our Story",
    idx_nav_reviews: "Reviews",
    idx_nav_login: "Login",
    idx_nav_shop: "Shop",
    idx_hero_eyebrow: "Best Local Product Marketplace",
    idx_hero_title_line1: "Local Products.",
    idx_hero_title_line2: "Global Style.",
    idx_hero_desc: "Klikva brings high-quality local products curated specifically for modern lifestyle. From fashion to accessories — all from Indonesia's best creators.",
    idx_hero_btn_shop: "Shop Now",
    idx_hero_btn_collection: "View Collection",
    idx_hero_social_proof: "Trusted by <strong>5,000+ customers</strong><br>across Indonesia",
    idx_hero_badge_label: "Store Rating",
    idx_hero_badge_brands: "100+ Local Brands",
    idx_marquee_1: "Local Fashion",
    idx_marquee_2: "Premium Accessories",
    idx_marquee_3: "Independent Designers",
    idx_marquee_4: "Handmade Products",
    idx_marquee_5: "Indonesian Creations",
    idx_marquee_6: "Sustainable Fashion",
    idx_marquee_7: "Exclusive Collection",
    idx_marquee_8: "Free Shipping",
    idx_products_eyebrow: "Curated Collection",
    idx_products_title_line1: "Best Picks",
    idx_products_title_line2: "For You",
    idx_products_link: "View All",
    idx_product_tag_new: "New",
    idx_product_tag_best: "Best Seller",
    idx_product_tag_limited: "Limited Edition",
    idx_product_cat_outer: "Outer / Jacket",
    idx_product_cat_dress: "Dress",
    idx_product_cat_bag: "Bag / Accessories",
    idx_product_cat_tshirt: "T-Shirt / Top",
    idx_product_cat_accessories: "Accessories",
    idx_product_cat_shoes: "Footwear",
    idx_why_eyebrow: "Why Klikva",
    idx_why_title_line1: "More Than Just",
    idx_why_title_line2: "Online Shopping",
    idx_feature_1_title: "Curated Local Products",
    idx_feature_1_desc: "Every product is carefully selected from trusted local creators and brands that go through a strict selection process.",
    idx_feature_2_title: "Quality Guaranteed",
    idx_feature_2_desc: "We guarantee the authenticity and quality of every product. Not satisfied? Return within 7 days, no questions asked.",
    idx_feature_3_title: "Fast Shipping",
    idx_feature_3_desc: "Delivery across Indonesia within 1–3 business days. Free shipping for purchases above Rp 200,000.",
    idx_feature_4_title: "Community Based",
    idx_feature_4_desc: "Join the community of local product enthusiasts. Every purchase directly supports Indonesian creators.",
    idx_story_eyebrow: "Our Story",
    idx_story_title_line1: "We Exist for",
    idx_story_title_line2: "Local Creators",
    idx_story_badge: "Made in Indonesia",
    idx_story_body_1: "Klikva was born from a simple belief: Indonesian local products deserve to shine on the global stage. We're not just a marketplace — we're a bridge between talented creators and consumers who value authenticity.",
    idx_story_body_2: "From small workshops in Bandung to design studios in Jakarta, we believe that every product holds a story. And that story deserves to be heard.",
    idx_story_stat_1: "Founded",
    idx_story_stat_2: "Local Brands",
    idx_story_stat_3: "Cities in Indonesia",
    idx_testimonial_eyebrow: "Customer Reviews",
    idx_testimonial_title_line1: "What They Say",
    idx_testimonial_title_line2: "About Klikva",
    idx_testimonial_1_text: "\"Finally, a platform that truly understands young people's needs. The products are premium but still reasonably priced. Already repeated orders 3 times!\"",
    idx_testimonial_2_text: "\"I really love the product curation. Every purchase is spot on. The packaging is also very aesthetic, feels like buying from a premium international brand.\"",
    idx_testimonial_3_text: "\"Klikva is like a special edition of regular marketplaces. Niche products, great selection, and most importantly — Indonesian made. Proud!\"",
    idx_testimonial_4_text: "\"Very fast shipping, products match the photos even better. Customer service is responsive. 10/10 will keep shopping here.\"",
    idx_testimonial_5_text: "\"From the first time I opened the website, I fell in love. Clean design, curated products, and the vibe is truly different from other marketplaces.\"",
    idx_stat_customers: "Active Customers",
    idx_stat_brands: "Registered Local Brands",
    idx_stat_sold: "Products Sold",
    idx_cta_eyebrow: "Start Now",
    idx_cta_title_line1: "Find Your Favorite",
    idx_cta_title_line2: "Local Products Today.",
    idx_cta_desc: "Thousands of best local products are waiting. Support Indonesian creators while looking stylish.",
    idx_cta_btn_shop: "Shop Now",
    idx_cta_btn_contact: "Contact Us",
    idx_footer_desc: "An Indonesian local product marketplace platform that brings premium choices for modern lifestyle.",
    idx_footer_explore: "Explore",
    idx_footer_all_products: "All Products",
    idx_footer_fashion: "Fashion",
    idx_footer_accessories: "Accessories",
    idx_footer_new: "New Collection",
    idx_footer_best: "Best Sellers",
    idx_footer_company: "Company",
    idx_footer_about: "About Us",
    idx_footer_seller: "Become a Seller",
    idx_footer_career: "Careers",
    idx_footer_blog: "Blog",
    idx_footer_press: "Press Kit",
    idx_footer_help: "Help",
    idx_footer_help_center: "Help Center",
    idx_footer_return: "Return Policy",
    idx_footer_track: "Track Order",
    idx_footer_contact: "Contact Us",
    idx_footer_copyright: "© 2025 Klikva. All rights reserved. Proudly made in Indonesia.",
    idx_footer_privacy: "Privacy Policy",
    idx_footer_terms: "Terms & Conditions"
  }
};

// Current language
let currentLanguage = localStorage.getItem('klikva_lang') || 'id';

// Function to translate a single key
function translate(key) {
  if (translations[currentLanguage] && translations[currentLanguage][key]) {
    return translations[currentLanguage][key];
  }
  if (translations.id && translations.id[key]) {
    return translations.id[key];
  }
  return key;
}

// Function to translate the entire page
function translatePage() {
  console.log('Translating page to:', currentLanguage);
  const elements = document.querySelectorAll('[data-i18n]');
  console.log('Found elements with data-i18n:', elements.length);
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translatedText = translate(key);
    
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      if (element.hasAttribute('data-i18n-placeholder')) {
        element.placeholder = translatedText;
      } else {
        element.value = translatedText;
      }
    } else if (element.tagName === 'TITLE') {
      document.title = translatedText;
    } else {
      if (translatedText.includes('<') && translatedText.includes('>')) {
        element.innerHTML = translatedText;
      } else {
        element.textContent = translatedText;
      }
    }
  });
  
  // Also update title
  const titleElement = document.querySelector('title[data-i18n]');
  if (titleElement) {
    document.title = translate(titleElement.getAttribute('data-i18n'));
  }
  
  document.dispatchEvent(new CustomEvent('translationComplete', { detail: { language: currentLanguage } }));
}

// Function to change language
function setLanguage(lang) {
  console.log('Changing language to:', lang);
  if (!translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem('klikva_lang', lang);
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  translatePage();
  document.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }));
}

// Expose to global scope
window.translations = translations;
window.translate = translate;
window.translatePage = translatePage;
window.setLanguage = setLanguage;
window.getCurrentLanguage = () => currentLanguage;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded - running translatePage');
    translatePage();
  });
} else {
  console.log('DOM already loaded - running translatePage');
  translatePage();
}
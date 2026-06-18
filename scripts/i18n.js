(function (global) {
	'use strict';

	var STORAGE_KEY = 'bp_lang';

	var strings = {
		en: {
			'nav.portfolio': 'Portfolio',
			'nav.about': 'About',
			'nav.contact': 'Contact',
			'nav.jobs': 'Join our Team',
			'footer.copy': '\u00a9 2026 BantuProduksi. All rights reserved.',
			'footer.top': 'go to top',
			'cta.quote': 'Start Your Quote',
			'cta.request_quote': 'Request a Quote',
			'cta.get_in_touch': 'Get in Touch',
			'cta.see_work': 'See Our Work',
			'project.back': '\u2190 Back to Portfolio',
			'project.details': 'Project Details',
			'project.services': 'Services',
			'project.start': 'Start Your Project',
			'project.partners': 'Project Partners',
			'project.follow_client': 'Follow the Client',
			'filter.all': 'All',
			'filter.custom': 'Custom',
			'filter.textile': 'Textile',
			'filter.metal': 'Metal',
			'filter.plastic': 'Plastic',
			'filter.wood': 'Wood',
			'contact.location': 'Location',
			'contact.email': 'Email Us',
			'contact.whatsapp': 'WhatsApp',
			'contact.whatsapp_btn': 'Chat on WhatsApp',
			'lang.en': 'EN',
			'lang.id': 'ID'
		},
		id: {
			'nav.portfolio': 'Portofolio',
			'nav.about': 'Tentang',
			'nav.contact': 'Kontak',
			'nav.jobs': 'Bergabung',
			'footer.copy': '\u00a9 2026 BantuProduksi. Hak cipta dilindungi.',
			'footer.top': 'ke atas',
			'cta.quote': 'Mulai Penawaran',
			'cta.request_quote': 'Minta Penawaran',
			'cta.get_in_touch': 'Hubungi Kami',
			'cta.see_work': 'Lihat Karya Kami',
			'project.back': '\u2190 Kembali ke Portofolio',
			'project.details': 'Detail Proyek',
			'project.services': 'Layanan',
			'project.start': 'Mulai Proyek Anda',
			'project.partners': 'Mitra Proyek',
			'project.follow_client': 'Ikuti Klien',
			'filter.all': 'Semua',
			'filter.custom': 'Kustom',
			'filter.textile': 'Tekstil',
			'filter.metal': 'Logam',
			'filter.plastic': 'Plastik',
			'filter.wood': 'Kayu',
			'contact.location': 'Lokasi',
			'contact.email': 'Email',
			'contact.whatsapp': 'WhatsApp',
			'contact.whatsapp_btn': 'Chat di WhatsApp',
			'lang.en': 'EN',
			'lang.id': 'ID'
		}
	};

	var pages = {
		home: {
			title: { en: 'BantuProduksi', id: 'BantuProduksi' },
			selectors: {
				'.page-title h1': {
					en: 'Shaping Ideas into Ready-to-Make Products.',
					id: 'Mengubah Ide Menjadi Produk Siap Produksi.'
				},
				'.page-title p': {
					en: 'Produksi mudah, usaha maju.',
					id: 'Produksi mudah, usaha maju.'
				},
				'.price-footer a': { en: strings.en['cta.quote'], id: strings.id['cta.quote'] },
				'.padding .row .col-md-6:first-child .small-title h4': {
					en: 'Full-service Manufacturing',
					id: 'Manufaktur Layanan Lengkap'
				},
				'.padding .row .col-md-6:first-child .small-title p': {
					en: 'Manufacturing-as-a-Service (MaaS)',
					id: 'Manufaktur-sebagai-Layanan (MaaS)'
				},
				'.padding .row .col-md-6:first-child > p': {
					en: 'In-house production capabilities across multiple materials: textiles, metals, plastics, wood, and more. We oversee every step \u2014 from design and development to finishing \u2014 so you get consistent quality and dependable delivery.',
					id: 'Kapabilitas produksi internal untuk berbagai material: tekstil, logam, plastik, kayu, dan lainnya. Kami mengawasi setiap langkah \u2014 dari desain dan pengembangan hingga finishing \u2014 agar Anda mendapatkan kualitas konsisten dan pengiriman yang andal.'
				},
				'.padding .row .col-md-6:last-child .small-title h4': {
					en: 'Our Capabilities',
					id: 'Kapabilitas Kami'
				},
				'.container > h1#facility-title': {
					en: 'Our Production Facility',
					id: 'Fasilitas Produksi Kami'
				},
				'.large-title h1': {
					en: 'In-House Manufacturing',
					id: 'Manufaktur Internal'
				},
				'#why-title': {
					en: 'Why BantuProduksi',
					id: 'Mengapa BantuProduksi'
				}
			},
			html: {
				'#why-intro': {
					en: 'We make production simple and reliable. With expertise across multiple materials and industries, BantuProduksi is the trusted partner for turning your ideas into real products.',
					id: 'Kami membuat produksi menjadi sederhana dan andal. Dengan keahlian di berbagai material dan industri, BantuProduksi adalah mitra terpercaya untuk mengubah ide Anda menjadi produk nyata.'
				},
				'#why-list': {
					en: '<li><strong>\u2714 Proven Capacity</strong><br>High-volume manufacturing across textiles, metal, wood, and plastics.</li><li><strong>\u2714 Product Development</strong><br>From concept sketches to finished products, we guide every step.</li><li><strong>\u2714 On-Time Delivery</strong><br>Reliable production schedules with clear communication.</li><li><strong>\u2714 Quality &amp; Compliance</strong><br>Strict quality control and standardized inspection processes.</li>',
					id: '<li><strong>\u2714 Kapasitas Terbukti</strong><br>Produksi volume tinggi untuk tekstil, logam, kayu, dan plastik.</li><li><strong>\u2714 Pengembangan Produk</strong><br>Dari sketsa konsep hingga produk jadi, kami memandu setiap langkah.</li><li><strong>\u2714 Pengiriman Tepat Waktu</strong><br>Jadwal produksi andal dengan komunikasi yang jelas.</li><li><strong>\u2714 Kualitas &amp; Kepatuhan</strong><br>Kontrol kualitas ketat dan proses inspeksi standar.</li>'
				},
				'#badge-1-name': { en: 'Best Value', id: 'Nilai Terbaik' },
				'#badge-1-desc': { en: 'Manufacturer Direct Pricing', id: 'Harga Langsung dari Pabrik' },
				'#badge-2-name': { en: 'Fast Turnaround', id: 'Cepat Selesai' },
				'#badge-2-desc': { en: 'As fast as 24 hours', id: 'Sercepat 24 jam' },
				'#badge-3-name': { en: 'One on One Assistance', id: 'Bantuan Personal' },
				'#badge-3-desc': { en: 'Smooth shopping experience', id: 'Pengalaman kerja sama yang lancar' },
				'#progress-1': { en: 'Manufacturing - <span>100</span>%', id: 'Manufaktur - <span>100</span>%' },
				'#progress-2': { en: 'Innovation &amp; R&amp;D - <span>90</span>%', id: 'Inovasi &amp; R&amp;D - <span>90</span>%' },
				'#progress-3': { en: 'Web design &amp; Software - <span>98</span>%', id: 'Desain Web &amp; Perangkat Lunak - <span>98</span>%' },
				'#progress-4': { en: 'Product Development - <span>95</span>%', id: 'Pengembangan Produk - <span>95</span>%' }
			}
		},
		about: {
			title: { en: 'About \u2014 BantuProduksi', id: 'Tentang \u2014 BantuProduksi' },
			selectors: {
				'.page-title h1': { en: 'About BantuProduksi', id: 'Tentang BantuProduksi' },
				'.page-title p': { en: 'Produksi mudah, usaha maju.', id: 'Produksi mudah, usaha maju.' },
				'.large-title h1': { en: 'Our Vision', id: 'Visi Kami' },
				'.large-title + p': {
					en: 'We exist to help businesses grow \u2014 by giving them the power to create almost anything their city consumes, without needing to own a factory.',
					id: 'Kami hadir untuk membantu bisnis berkembang \u2014 dengan memberi mereka kekuatan membuat hampir apa pun yang dibutuhkan kota, tanpa harus memiliki pabrik sendiri.'
				}
			},
			html: {
				'#about-who-title': { en: 'Who We Are', id: 'Siapa Kami' },
				'#about-who-1': {
					en: 'BantuProduksi is a full-service manufacturing partner based in Indonesia. We combine textiles, metals, plastics, wood, electronics, and digital fabrication under one roof \u2014 so entrepreneurs, brands, and institutions can go from idea to finished product with a single team they trust.',
					id: 'BantuProduksi adalah mitra manufaktur layanan lengkap berbasis di Indonesia. Kami menggabungkan tekstil, logam, plastik, kayu, elektronik, dan fabrikasi digital dalam satu atap \u2014 sehingga pengusaha, merek, dan institusi dapat dari ide hingga produk jadi dengan satu tim terpercaya.'
				},
				'#about-who-2': {
					en: 'Think of us the way the tech world thinks of TSMC: NVIDIA, Intel, AMD, and Apple design the chips \u2014 TSMC fabricates them at scale. You bring the vision, brand, and market. We bring the production floor, engineering, and quality control.',
					id: 'Anggap kami seperti TSMC di dunia teknologi: NVIDIA, Intel, AMD, dan Apple merancang chip \u2014 TSMC memproduksinya dalam skala besar. Anda bawa visi, merek, dan pasar. Kami bawa lantai produksi, rekayasa, dan kontrol kualitas.'
				},
				'#about-focus-title': { en: 'What You Focus On', id: 'Fokus Anda' },
				'#about-focus-p': {
					en: 'Your business should spend its energy on what creates the most value \u2014 product design, customer relationships, marketing, distribution, and growth. BantuProduksi handles the rest: prototyping, sourcing, machining, sewing, assembly, testing, and delivery.',
					id: 'Bisnis Anda sebaiknya fokus pada hal yang menciptakan nilai terbesar \u2014 desain produk, hubungan pelanggan, pemasaran, distribusi, dan pertumbuhan. BantuProduksi menangani sisanya: prototipe, sourcing, machining, jahit, perakitan, pengujian, dan pengiriman.'
				},
				'#about-focus-list': {
					en: '<li>Design and brand \u2014 yours</li><li>Sales, partnerships, and go-to-market \u2014 yours</li><li>Manufacturing, fabrication, and scale-up \u2014 ours</li>',
					id: '<li>Desain dan merek \u2014 milik Anda</li><li>Penjualan, kemitraan, dan go-to-market \u2014 milik Anda</li><li>Manufaktur, fabrikasi, dan scale-up \u2014 milik kami</li>'
				},
				'#about-cap-title': { en: 'Building Capability \u2014 Not Just Products', id: 'Membangun Kapabilitas \u2014 Bukan Hanya Produk' },
				'#about-cap-p': {
					en: 'We do more than fill orders. We help businesses develop real research and product-creation capability \u2014 so they are not locked into off-the-shelf goods forever. Whether you need a first prototype, a small batch, or volume production, we work alongside your team through development, iteration, and launch.',
					id: 'Kami lebih dari sekadar memenuhi pesanan. Kami membantu bisnis mengembangkan kapabilitas riset dan pembuatan produk yang nyata \u2014 agar tidak terjebak pada barang jadi selamanya. Baik prototipe pertama, batch kecil, atau produksi volume, kami bekerja bersama tim Anda dari pengembangan, iterasi, hingga peluncuran.'
				},
				'#about-make-title': { en: 'What We Make', id: 'Apa yang Kami Buat' },
				'#about-make-p': {
					en: 'From uniforms and home textiles to precision metal parts, custom furniture, automated architectural systems, and PCB-driven prototypes \u2014 if a city buys it, we can likely help you build it. Our portfolio spans hospitality, retail, architecture, electronics, and industrial supply chains across Indonesia.',
					id: 'Dari seragam dan tekstil rumah hingga komponen logam presisi, furnitur kustom, sistem arsitektur otomatis, dan prototipe berbasis PCB \u2014 jika kota membutuhkannya, kami dapat membantu Anda membuatnya. Portofolio kami mencakup hospitality, retail, arsitektur, elektronik, dan rantai pasok industri di Indonesia.'
				},
				'#about-edu-title': { en: 'Educating the Next Generation', id: 'Mendidik Generasi Berikutnya' },
				'#about-edu-p': {
					en: 'Digital fabrication is changing how products are made. We are committed to educating young people \u2014 students, makers, and early-career engineers \u2014 about CNC, 3D printing, electronics, textiles, and modern production workflows so the next generation can design, build, and lead industries of their own.',
					id: 'Fabrikasi digital mengubah cara produk dibuat. Kami berkomitmen mendidik generasi muda \u2014 pelajar, maker, dan engineer pemula \u2014 tentang CNC, cetak 3D, elektronik, tekstil, dan alur produksi modern agar generasi berikutnya dapat merancang, membangun, dan memimpin industri mereka sendiri.'
				},
				'#about-ready-title': { en: 'Ready to Build?', id: 'Siap Membangun?' },
				'#about-ready-p': {
					en: 'Whether you are launching a new product line or scaling something that already sells, we are here to manufacture it.',
					id: 'Baik Anda meluncurkan lini produk baru atau menskalakan produk yang sudah laku, kami siap memproduksinya.'
				},
				'#about-cta-contact': { en: strings.en['cta.get_in_touch'], id: strings.id['cta.get_in_touch'] },
				'#about-cta-portfolio': { en: strings.en['cta.see_work'], id: strings.id['cta.see_work'] }
			}
		},
		contact: {
			title: { en: 'Contact \u2014 BantuProduksi', id: 'Kontak \u2014 BantuProduksi' },
			selectors: {
				'.page-title h1': { en: 'Contact', id: 'Kontak' },
				'.page-title p': { en: 'Get in Touch', id: 'Hubungi Kami' }
			}
		},
		portfolio: {
			title: { en: 'Portfolio \u2014 BantuProduksi', id: 'Portofolio \u2014 BantuProduksi' },
			selectors: {
				'.page-title h1': { en: 'Our Work', id: 'Karya Kami' },
				'.page-title p': {
					en: 'Real manufacturing projects delivered for clients across industries.',
					id: 'Proyek manufaktur nyata yang kami selesaikan untuk klien di berbagai industri.'
				}
			}
		},
		jobs: {
			title: { en: 'Careers \u2014 BantuProduksi', id: 'Karier \u2014 BantuProduksi' },
			selectors: {
				'.page-title h1': { en: 'We are hiring!', id: 'Kami sedang merekrut!' },
				'.page-title p': {
					en: 'Send your CV along with a brief note explaining why you\u2019d like to join us to',
					id: 'Kirim CV Anda beserta catatan singkat mengapa Anda ingin bergabung ke'
				}
			},
			html: {
				'#jobs-content': {
					en: '<div><h5>CAM &amp; Prototype</h5><ul><li>Male/Female</li><li>No minimum education</li><li>Basic CAD (Solidworks) and CNC machine programming</li><li>Based in Jakarta</li></ul></div><br><div><h5>Electrical Engineer</h5><ul><li>Male/Female</li><li>No minimum education</li><li>Understand electrical issues</li><li>Knowledge of electronic components</li><li>Based in Jakarta</li></ul></div><br><div><h5>Engineering Intern / Thesis</h5><h6>Your responsibilities:</h6><ul><li>Component production, including post-processing</li><li>Machine preparation, assembly, and testing</li><li>3D modeling</li><li>Inventory management</li><li>Documentation</li></ul><h6>Skills required:</h6><ul><li>Engineering or design student</li><li>Flexible and eager to learn</li><li>Proactive and motivated</li></ul><h6>What we offer:</h6><ul><li>Teaching and mentoring students</li><li>Plenty of hands-on prototyping work</li></ul></div><br><br>',
					id: '<div><h5>CAM &amp; Prototype</h5><ul><li>Pria/Wanita</li><li>Tidak ada minimal pendidikan</li><li>Memiliki basic CAD (Solidworks) dan programming mesin CNC</li><li>Penempatan di Jakarta</li></ul></div><br><div><h5>Electrical Engineer</h5><ul><li>Pria/Wanita</li><li>Tidak ada minimal pendidikan</li><li>Memahami masalah elektrikal</li><li>Mengetahui komponen alat elektronik</li><li>Penempatan di Jakarta</li></ul></div><br><div><h5>Engineering Intern/Thesis</h5><h6>Tugas anda:</h6><ul><li>Produksi komponen, termasuk pasca proses</li><li>Persiapan, perakitan dan pengujian mesin</li><li>Pemodelan 3D</li><li>Manajemen inventaris</li><li>Dokumentasi</li></ul><h6>Keterampilan yang dibutuhkan:</h6><ul><li>Mahasiswa teknik atau desain</li><li>Flexibel dan mau belajar</li><li>Proaktif dan termotivasi</li></ul><h6>Yang kami tawarkan:</h6><ul><li>Mengajar/membimbing mahasiswa</li><li>Banyak pekerjaan prototyping langsung (hands-on)</li></ul></div><br><br>'
				},
				'#jobs-footer-note': {
					en: '*Contact us via WhatsApp or email and send your application and CV before February 15, 2026.',
					id: '*Hubungi kami melalui WhatsApp atau email dan kirimkan lamaran serta CV sebelum 15 Februari 2026.'
				}
			}
		},
		project: {
			title: { en: 'Project \u2014 BantuProduksi', id: 'Proyek \u2014 BantuProduksi' }
		}
	};

	function getLang() {
		var saved = null;
		try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
		if (saved === 'en' || saved === 'id') return saved;
		var browser = (navigator.language || '').toLowerCase();
		return browser.indexOf('id') === 0 ? 'id' : 'en';
	}

	function t(key, lang) {
		lang = lang || getLang();
		if (strings[lang] && strings[lang][key]) return strings[lang][key];
		if (strings.en[key]) return strings.en[key];
		return '';
	}

	function applyDataI18n(lang) {
		var nodes = document.querySelectorAll('[data-i18n]');
		for (var i = 0; i < nodes.length; i++) {
			var key = nodes[i].getAttribute('data-i18n');
			var value = t(key, lang);
			if (value) nodes[i].textContent = value;
		}
		var ariaNodes = document.querySelectorAll('[data-i18n-aria]');
		for (var a = 0; a < ariaNodes.length; a++) {
			var ariaKey = ariaNodes[a].getAttribute('data-i18n-aria');
			var ariaValue = t(ariaKey, lang);
			if (ariaValue) ariaNodes[a].setAttribute('aria-label', ariaValue);
		}
		var htmlNodes = document.querySelectorAll('[data-i18n-html]');
		for (var j = 0; j < htmlNodes.length; j++) {
			var htmlKey = htmlNodes[j].getAttribute('data-i18n-html');
			var htmlValue = t(htmlKey, lang);
			if (htmlValue) htmlNodes[j].innerHTML = htmlValue;
		}
	}

	function applyPage(lang) {
		var page = document.body.getAttribute('data-page');
		if (!page || !pages[page]) return;
		var config = pages[page];
		if (config.title && config.title[lang]) {
			document.title = config.title[lang];
		}
		if (config.selectors) {
			Object.keys(config.selectors).forEach(function (selector) {
				var el = document.querySelector(selector);
				if (el && config.selectors[selector][lang]) {
					el.textContent = config.selectors[selector][lang];
				}
			});
		}
		if (config.html) {
			Object.keys(config.html).forEach(function (id) {
				var el = document.getElementById(id.replace('#', ''));
				if (el && config.html[id][lang]) {
					el.innerHTML = config.html[id][lang];
				}
			});
		}
	}

	function injectLangSwitcher() {
		var menu = document.querySelector('.primary-menu ul');
		if (!menu || menu.querySelector('.lang-switcher-item')) return;
		var li = document.createElement('li');
		li.className = 'lang-switcher-item';
		li.innerHTML = '<span class="lang-switcher" role="group" aria-label="Language">' +
			'<button type="button" class="lang-btn" data-set-lang="en">EN</button>' +
			'<span class="lang-sep">|</span>' +
			'<button type="button" class="lang-btn" data-set-lang="id">ID</button>' +
			'</span>';
		menu.appendChild(li);
	}

	function updateLangButtons(lang) {
		var buttons = document.querySelectorAll('[data-set-lang]');
		for (var i = 0; i < buttons.length; i++) {
			var btn = buttons[i];
			if (btn.getAttribute('data-set-lang') === lang) {
				btn.classList.add('active');
			} else {
				btn.classList.remove('active');
			}
		}
	}

	function setLanguage(lang) {
		if (lang !== 'en' && lang !== 'id') return;
		try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
		document.documentElement.lang = lang;
		applyDataI18n(lang);
		applyPage(lang);
		updateLangButtons(lang);
	}

	function bindEvents() {
		document.addEventListener('click', function (e) {
			var btn = e.target.closest('[data-set-lang]');
			if (!btn) return;
			e.preventDefault();
			setLanguage(btn.getAttribute('data-set-lang'));
		});
	}

	function init() {
		injectLangSwitcher();
		bindEvents();
		setLanguage(getLang());
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}

	global.BantuI18n = {
		setLanguage: setLanguage,
		getLang: getLang,
		t: t
	};
})(window);

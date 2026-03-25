/* ════════════════════════════════════════
   SHARED.JS — ngarkohet në të dy faqet
════════════════════════════════════════ */

/* ── TRANSLATIONS ── */
const translations = {
    EN: {
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About",
        nav_contact: "Contact",
        btn_consult: "Konsulto Tani",
        btn_contact: "Contact Us Today",
        btn_consult_now: "Consult Now",
        btn_send: "Send",
        cta_consult: "Consult Us →",

        slide1_eyebrow: "Welcome to EnerLex",
        slide1_title: "We develop end-to-end<br />legal and operational<br /><cite>frameworks</cite>",
        slide2_eyebrow: "Energy & Law Expertise",
        slide2_title: "Bridging financial requirements<br />with <cite>legal feasibility</cite>",
        slide3_eyebrow: "23+ Years of Experience",
        slide3_title: "Negotiating complex<br />international <cite>PPA</cite><br />contracts",

        pillar1_title: "Regulatory Design",
        pillar1_text: "We develop end-to-end legal and operational frameworks, drafting primary and secondary legislation to ensure energy projects are future-proof and built for the long term.",
        pillar2_title: "Commercial & Legal Navigation",
        pillar2_text: "We bridge the gap between financial requirements and legal feasibility through precise negotiation of complex international agreements and large-scale infrastructure contracts.",
        pillar3_title: "Law & Energy Innovation",
        pillar3_text: "By merging deep regulatory knowledge with power market expertise, we eliminate the friction between industrial progress and compliance, creating a seamless path for technical operations.",

        services_sub: "Our Services",
        services_title: "Strategic Advisory &amp; <cite>Legal Excellence</cite>",

        svc1_title: "Drafting of Agreements & Complex Commercial Contracts",
        svc1_text: "Specializing in the architectural design and negotiation of high-stakes commercial agreements, ranging from international power purchase agreements (PPAs) to intricate inter-TSO operational arrangements. We ensure that every contract is legally resilient, commercially viable, and strategically aligned with the objectives of investors and business entities.",
        svc2_title: "Comprehensive Legal Due Diligence & Risk Assessment",
        svc2_text: "Conducting comprehensive legal due diligence for large-scale energy infrastructure, institutional restructuring, and cross-border projects. We leverage over 23 years of experience to identify regulatory and operational risks, ensuring projects meet the stringent requirements of international financing institutions (KfW, EBRD, World Bank) and regional regulatory bodies.",
        svc3_title: "Strategic Legal Analysis & Legislative Drafting",
        svc3_text: "Providing expert legal analysis on complex regulatory issues and disputes. We specialize in the conceptualization and drafting of primary and secondary legislation.",
        svc4_title: "Market Intelligence & Feasibility Research",
        svc4_text: "Conducting specialized legal research, feasibility studies, and market evaluations within the energy and commercial sectors. We identify operational risks and strategic opportunities, with a particular focus on electricity market integration and the business environment for international enterprises.",
        svc5_title: "Corporate Governance & Managerial Consulting",
        svc5_text: "Offering specialized managerial consulting and professional training focused on institutional integrity, ethics, and corporate governance. We serve as authorized representatives for entities during their establishment and registration, implementing international principles (such as OECD standards) to ensure seamless and ethical business activity.",
        learn_more: "Learn More →",
        years_exp: "Years of Experience",

        stats_sub: "Our Achievements",
        stats_title: "We are proud of<br />our <cite>achievements</cite>",
        stats_text1: "Leveraging over two decades of experience in the energy sector and commercial law, EnerLex has built its reputation as a trusted partner of international institutions.",
        stats_text2: "Our specific expertise covers energy market reform, governance of public companies and privatization — with all their international legal complexity.",
        stat1_label: "Years of Experience",
        stat2_label: "Projects Completed",
        stat3_label: "International Institutions",
        stat4_label: "Partner Countries",

        contact_sub: "Contact Us",
        contact_title: "Feel free to reach out,<br />we are <cite>here</cite> for you",
        placeholder_firstname: "First Name..",
        placeholder_lastname: "Last Name..",
        placeholder_email: "Email Address..",
        placeholder_message: "Message..",

        hero_eyebrow: "Practice Area",
        hero_title: "Litigation &amp; <cite>Legal Representation</cite>",
        hero_sub: "High-stakes dispute resolution backed by 23 years of experience — from local courts to international arbitration forums.",

        breadcrumb_current: "Litigation & Legal Representation",

        intro_label: "Overview",
        intro_heading: "A Proven Record in <cite>High-Value Disputes</cite>",
        intro_p1: "Mr. Hoxha, with 23 years of professional experience including a significant tenure as Manager of the Legal Office for Kosovo's Transmission System and Market Operator (KOSTT), has a formidable track record in high-stakes legal representation.",
        intro_p2: "Strategic management of a core team of lawyers resulted in documented savings of approximately <strong style=\"color:var(--gold);\">65 million euros</strong> by successfully preventing liabilities through won cases in both local and international disputes.",
        intro_p3: "As a member of the Kosovo Bar Association and a certified attorney, his expertise spans commercial, civil, and administrative law — including specialized roles such as serving on the Dispute Settlement Advisory Committee to the Ministerial Council of the Energy Community.",

        stat1_label: "Years of Experience",
        stat2_label: "Liabilities Prevented",
        stat3_label: "Legal Domains",
        stat4_label: "Bar Association Member",

        track_title: "Dispute Settlement Advisory Committee — <cite>Energy Community</cite>",
        track_text: "Mr. Hoxha has served on the Dispute Settlement Advisory Committee to the Ministerial Council of the Energy Community. This extensive background combines deep academic foundations in civil law with practical, high-pressure experience representing enterprises in complex litigation and regulatory proceedings.",

        services_sub: "What We Offer",
        services_title: "Our <cite>Litigation Services</cite>",

        svc1_title: "Commercial Litigation & Arbitration",
        svc1_text: "Representing enterprises and investors in complex commercial disputes, including breach of contract, shareholder disagreements, and international arbitration. We specialize in high-stakes litigation where technical industry knowledge is as critical as legal expertise.",
        svc2_title: "Energy Sector Dispute Resolution",
        svc2_text: "Specialized representation in regulatory disputes, grid access conflicts, PPA enforcement, and energy market disagreements before national regulatory authorities and international energy community bodies.",
        svc3_title: "Administrative & Regulatory Proceedings",
        svc3_text: "Expert representation before administrative bodies, regulatory agencies, and government institutions. We navigate complex procedural frameworks to protect client interests in licensing, compliance, and enforcement matters.",
        svc4_title: "Cross-Border & International Disputes",
        svc4_text: "Managing multi-jurisdictional legal disputes with a focus on the Western Balkans energy market. We coordinate with international legal teams and understand the regional regulatory frameworks that govern cross-border transactions.",
        svc5_title: "Civil & Contractual Liability Claims",
        svc5_text: "Handling claims arising from contractual breaches, tortious liability, and civil disputes in the commercial sector. Our approach combines rigorous legal analysis with strategic negotiation to achieve optimal outcomes.",
        liabilities_label: "Liabilities Prevented",

        qual_label: "Background & Credentials",
        qual_heading: "Academic Foundations &amp; <cite>Proven Practice</cite>",
        qual_p1: "This extensive background combines deep academic foundations in civil law with practical, high-pressure experience representing enterprises in complex litigation and regulatory proceedings across local and international forums.",
        qual_p2: "The combination of institutional leadership at KOSTT and active bar membership creates a unique perspective — understanding both the operational realities of energy enterprises and the legal frameworks that govern them.",
        qual_li1: "Member of the Kosovo Bar Association — certified attorney at law",
        qual_li2: "23+ years of professional legal experience in energy and commercial law",
        qual_li3: "Former Manager, Legal Office — KOSTT (Kosovo TSO & Market Operator)",
        qual_li4: "Member, Dispute Settlement Advisory Committee — Ministerial Council of the Energy Community",
        qual_li5: "Expertise in commercial, civil, and administrative law proceedings",
        qual_li6: "Documented track record: ~€65 million in liabilities successfully prevented",

        qcard1_title: "Kosovo Bar Association",
        qcard1_text: "Certified member of the Kosovo Bar Association with full attorney-at-law status, authorized to represent clients in all courts and proceedings in Kosovo and beyond.",
        qcard2_title: "KOSTT Legal Office",
        qcard2_text: "Significant tenure as Manager of the Legal Office for Kosovo's Transmission System and Market Operator — overseeing all legal matters for a critical national infrastructure entity.",
        qcard3_title: "Energy Community",
        qcard3_text: "Served on the Dispute Settlement Advisory Committee to the Ministerial Council of the Energy Community — the highest-level regulatory body for energy in the Western Balkans region.",

        cta_label: "Get In Touch",
        cta_heading: "Ready to discuss your <cite>legal matter?</cite>",
        cta_text: "Whether you are facing a complex commercial dispute, a regulatory proceeding, or require strategic legal counsel — our team is ready to assess your case and develop a tailored representation strategy.",
        cta_btn: "Schedule a Consultation",

        footer_desc: "We provide specialized legal services for the energy sector as a trusted partner of international financial institutions and strategic investors.",
        footer_links: "Links",
        footer_services_title: "Services",
        footer_expertise: "Expertise",
        footer_svc1: "Contract Drafting",
        footer_svc2: "Due Diligence",
        footer_svc3: "Legal Analysis",
        footer_svc4: "Energy Market",
        footer_svc5: "Corporate Governance",
        footer_exp1: "Primary Legislation",
        footer_exp2: "International PPA Markets",
        footer_exp3: "Inter-TSO Agreements",
    },

    SQ: {
        nav_home: "Kryefaqja",
        nav_services: "Shërbimet",
        nav_about: "Rreth Nesh",
        nav_contact: "Kontakt",
        btn_consult: "Konsulto Tani",
        btn_contact: "Na Kontaktoni Sot",
        btn_consult_now: "Konsulto Tani",
        btn_send: "Dërgo",
        cta_consult: "Na Konsultoni →",

        slide1_eyebrow: "Mirë se vini në EnerLex",
        slide1_title: "Ne zhvillojmë korniza të plota<br />ligjore dhe operacionale<br /><cite>end-to-end</cite>",
        slide2_eyebrow: "Ekspertizë në Ligj & Energji",
        slide2_title: "Duke lidhur kërkesat financiare<br />me <cite>realizueshmërinë ligjore</cite>",
        slide3_eyebrow: "23+ Vite Përvojë",
        slide3_title: "Duke negociuar kontrata<br />komplekse ndërkombëtare <cite>PPA</cite><br />",

        pillar1_title: "Dizajni Rregullator",
        pillar1_text: "Ne zhvillojmë korniza të plota ligjore dhe operacionale end-to-end, duke hartuar legjislacion primar dhe sekondar për të siguruar që projektet energjetike të jenë të qëndrueshme dhe të orientuara drejt afatgjatësisë.",
        pillar2_title: "Navigimi Komercial & Ligjor",
        pillar2_text: "Ne lidhim hendekun ndërmjet kërkesave financiare dhe realizueshmërisë ligjore përmes negocimit të saktë të marrëveshjeve komplekse ndërkombëtare dhe kontratave të infrastrukturës në shkallë të gjerë.",
        pillar3_title: "Inovacioni në Ligj & Energji",
        pillar3_text: "Duke ndërthurur njohuri të thella rregullatore me ekspertizë në tregun e energjisë, eliminojmë pengesat ndërmjet progresit industrial dhe përputhshmërisë ligjore, duke krijuar një rrugë të qartë dhe funksionale për operacionet teknike.",

        services_sub: "Shërbimet Tona",
        services_title: "Këshillim Strategjik &amp; <cite>Ekselencë Ligjore</cite>",

        svc1_title: "Hartimi i Marrëveshjeve & Kontratave Komerciale",
        svc1_text: "Specializohemi në përcaktimin e kornizës dhe negocimin e marrëveshjeve komerciale, duke filluar nga marrëveshjet ndërkombëtare për blerjen e energjisë (PPA) deri te marrëveshjet për zhvillimin dhe zbatimin e projekteve. Sigurojmë që çdo kontratë të jetë juridikisht e qëndrueshme, komercialisht e realizueshme dhe strategjikisht e harmonizuar me objektivat e investitorëve dhe subjekteve afariste.",
        svc2_title: "Vlerësim Ligjor Gjithëpërfshirës & Vlerësim i Rrezikut",
        svc2_text: "Kryejmë vlerësime ligjore (legal due diligence) gjithëpërfshirëse për infrastrukturë energjetike në shkallë të gjerë, ristrukturime institucionale dhe projekte ndërkufitare. Duke u mbështetur në mbi 23 vite përvojë, identifikojmë rreziqet rregullatore dhe operacionale, duke siguruar që projektet të përmbushin kërkesat strikte të institucioneve ndërkombëtare financiare (KfW, EBRD, Banka Botërore) dhe organeve rregullatore.",
        svc3_title: "Analizë Strategjike Ligjore & Hartim i Legjislacionit",
        svc3_text: "Ofrojmë analizë të specializuar ligjore për çështje komplekse rregullatore dhe mosmarrëveshje. Specializohemi në konceptimin dhe hartimin e legjislacionit primar dhe sekondar.",
        svc4_title: "Inteligjencë Tregu & Studime Fizibiliteti",
        svc4_text: "Zhvillojmë kërkime ligjore të specializuara, studime fizibiliteti dhe vlerësime të tregut në sektorët e energjisë dhe tregtisë. Identifikojmë rreziqet operacionale dhe mundësitë strategjike, me fokus të veçantë në integrimin e tregut të energjisë elektrike dhe mjedisin afarist për ndërmarrjet ndërkombëtare.",
        svc5_title: "Qeverisje Korporative & Konsulencë Menaxheriale",
        svc5_text: "Ofrojmë konsulencë të specializuar menaxheriale dhe trajnime profesionale të fokusuara në integritet institucional, etikë dhe qeverisje korporative. Veprojmë si përfaqësues të autorizuar për subjektet gjatë themelimit dhe regjistrimit të tyre, duke zbatuar parime ndërkombëtare (si standardet e OECD) për të siguruar një aktivitet afarist të qëndrueshëm dhe etik.",
        learn_more: "Mëso Më Shumë →",
        years_exp: "Vite Përvojë",

        stats_sub: "Arritjet Tona",
        stats_title: "Jemi krenarë për<br /><cite>arritjet tona</cite>",
        stats_text1: "Duke shfrytëzuar mbi dy dekada përvojë në sektorin e energjisë dhe të drejtës komerciale, EnerLex ka ndërtuar reputacionin e saj si partner i besueshëm i institucioneve ndërkombëtare.",
        stats_text2: "Ekspertiza jonë specifike mbulon reformën e tregut të energjisë, qeverisjen e ndërmarrjeve publike dhe privatizimin — me gjithë kompleksitetin e tyre ligjor ndërkombëtar.",
        stat1_label: "Vite Përvojë",
        stat2_label: "Projekte të Përfunduara",
        stat3_label: "Institucione Ndërkombëtare",
        stat4_label: "Vendet Partnere",

        contact_sub: "Na Kontaktoni",
        contact_title: "Mos hezitoni të na kontaktoni,<br />jemi <cite>këtu</cite> për ju",
        placeholder_firstname: "Emri..",
        placeholder_lastname: "Mbiemri..",
        placeholder_email: "Adresa Email..",
        placeholder_message: "Mesazhi..",

        hero_eyebrow: "Fusha e Praktikës",
        hero_title: "Kontestet Gjyqësore &amp; <cite>Përfaqësimi Ligjor</cite>",
        hero_sub: "Z. Hoxha ka 23 vite përvojë profesionale, duke përfshirë një periudhë të rëndësishme si Menaxher i Zyrës Ligjore pranë KOSTT, dhe një histori të konsoliduar në përfaqësimin ligjor të nivelit të lartë.",

        breadcrumb_current: "Kontestet Gjyqësore & Përfaqësimi Ligjor",

        intro_label: "Vështrim i Përgjithshëm",
        intro_heading: "Rekord i Konsoliduar në <cite>Konteste me Vlerë të Lartë</cite>",
        intro_p1: "Z. Hoxha ka 23 vite përvojë profesionale, duke përfshirë një periudhë të rëndësishme si Menaxher i Zyrës Ligjore pranë Operatorit të Sistemit të Transmisionit dhe Tregut të Kosovës (KOSTT), dhe një histori të konsoliduar në përfaqësimin ligjor të nivelit të lartë si dhe role të specializuara, përfshirë anëtarësimin në Komitetin Këshillëdhënës për Zgjidhjen e Mosmarrëveshjeve pranë Këshillit Ministror të Komunitetit të Energjisë.",
        intro_p2: "Menaxhimi strategjik i një ekipi juristësh ka rezultuar në kursime të dokumentuara prej rreth <strong style=\"color:var(--gold);\">65 milionë eurosh</strong>, përmes parandalimit të detyrimeve financiare dhe fitimit të rasteve në konteste vendore dhe ndërkombëtare.",
        intro_p3: "Si anëtar i Odës së Avokatëve të Kosovës dhe avokat i licencuar, ekspertiza e tij përfshin të drejtën tregtare, civile dhe administrative. Ky profil kombinon një bazë të fortë akademike në të drejtën civile me përvojë praktike në kushte të presionit të lartë në përfaqësimin e ndërmarrjeve në procese gjyqësore dhe procedura rregullatore komplekse.",

        track_title: "Komiteti Këshillëdhënës për Zgjidhjen e Mosmarrëveshjeve — <cite>Komuniteti i Energjisë</cite>",
        track_text: "Z. Hoxha ka shërbyer në Komitetin Këshillëdhënës për Zgjidhjen e Mosmarrëveshjeve pranë Këshillit Ministror të Komunitetit të Energjisë. Ky sfond i gjerë kombinon themele të thella akademike në të drejtën civile me përvojë praktike nën presion të lartë, duke përfaqësuar ndërmarrje në procese gjyqësore komplekse dhe procedura rregullatore.",

        svc1_title: "Konteste Tregtare & Arbitrazh",
        svc1_text: "Përfaqësojmë ndërmarrje dhe investitorë në mosmarrëveshje komplekse tregtare, përfshirë shkelje kontratash, mosmarrëveshje ndërmjet aksionarëve dhe arbitrazh ndërkombëtar. Specializohemi në procese me vlerë të lartë, ku njohuria teknike e industrisë është po aq e rëndësishme sa ekspertiza ligjore.",
        svc2_title: "E Drejta Civile & Kontestet Pronësore",
        svc2_text: "Ofrojmë përfaqësim gjithëpërfshirës në çështje civile, me fokus në të drejtat pronësore, transformimin e pronësisë dhe përgjegjësinë civile. Qasja jonë mbështetet në një bazë të fortë akademike dhe praktike në të drejtën civile.",
        svc3_title: "Konteste Administrative & Rregullatore",
        svc3_text: "Menaxhojmë kompleksitetin e së drejtës administrative duke përfaqësuar klientët në mosmarrëveshje kundër organeve qeveritare dhe rregullatore. Trajtojmë sfidimin e akteve administrative, kontestet e licencimit dhe procedurat gjyqësore që lidhen me përputhshmërinë në sektorët e energjisë dhe tregtisë.",
        svc4_title: "Mbrojtje Penale në Fushën Korporative",
        svc4_text: "Ofrojmë mbrojtje ligjore të specializuar për subjektet afariste dhe drejtuesit e tyre në procedura penale që lidhen me aktivitetin tregtar. Fokusimi ynë është në ruajtjen e integritetit institucional dhe etikës gjatë mbrojtjes nga pretendimet për keqmenaxhim apo shkelje rregullatore.",
        svc5_title: "Konteste të Punës & Marrëdhënieve të Punës",
        svc5_text: "Mbrojmë interesat e punëdhënësve vendorë dhe ndërkombëtarë në konteste kolektive dhe individuale të punës. Ofrojmë këshillim strategjik për menaxhimin e personelit, procedurat disiplinore dhe përputhshmërinë me Ligjin e Punës dhe shërbimin civil.",
        liabilities_label: "Detyrime të Parandaluara",

        qual_label: "Sfondi & Kredencialet",
        qual_heading: "Themelet Akademike &amp; <cite>Praktika e Dëshmuar</cite>",
        qual_p1: "Ky sfond i gjerë kombinon themele të thella akademike në të drejtën civile me përvojë praktike nën presion të lartë, duke përfaqësuar ndërmarrje në procese gjyqësore komplekse dhe procedura rregullatore në forume lokale dhe ndërkombëtare.",
        qual_p2: "Kombinimi i udhëheqjes institucionale në KOSTT dhe anëtarësimit aktiv në odë krijon një perspektivë unike — duke kuptuar si realitetet operacionale të ndërmarrjeve energjetike ashtu edhe kuadrot ligjore që i rregullojnë ato.",
        qual_li1: "Anëtar i Odës së Avokatëve të Kosovës — avokat i licencuar",
        qual_li2: "23+ vite përvojë ligjore profesionale në energji dhe të drejtë tregtare",
        qual_li3: "Ish-Menaxher i Zyrës Ligjore — KOSTT (Operatori i Sistemit të Transmisionit dhe Tregut të Kosovës)",
        qual_li4: "Anëtar, Komiteti Këshillëdhënës për Zgjidhjen e Mosmarrëveshjeve — Këshilli Ministror i Komunitetit të Energjisë",
        qual_li5: "Ekspertizë në procedura të drejtës tregtare, civile dhe administrative",
        qual_li6: "Rekord i dokumentuar: ~65 milionë euro detyrime të parandaluara me sukses",

        qcard1_title: "Oda e Avokatëve të Kosovës",
        qcard1_text: "Anëtar i certifikuar i Odës së Avokatëve të Kosovës me statusin e plotë të avokatit, i autorizuar të përfaqësojë klientë në të gjitha gjykatat dhe procedurat në Kosovë dhe më gjerë.",
        qcard2_title: "Zyra Ligjore e KOSTT-it",
        qcard2_text: "Periudhë e rëndësishme si Menaxher i Zyrës Ligjore pranë Operatorit të Sistemit të Transmisionit dhe Tregut të Kosovës — duke mbikëqyrur të gjitha çështjet ligjore për një entitet kritik të infrastrukturës kombëtare.",
        qcard3_title: "Komuniteti i Energjisë",
        qcard3_text: "Ka shërbyer në Komitetin Këshillëdhënës për Zgjidhjen e Mosmarrëveshjeve pranë Këshillit Ministror të Komunitetit të Energjisë — organi rregullator i nivelit më të lartë për energjinë në rajonin e Ballkanit Perëndimor.",

        cta_label: "Na Kontaktoni",
        cta_heading: "Gati të diskutoni <cite>çështjen tuaj ligjore?</cite>",
        cta_text: "Pavarësisht nëse po përballeni me një mosmarrëveshje komplekse tregtare, një procedurë rregullatore, ose keni nevojë për këshillim ligjor strategjik — ekipi ynë është gati të vlerësojë rastin tuaj dhe të zhvillojë një strategji përfaqësimi të personalizuar.",
        cta_btn: "Caktoni një Konsultim",

        footer_desc: "Ne ofrojmë shërbime të specializuara ligjore për sektorin e energjisë si partner i besueshëm i institucioneve financiare ndërkombëtare dhe investitorëve strategjikë.",
        footer_links: "Lidhje",
        footer_services_title: "Shërbimet",
        footer_expertise: "Ekspertiza",
        footer_svc1: "Hartimi i Kontratave",
        footer_svc2: "Due Diligence",
        footer_svc3: "Analizë Ligjore",
        footer_svc4: "Tregu i Energjisë",
        footer_svc5: "Qeverisje Korporative",
        footer_exp1: "Legjislacion Primar",
        footer_exp2: "Tregjet Ndërkombëtare PPA",
        footer_exp3: "Marrëveshje Inter-TSO",
    }
};

let currentLang = 'EN';

/* ── APPLY TRANSLATIONS ── */
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });
}

/* ── LANGUAGE SWITCHER ── */
const langSwitcher = document.getElementById('langSwitcher');
const langBtn = document.getElementById('langBtn');
const activeFlag = document.getElementById('activeFlag');
const activeLang = document.getElementById('activeLang');

function setLangUI(code) {
    const opt = document.querySelector(`.lang-option[data-code="${code}"]`);
    if (opt) {
        document.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        activeFlag.textContent = opt.dataset.flag;
        activeLang.textContent = code;
    }
    currentLang = code;
    localStorage.setItem('enerlex_lang', code);
    applyTranslations(code);
}

langBtn.addEventListener('click', e => {
    e.stopPropagation();
    langSwitcher.classList.toggle('open');
});

document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', e => {
        e.preventDefault();
        langSwitcher.classList.remove('open');
        setLangUI(opt.dataset.code);
    });
});

document.addEventListener('click', () => langSwitcher.classList.remove('open'));

/* ── HEADER SCROLL ── */
const hw = document.getElementById('header-wrap');
window.addEventListener('scroll', () => {
    hw.classList.toggle('scrolled', window.scrollY > 80);
    hw.classList.toggle('transparent', window.scrollY <= 80);
    document.getElementById('scroll-top').classList.toggle('show', window.scrollY > 400);
});

/* ── INIT GJUHA: URL param ka prioritet, pastaj localStorage ── */
const urlLang = new URLSearchParams(window.location.search).get('lang');
const savedLang = urlLang || localStorage.getItem('enerlex_lang') || 'EN';
setLangUI(savedLang);
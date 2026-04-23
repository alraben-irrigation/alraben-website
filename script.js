:root {
    --primary: #27ae60;
    --secondary: #0a192f;
    --dark: #111;
    --light: #f4f7f6;
    --white: #ffffff;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--secondary);
    background-color: var(--white);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Typography */
h1, h2, h3 { font-weight: 800; line-height: 1.2; }
.text-green { color: var(--primary); }
.section-title { text-align: center; font-size: 2.5rem; margin-bottom: 50px; position: relative; }
.section-title::after { content: ''; width: 60px; height: 4px; background: var(--primary); position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); }

/* Navbar */
.navbar {
    background: var(--secondary);
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 800;
    text-decoration: none;
}

.logo span { color: var(--primary); }

.nav-links {
    display: flex;
    list-style: none;
    align-items: center;
}

.nav-links li a {
    color: var(--white);
    text-decoration: none;
    margin-left: 30px;
    font-weight: 600;
    transition: var(--transition);
}

.nav-links li a:hover { color: var(--primary); }

.nav-phone {
    background: var(--primary);
    padding: 10px 20px;
    border-radius: 5px;
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.8)), url('https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=1600');
    background-size: cover;
    background-position: center;
    height: 80vh;
    display: flex;
    align-items: center;
    color: var(--white);
    text-align: center;
}

.hero h1 { font-size: 3.5rem; margin-bottom: 20px; }
.hero p { font-size: 1.2rem; margin-bottom: 30px; max-width: 700px; margin-inline: auto; }

/* Buttons */
.btn {
    display: inline-block;
    padding: 18px 35px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    transition: var(--transition);
    cursor: pointer;
    border: none;
    font-size: 1rem;
}

.btn-primary { background: var(--primary); color: var(--white); }
.btn-primary:hover { background: #219150; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }

.btn-secondary { background: var(--white); color: var(--secondary); margin-left: 15px; }
.btn-secondary:hover { background: #eee; }

.btn-block { width: 100%; }

/* Financing Banner */
.financing-banner {
    background: #eef9f2;
    padding: 15px 0;
    text-align: center;
    border-bottom: 2px solid var(--primary);
}

/* Service Cards */
.services { padding: 80px 0; background: var(--light); }
.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.service-card {
    background: var(--white);
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    transition: var(--transition);
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.service-card:hover { transform: translateY(-10px); }
.service-card i { font-size: 3rem; color: var(--primary); margin-bottom: 20px; }
.service-card .price { font-weight: 800; color: var(--primary); font-size: 1.4rem; margin: 10px 0; }

/* Why Us */
.why-us { padding: 80px 0; }
.features { display: flex; justify-content: space-around; text-align: center; gap: 20px; }
.feature i { font-size: 2.5rem; color: var(--secondary); margin-bottom: 15px; }

/* Gallery */
.gallery { padding: 80px 0; background: #fff; }
.gallery-flex { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
.gallery-item { flex: 1; min-width: 300px; position: relative; }
.gallery-item img { width: 100%; border-radius: 10px; height: 300px; object-fit: cover; }
.gallery-item .label { position: absolute; top: 10px; left: 10px; background: var(--secondary); color: white; padding: 5px 15px; border-radius: 5px; }
.gallery-item .label.green { background: var(--primary); }

/* Contact Section */
.contact { padding: 80px 0; background: var(--secondary); color: var(--white); }
.contact-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
.contact-form-container { background: var(--white); padding: 40px; border-radius: 10px; }
.contact-form-container input, 
.contact-form-container select, 
.contact-form-container textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
}

/* Info Strip */
.info-strip { background: #f9f9f9; padding: 40px 0; }
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.payment-icons i { font-size: 2rem; margin-right: 10px; color: var(--secondary); margin-top: 10px; }

/* Footer */
footer { background: #050c16; color: #777; text-align: center; padding: 30px 0; }

/* Responsive */
@media (max-width: 768px) {
    .nav-links { display: none; }
    .hero h1 { font-size: 2.2rem; }
    .contact-wrapper, .info-grid { grid-template-columns: 1fr; }
    .btn-secondary { margin-left: 0; margin-top: 10px; width: 100%; }
    .btn-primary { width: 100%; }
    .features { flex-direction: column; }
}

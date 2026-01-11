document.addEventListener('DOMContentLoaded', function () {
	const navHTML = `
	<nav class="navbar">
		<div class="logo">Strong Iron Gym</div>
		<ul class="nav-links">
			<li><a href="index.html">Hem</a></li>
			<li><a href="Bokaträningspass.html">Boka träningspass</a></li>
			<li><a href="PT.html">PT</a></li>
			<li><a href="Medlemskap.html">Medlemskap</a></li>
			<li><a href="#">Om oss</a></li>
			<li><a href="#">Kontakta oss</a></li>
		</ul>
		<a class="cta-btn" href="#">Bli medlem</a>
	</nav>
	`;

	const container = document.getElementById('site-nav');
	if (container) {
		container.innerHTML = navHTML;
	} else if (document.body) {
		document.body.insertAdjacentHTML('afterbegin', navHTML);
	}

	// Mark active link based on current filename
	try {
		const current = location.pathname.split('/').pop() || 'index.html';
		const anchors = document.querySelectorAll('.navbar .nav-links a');
		anchors.forEach(a => {
			const href = a.getAttribute('href');
			if (href && (href === current || (href === 'index.html' && current === ''))) {
				a.classList.add('active');
			}
		});
	} catch (e) {
		// silent
	}
});

const addNavbar = () => {
	const navbar = `
			<nav id="navbar" class="navbar fixed-top navbar-dark navbar-expand-lg">
				<div class="container-fluid">
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarMenu"
						aria-controls="navbarMenu"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarMenu">
						<ul class="navbar-nav me-auto">
							<li class="nav-item">
								<a class="nav-link" aria-current="page" href="index.html">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="about.html">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="education.html">Education</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="hobbies.html">Hobbies</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>`;
	let header = document.querySelector('#header');
	header.insertAdjacentHTML('beforeend', navbar);
};

const removeClassActive = () => {
	const activeMenu = document.querySelector('#navbar .nav-link.active');
	if (activeMenu) {
		activeMenu.classList.remove('active');
	}
};

const addClassActive = () => {
	let currentPage = window.location.pathname.split('/').pop();
	const navbar = document.querySelectorAll('#navbar .nav-link');
	removeClassActive();
	for (const menu of navbar) {
		let targetPage = menu.href.split('/').pop();
		if (currentPage == targetPage) {
			menu.classList.add('active');
		}
	}
};

const initNavbar = () => {
	addNavbar();
	addClassActive();
};

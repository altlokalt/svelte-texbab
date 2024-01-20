<script>
	import HeaderIcons from './HeaderIcons.svelte';
</script>

<!-- On pc, tablet etc-->
<header class="th-header header-layout3 max-h-50">
	<div class="sticky-wrapper">
		<div class="sticky-active">
			<div class="menu-area">
				<div class="container th-container">
					<div class="row align-items-center justify-content-between">
						<div class="col-auto">
							<div class="header-logo">
								<a href="index.html">
									<img
										src="{import.meta.env
											.VITE_PB_URL}/api/files/vi08f0m1bznkfa3/3yha8lupmqzb8pr/logo_W4qE8S8Q9i.png?token="
										alt="Pizzan"
									/></a
								>
							</div>
						</div>

						<div class="col-auto">
							<nav class="main-menu d-none d-lg-inline-block">
								<ul>
									<li class="menu-item-has-children">
										<a href="https://www.texbab.com/">Selv Bestilling</a>
										<ul class="sub-menu">
											<li><a href="home-restaurant.html">Restaurant Home</a></li>

											<li>
												<a href="home-pizza-burger-dark.html"
													>Pizza & Burger <span class="new-label">New</span></a
												>
											</li>
										</ul>
									</li>
									<li class="menu-item-has-children mega-menu-wrap">
										<a href="/">Bilvask</a>
										<ul class="mega-menu">
											<li>
												<a href="_https://www.texbab.com/menu/texbab_fullmenu">Selvbetjening</a>
												<ul>
													<li><a href="_home-restaurant.html">Restaurant Home</a></li>
													<li>
														<a href="_home-fast-food-rastaurant.html">Ring for assistanse</a>
													</li>
												</ul>
											</li>

											<li>
												<a href="/">Nyttig Lokal Tips</a>
												<ul>
													<li><a href="_blog.html">Blogg</a></li>
												</ul>
											</li>
										</ul>
									</li>
									<li class="menu-item-has-children">
										<a href="/">Texbab i media</a>
										<ul class="sub-menu">
											<li><a href="_blog.html">LokaleAvis</a></li>
											<li><a href="_blog-details.html">NasjonalAvis</a></li>
										</ul>
									</li>
									<li><a href="contact.html">Direkte kontakt</a></li>
								</ul>
							</nav>
							<button type="button" class="th-menu-toggle d-inline-block d-lg-none"
								><i class="far fa-bars" /></button
							>
						</div>
						<HeaderIcons />
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

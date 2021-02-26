<template>
	<v-app dark>
		<!-- <v-app-bar app dense fixed color="#fcb69f" elevate-on-scroll dark shrink-on-scroll src="https://picsum.photos/1920/1080?random"> -->
		<v-app-bar app dense fixed color="#fcb69f" elevate-on-scroll dark shrink-on-scroll src="https://i.picsum.photos/id/234/1920/1080.jpg?hmac=7tXNGeu3tSgYvak5RaJ05GoYon6e8aPHnsTxczHzwP0">
			<template v-slot:img="{ props }">
				<v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
			</template>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>

			<v-app-bar-title>Title</v-app-bar-title>

			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
			<template v-slot:extension>
				<v-tabs align-with-title>
					<v-tab nuxt to="/">Tab 1</v-tab>
					<v-tab nuxt to="/inspire">Tab 2</v-tab>
					<v-tab>Tab 3</v-tab>
				</v-tabs>
			</template>
		</v-app-bar>

		<v-main>
			<v-container>
				<nuxt />
			</v-container>
		</v-main>
		<v-footer :absolute="!fixed" app>
			<span>&copy; {{ new Date().getFullYear() }}</span>
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		data() {
			return {
				clipped: false,
				drawer: false,
				fixed: false,
				items: [
					{
						icon: "mdi-apps",
						title: "Welcome",
						to: "/",
					},
					{
						icon: "mdi-chart-bubble",
						title: "Inspire",
						to: "/inspire",
					},
				],
				miniVariant: false,
				right: true,
				rightDrawer: false,
				title: "Vuetify.js",
			};
		},
	};
</script>

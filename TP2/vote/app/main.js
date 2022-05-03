app = Vue.createApp(
	{
		// Data doit être une fonction
  		data: () => ({
    		submissions: Seed.submissions
  		})
	}
);

// Montage de l'instance Vue dans l'élément #app
app.mount('#app');
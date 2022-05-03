app = Vue.createApp(
	{
		// Data doit être une fonction
  		data: () => ({
    		submissions: Seed.submissions
  		}),

		// Propriétés calculées
		computed: {

			// Nom d'une propriété calculée
			sortedSubmissions() {
			return this.submissions.sort((a, b) => {
				return b.votes - a.votes;
			});
			}
		},

		// Méthodes dispsonibles
		methods: {

			// Nom d'une méthode
			upvote(submissionId) {
			  const submission = this.submissions.find(
				submission => submission.id === submissionId
			  );
			  submission.votes++;
			}
		}
});

// Montage de l'instance Vue dans l'élément #app
app.mount('#app');
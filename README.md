# Hackpad Blog
A blog based on Hackpad

## Demo

http://kidgodzilla.github.io/hackpad-blog

## Usage

1. Clone this repo & create a new `gh-pages` branch. This will publish your repository to

    	http://<your-github-username>.github.io/<your-repository-name>

2. Open `index.html`. In the header, you will find

		<!-- Modify this variable to change the index page of your blog -->
		<script>
			// This is the hackpad ID of my blog index, which links to other articles
			var homepage_hash = "NCoXdfcG5Ij";
		</script>

3. Modify the homepage hash **NCoXdfcG5Ij** to match the hash URL of the hackpad entry you wish to use as the index for your blog.

4. Commit & sync your changes. Now your blog should load the hackpad entry you just created.

5. To write a blog post, simply create a new hackpad entry & link to it from your homepage hackpad entry (from steps 2-4). The link URL should follow this format:

    	http://<your-github-username>.github.io/<your-repository-name>#<blog-entry-hackpad-hash>

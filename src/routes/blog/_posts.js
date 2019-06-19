// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Chromate in Effluent',
		slug: 'what-is-sapper',
		html: `
	<p><iframe width='100%' height='1500' frameborder="0" src="https://docs.google.com/document/d/e/2PACX-1vRyb9td3yuxU0FDclUY0gY3_CLptWCD0l4MLKXTYihWfL4UDcDMCPpcSBtSylhKZedh404yJkAKU6n-/pub?embedded=true"></iframe></p>
		`
	}

	
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;

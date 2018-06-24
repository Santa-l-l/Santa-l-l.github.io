{
	'use strict';
	
	window.addEventListener('DOMContentLoaded', function() {
		const
			script = Array.prototype.filter.call(
				document.getElementsByTagName('script'),
				ele => ele.src.match(/framework\.js$/)
			)[0],
			root = script.src.slice(0, script.src.lastIndexOf('/'));
		document.body.innerHTML = `
<aside>
	<input id="burger" type="checkbox" />
		<label for="burger"></label>
		<a class="avatar" href="#"></a>
		<ul>
		<li current><a href="${root}/index.html">Index</a></li>
	<li><a href="${root}/about.html">About</a></li>
	</ul>
</aside>
<article>${document.body.innerHTML}</article>
`;
	});
}
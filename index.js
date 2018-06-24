window.addEventListener('load', function() {
	let article = document.getElementsByTagName('article')[0];
	let appendPost = post => {
		let post_ele = document.createElement('div');
		post_ele.classList.add('post');
		let information_ele = document.createElement('div');
		information_ele.classList.add('information');
		let title_ele = document.createElement('p');
		title_ele.classList.add('title');
		let date_ele = document.createElement('p');
		date_ele.classList.add('date');
		let description_ele = document.createElement('p');
		description_ele.classList.add('description');
		
		title_ele.innerHTML = `<a href="${post.src}">${post.title}</a>`;
		date_ele.innerText = post.date;
		description_ele.innerText = post.description;
		
		information_ele.appendChild(title_ele);
		information_ele.appendChild(date_ele);
		post_ele.appendChild(information_ele);
		post_ele.appendChild(description_ele);
		
		article.appendChild(post_ele);
	};
	window.menu.reverse().forEach(post => appendPost(post));
});
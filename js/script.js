/*

	
	HTML,CSS,JS Code By Prashant Sani.
	http://www.openstrategy.design/
	https://prashantsani.com

*/

(function(w,d){
	d.getElementById('menu-open').addEventListener('click', function(){
		d.getElementById('nav-primary').classList.toggle('active');
	})

	d.querySelectorAll('.block-link')
	.forEach(function(el, index, array){
		var _el = el;
		el.addEventListener('click', function(e){
			e.preventDefault();

			// Remove Active Class on any sibling
			var sibling = _el.parentNode.parentNode.querySelectorAll('.block-link.active')[0];
			if(sibling){
				sibling.classList.remove('active');
			}	

			// Add an active class to current element
			_el.classList.toggle('active');

			return false;
		});
	});
})(window,document);

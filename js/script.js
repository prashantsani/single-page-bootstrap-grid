/*

	
	HTML,CSS,JS Code By Prashant Sani.
	http://www.openstrategy.design/
	https://prashantsani.com

*/

(function(w,d){
	var active = 'active';

	d.getElementById('menu-open').addEventListener('click', function(){
		d.getElementById('nav-primary').classList.toggle(active);
	})

	d.querySelectorAll('.block-link')
	.forEach(function(el, index, array){

		// cache this element + can be used in a closure function
		var _el = el;
		
		_el.addEventListener('click', function(e){
			e.preventDefault();

			// if the user has already clicked,
			// in that case, we will remove the class
			if(_el.classList.contains(active)){
				_el.classList.remove(active);
				return false
			}

			// Remove Active Class on any sibling
			var sibling = _el.parentNode.parentNode.querySelectorAll('.block-link.active')[0];
			if(sibling){
				sibling.classList.remove(active);
			}	

			// Add an active class to current element
			_el.classList.add(active);

			return false;
		});
	});
	
})(window,document);

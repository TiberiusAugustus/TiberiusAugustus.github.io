function clock() {
	function r(el, deg) {
		el.setAttribute('transform', 'rotate('+ deg +' 150 150)')
	};
	var d = new Date();
	r(sec, 6*d.getSeconds());
	r(min, 6*d.getMinutes());
	r(hour, 30*(d.getHours()%12) + d.getMinutes()/2);
}
                  
setInterval(clock, 1000)       

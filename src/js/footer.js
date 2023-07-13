const divs = document.querySelectorAll('footer div');
let i;
left();

// document.querySelector('#slider-left').onclick = userleft;
// document.querySelector('#slider-right').onclick = userright;


function userright() {
	no_active_now = 0;
	divs.forEach((elem) => { 
		if (elem.dataset.i == 9) {elem.dataset.i = 0};
		i = Number(elem.dataset.i);
		i += 1;
		elem.dataset.i = i;
		move(elem);
	});
};


function userleft() {
	no_active_now = 0;
	left();
};

function left() {
	divs.forEach((elem) => { 
		if (elem.dataset.i == 1) {elem.dataset.i = 10};
		i = Number(elem.dataset.i);
		i -= 1;
		elem.dataset.i = i;
		move(elem);
	});
};


function move(elem) {
	switch (i) {
		case 1 : 	elem.style.left = '50%';
					elem.style.width = '150px';
					elem.style.height = '150px'; 
					elem.style.opacity = 0; 
					elem.style.transform = 'translate(-720%, 10%)'; break;

		case 2 : 	elem.style.left = '50%';
					elem.style.width = '150px';
					elem.style.height = '150px'; 
					elem.style.opacity = 1; 
					elem.style.transform = 'translate(-480%, 10%)'; break;

		case 3 : 	elem.style.left = '50%';
					elem.style.width = '150px';
					elem.style.height = '150px'; 
					elem.style.opacity = 1; 
					elem.style.transform = 'translate(-340%, 10%)'; break;

		case 4 : 	elem.style.left = '50%';
					elem.style.width = '150px';
					elem.style.height = '150px'; 
					elem.style.opacity = 1; 
					elem.style.transform = 'translate(-200%, 10%)'; break;

		case 5 : 	elem.style.left = '50%';
					elem.style.width = '180px';
					elem.style.height = '210px'; 
					elem.style.opacity = 1; 
					elem.style.transform = 'translate(-50%, 0)'; break;

		case 6 : 	elem.style.left = '50%';
					elem.style.width = '150px';
					elem.style.height = '150px'; 
					elem.style.opacity = 1; 
					elem.style.transform = 'translate(100%, 10%)'; break;

		case 7 : 	elem.style.left = '50%';
					elem.style.width = '150px';
					elem.style.height = '150px'; 
					elem.style.opacity = 1; 
					elem.style.transform = 'translate(240%, 10%)'; break;

		case 8 : 	elem.style.left = '50%';
					elem.style.width = '150px';
					elem.style.height = '150px'; 
					elem.style.opacity = 1; 
					elem.style.transform = 'translate(380%, 10%)'; break;

		case 9 : 	elem.style.left = '50%';
					elem.style.width = '150px';
					elem.style.height = '150px'; 
					elem.style.opacity = 0; 
					elem.style.transform = 'translate(520%, 10%)'; break;			
	};
};

let max_no_active = 1;
let no_active_now = 0;
setInterval(noActive, 5000);
function noActive() {
	no_active_now++;
	if (no_active_now >= max_no_active) {
		left();
	};
};


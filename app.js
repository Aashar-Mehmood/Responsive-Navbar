const SEARCH_BTN = document.querySelector('div.search div');
const SEARCH_INPUT = document.querySelector('div.search input');
const BARS = document.querySelector('body>i');
const HEADER = document.querySelector('header');


SEARCH_BTN.addEventListener('click', showSearchBar);

function showSearchBar() {
	if (SEARCH_INPUT.value==='') {
		SEARCH_INPUT.classList.toggle('showBar');	
	}
	
}

BARS.addEventListener('click', ()=>{
	HEADER.classList.toggle('showHeader');
	BARS.classList.toggle('fa-bars');
	BARS.classList.toggle('fa-times');

});
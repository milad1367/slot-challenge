const CHERRY = 'ch';
const SEVEN = 'se';
const BAR = 'b1';
const BARx2 = 'b2';
const BARx3 = 'b3';

const LINE1 = 'l1';
const LINE2 = 'l2';
const LINE3 = 'l3';


const winingCombanitions = {
	'ch,ch,ch,l1': 2000,
	'ch,ch,ch,l2': 1000,
	'ch,ch,ch,l3': 4000,
	'se,se,se,*': 150,
	'(ch|se),(ch|se),(ch|se),*': 75,
	'b3,b3,b3,*': 50,
	'b2,b2,b2,*': 20,
	'b1,b1,b1,*': 10,
	'(b1|b2|b3),(b1|b2|b3),(b1|b2|b3),*': 5,
}

function calculateScore(symbol1, symbol2, symbol3, line) {
	const combanition = `${symbol1},${symbol2},${symbol3},${line}`;
	for(const key in winingCombanitions) {
		const win = new RegExp(key).test(combanition);
		if(win) {
			return winingCombanitions[key];
		}
	}
	return 0;
}

console.log(calculateScore(CHERRY, CHERRY, SEVEN, LINE1))

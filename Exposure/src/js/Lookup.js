export default class Lookup {
	constructor(options) {
		this.url = options.url;
		
		// Subscribers
		this.observers = [];
	}
	
	changeAPI(url) {
		this.url = url;
	}
	
	search(query) {
		const waitTime = Math.random() * 3;
		const _thisRef = this;
		
		console.log('Simulating wait time for ' + waitTime + ' seconds.');
		
		setTimeout(function () {
			_thisRef.onSearchFinished();
		}, (waitTime * 1000));
	}
	
	onSearchFinished() {
		this.notify(this.pretendedIDontExist());
	}
	
	pretendedIDontExist() {
		return '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Respondent extrema primis, media utrisque, omnia omnibus. Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Et quod est munus, quod opus sapientiae? Ne in odium veniam, si amicum destitero tueri. </p>\n' +
			   '<p>Nos commodius agimus. Modo etiam paulum ad dexteram de via declinavi, ut ad Pericli sepulcrum accederem. Duo Reges: constructio interrete. Totum autem id externum est, et quod externum, id in casu est. Sed potestne rerum maior esse dissensio? Quis tibi ergo istud dabit praeter Pyrrhonem, Aristonem eorumve similes, quos tu non probas? </p>\n' +
			   '<p>Huius, Lyco, oratione locuples, rebus ipsis ielunior. Habent enim et bene longam et satis litigiosam disputationem. Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod sequantur, quasi curta sententia; Ita enim vivunt quidam, ut eorum vita refellatur oratio. </p>\n' +
			   '\n';
	}
	
	subscribe(f) {
		this.observers.push(f)
	}
	
	unsubscribe(f) {
		this.observers.filter(o => o !== f);
	}
	
	notify(data) {
		this.observers.forEach(o => o(data));
	}
}
this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "THIS IS MESSAGE SECTION OF THIS WEBSITE.DEMO MESSAGE-  A 19 years of madness and I know this isn't going to stop as age is just a Number. A birthday like today must be memorable and unforgettable. Never lose your stunning smile!. You always shine like the sun and spread joy and love to everyone around you. You are one of the best souls we've ever met. What else can we say, Crazy Girl who Cares a lot ❤, Thank You So Much for being a part for our life. HAPPY BIRTHDAY stay blessed keeping ROCK and ROLLING. ___ NOTE : In next page, the 'NEXT' BUTTON is in the bottom of the page, scroll to see it n proceed...................";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 1
	},0.05);
}

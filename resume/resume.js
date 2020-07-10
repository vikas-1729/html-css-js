//function for smooth movement
var id;
var links=document.querySelectorAll('nav .horizontal-list a');
for(var i=0;i<links.length;i++){
	links[i].addEventListener('click',function(event){
		event.preventDefault();
		var targetId=this.textContent.trim().toLowerCase();
		var targetSection=document.getElementById(targetId);

		id=setInterval(function(){
			scrollVertically(targetSection,targetId);
		},50);
	});
}
function scrollVertically(targetSection,targetId){
	window.scrollBy(0,50);
	if(targetSection.getBoundingClientRect().y<=35){
		clearInterval(id);
		return;
	}
	if(targetId=='contact'&&targetSection.getBoundingClientRect().y<=236){
		clearInterval(id);
		return;	
	}
}//-227.65625 //182
//function for filling skills bar
var skillSize=[50,60,78,45,75,80,36,25];
var skillColor=['red','yellow','green','blue','red','purple','red','orange'];

//add scroll evnent;
window.addEventListener('scroll',function(){
	skillFill();
});
var animationDone=false;
var wdInitalise=false;
function skillFill(){
	var skills=document.getElementById('skills');
	var len=skills.getBoundingClientRect().top;
	if(!animationDone&&len<window.innerHeight){
		animationDone=true;
		fillSkills();
		wdInitalise=false;
	}
	if(!wdInitalise&&len<-238){
		let skillsBar =document.querySelectorAll('.skill-content>div>div');
		fillColor(skillsBar);
		animationDone=false;
		wdInitalise=true;
	}
}
function fillColor(skillsBar){
	let k=0;
	for(let i of skillsBar){
		i.style.backgroundColor=skillColor[k];
		k=k+1;
		i.style.width=0+"%";
	}
}
function fillSkills(){
	let skillsBar =document.querySelectorAll('.skill-content>div>div');
	fillColor(skillsBar);
	for(let div of skillsBar){
		let prevWidth=0;
		let maxSize=div.getAttribute('max-wd');

	let id=setInterval(function(){
		
		if(prevWidth>=maxSize){
			clearInterval(id);
			return;
		}
		prevWidth=prevWidth+1;
		div.style.width=prevWidth+"%";
	
		
	},10);
	}
}


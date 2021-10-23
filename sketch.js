function setup() {
	createCanvas(1512,860);

	//people
	trevor = new person("Trevor Bollinger");
	andrew = new person("Andrew Smith");
	jared = new person("Jared Koelzer");
	bayley = new person("Bayley Haddix");
	mason = new person("Mason Siragusa");
	aj = new person("AJ Siragusa");
	jace = new person("Jace Blackman");
	audra = new person("Audra Krebs");
	nathan = new person("Nathan Madvig");

	//vars
	controlling = mason;
	people = [trevor, andrew, jared, bayley, mason, aj, jace, audra, nathan];
	debug = true;
	menuBarHeight = 75;
	padding = 10;
	buttonWidth = (550/2)-10;

	testButton= new button();
	testButton2= new button();
}

function draw() {
	background("lightgray");

	for(i = 0; i <  people.length; i++){
		if(people[i] != controlling){
			people[i].inControl = false;
		} else {
			people[i].inControl = true;
		}
	}

	for(i = 0; i<people.length; i++){
		people[i].update();
	}

	physics();


	/* USER INTERFACE */

	if(debug==true){
		fill("white");
		textSize(15)
		text(mouseX+", "+mouseY, mouseX+30, mouseY-10); 
	}

	fill("brown");
	rect(0,(canvas.height/2) - menuBarHeight, (canvas.width) / 2, menuBarHeight);

	fill("white");
	textSize(20);
	text(":) "+controlling.name, buttonWidth*2 + padding*3,((canvas.height) / 2) - menuBarHeight/1.65);
	text("Shit Urge: "+ controlling.shitUrge, buttonWidth*2 + padding*3, ((canvas.height) / 2) - menuBarHeight/4.56)


	slot1 = [padding, (((canvas.height)/2)-menuBarHeight+padding), buttonWidth, menuBarHeight-20];
	slot2 = [(padding*2)+slot1[2],slot1[1], slot1[2],slot1[3]]

	testButton.update(slot1[0],slot1[1],slot1[2],slot1[3],"orange", "Change Player", 30, 26, 37, randomPlayer);
	testButton2.update(slot2[0],slot2[1],slot2[2],slot2[3],"orange", "Shit", 30, 100, 37);
	

}

function randomPlayer(){
	controlling = random(people);
}
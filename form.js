class Form {
    constructor(){
        this.input = createInput('').attribute("placeholder","username");
        this.enter = createButton('enter');
        this.greetings = createElement('h3');
        this.title = createElement('h1').style("color","white");
        this.slingshot = createButton("slingshot");
        this.shot = createButton("shot");
        
        
    }

    display(){
        this.title.html("ARCHERY GAME");
        this.title.position(displayWidth/2-110,50)

        this.input.position(500, 200);
        this.enter.position(500, 300);



        this.enter.mousePressed(()=>{
            this.input.hide();
            this.enter.hide();
            this.title.hide();
            
      
            playername = this.input.value();

            this.greetings.html("Hello " + playername );
            this.greetings.position(130, 160);

            this.slingshot.position(displayWidth/2-200,300);
            this.shot.position(displayWidth/2+200,300);
            
            this.slingshot.mousePressed(()=>{
                this.slingshot.hide();
                this.shot.hide();
                line1 = new Box(100,200,70);
                rope = new Bow(line1.body, {x:200, y:400});
                ground = new Ground(displayWidth/2,720,displayWidth,20);
            holder = 1;
            })
            this.shot.mousePressed(()=>{
                this.slingshot.hide();
                this.shot.hide();
                ex = new Box(100,20,80);
                ground = new Ground(displayWidth/2,720,displayWidth,20);
            holder=2;
            })
           
          });
    }

}
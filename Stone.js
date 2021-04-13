class Stone {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      }
      this.body = Bodies.rectangle(this.body.position.x, this.body.position.y, 40, 40, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);
    }

}
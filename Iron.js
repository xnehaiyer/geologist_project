class Iron {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 3,
        'restitution':0.8
      }
      this.body = Bodies.rectangle(this.body.position.x, this.body.position.y, 60, 60, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
    }

}
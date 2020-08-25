class bob{
constructor(x,y,radius){
var options={
    restitution:1.0,
    friction:0.3,
    density:0.8
}
this.body=Bodies.circle(x,y,radius,options)
this.radius=radius
//this.body.velocity.x=5
    World.add(world,this.body);
}
display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill(255,0,254);
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius)
    pop()
    
}
}

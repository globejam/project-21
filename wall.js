class wall
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, h, w , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var wallPos=this.body.position;		

			push()
			translate(wallPos.x, wallPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.h,this.w);
			pop()
			
	}

}
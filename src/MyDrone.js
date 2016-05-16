/**
 * MyDrone
 * @constructor
 */
var degToRad = Math.PI / 180.0;

 function MyDrone(scene) {
	CGFobject.call(this,scene);

	this.x=0;
	this.y=0;
	this.z=0;
	this.yRot=200*degToRad;
	this.slices = 12;
	this.stacks = 2;
	this.cilinder1 = new MyCylinder(this.scene,this.slices, this.stacks);
	this.cilinder2 = new MyCylinder(this.scene,this.slices, this.stacks);

	this.initBuffers();
};

MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor=MyDrone;

MyDrone.prototype.display = function() {

	
	//cilinder1
	this.scene.pushMatrix();
	this.scene.scale(0.25,0.25,1);
    this.cilinder1.display();
    this.scene.popMatrix();


	//cilinder2
	this.scene.pushMatrix();
	this.scene.translate(-this.stacks/4,0,(this.stacks/4));
	this.scene.scale(0.5,0.5,0.25);
	this.scene.rotate(90*degToRad,0,1,0);
    this.cilinder1.display();
    this.scene.popMatrix();
	
    
	/*this.vertices = [
            0.5, 0.3, 0,
            -0.5, 0.3, 0,
            0, 0.3, 2
			];

	this.indices = [
            0, 1, 2
        ];
		
	this.normals = [
	0,1,0,
	0,1,0,
	0,1,0              
];
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();*/
};

MyDrone.prototype.moveForward=function(speed){
	
	this.x+=Math.sin(this.yRot)*speed/15;
	this.z+=Math.cos(this.yRot)*speed/15;
}

MyDrone.prototype.moveBackward=function(speed){

	this.x-=Math.sin(this.yRot)*speed/15;
	this.z-=Math.cos(this.yRot)*speed/15;
}

MyDrone.prototype.rotateLeft=function(speed){

	this.yRot+=speed*degToRad;
}

MyDrone.prototype.rotateRight=function(speed){

	this.yRot-=speed*degToRad;
}

MyDrone.prototype.moveUp=function(speed){
	
	this.y+=speed/15;
}

MyDrone.prototype.moveDown=function(speed){
	
	this.y-=speed/15;
}



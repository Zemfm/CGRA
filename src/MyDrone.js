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

	this.initBuffers();
};

MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor=MyDrone;

MyDrone.prototype.initBuffers = function() {
    
	this.vertices = [
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
	this.initGLBuffers();
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



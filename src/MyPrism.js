/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

	this.indices = [];
 	this.vertices = [];
 	this.normals = [];

	var angle = 2 * Math.PI / (this.slices);
	
	for (var stack = 0; stack < this.stacks + 1; stack++)
	{
		for (var slice = 0; slice < this.slices; slice++)
		{
		this.vertices.push(Math.cos(slice * angle), Math.sin(slice * angle), stack / this.stacks);
		this.vertices.push(Math.cos((slice + 1) * angle), Math.sin((slice + 1) * angle), stack / this.stacks);
		this.normals.push(Math.cos(slice * angle + angle / 2), Math.sin(slice * angle + angle / 2),0);
		this.normals.push(Math.cos(slice * angle + angle / 2), Math.sin(slice * angle + angle / 2),0);
		}
	}

	for (var stack = 0; stack < this.stacks; stack++)
	{
		for (var slice = 0; slice < this.slices; slice++)
		{
		this.indices.push((stack * this.slices + slice) * 2, (stack * this.slices + slice) * 2 + 1, ((stack + 1) * this.slices + slice) * 2 + 1);
		this.indices.push((stack * this.slices + slice) * 2, ((stack + 1) * this.slices + slice) * 2 + 1, ((stack + 1) * this.slices + slice) * 2);
		}
	} 

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
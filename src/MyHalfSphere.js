/**
 * MyHalfSphere
 * @constructor
 */
 function MyHalfSphere(scene) {
 	CGFobject.call(this,scene);
	
	
 	this.initBuffers();
 };

 MyHalfSphere.prototype = Object.create(CGFobject.prototype);
 MyHalfSphere.prototype.constructor = MyHalfSphere;

 MyHalfSphere.prototype.initBuffers = function() {

	this.indices = [
 	];
 	this.vertices = [
 	];
 	this.normals = [
 	];
    
    var latitudeBands = 30;
    var longitudeBands = 30;
    var radius = 0.75;


    for (var latNumber = 0; latNumber <= latitudeBands; latNumber++) {

      var theta = latNumber * Math.PI / latitudeBands;
      var sinTheta = Math.sin(theta);
      var cosTheta = Math.cos(theta);

      for (var longNumber = 0; longNumber <= longitudeBands; longNumber++) {
        var phi = longNumber * 2 * Math.PI / longitudeBands;
        var sinPhi = Math.sin(phi);
        var cosPhi = Math.cos(phi);

        var x = cosPhi * sinTheta;
        var y = cosTheta;
        var z = sinPhi * sinTheta;
       // var u = 1 - (longNumber / longitudeBands); para textureCoords
       // var v = 1 - (latNumber / latitudeBands);

        this.normals.push(x);
        this.normals.push(y);
        this.normals.push(z);
       // textureCoordData.push(u);
        //textureCoordData.push(v);
        this.vertices.push(radius * x);
        this.vertices.push(radius * y);
        this.vertices.push(radius * z);


        }

    }



    for (var latNumber = 0; latNumber < latitudeBands; latNumber++) {
      for (var longNumber = 0; longNumber < longitudeBands; longNumber++) {
        var first = (latNumber * (longitudeBands + 1)) + longNumber;
        var second = first + longitudeBands + 1;
        this.indices.push(first);
        this.indices.push(second);
        this.indices.push(first + 1);

        this.indices.push(second);
        this.indices.push(second + 1);
        this.indices.push(first + 1);
      }
    }


    this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();

 }
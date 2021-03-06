var canvas = document.querySelector('canvas');
            
            canvas.width = window.innerWidth - 20; 
            canvas.height = window.innerHeight - 20; 
            
            var c = canvas.getContext('2d');
          
            var mouse = {
                x: undefined,
                y: undefined  
             };
                         
            var colorArray = [
                '#081CFF',
                '#086BEB',
                '#4889ff',
                '#66a0fa',
                '#6ebdff',
            ];

     document.addEventListener('contextmenu', event => event.preventDefault());
		
	    document.addEventListener("keydown", function(e) {
		if (e.keyCode == '70') {
              	     document.documentElement.requestFullscreen();
		}
            });
            
            window.addEventListener('mousemove',
                function(event) { 
                    mouse.x = event.x; 
                    mouse.y = event.y; 
            });
            
            window.addEventListener('resize', function() { 
                canvas.width = window.innerWidth - 20;
                canvas.height = window.innerHeight - 20;
                
                radius = 10;
                number = 700;
                speed = 1;
                init(radius, number, speed);
            });
            
            window.addEventListener('keydown', function(e) { 
                if (e.keyCode == '71') {
                    if (radius == 10) {
                        
                        if (range == 80) {
                            range = 200;
                            moveSpeed = 10
                        } else {
                            range = 80;
                            moveSpeed = 1;
                        };
                        
                    } else if (radius == 3) {
                        
                        if (range == 40) {
                            range = 41;
                            moveSpeed = 10;
                        } else {
                            range = 40;
                            moveSpeed = 1;
                        };
                        
                    };
                };
                
            });
            
            window.addEventListener('keydown', function(e) { 
                if (e.keyCode == '49') {
                    mode = 0;
                } else if (e.keyCode == '51') {
                    mode = 2;
                } else if (e.keyCode == '50') {
                    mode = 1;
                };
            });
            
            window.addEventListener('keydown', function(e) { 
                if (e.keyCode == '13') {
                    radius = 10;
                    number = 700;
                    speed = 1;
                    init(radius, number, speed);
                    range = 80;
                    moveSpeed = 1;
                };
            });
            
            window.addEventListener('keydown', function(e) { 
                if (e.keyCode == '83') {
                    if (scoreIf == 1) {
                        scoreIf = 0;
                    } else {
                        scoreIf = 1;
                    };
                };
            });
            
            window.addEventListener('keydown', function(e) { 
                if (e.keyCode == '84') {
                    radius = 3;
                    number = 100;
                    speed = 1;
                    init(radius, number, speed);
                    range = 40;
                    moveSpeed = 1;
                    
                };
            });
            
            window.addEventListener('keydown', function(e) { 
                if (e.keyCode == '32') {
                    if (menu == 0) {
                        menu = 1;
                        //mode = 1;
                    } else {
                        menu = 0;
                    };
                };
            });
            
            window.addEventListener('keydown', function(e) { 
                if (e.keyCode == '77') {
                    for (var i = 0; i < (innerHeight / 5000) * innerWidth; i++) {
                        
                        var sspeed = 1;
                        
                        var sdx = (Math.random() - .5) * sspeed;
                        var sdy = (Math.random() - .5) * sspeed;
                        
                        objectArray.push(new Object(mouse.x, mouse.y, radius, sdx, sdy));
                    };
                };
            });
            
            var range = 80;
            var moveSpeed = 1;
            var mode = 1;
            var menu = 1;
            
            var score = 0;
            var scoreIf = 1;
            
            function Object(x, y, radius, dx,dy) { 
                this.x = x;    
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.radius = radius;
                this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
                this.ogColor = this.color;
             
                this.draw = function() {
                    c.beginPath();      
                    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    c.fillStyle = this.color;
                    c.fill();
                };
             
                this.update = function() {
                    
                    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                        this.dx = -this.dx;
                    };
                
                    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                        this.dy = -this.dy;
                    };
                    
                    this.x += this.dx;
                    this.y += this.dy;
                    
                    this.pull();
                    
                    this.draw();
                };
                
                this.pull = function() {
                    ////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////
                    if (mode == 0) {
                        
                        if (mouse.x - this.x < range && mouse.x - this.x > -range 
                        && mouse.y - this.y < range && mouse.y - this.y > -range) {
                            if (this.x > mouse.x) {
                                this.x -= moveSpeed;
                                this.color = 'black';
                                score += 1;
                            } 
                            
                            else if (this.x < mouse.x) {
                                this.x += moveSpeed;
                                this.color = 'black';
                                score += 1;
                            };
                            
                        } else {
                            if (this.color == 'black') {
                                this.color = this.ogColor;
                            };
                        };
                        
                        if (mouse.x - this.x < range && mouse.x - this.x > -range 
                        && mouse.y - this.y < range && mouse.y - this.y > -range) {
                            if (this.y > mouse.y) {
                                this.y -= moveSpeed;
                                this.color = 'black';
                            } 
                            
                            else if (this.y < mouse.y) {
                                this.y += moveSpeed;
                                this.color = 'black';
                            };
                            
                        };
                        ////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////
                    } else if (mode == 1) {
                        score = 0;
                        
                        if (mouse.x - this.x < range && mouse.x - this.x > -range 
                        && mouse.y - this.y < range && mouse.y - this.y > -range) {
                            if (this.x > mouse.x) {
                                this.color = 'black';
                            } 
                            
                            else if (this.x < mouse.x) {
                                this.color = 'black';
                            };
                            
                        } else {
                            if (this.color == 'black') {
                                this.color = this.ogColor;
                                
                            };
                        };
                        
                        if (mouse.x - this.x < range && mouse.x - this.x > -range 
                        && mouse.y - this.y < range && mouse.y - this.y > -range) {
                            if (this.y > mouse.y) {
                                this.color = 'black';
                            } 
                            else if (this.y < mouse.y) {
                                this.color = 'black';
                            }
                        }
                        ////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////
                    } else if (mode == 2) {
                        
                        if (mouse.x - this.x < range && mouse.x - this.x > -range 
                        && mouse.y - this.y < range && mouse.y - this.y > -range) {
                            if (this.x > mouse.x) {
                                this.x -= moveSpeed;
                                this.color = 'black';
                                score += 1;
                            } else if (this.x < mouse.x) {
                                this.x += moveSpeed;
                                this.color = 'black';
                                score += 1;
                            }
                            
                            if (this.y > mouse.y) {
                                this.y -= moveSpeed;
                            } else if (this.y < mouse.y) {
                                this.y += moveSpeed;
                            }
                            
                            
                            
                        } else {
                            if (this.color == 'black') {
                                
                                if (this.x > mouse.x) {
                                    this.x -= moveSpeed;
                                } else if (this.x < mouse.x) {
                                    this.x += moveSpeed;
                                }
                                
                                if (this.y > mouse.y) {
                                this.y -= moveSpeed;
                                
                                } else if (this.y < mouse.y) {
                                    this.y += moveSpeed;
                                }
                            }
                        }
                        
                    }
                }//THIS OS THE METHOD END
            }// this is THE FUNCTION END
            
            ////////////////////////////////////////////////////////////////////
            ///==============================================================///
            ///==============================================================///
            ////////////////////////////////////////////////////////////////////
            
            var objectArray = [];
            var radius = 10;
            var number = 700;
            var speed = 1;
            
            function init(radius0, number0, speed0) {
                objectArray = [];
                
                for (var i = 0; i < (innerHeight / number0) * innerWidth; i++) {
                    
                    var x = Math.random() * (innerWidth - radius0 * 2) + radius0; 
                    var y = Math.random() * (innerHeight - radius0 * 2) + radius0; 
                    var dx = (Math.random() - .5) * speed0;
                    var dy = (Math.random() - .5) * speed0;
                    
                    objectArray.push(new Object(x, y, radius0, dx, dy));
                };
            };
            
            function animate() {
                requestAnimationFrame(animate); 
                c.clearRect(0, 0, innerWidth, innerHeight); 
                
                score = 0;
                
                for (var i = 0 ;i < objectArray.length; i++) {
                    objectArray[i].update();
                };
                
                if (menu == 1) {
                    c.clearRect(0, 0, innerWidth, innerHeight);
                    c.fillStyle  = 'blue';
                    c.font = ((innerHeight + innerWidth) / 60) + 'px verdana';
                    c.fillText("Space = menu", innerWidth / 24.56, innerHeight / 8.3);
                    c.fillText("1 = toggle blackhole on", innerWidth / 24.56, innerHeight / 4.3);
                    c.fillText("2 = toggle blackhole off", innerWidth / 24.56, innerHeight / 3.0);
                    c.fillText("Enter = reset", innerWidth / 24.56, innerHeight / 2.3);
                    c.fillText("G = toggle god mode", innerWidth / 24.56, innerHeight / 1.85);
                    c.fillText("M = MOOOORE balls", innerWidth / 24.56, innerHeight / 1.55);
                    c.fillText("T = tiny mode", innerWidth / 24.56, innerHeight / 1.35);
                    c.fillText("There MAY be bugs, and i'll try to fix them.", innerWidth / 2.5, innerHeight / 3.0);
		            c.fillText("Also, these projects I do with HTML ", innerWidth / 2.5, innerHeight / 2.3);
		            c.fillText("are VERY cpu intensive. ", innerWidth / 2.5, innerHeight / 1.85);
		            c.fillText("S = score toggle", innerWidth / 24.56, innerHeight / 1.20);
		            c.fillText("3 = Immortal Mode", innerWidth / 24.56, innerHeight / 1.08);
                };
                
                if (menu == 0 && scoreIf == 1) {
                    c.fillStyle = '#00ff08';
                    c.font = ((innerHeight + innerWidth) / 40) + 'px verdana';
                    c.fillText(score, innerWidth / 20, innerHeight / 6);
                }    
            }
            
            init(radius, number, speed);
            animate();

REPS=10000;

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

function Zerg(name) {
  this.name = name;

  this.razzle = function() {
    console.log("I love to razzle");
  }
}

function Nicezerg(name) {
  this.name = name;
}

Nicezerg.prototype.razzle = function() {
  console.log("I love to razzle");
}

suite.add('Test ugly-ass way', function() {
  var i,
    a = [];
  for (i = 0; i < REPS; i++) {
    a.push(new Zerg(i));
  }
})
.add('Test nice way', function() {
  var i,
    a = [];
  for (i = 0; i < REPS; i++) {
    a.push(new Nicezerg(i));
  }
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log(this);
  //console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();

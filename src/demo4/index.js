import answer from 'the-answer';

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

export default () => {
    var x = new Point('huyue','hy');
    console.log(x.toString());
  console.log(`the answer is ${answer}`);
}

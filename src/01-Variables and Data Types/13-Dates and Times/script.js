let d;

d = new Date();
d = d.toString();

d = new Date(2021, 6, 10, 11, 30, 6);

d = new Date('2021-07-10T12:30:55');
d = new Date('03/30/2004 02:24:00');
// d = new Date('2022-07-10');

// get timestamp
d = Date.now();

// get timestamp of specific date
d = new Date('03/30/2004 12:30:00');
d = d.getTime();
d = d.valueOf();

// create date from timestamp
d = new Date(1080671400000);

// timestamp in seconds
d = Math.floor(Date.now() / 1000);

console.log(d);
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//     console.log(item);
// });

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social) {
    console.log(social);
}

// socials.forEach(logSocials);

const socialObj = [
    {title: 'Twitter', url: 'https://twitter.com'},
    {title: 'LinkedIn', url: 'https://linkedin.com'},
    {title: 'Facebook', url: 'https://facebook.com'},
    {title: 'Instagram', url: 'https://instagram.com'},
];

socialObj.forEach((item) => console.log(item.url));
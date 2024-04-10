let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"In the realm of football, passion is our fuel, determination is our compass, and victory is our destination."`,
    person: `Rodrygo Goes`
}, {
    quote: `"At Real Madrid, we don't fear challenges; we embrace them, knowing that they are the stepping stones to success." `,
    person: `Raphael Varane`
}, {
    quote: `"To wear the white jersey is to embody the spirit of Real Madrid – to never give up, to fight until the last whistle, and to always strive for excellence." `,
    person: `Dani Carvajal`
}, {
    quote: `"Dreams don't work unless you do. Every training session, every match is an opportunity to chase our dreams and make them a reality."`,
    person: `Thibaut Courtois`
}, {
    quote: `"The rivalry fuels our determination, but respect defines our sportsmanship. We compete fiercely, but always with integrity."`,
    person: `Lucas Vázquez`
}, {
    quote: `"Real Madrid is more than just a football club; it's a symbol of excellence, a legacy built on passion and determination." `,
    person: `Marcelo`
}, {
    quote: `"In football, there are no shortcuts to success. Hard work, discipline, and sacrifice pave the path to greatness."`,
    person: `Federico Valverde`
}, {
    quote: `"We are not just a team; we are a family. Together, we fight for victory, for honor, for Real Madrid."`,
    person: `Vinícius Júnior`
}, {
    quote: `"The love for this club runs deep in my veins. Every time I step onto the pitch, I give my all for the fans who support us through thick and thin."`,
    person: `Casemiro`
}, {
    quote: `"Playing for Real Madrid means carrying the weight of history on your shoulders, but also having the privilege to write new chapters of glory."`,
    person: `Luka Modric`
}, {
    quote: `"Work harder, nobody cares."`,
    person:`Kuba Vrajík`
}, {
    quote: `"Success is not just about talent; it's about dedication, perseverance, and teamwork."`,
    person: `Toni Kroos`
}, {
    quote: `"Every match is a new challenge, an opportunity to show our passion for the game and the badge we wear."`,
    person: `Karim Benzema`
}, {
    quote: `"In football, as in life, you need to believe in yourself and work hard to achieve greatness."`,
    person: `Sergio Ramos`
}, {
    quote: `"Your love makes me strong, your hate makes me unstoppable."`,
    person: `Cristiano Ronaldo`
}, {
    quote: `"Dreams are not what you see in your sleep, dreams are things which do not let you sleep."`,
    person: `Cristiano Ronaldo`
}, {
    quote: `"Your limits are all in your head. You must believe in yourself, defy the odds, and push beyond what you think is possible."`,
    person: `Cristiano Ronaldo`
}, {
    quote: `"Every time I step onto the pitch, I give my all. I play with passion, determination, and a hunger to win."`,
    person: `Jude Bellingham`
}, ]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})
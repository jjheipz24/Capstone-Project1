let portfolios = [{
        pfp: 'images/placeholder-pfp.png',
        major: '4 year New Media Design (BFA)',
        name: 'Anne Elliott',
        blurb: "I am a UX designer fascinated with the intersection between art, technology and sound. I have an undying passion for learning, experimenting, and creating unique experiences grounded in empathy.",
        chips: ["Visual Design", "UI/UX Design", "3D", "Motion Graphics"],
        photo1: 'images/elliott_photo1.jpg',
        photo2: 'images/elliott_photo2.jpg',
        link: "http://http://anneelliott.design/"
    },
    {
        pfp: 'images/placeholder-pfp.png',
        major: '4 year New Media Design (BFA)',
        name: 'Sarah Danseglio',
        blurb: "I aim to improve experiences through the effects of visuals and aesthetics. I'm a hard worker and a good listener, and I have a little too much patience when it comes to tedious tasks.",
        chips: ["Visual Design", "Interactive Design", "3D", "Motion Graphics"],
        photo1: 'images/danseglio_photo1.jpg',
        photo2: 'images/danseglio_photo2.png',
        link: "http://sarahdanseglio.com/index.html"

    },
    {
        pfp: 'images/placeholder-pfp.png',
        major: '4 year New media Design (BFA)',
        name: 'Gabriel Cagara',
        blurb: "I believe that my experiences in living in three countries, interning at Google and Microsoft have helped me understand the importance of people and their happiness.",
        chips: ["Visual Design", "Interactive Design", "UI/UX Design"],
        photo1: 'images/cagara_photo1.png',
        photo2: 'images/cagara_photo2.png',
        link: "https://gabecagara.com/"
    },
    {
        pfp: 'images/placeholder-pfp.png',
        major: '4 year New media Design (BFA)',
        name: 'Sophia Zapata',
        blurb: "I am curious about nature, especially animals, and how the world around me works from a structural level. 3D allows me to explore and build anything on Earth or in my imagination in a more aesthetically pleasing way.",
        chips: ["3D Design"],
        photo1: 'images/zapata_photo1.jpg',
        photo2: 'images/zapata_photo2.jpg',
        link: "https://sophiazapata.com/"
    },

];
let app = new Vue({
    el: '#root',
    data: {
        test: "testing vue and sass",
        portfolios,
        sidebars: [{
                title: 'RIT Portfolios'
            },
            //insert majors, year, skills, job filters
        ],
    },
});

let portfolioAdd = new Vue({
    el: '#add-portfolio',
    data: {
        portfolios,
        major: '',
    },

    methods: {
        addPortfolio(evt) {
            evt.preventDefault();
            portfolios.push({
                pfp: 'images/placeholder-pfp.png',
                major: this.major,
                name: 'Anne Elliott',
                blurb: "I am a UX designer fascinated with the intersection between art, technology and sound. I have an undying passion for learning, experimenting, and creating unique experiences grounded in empathy.",
                chips: ["Visual Design", "UI/UX Design", "3D", "Motion Graphics"],
                photo1: 'images/elliott_photo1.jpg',
                photo2: 'images/elliott_photo2.jpg',
                link: "http://http://anneelliott.design/"
            })
        }
    }
})
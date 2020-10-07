//portfolios array
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

//stores showForm toggle state
//allows value showForm to be changed in both Vue instances
const store = new Vuex.Store({
    state: {
        showForm: false,
    },

    mutations: {
        add: state => state.showForm = true,
    }
});

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
    methods: {
        add() {
            store.commit('add');
            //console.log(store.state.showForm);
        }
    }
});

let portfolioAdd = new Vue({
    el: '#add-portfolio',
    data: {
        portfolios,
        major: '',
        name: '',
        blurb: "",
        chips: "",
        link: ""
    },

    methods: {
        addPortfolio(evt) {
            evt.preventDefault();
            portfolios.unshift({
                pfp: 'images/placeholder-pfp.png',
                major: this.major,
                name: this.name,
                blurb:  this.blurb,
                chips: this.createChips(this.chips),
                photo1: 'images/placeholder-project1.jpg',
                photo2: 'images/placeholder-project2.jpg',
                link: this.link,
            });

            store.state.showForm = false;
        },

        createChips(chips){
            let newChipArr = chips.split(",");
            return newChipArr;
        }
    }
})


/*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
}); 

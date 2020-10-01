//Template for components

Vue.component('portfolio-slat', {
    props: ['pfp', 'major', 'name', 'blurb', 'chips', 'photo1', 'photo2', 'link'],
    template: `<div>
                    <div class="portfolio-content">
                        <div class="pfp-holder">
                            <b-img class="pfp" v-bind:src="pfp" alt="Profile Picture"></b-img>
                        </div>
                        <div class="info">
                            <span class="major">{{ major }}</span>
                            <h2 class="name">{{ name }}</h2>
                            <p class="bio">{{ blurb }}</p>
                            <div class="chip-container">
                                <div class="chips" v-for="chip in chips">
                                    <span class="chip">{{chip}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="photo-holder">
                            <b-img thumbnail fluid v-bind:src="photo1" alt="First project image"></b-img>
                        </div>
                        <div class="photo-holder">
                            <b-img thumbnail fluid v-bind:src="photo2" alt="Second project image"></b-img>
                            <a class="view-portfolio" v-bind:href="link">View Portfolio ></a>
                        </div>
                        
                    </div>
            </div>`
});

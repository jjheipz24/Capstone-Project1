//Template for components

Vue.component('portfolio-slat', {
    props: ['pfp', 'major', 'name', 'blurb', 'chips', 'photo1', 'photo2'],
    template: `<div class="portfolio>
                <b-row>
                    <b-col>
                        <div class="pfp_holder">
                            <b-img v-bind:src="pfp" alt="Profile Picture"></b-img>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="info">
                            <span class="major">{{ major }}</span>
                            <h2 class="name">{{ name }}</h2>
                            <p class="bio">{{ blurb }}</p>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="photo-holder>
                            <b-img thumbnail fluid v-bind:src="photo1" alt="First project image"</b-img>
                        </div>
                    </b-col>
                    <b-col>
                    <div class="photo-holder>
                        <b-img thumbnail fluid v-bind:src="photo2" alt="Second project image"</b-img>
                    </div>
                </b-col>
                </b-row>
            </div>`
});
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

//filtering component
Vue.component('portfolio-sidebar', {
    props: ['title', 'search', 'refine', 'major', 'year', 'skills', 'job'],
    template: `<div>
                    <div class="nav-content">
                        <h1 class="title">{{title}}</h1>

                    <form class="searchbar">
                        <div class="searchbar-input">
     <i class="icon-search"></i>
                        <input class="searchterm" type="search" placeholder="Search by major, skills, etc.">
                        <a href="#" class="searchbar-clear"></a>
                        </div>
                    </form>

                        <h2 class="refine">Refine your search.</h2>
                        <hr class="solid">
                        <div class="categories">
                        <b-dropdown text="Major" variant="outline" class="m-2">
                            <b-dropdown-item>College of Art and Design</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>New Media Design (BFA)</b-dropdown-item>
                            <b-dropdown-item>Graphic Design (BFA)</b-dropdown-item>
                            <b-dropdown-item>Golisano College of Computing and Information Sciences</b-dropdown-item>

                            <b-dropdown-item>Grad Student</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            </b-dropdown>
                        </div>

                        <div class="categories">
                        <b-dropdown text="Year" variant="outline" class="m-2">
                            <b-dropdown-item>First Year</b-dropdown-item>
                            <b-dropdown-item>Second Year</b-dropdown-item>
                            <b-dropdown-item>Third Year</b-dropdown-item>
                            <b-dropdown-item>Fourth Year</b-dropdown-item>
                            <b-dropdown-item>Fifth Year</b-dropdown-item>
                            <b-dropdown-item>Grad Student</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            </b-dropdown>
                        </div>

                        <div class="categories">
                        <b-dropdown text="Skills" variant="outline" class="m-2">
                            <b-dropdown-item>New Media Design</b-dropdown-item>
                            <b-dropdown-item>New Media Interactive Development</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>College of Arts</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            </b-dropdown>
                        </div>

                        <div class="categories">
                        <b-dropdown text="Job Type" variant="outline" class="m-2">
                            <b-dropdown-item>New Media Design</b-dropdown-item>
                            <b-dropdown-item>New Media Interactive Development</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>College of Arts</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            </b-dropdown>
                        </div>
                    </div>
               </div>`
});




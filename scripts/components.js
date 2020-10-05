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
                        <div class="categories">
                            <div class="dropdown">
                                <div class="select">
                                    <span class="dropdown-toggle" data-toggle="dropdown">Major</span>
                                </div>
                                    <input type="hidden" name="category">
                                    <ul class="dropdown-menu">
                                <li id="art">College of Art and Design</li>
                                <li id="golisano">Golisano College of Computing and Information Sciences</li>
                                    </ul>
                            </div>

                        <hr class="solid">
                            <div class="dropdown">
                                <div class="select">
                                    <span class="dropdown-toggle" data-toggle="dropdown">Year</span>
                                </div>
                                    <input type="hidden" name="category">
                                    <ul class="dropdown-menu">
                                <li id="first">First Year</li>
                                <li id="second">Second Year</li>
                                <li id="third">Third Year</li>
                                <li id="fourth">Fourth Year</li>
                                <li id="fifth">Fifth Year</li>
                                    </ul>
                            </div>

                        <hr class="solid">
                            <div class="dropdown">
                                <div class="select">
                                    <span class="dropdown-toggle" data-toggle="dropdown">Skills</span>
                                </div>
                                    <input type="hidden" name="category">
                                    <ul class="dropdown-menu">
                                <li id="art">College of Art and Design</li>
                                <li id="golisano">Golisano College of Computing and Information Sciences</li>
                                    </ul>
                            </div>

                        <hr class="solid">
                            <div class="dropdown">
                                <div class="select">
                                    <span class="dropdown-toggle" data-toggle="dropdown">Job Type</span>
                                </div>
                                    <input type="hidden" name="category">
                                    <ul class="dropdown-menu">
                                <li id="art">College of Art and Design</li>
                                <li id="golisano">Golisano College of Computing and Information Sciences</li>
                                    </ul>
                            </div>
                    </div>
               </div>`
});





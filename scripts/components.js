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
                                <li id="bold">College of Art and Design</li>
                                <li id="art">New Media Design (BFA)</li>
                                <li id="art">Graphic Design (BFA)</li>
                                <li id="art">Visual Communication Design (BFA)</li>
                                <li id="art">3D Digital Design (BFA)</li>
                                <li id="art">Industrial Design (BFA)</li>
                                <li id="art">Industrial Design (MFA)</li>
                                <li id="art">Interior Design (BFA)</li>
                                <li id="art">Illustration (BFA)</li>
                                <li id="art">Motion Picture Science(BS)</li>
                                <li id="bold">Golisano College of Computing and Information Sciences</li>
                                <li id="art">Game Design and Development(BS)</li>
                                <li id="art">New Media Interactive Development (BS)</li>
                               <li id="art">Computer Science(BS)</li>
                                <li id="art">Software Engineering(MS)</li>
                                <li id="art">Human-Computer Interaction(BS)</li>

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
                                        <li id="bold">Design</li>
                                        <li id="golisano">Visual Design</li>
                                        <li id="golisano">Interactive Design</li>
                                        <li id="golisano">3D</li>
                                        <li id="golisano">Motion Graphics</li>
                                        <li id="golisano">UI/UX Design</li>
                                        <li id="bold">Programming</li>
                                        <li id="golisano">Front end</li>
                                        <li id="golisano">Back end</li>
                                        <li id="golisano">Full stack</li>
                                    </ul>
                            </div>

                        <hr class="solid">
                            <div class="dropdown">
                                <div class="select">
                                    <span class="dropdown-toggle" data-toggle="dropdown">Job Type</span>
                                </div>
                                    <input type="hidden" name="category">
                                    <ul class="dropdown-menu">
                                        <li id="art">Co-Op</li>
                                        <li id="golisano">Internship</li>
                                        <li id="golisano">Full Time</li>
                                    </ul>
                            </div>
                    </div>
               </div>`
});





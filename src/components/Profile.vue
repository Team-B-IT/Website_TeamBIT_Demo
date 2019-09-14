<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <h5>Profile</h5>
        <ul class="list-group">
          <li class="list-group-item">Name: Dang Xuan Vuong</li>
          <li class="list-group-item">Major: 
            Computer Science  
            <br>
            Computer Engineering</li>
          <li class="list-group-item">Team B'IT</li>
          <li class="list-group-item"><i class="fa fa-phone"></i> +84392117151 </li>
          <li class="list-group-item"><i class="fa fa-envelope"></i> vuong.1998@gmail.com </li>
          <li class="list-group-item">GitHub: dangxuanvuong98</li>
          <li class="list-group-item">Codeforces: dangxuanvuong98</li>
        </ul>
        <br>
        <h5>More</h5>
        <ul class="list-group">
          <li class="list-group-item">Age: 21</li>
          <li class="list-group-item">Gender: Male || YAG</li>
          <li class="list-group-item">Address: Minh Khai, Ha Noi, Viet Nam</li>
          <li class="list-group-item">University: Hanoi University Of Science And Technology</li>
         
        </ul>
      </div>
    <div class="col-sm-9">         
        <!-- resumt -->
        <div class="bs-callout bs-callout-danger">
            <div class="panel-heading resume-heading">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="col-xs-12 col-sm-12">
                        <figure>
                            <slot></slot>
                        </figure>
                        <div class="row">
                            <div class="col-xs-12 social-btns">
                                <!-- Sharingbutton Facebook -->
                                <a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on Facebook">
                                  <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                                    </div>Share on Facebook</div>
                                </a>

                                <!-- Sharingbutton Twitter -->
                                <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on Twitter">
                                  <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
                                    </div>Share on Twitter</div>
                                </a>

                                <!-- Sharingbutton Google+ -->
                                <a class="resp-sharing-button__link" href="https://plus.google.com/share?url=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on Google+">
                                  <div class="resp-sharing-button resp-sharing-button--google resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.37 12.93c-.73-.52-1.4-1.27-1.4-1.5 0-.43.03-.63.98-1.37 1.23-.97 1.9-2.23 1.9-3.57 0-1.22-.36-2.3-1-3.05h.5c.1 0 .2-.04.28-.1l1.36-.98c.16-.12.23-.34.17-.54-.07-.2-.25-.33-.46-.33H7.6c-.66 0-1.34.12-2 .35-2.23.76-3.78 2.66-3.78 4.6 0 2.76 2.13 4.85 5 4.9-.07.23-.1.45-.1.66 0 .43.1.83.33 1.22h-.08c-2.72 0-5.17 1.34-6.1 3.32-.25.52-.37 1.04-.37 1.56 0 .5.13.98.38 1.44.6 1.04 1.84 1.86 3.55 2.28.87.23 1.82.34 2.8.34.88 0 1.7-.1 2.5-.34 2.4-.7 3.97-2.48 3.97-4.54 0-1.97-.63-3.15-2.33-4.35zm-7.7 4.5c0-1.42 1.8-2.68 3.9-2.68h.05c.45 0 .9.07 1.3.2l.42.28c.96.66 1.6 1.1 1.77 1.8.05.16.07.33.07.5 0 1.8-1.33 2.7-3.96 2.7-1.98 0-3.54-1.23-3.54-2.8zM5.54 3.9c.33-.38.75-.58 1.23-.58h.05c1.35.05 2.64 1.55 2.88 3.35.14 1.02-.08 1.97-.6 2.55-.32.37-.74.56-1.23.56h-.03c-1.32-.04-2.63-1.6-2.87-3.4-.13-1 .08-1.92.58-2.5zM23.5 9.5h-3v-3h-2v3h-3v2h3v3h2v-3h3"/></svg>
                                    </div>Share on Google+</div>
                                </a>

                                <!-- Sharingbutton LinkedIn -->
                                <a class="resp-sharing-button__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Fsharingbuttons.io&amp;title=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;summary=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;source=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on LinkedIn">
                                  <div class="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"/></svg>
                                    </div>Share on LinkedIn</div>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bs-callout bs-callout-danger">
                <h4>Summary</h4>
                <p></p>
            </div>

            <div class="bs-callout bs-callout-danger">
                <h4>Skills and Abilities</h4>
                <ul class="list-group">
                    <a class="list-group-item inactive-link">
                      <!-- <li class="list-group-item"> -->
                        <h4 class="list-group-item-heading">
                        Major Filed
                        </h4>
                        <ul>
                          <hr>
                          <h5>Data Structures and Algorithms</h5>
                          <!-- <li>
                            <p>I have learned and studied about Data Structures and Algorithms since 2013.</p>
                          </li>
                           <li>
                            <p>I have participated in many competitives about Data Structures and Algorithms and had some achievements.</p>
                          </li>
                           <li>
                            <p>Now, i’m a member of a research group about Algorithms, Combinations and Graphs at my university.</p>
                          </li> -->
                          <hr>
                          <h5>Machine Learning, Deep Learning</h5>
                          <!-- <li>
                            <p>I have learned and studied about Machine Learning since 2016 and Deep Learning since 2017.</p>
                          </li>
                           <li>
                            <p>I have done some projects about Computer Vision using Deep Learning: Intelligent Transport System BKITS, Object Detection System for The Blind BKSeeing, Automatic pineapple harvesting machine,...</p>
                          </li>
                           <li>
                            <p>I have participated in some competitives with these projects and had some achievements.</p>
                          </li>
                           <li>
                            <p>Now, i’m learning about Deep Learning in Natural Language Processing.</p>
                          </li> -->
                          <hr>
                          <h5>Computer Vision</h5>
                          <!-- <li>
                            <p>I have done some projects about Computer Vision using Deep Learning.</p>
                          </li>
                           <li>
                            <p>Now, i’m learning about some other methods in Computer Vision.</p>
                          </li> -->
                        </ul>
                    </a>
                    <a class="list-group-item inactive-link">
                        <h4 class="list-group-item-heading">
                        Minor Filed
                        </h4>
                        <ul>
                          <hr>
                          <h5>Network Programming</h5>
                          <!-- <li>
                            <p>Network Programming is my favourite subject at school.</p>
                          </li>
                           <li>
                            <p>During the course, i try to create a simple P2P protocol on top of TCP that allows users chatting and sharing files.</p>
                          </li>
                          <li>
                            <p>I taken A+ score after this course.</p>
                          </li> -->
                          <hr>
                          <h5>Database Management</h5>
                          <hr>
                          <h5>Parallel Programming</h5>
                        </ul>
                    </a>
                </ul>
            </div>
             
            <div class="bs-callout bs-callout-danger">
                <h4>Other Skills</h4>
                <ul class="list-group">
                  <li class="list-group-item">Adobe's Softwares: Photoshop, Illustrator, Audition, Premiere Pro, After Effect,...</li>
                  <li class="list-group-item">Office Suites: Microsoft Office, Google Docs,...</li>  
                </ul>
            </div>

            <div class="bs-callout bs-callout-danger">
              <h4>Language and Platform Skills</h4>
              <hr>
                <ul class="list-group">
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" 
                         style="width: 50%;" aria-valuenow="50" 
                         aria-valuemin="0" aria-valuemax="100">Java/ JavaEE </div>
                  </div>
                  <br>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" 
                         style="width: 80%;" aria-valuenow="80" 
                         aria-valuemin="0" aria-valuemax="100">Python</div>
                  </div>
                  <br>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-success " role="progressbar" 
                         style="width: 75%;" aria-valuenow="75" 
                         aria-valuemin="0" aria-valuemax="100">C++</div>
                  </div>
                  <br>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-success " role="progressbar" 
                         style="width: 65%;" aria-valuenow="65" 
                         aria-valuemin="0" aria-valuemax="100">NodeJs</div>
                  </div>
                  <br>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-success " role="progressbar" 
                         style="width: 85%;" aria-valuenow="85" 
                         aria-valuemin="0" aria-valuemax="100">Pascal</div>
                  </div>

                   <br>
                   <ul class="progressbar">
                     <li class="1">Suck</li>
                     <li class="2">Know little</li>
                     <li class="3">Good</li>
                     <li class="4">Master</li>
                   </ul>
                </ul>
            </div>
            
            <div class="bs-callout bs-callout-danger">
                <h4>Competitives and Awards</h4>
                <table class="table table-striped table-responsive ">
                    <thead>
                        <tr>
                        <th>Year</th>
                        <th>Awards</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>2018</td>
                        <td>
                          <ul>
                            <li> + SoICT's Creative Software Competition - Runner-up (Object Detection Application for The Blind)</li>
                            <li> + Participated in The 2018 ICPC Asia Hanoi Regional Contest</li>
                            <li> + HUST's Youth Creative Competition:
                              <ul>
                                <li> ++ Object Detection System for The Blind BKSeeing - Top 10</li>
                                <li> ++ Intelligent Transport System BKITS - Top 20</li>
                              </ul>
                            </li>
                          </ul>
                        </td>
                        </tr>
                        <tr>
                        <td>2016</td>
                        <td>Vietnam Olympiad in Informatics 2016 - Third Prize</td>
                        </tr>
                        <tr>
                        <td>2015</td>
                        <td>Vietnam Olympiad in Informatics 2016 - Third Prize</td>
                        </tr>
                        <tr>
                        <td>2014</td>
                        <td>The Competition for Excellent Students of Major High Schools in the Northern Delta and Coastal Areas 2013-2014 (Subject - Informatics) - Bronze Medal</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bs-callout bs-callout-danger">
                <h4>Projects</h4>
                <ul class="list-group">
                    <li class="list-group-item">Intelligent Transport System BKITS</li>
                    <li class="list-group-item">Object Detection System for The Blind BKSeeing</li>
                    <li class="list-group-item">Automatic pineapple harvesting machine</li>
                </ul>
            </div>
           
            <div class="bs-callout bs-callout-danger">
                <h4>Education</h4>
                <table class="table table-striped table-responsive ">
                    <thead>
                        <tr>
                        <th>School/University</th>
                        <th>Graduation</th>
                        <th>GPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY</td>
                        <td>2016-Now</td>
                        <td> ??? </td>
                        </tr>
                        <tr>
                        <td>THAI BINH GIFTED HIGH SCHOOL</td>
                        <td>2013-2016</td>
                        <td> Good </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bs-callout bs-callout-danger">
                <h4>Free Research and Development Activities</h4>
                <ul class="list-group">
                    <li class="list-group-item">Member of BKACG</li>
                    <li class="list-group-item">Co-founder and leader of Team B'IT</li>
                </ul>
            </div>

            <div class="bs-callout bs-callout-danger">
                <h4>Experiences</h4>
                <ul class="list-group">
                    <li class="list-group-item">4/2019 – 6/2019: Developer at Midas Protocol</li>
                </ul>
            </div>

            <div class="bs-callout bs-callout-danger">
                <h4>Social Activities</h4>
                <ul class="list-group">
                    <li class="list-group-item">2016 - 2018: Thai Binh Gifted High School Student Community (CDC)</li>
                    <li class="list-group-item">2016 - 2018: CTB Radio</li>
                    <li class="list-group-item">2016 - 2017: HUST's Youth Volunteer Committee</li>
                </ul>
            </div>

            </div>
        </div>
        <!-- resume -->

    </div>
  </div>
<!-- </div> -->

</template>

<script>
    export default {         
            
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .progressbar {
    counter-reset: step;
  }
  .progressbar li {
    /* content: counter(step);
    counter-increment: step; */
    list-style-type: none;
    float: left;
    width: 25%;
    margin: 0 auto 10px auto;
    border: 1px solid #dddd;
    text-align: center;
  }
 .container {
   margin: 10px;
   padding: 20px;
 }
 .list-group .progress-type {
   text-align: center;
 }
 .bs-callout {
    padding: 20px;
    margin: 20px 0;
    border: 1px solid #eee;
    border-left-width: 5px;
    border-radius: 3px;
  }
  .bs-callout-danger {
    border-left-color: #d9534f;
  }
  .avatar {
  vertical-align: middle;
  width: 350px;
  height: 350px;
  border-radius: 50%;
 }
 hr { 
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 0.5px;
} 
 
 .resp-sharing-button__link,
.resp-sharing-button__icon {
  display: inline-block
}

.resp-sharing-button__link {
  text-decoration: none;
  color: #fff;
  margin: 0.5em
}

.resp-sharing-button {
  border-radius: 5px;
  transition: 25ms ease-out;
  padding: 0.5em 0.75em;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif
}

.resp-sharing-button__icon svg {
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
  vertical-align: top
}

.resp-sharing-button--small svg {
  margin: 0;
  vertical-align: middle
}

/* Non solid icons get a stroke */
.resp-sharing-button__icon {
  stroke: #fff;
  fill: none
}

/* Solid icons get a fill */
.resp-sharing-button__icon--solid,
.resp-sharing-button__icon--solidcircle {
  fill: #fff;
  stroke: none
}

.resp-sharing-button--twitter {
  background-color: #55acee
}

.resp-sharing-button--twitter:hover {
  background-color: #2795e9
}

.resp-sharing-button--pinterest {
  background-color: #bd081c
}

.resp-sharing-button--pinterest:hover {
  background-color: #8c0615
}

.resp-sharing-button--facebook {
  background-color: #3b5998
}

.resp-sharing-button--facebook:hover {
  background-color: #2d4373
}

.resp-sharing-button--tumblr {
  background-color: #35465C
}

.resp-sharing-button--tumblr:hover {
  background-color: #222d3c
}

.resp-sharing-button--reddit {
  background-color: #5f99cf
}

.resp-sharing-button--reddit:hover {
  background-color: #3a80c1
}

.resp-sharing-button--google {
  background-color: #dd4b39
}

.resp-sharing-button--google:hover {
  background-color: #c23321
}

.resp-sharing-button--linkedin {
  background-color: #0077b5
}

.resp-sharing-button--linkedin:hover {
  background-color: #046293
}

.resp-sharing-button--email {
  background-color: #777
}

.resp-sharing-button--email:hover {
  background-color: #5e5e5e
}

.resp-sharing-button--xing {
  background-color: #1a7576
}

.resp-sharing-button--xing:hover {
  background-color: #114c4c
}

.resp-sharing-button--whatsapp {
  background-color: #25D366
}

.resp-sharing-button--whatsapp:hover {
  background-color: #1da851
}

.resp-sharing-button--hackernews {
background-color: #FF6600
}
.resp-sharing-button--hackernews:hover, .resp-sharing-button--hackernews:focus {   background-color: #FB6200 }

.resp-sharing-button--vk {
  background-color: #507299
}

.resp-sharing-button--vk:hover {
  background-color: #43648c
}

.resp-sharing-button--facebook {
  background-color: #3b5998;
  border-color: #3b5998;
}

.resp-sharing-button--facebook:hover,
.resp-sharing-button--facebook:active {
  background-color: #2d4373;
  border-color: #2d4373;
}

.resp-sharing-button--twitter {
  background-color: #55acee;
  border-color: #55acee;
}

.resp-sharing-button--twitter:hover,
.resp-sharing-button--twitter:active {
  background-color: #2795e9;
  border-color: #2795e9;
}

.resp-sharing-button--google {
  background-color: #dd4b39;
  border-color: #dd4b39;
}

.resp-sharing-button--google:hover,
.resp-sharing-button--google:active {
  background-color: #c23321;
  border-color: #c23321;
}

.resp-sharing-button--linkedin {
  background-color: #0077b5;
  border-color: #0077b5;
}

.resp-sharing-button--linkedin:hover,
.resp-sharing-button--linkedin:active {
  background-color: #046293;
  border-color: #046293;
}

</style>
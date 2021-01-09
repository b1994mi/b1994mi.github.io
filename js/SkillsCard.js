Vue.component('skills-card', {

  props: ['isDark'],

  data: function () {
    return {
      data: [
        {
          title : 'Coding Languages',
          logo: 'fa fa-laptop-code',
          skills: [
            {logo: 'fab fa-js-square', title: 'Javascript', value: 'I’m comfortable using the modern ES6 or later syntax and the fetch method to consume REST API so that the web page is more dynamic.'},
            {logo: 'fab fa-php', title: 'PHP', value: 'I made a simple web app with this language when I attended Web Complete short course by Nurul Fikri.'},
            {logo: 'fab fa-java', title: 'Java', value: 'This was my first language when I began my coding journey in Fundamentals of Programming back in college. I was able to grasp important programming concepts such as OOP.'},
          ],
        },
        {
          title : 'Frameworks',
          logo: 'fa fa-code',
          skills: [
            {logo: 'fab fa-python', title: 'Django Framework', value: 'For 3 weeks I made a simple web app with this framework even though I never code in Python nor MVC framework before.'},
            {logo: 'fab fa-vuejs', title: 'Vue.js', value: 'I can do basic stuff like passing props so that a button can toggle the page into dark/light mode, and is implemented in my portfolio web page.'},
          ],
        },
        {
          title : 'Other Coding Skills',
          logo: 'fa fa-file-code',
          skills: [
            {logo: 'fa fa-file-csv', title: 'SQL', value: 'Working as Data Management Staff gave me the opportunity to get a hands on querying data from data lakes using PostgreSQL as the DBMS.'},
            {logo: 'fab fa-linux', title: 'GNU/Linux', value: "Since high school, I'm very comfortable in using Linux distros for daily usage."},
            {logo: 'fab fa-google', title: 'Googling', value: 'No kidding! I’m so used to googling problems first since high school to the point that I was able to install Ubuntu and other linux distros back then.'},
          ],
        },
        {
          title : 'Coding Concepts',
          logo: 'fa fa-brain',
          skills: [
            {logo: 'fa fa-database', title: 'Relational Database', value: "I learned relational database concepts, such as normalization and ERD, when I took Database class back in college."},
            {logo: 'fab fa-git-alt', title: 'Git', value: 'Since bootcamp, I am used to commit changes to my code via git and pushing it to Github.'}, 
            {logo: 'fa fa-plug', title: 'REST API', value: 'Consuming REST API is a walk in a park with my understanding of fetch/ajax on front-end side. Currently learning to create REST API service using express.js'},
          ],
        },
        {
          title : 'Languages',
          logo: 'fa fa-globe',
          skills: [
            {logo: 'fas fa-flag', title: 'Indonesian', value: "This is my mother's tounge language."},
            {logo: 'fas fa-flag-usa', title: 'English', value: 'I got IELTS overall score of 7.0 in January 2012.'},
          ],
        },
        {
          title : 'Misc.',
          logo: 'fa fa-asterisk',
          skills: [
            {logo: 'fa fa-table', title: 'Google Sheet', value: "I'm able to use many useful functions to create weekly reports, especially QUERY(), COUNTIFS(), and SUMIFS() functions."},
            {logo: 'fab fa-google', title: 'Google Apps Script', value: "I've written few simple scripts, such as dynamic dropdown in Google Forms from Google Sheet data."},
            {logo: 'fa fa-images', title: 'Image Editing', value: 'I can use GIMP to edit photos.'},
          ],
        },
      ]
    }
  },

  template: `
  <div class="glider-contain">

  <div id="glider1">

    <div class="w3-col l6 m6 s12 w3-margin" v-for="datum in data" :key="datum">
      <div :class="[isDark ? 'w3-dark-grey' : 'w3-khaki', 'w3-card w3-padding-large w3-round-large']">
        <div :class="isDark ? 'title-card' : 'title-card-light'">
          <i :class="[datum.logo, 'w3-margin-right w3-xxlarge w3-margin-bottom']"></i>
          {{ datum.title }}
        </div>
        <div class="extra-padding" v-for="skill in datum.skills" :key="skill">
          <p :class="isDark? 'body-card' : 'body-card-light'" style="margin-bottom:0">
            <span class="w3-xlarge w3-margin-right">
              <i :class="skill.logo"></i>
              <i :class="skill.logo1"></i>
              <i :class="skill.logo2"></i>
            </span>
            <span class="w3-large">{{ skill.title }}</span>
          </p>
            <div>
              <span>{{ skill.value }}</span>
            </div>
        </div>
        <br>
      </div>
    </div>

    </div>
    <button id="glider-prev1" class="glider-prev">&laquo;</button>
    <button id="glider-next1" class="glider-next">&raquo;</button>
    <div id="dots1"></div>
  </div>
  `,

})
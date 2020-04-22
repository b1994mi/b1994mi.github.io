Vue.component('skills-card', {

  props: ['isDark'],

  data: function () {
    return {
      data: [
        {
          title : 'Coding Skills',
          logo: 'fa fa-laptop-code',
          skills: [
            {logo: 'fab fa-html5', logo1: 'fab fa-css3-alt', logo2: 'fab fa-js-square', title: 'HTML, CSS, JS', value: '50%'},
            {logo: 'fab fa-vuejs', title: 'Vue.js', value: '30%'},
            {logo: 'fab fa-php', title: 'PHP', value: '20%'},
            {logo: 'fab fa-python', title: 'Django Framework', value: '10%'},
          ],
        },
        {
          title : 'Coding Concepts',
          logo: 'fa fa-file-code',
          skills: [
            {logo: 'fa fa-brain', title: 'Ifs, Looping, Recursive, OOP', value: '60%'},
            {logo: 'fa fa-database', title: 'Relational Database', value: '40%'},
            {logo: 'fab fa-git-alt', logo1: 'fab fa-github', title: 'GIT/Github', value: '5%'}, 
            {logo: 'fa fa-plug', title: 'REST API', value: '0%'},
          ],
        },
        {
          title : 'Languages',
          logo: 'fa fa-globe',
          skills: [
            {logo: 'fas fa-flag', title: 'Indonesian', value: '90%'},
            {logo: 'fas fa-flag-usa', title: 'English', value: '60%'},
          ],
        },
        {
          title : 'Misc.',
          logo: 'fa fa-asterisk',
          skills: [
            {logo: 'fab fa-google', title: 'Google Sheet', value: '80%'},
            {logo: 'fa fa-images', title: 'Image Editing', value: '40%'}, 
            {logo: 'fa fa-camera', title: 'Photography', value: '30%'},
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
        <div :class="isDark? 'title-card' : 'title-card-light'">
          <i :class="[datum.logo, 'w3-margin-right w3-xlarge w3-margin-bottom']"></i>
          {{ datum.title }}
        </div>
        <div class="extra-padding" v-for="skill in datum.skills" :key="skill">
          <p :class="isDark? 'body-card' : 'body-card-light'">
            <span class="w3-large w3-margin-right">
              <i :class="skill.logo"></i>
              <i :class="skill.logo1"></i>
              <i :class="skill.logo2"></i>
            </span>
            {{ skill.title }}
          </p>
          <div class="w3-round-xlarge pilbar-bg">
              <div class="w3-container w3-center w3-round-xlarge pilbar-fg" :style="{width: skill.value}">
                <span style="font-weight:700">{{ skill.value }}</span>
              </div>
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
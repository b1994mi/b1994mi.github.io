Vue.component('aboutme-content', {

    props: ['isDark'],

    template: `
    <div class="w3-row-padding">
        <div class="w3-col l4 m6 s12">
            <summary-card v-bind:is-dark="isDark"></summary-card>
            <br>
            <contacts-card v-bind:is-dark="isDark"></contacts-card>
            <br>
        </div>
        <div class="w3-col l8 m6 s12">
            <exp-card v-bind:is-dark="isDark"></exp-card>
            <br>
        </div>
    <div>
    `,

})

Vue.component('summary-card', {

    props: ['isDark'],

    template: `
    <div :class="[isDark ? 'w3-dark-grey' : 'w3-khaki', 'w3-card w3-round-large w3-padding-large']">
        <div :class="isDark ? 'title-card' : 'title-card-light'">
            <i class="fa fa-user-alt w3-margin-right"></i>Summary
        </div>
        <p :class="isDark ? 'body-card' : 'body-card-light'">
            Graduated from civil engineering (specialized in transportation)
            but have a passion in coding.
            I was lucky to be enrolled in Intro to Programming
            and Relational Data Base classes back in college.
        </p>
        <p :class="isDark ? 'body-card' : 'body-card-light'">
            My preference is to code web apps, be it full-stack position or front-end;
            but I'm open for learning mobile or desktop technologies such as
            react-native with flutter or electron.
        </p>
        <p id="contacts" :class="isDark? 'body-card' : 'body-card-light'">
            I have a big dream of combining my civil engineering and coding knowledge.
            So, later in my career, I would like to join a company of such.
        </p>
    </div>
    `,

})

Vue.component('contacts-card', {

    props: ['isDark'],

    data: function () {
        return {
            data: [
                {logo: 'fa fa-map-marker-alt', desc: 'South Jakarta, Indonesia'},
                {logo: 'fa fa-envelope-square', desc: 'b1994mi [et] gmail [.] com'},
                {logo: 'fab fa-whatsapp', desc: '+62 811 9000 506', link: 'https://api.whatsapp.com/send?phone=628119000506'},
                {logo: 'fab fa-line', desc: 'Line ID: b1994mi', link: 'https://line.me/ti/p/0PLZhkaYHV'},
            ]
        }
    },

    template: `
    <div :class="[isDark ? 'w3-blue' : 'w3-light-blue', 'w3-card-4 w3-round-large w3-padding-large']">
        <div :class="isDark ? 'title-card' : 'title-card-light'">
            <i class="fa fa-phone-volume w3-xxlarge"></i>
            Contact Me
        </div>
        <p :class="isDark? 'body-card' : 'body-card-light'" v-for="datum in data" :key="datum">
            <i :class="datum.logo" style="vertical-align: middle; font-size: 1.6rem"></i>
            <a :href="datum.link" class="w3-margin-left">{{ datum.desc }}
        </p>
    </div>
    `,

})

Vue.component('exp-card', {

    props: ['isDark'],

    data: function () {
        return {
            data: [
                {
                    title : 'Professional Work',
                    logo: 'fa fa-briefcase',
                    items: [
                        {
                            institution: 'Kulina',
                            detail: 'Back-End Dev',
                            from: 'Jun 2021',
                            to: 'Present',
                            present: true,
                            desc: `Maintenance and development of Food.id REST API using golang.`
                        },
                        {
                            institution: 'Tamtech International',
                            detail: 'Back-End Intern',
                            from: 'Feb 2021',
                            to: 'May 2021',
                            present: false,
                            desc: `Help develop REST API using express.js with MongoDB.`
                        },
                        {
                            institution: 'Ministry of Public Works',
                            detail: 'Data Management Staff',
                            from: 'Jun 2019',
                            to: 'Dec 2020',
                            present: false,
                            desc: `Transformed the data flow from offline Excel
                            files to online Google Sheet and normalize the structure.
                            Also, provide reports and presentations using the data collected.`
                        },
                    ],
                },
                {
                    title : 'Education',
                    logo: 'fa fa-user-graduate',
                    items: [
                        {
                            institution: 'Shift Academy',
                            detail: 'Full-Stack Bootcamp',
                            from: 'Dec 2020',
                            to: 'Feb 2021',
                            desc: `Full-stack bootcamp learning Nuxt.js and Express.js using MySQL database.`
                        },
                        {
                            institution: 'Nurul Fikri',
                            detail: 'Web Complete',
                            from: 'Mar',
                            to: 'May 2019',
                            desc: `Short course on Web Development.
                            Learned the basics of HTML, CSS, JS, jQuery, PHP, MySQL.`
                        },
                        {
                            institution: 'University of Indonesia',
                            detail: 'Civil Engineering',
                            from: '2012',
                            to: '2019',
                            desc: 'GPA: 3.28',
                            desc1: `Finished my bachelor thesis on Reclaimed Asphalt Pavement.
                            Also, had the chance to join Intro to Programming to learn the
                            foundations of if statements, looping, recursive,
                            and object-oriented programming.`
                        },
                    ],
                },
            ]
        }
    },

    template: `
    <div :class="[isDark ? 'w3-dark-grey' : 'w3-khaki', 'w3-card w3-round-large w3-padding-large']">
        <div v-for="datum in data" :key="datum">
            <div :class="[isDark ? 'title-card' : 'title-card-light', 'w3-margin-bottom']">
                <i :class="[datum.logo, 'w3-margin-right']"></i>
                {{ datum.title }}
            </div>
            <div class="w3-leftbar w3-border-green left-padding" v-for="item in datum.items" :key="item">
                <h6><b>{{ item.institution }}</b> | {{ item.detail }}</h6>
                <h7>
                    <i class="fa fa-calendar fa-fw w3-margin-right"></i>
                    {{item.from}} — 
                    <span v-bind:class="{'w3-tag w3-green w3-round' : item.present}">
                        {{ item.to }}
                    </span>
                </h7>
                <p :class="isDark ? 'body-card' : 'body-card-light'">{{ item.desc }}</p>
                <p :class="isDark ? 'body-card' : 'body-card-light'">{{ item.desc1 }}</p>
            </div>
        </div>
    </div>
    `,

})

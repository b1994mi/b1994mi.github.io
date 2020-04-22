Vue.component('works-card', {

    props: ['isDark'],

    data: function () {
        return {

            works: [
                { img: 'images/my-first.png', title: 'My Map App', content: "A simple web app using Django Framework. It extends the default User Model and can show a map using user's saved coordinate.", link: 'https://github.com/b1994mi/myfirstproject', logo: 'fab fa-github w3-large', logoText: 'Github' },
                { img: 'images/my-second.png', margin: 16, title: 'My Portfolio Web', content: 'The website you are looking at right now. It uses Vue.js to make dark/light theme button on top-right, W3.css plus Font Awesome to make it beautiful, and Glider.js to make a card carousel.', link: 'https://github.com/b1994mi/b1994mi.github.io', logo: 'fab fa-github w3-large', logoText: 'Github' },
                { img: 'images/my-third.png', title: 'Your Website', content: 'Your website? Yes, your website! I can make a portfolio for photographers/designers, a food menu, or even a simple blog using static web.', link: '#contacts', logo: 'fab fa-whatsapp w3-large', logoText: 'Contact Me' }
            ]

        }
    },

    template: `
    <div class="glider-contain">
        <div id="glider0">
            <div
                :class="[
                    isDark ? 'w3-dark-grey' : 'w3-khaki',
                    'w3-card w3-padding w3-round-large w3-center w3-margin'
                ]"
                v-for="work in works"
                :key="work"
            >
                <img :alt="work.title" :src="work.img" style="width: 100%">
                <div :class="isDark? 'title-card' : 'title-card-light'">{{ work.title }}</div>
                <p :class="isDark? 'body-card' : 'body-card-light'">{{ work.content }}</p>
                <div>
                    <p class="w3-green w3-round-xlarge w3-padding">
                        <a :href="work.link"><i :class="work.logo"></i> {{ work.logoText }}</a>
                    </p>
                </div>
                <br>
            </div>
        </div>
        <button id="glider-prev" class="glider-prev">&laquo;</button>
        <button id="glider-next" class="glider-next">&raquo;</button>
        <div id="dots"></div>
    </div>
    `,

})
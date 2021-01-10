Vue.component('works-card', {

    props: ['isDark'],

    data: function () {
        return {

            works: [
                { img: 'images/my-fourth.png', title: 'SoccerUpdate', content: "Static web that consume Football-Data and Wikipedia REST API with modern Javascript syntax and Bootstrap. This was a group assignment when I took full-stack bootcamp", links: [
                    {link: 'https://rahmatvp.github.io/projectIsmailRahmat/', logo: 'fa fa-desktop w3-large', logoText: 'Website'},
                    {link: 'https://github.com/rahmatvp/projectIsmailRahmat', logo: 'fab fa-github w3-large', logoText: 'Github'},
                ]},
                { img: 'images/my-fifth.png', title: 'Redesign Lazada', content: "A bootcamp assignment using Bootstrap and pure Javascript. I was able to recreate the Lazada website, there is a search bar that can search the products and you can add the products into the cart.", links: [
                    {link: 'http://rocky-retreat-58140.herokuapp.com/', logo: 'fa fa-desktop w3-large', logoText: 'Website'},
                    {link: 'https://github.com/b1994mi/redesign-lazada', logo: 'fab fa-github w3-large', logoText: 'Github'},
                ]},
                { img: 'images/my-first.png', title: 'My Map App', content: "A simple web app using Django Framework. It extends the default User Model and can show a map using user's saved coordinate.", links: [
                    {link: 'https://github.com/b1994mi/myfirstproject', logo: 'fab fa-github w3-large', logoText: 'Github'}
                ]},
                { img: 'images/my-second.png', margin: 16, title: 'My Portfolio Web', content: 'The website you are looking at right now. It uses Vue.js to make dark/light theme button on top-right, W3.css plus Font Awesome to make it beautiful, and Glider.js to make a card carousel.', links: [
                    {link: 'https://github.com/b1994mi/b1994mi.github.io', logo: 'fab fa-github w3-large', logoText: 'Github'}
                ]},
                { img: 'images/my-third.png', title: 'Your Website', content: 'Your website? Yes, your website! I can make a portfolio for photographers/designers, a food menu, or even a simple blog using static web.', links: [
                    {link: '#contacts', logo: 'fab fa-whatsapp w3-large', logoText: 'Contact Me'}
                ]}
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
                    <p v-for="link in work.links" :key="link" class="w3-green w3-round-xlarge w3-padding">
                        <a :href="link.link"><i :class="link.logo"></i> {{ link.logoText }}</a>
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
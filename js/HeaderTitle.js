Vue.component('header-title', {

    props: ['isDark'],

    template: `
    <div>
        <div class="w3-bar w3-transparent w3-top w3-padding">
            <button class="w3-bar-item w3-right w3-card btn-toggle" v-on:click="$emit('change-dark')">
            <i
                :class="['fa', isDark ? 'fa-moon' : 'fa-sun', 'w3-large w3-text-white']"
                style="vertical-align: middle"
            ></i>
            </button>
        </div>
        <div style="padding: 4rem 0 0 0;">
            <i class="fa fa-laptop over-sized">/</i>
            <i class="fa fa-desktop over-sized">/</i>
            <i class="fa fa-mobile over-sized"></i>
        </div>
        <p class="over-sized-title" style="margin: 0;padding: 0 1rem 0 1rem;">
            I <span style="background-color: salmon">love</span> making web apps
        </p>
        <p class="over-sized-subtitle" style="padding: 0 1rem 0 1rem">
            A self-taught newbie developer seeking a career in web development.
        </p>
    </div>
    `,

})
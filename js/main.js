let isPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

new Vue({

    el: '#app',

    data: {
        isDark: isPreferDark,
        svgColor: isPreferDark? '#303030' : '#fff',
    },

    methods: {
        changeIsDark: function () {
            this.isDark = !this.isDark
            if (this.isDark) { this.svgColor = '#303030' }
            else { this.svgColor = '#fff' }
        }
    }

})
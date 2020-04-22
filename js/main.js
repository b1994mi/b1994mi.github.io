new Vue({

    el: '#app',

    data: {
        isDark: true,
        svgColor: '#303030',
    },

    methods: {
        changeIsDark: function () {
            this.isDark = !this.isDark
            if (this.isDark) { this.svgColor = '#303030' }
            else { this.svgColor = '#fff' }
        }
    }

})
Vue.createApp({
    data: () => ({
        title: 'ZZTop',
        items: [1, 2, 3, 5, 7, 14, 20, 22, 27]
    }),
    computed: {
        evenItems() {
            return this.items.filter(i => i % 1 === 0)
        }
    }
}).mount('#app')
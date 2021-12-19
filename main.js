const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'They are knee-length and super comfy!',
            image: './assets/images/socks_green.jpg',
            url: 'https://github.com/TheBlueAttack/vue-mastery',
            inventory: 100, 
            onSale: false,
        }
    }
})
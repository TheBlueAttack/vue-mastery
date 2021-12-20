const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'They are knee-length and super comfy!',
            image: './assets/images/socks_green.jpg',
            url: 'https://github.com/TheBlueAttack/vue-mastery',
            inventory: 100, 
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
              ],
            sizes: ['S', 'M', 'L', 'XL']
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        }, 
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        }, 
    }
})
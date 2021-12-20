const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'They are knee-length and super comfy!',
            selectedVariant: 0,
            url: 'https://github.com/TheBlueAttack/vue-mastery',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: '100', onSale: false},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: '0', onSale: true},
              ],
            sizes: ['S', 'M', 'L', 'XL']
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        }, 
        updateVariant(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        }, 
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }, 
        image() {
            return this.variants[this.selectedVariant].image
        },
        inventory() {
            return this.variants[this.selectedVariant].quantity
        },
        onSale() {
            if (this.variants[this.selectedVariant].onSale) {
                return this.brand + ' ' + this.product + ' is on sale'
            }
            return ''
        }
    }
})
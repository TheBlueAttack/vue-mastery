app.component('product-display', {
    props: {
        premium: {
            type: Boolean, 
            required: true,
        },
        cart: {
            type: Array,
            required: true,
            default: () => [],
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img 
            :class="{'out-of-stock-img': inventory == 0}"
            :src="image">
                <a :href="url"></a>
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>

                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
                <p v-else>Out of Stock</p>

                <p v-show="onSale">{{ onSale }}</p>

                <p>Shipping: {{ shipping }}</p>

                <product-details :details="details"></product-details>

                <div 
                    v-for="(variant, index) in variants" 
                    :key="variant.id" 
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }">
                        {{ }}
                </div>

                <ul>
                    <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
                </ul>

                    <button 
                        class="button" 
                        :class="{ disabledButton: inventory == 0}"
                        :disabled="inventory == 0"
                        @click="addToCart">
                        Add to Cart
                    </button>

                    <button 
                        class="button" 
                        @click="removeFromCart" 
                        v-show="cart.length > 0">
                        Remove from Cart
                    </button>
            </div>
        </div>
        <review-list :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`, 
    data() {
        return {
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
            sizes: ['S', 'M', 'L', 'XL'],
            reviews: [],
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        }, 
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        }, 
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
        }
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
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return '£2.99'
        }
    }
})
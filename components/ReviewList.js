app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true,
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars!
                <br/>
                "{{ review.review }}"
                <br/>
                <p v-if="review.recommend == 'Yes'">{{ review.name }} recommends this product!</p>
                <p v-else>{{ review.name }} does not recommend this product!</p>
            </li>
        </ul>
    </div>
    `
})
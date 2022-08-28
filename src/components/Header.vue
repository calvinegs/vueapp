<template>
    <div class="p-1 bg-secondary text-white text-end">
        {{ displayText }}
        <!-- <button class="btn btn-sm btn-primary m-1>">Submit Order</button> -->
        <router-link to = "/order" class="btn btn-sm btn-primary m-1">
            Submit Order
        </router-link>
    </div>
</template>

<script lang="ts">
// import { Order } from '@/data/entities';
import { defineComponent, PropType } from 'vue';
import { useStore } from "vuex";

export default defineComponent({
    name: "Header",

    // props: {
    //     order: {
    //         type: Object as PropType<Order>,
    //         required: true
    //     },
    // },

    setup() {
        return {store: useStore()};
    },

    computed: {
        displayText(): string {
            // const count = this.order.productCount;
            // return count === 0 ? "(No Selection)" : `${count} Product(s), $${this.order.total.toFixed(2)}`;
            const count = this.store.state.order.productCount;
            return count === 0 ? "(No Selection)" : `${count} Product(s) ` + `$${this.store.state.order.total.toFixed(2)}`;
        },
    },
});
</script>
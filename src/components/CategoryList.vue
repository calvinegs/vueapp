<template>
    <div class="d-grid gap-2">
        <button
            v-for="c in categories"
            v-bind:key="c"
            v-bind:class="getButtonClasses(c)"
            @click="selectCategory(c)">
            {{ c }}
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';


export default defineComponent({
    name: "CategoryList",
    props: {
        categories: {
            type: Object as PropType<string[]>,
            require: true
        },
        selected: {
            type: String as PropType<string>,
        },
    },

    methods: {
        selectCategory(category: string) {
            this.$emit("selectCategory", category);
        },
        getButtonClasses(category: string): string {
            const btnClass = this.selected === category ? "btn-primary" : "btn-secondary";
            return `btn ${btnClass}`;
        },
    },
});
</script>
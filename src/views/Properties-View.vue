<template >
    <button @click="sortPrice">Sort by Price</button>
    <input type="text" v-model="search" placeholder="Search...">
    <select v-model="area">
        <option value="All">All</option>
        <option value="Durban">Durban</option>
        <option value="Pretoria">Pretoria</option>
        <option value="Cape Town">Cape Town</option>
    </select>
    <div v-if="properties" class="flex-container">
        <ProductCard v-for="property of properties" :key="property.id" :property="property" />
    </div>
    <div v-else>Loading..</div>
</template>
<script>
import ProductCard from '@/components/Product-Card.vue';
export default {
    data() {
        return {
            search: "",
            area: "All"
        }
    },
    methods: {

        sortPrice() {
            this.$store.commit("sortPropertiesByPrice")
        }

    },
    computed: {
        properties() {
            return this.$store.state.properties?.filter((property) => {
                let isMatch = true;
                if (!property.title.toLowerCase().includes(this.search.toLowerCase())) {
                    isMatch = false;
                }
                if (this.area !== "All" && this.area !== property.area) {
                    isMatch = false
                }
                return isMatch
            })
        }

    },
    mounted() {
        this.$store.dispatch("getProperties")
    },



    components: { ProductCard }

}
</script>
<style >
.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    background-color: antiquewhite;
}</style>
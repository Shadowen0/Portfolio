<script setup>
const props = defineProps({
    badgeName: String,
})
</script>

<template>
    <span :class="['tech-badge', badgeName]">
        {{ badgeName }}
    </span>
</template>

<style scoped>

.tech-badge {
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.8rem;
    background: rgba(255,255,255,0.1);
}

.Vue {
    background-color: #42b883;
    color: white;
}

.JavaScript {
    background-color: #f7df1e;
    color: black;
}

.Node {
    background-color: #68a063;
    color: white;
}
</style>
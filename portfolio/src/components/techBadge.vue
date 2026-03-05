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

    color: white;
}

.Vue {
    background-color: #42b883;
    color: white;
}

.Optimisation {
    background-color: red;
}

.Node {
    background-color: #68a063;
}

.Git {
    background-color: gray;
}

.Python {
    background-color: yellow;
    color: black;
}

.Collaboration {
    background-color: purple;
}

</style>
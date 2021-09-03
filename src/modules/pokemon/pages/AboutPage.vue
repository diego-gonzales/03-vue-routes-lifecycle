<template>
    <h3>About Page</h3>
    <hr>
    <p>{{ name }}</p>
    <button @click="onChangeName">
        Change Name
    </button>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            name: 'Diego'
        }
    },
    methods: {
        onChangeName(): void {
            this.name = 'Neyla';
        }
    },

    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
        // PUNTO ADECUADO PARA REALIZAR PETICIONES HTTP
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    /* Esto solo se disparará cuando el cambio de una propiedad reactiva afecta al DOM,
    no cuando cambie alguna propiedad reactiva nada más (video 124, min 6) */
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    errorCaptured() {
        console.log('errorCaptured')
    },
    renderTracked() {
        console.log('renderTracked')
    },
    renderTriggered() {
        console.log('renderTriggered')
    }
})
</script>
<template>
    <Button type="submit" :icon="icon" label="Next" />
</template>

<script>

import Button from 'primevue/button/sfc'

export default {
    components: {
        Button
    },
    props: ['loading'],
    computed: {
        icon() {
            return (this.loading)?'pi pi-spin pi-spinner':'pi pi-check'
        }
    }
}
</script>
<template>
    <Button type="submit" :icon="icon" :label="bLabel" />
</template>

<script>

import Button from 'primevue/button/sfc'

export default {
    components: {
        Button
    },
    props: ['loading','label'],
    computed: {
        icon() {
            return (this.loading)?'pi pi-spin pi-spinner':'pi pi-check'
        },
        bLabel() {
            return (this.label)?this.label:'Next'
        }
    },
}
</script>
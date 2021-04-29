<template>
    <LayoutWrapper>
        <LayoutWrapper class="layout-main">
            <div class="lzds-width p-mx-auto">
                <form @submit="onSubmit">
                    <Card>
                        <template #title>
                            Query Student Profile
                        </template>
                    </Card>
                </form>
            </div>
    </LayoutWrapper>
</template>

<script>

import LayoutWrapper from '../components/LayoutWrapper'
import Footer from '../components/Footer'

import Card from 'primevue/card/sfc'
import Button from 'primevue/button/sfc'
import RadioButton from 'primevue/radiobutton/sfc'
import InputText from 'primevue/inputtext/sfc'
import Dropdown from 'primevue/dropdown/sfc'

export default {
    components: {
        LayoutWrapper,
        Footer,
        Card,
        Button,
        RadioButton,
        InputText,
        Dropdown,        
    }
}
</script>

<style scoped>

    .lzds-width {
        width: 75%;
    }

    @media only screen and (max-width: 1200px) {
        .lzds-width {
            width: 75%
        }
    }

    @media only screen and (max-width: 1024px) {
        .lzds-width {
            width: 75%
        }
    }

    @media only screen and (max-width: 768px) {
        .lzds-width {
            width: 90%
        }
    }

    @media only screen and (max-width: 480px) {
        .lzds-width {
            width: 100%
        }      
    }

    @media only screen and (max-width: 360) {
        .lzds-width {
            width: 100%
        }      
    }

    @media only screen and (max-width: 320) {
        .lzds-width {
            width: 100%
        }    
    }

</style>
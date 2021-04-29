<template>
    <LayoutWrapper>
        <div class="layout-main">
            <div class="lzds-width p-mx-auto">
                <div class="p-grid">
                    <div class="p-col-8 p-offset-2">
                        <Card>
                            <template #title>
                                <p class="p-text-center">Student Information</p>
                                <hr />                            
                            </template>
                            <template #content>

                            </template>
                            <template #footer>
                                <div class="lzds-center p-mt-6 p-mb-4">
                                    <Button icon="pi pi-times" label="Back" class="p-button-secondary" @click="back"/>
                                    <NextButton :loading="loading" style="margin-left: .5em" />
                                </div>
                            </template>                                             
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </LayoutWrapper>
</template>

<script>

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useToast } from "primevue/usetoast"
import { ref, watch } from 'vue'

import LayoutWrapper from '../components/LayoutWrapper'
import Footer from '../components/Footer'
import NextButton from '../components/NextButton'

import Card from 'primevue/card/sfc'
import Button from 'primevue/button/sfc'
import RadioButton from 'primevue/radiobutton/sfc'
import InputText from 'primevue/inputtext/sfc'
import Dropdown from 'primevue/dropdown/sfc'
// import BlockUI from 'primevue/blockui/sfc'

export default {
    components: {
        LayoutWrapper,
        Footer,
        Card,
        Button,
        RadioButton,
        InputText,
        Dropdown,
        NextButton,
    },
    setup() {

        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const toast = useToast()        

        const back = () => {
            router.push('/query/student')
        }

        return {
            back
        }

    },
    computed: {
        loading() {
            return false
        }
    }
}
</script>

<style scoped>

    .lzds-width {
        width: 80%;
    }

    @media only screen and (max-width: 1200px) {
        .lzds-width {
            width: 80%
        }
    }

    @media only screen and (max-width: 1024px) {
        .lzds-width {
            width: 80%
        }
    }

    @media only screen and (max-width: 768px) {
        .lzds-width {
            width: 100%
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
<template>
    <LayoutWrapper>
        <div class="layout-main">
            <div class="lzds-width p-mx-auto">
                <form>
                    <Card>
                        <template #title>
                            Enrollment Form
                        </template>
                        <template #content>
                        </template>
                        <template #footer>
                            <div class="lzds-center">
                                <Button icon="pi pi-times" label="Back" class="p-button-secondary" @click="back"/>
                                <Button type="submit" icon="pi pi-check" label="Next" style="margin-left: .5em" />
                            </div>
                        </template>                        
                    </Card>
                </form>         
            </div>
        </div>
        <Footer />        
    </LayoutWrapper>
</template>

<script>

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast } from "primevue/usetoast"
import { ref, watch } from 'vue'

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
    },
    setup() {
        const store = useStore()
        const router = useRouter()
        const toast = useToast()

        console.log(store.state.studentStatus)
        
        const back = () => {
            router.push('/profile/new')
        }
        
        return {
            back
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
<template>
    <LayoutWrapper>
        <TopBar />
        <div class="layout-main">
            <div class="lzds-width p-mx-auto">
                <Card>
                    <template #title>
                        <p class="p-text-center">Student Information</p>
                        <hr />                            
                    </template>
                    <template #content>
                        <div class="p-grid">
                            <div class="p-xs-12 p-sm-12 p-md-12 p-lg-6">
                                <div class="p-grid p-mr-2">
                                    <div class="p-col-12 p-md-6">
                                        Name:
                                    </div>
                                    <div class="p-col-12 p-md-6 p-text-right p-text-bold">
                                        {{fullname}}
                                    </div>                                                                                                      
                                </div>
                                <div class="p-grid p-mt-1 p-mr-2">
                                   <div class="p-col-12 p-md-6">
                                        Email:
                                    </div>
                                    <div class="p-col-12 p-md-6 p-text-right p-text-bold">
                                        {{info.email_address}}
                                    </div>                                                                       
                                </div>
                                <div class="p-grid p-mt-1 p-mr-2">
                                    <div class="p-col-12 p-md-6">
                                        Contact No:
                                    </div>
                                    <div class="p-col-12 p-md-6 p-text-right p-text-bold">
                                        {{info.contact_no}}
                                    </div>                                                                         
                                </div>
                                <div class="p-grid p-mt-1 p-mr-2">
                                   <div class="p-col-6">
                                        Email:*
                                    </div>
                                    <div class="p-col-6 p-text-right p-text-bold">
                                        {{info.email_address}}
                                    </div>                                                                       
                                </div>                                
                            </div> 
                            <div class="p-xs-12 p-sm-12 p-md-12 p-lg-6">
                                <div class="p-grid p-mr-2">
                                    <div class="p-col-12 p-md-6">
                                        LRN:
                                    </div>
                                    <div class="p-col-12 p-md-6 p-text-right p-text-bold">
                                        {{info.lrn}}
                                    </div>
                                </div>
                                <div class="p-grid p-mt-1 p-mr-2">
                                    <div class="p-col-12 p-md-6">
                                        Last SY Level/Grade:
                                    </div>
                                    <div class="p-col-12 p-md-6 p-text-right p-text-bold">
                                        {{info.previous_level}}
                                    </div>                                    
                                </div>
                                <div class="p-grid p-mt-1 p-mr-2">
                                    <div class="p-col-12 p-md-6">
                                        Enrolling in Grade/Level:
                                    </div>
                                    <div class="p-col-12 p-md-6 p-text-right p-text-bold">
                                        {{info.next_level}}
                                    </div>                                    
                                </div>
                                <div class="p-grid p-mt-1 p-mr-2">
                                    <div class="p-col-12 p-md-6">
                                        Tuition Fee Discount(s):
                                    </div>
                                    <div class="p-col-12 p-md-6 p-text-right p-text-bold">
                                        <span class="p-d-block" v-for="(d, i) in info.discounts" :key="i">{{d}}</span>
                                    </div>
                                </div>                                                                                              
                            </div>                                                      
                        </div>
                        <div class="p-grid p-mt-3">
                            <div class="p-col">
                                <p class="p-text-light">
                                    If your information is correct click Next to proceed to your enrollment<br />
                                    *If you want to update your email address you can do it in the next step                                    
                                </p>
                            </div>
                        </div>           
                    </template>
                    <template #footer>
                        <hr />
                        <div class="lzds-center p-mb-4">
                            <Button icon="pi pi-times" label="Back" class="p-button-secondary" @click="back"/>
                            <NextButton :loading="loading" style="margin-left: .5em" @click="next" />
                        </div>
                    </template>                                             
                </Card>
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
import { ref, watch, computed } from 'vue'

import LayoutWrapper from '../components/LayoutWrapper'
import TopBar from '../components/TopBar'
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
        TopBar,
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

        if (store.state.students.student.id==0) {
            router.push('/')
            toast.add({severity:'warn', summary: 'Warning!', detail:'You have been redirected to the first page because you have refreshed the current page. Please do not refresh the current to avoid losing of information while on session', life: 10000});            
        }        

        store.dispatch('selections/INIT')
        store.dispatch('enrollments/INIT')         
        
        console.log(store.state.students.student)
        const info = computed(() => {
            return {...store.state.students.student}
        })

        const fullname = computed(() => {
            return `${store.state.students.student.firstname} ${store.state.students.student.lastname}`
        })

        const back = () => {
            router.push('/query/student')
        }

        const next = () => {
            router.push('/enrollment')
        }

        return {
            info,
            fullname,
            back,
            next
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
        width: 60%;
    }

    @media only screen and (max-width: 1200px) {
        .lzds-width {
            width: 60%
        }
    }

    @media only screen and (max-width: 1024px) {
        .lzds-width {
            width: 70%
        }
    }

    @media only screen and (max-width: 768px) {
        .lzds-width {
            width: 80%
        }
        .p-xs-12 {
            width: 100%
        }
    }

    @media only screen and (max-width: 480px) {
        .lzds-width {
            width: 80%
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

    .hl {
        border: 1px solid red;
    }

</style>
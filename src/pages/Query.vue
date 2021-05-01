<template>
    <LayoutWrapper>
        <TopBar />        
        <div class="layout-main">
            <div class="lzds-width p-mx-auto">
                <form @submit="onSubmit">
                    <div class="p-grid">
                        <div class="p-col-6 p-offset-3">
                            <BlockUI :blocked="blocked">
                                <Card>
                                    <template #title>
                                        <p class="p-text-center">Retrieve your Student Information</p>
                                        <hr />                            
                                    </template>
                                    <template #content>
                                        <div class="p-fluid p-formgrid p-grid">
                                            <div class="p-field p-md-12 p-lg-6">
                                                <label class="p-text-uppercase">Learner Reference Number</label>
                                                <InputText type="text" v-model="lrn" :class="{'p-invalid': lrnError}" />
                                                <small class="p-error" v-if="lrnError">Please enter your Learner Reference Number</small>                                    
                                            </div>
                                            <div class="p-field p-md-12 p-lg-6">
                                                <label class="p-text-uppercase">Date of birth</label>
                                                <InputText type="date" v-model="birthday" :class="{'p-invalid': birthdayError}" />
                                                <small class="p-error" v-if="birthdayError">Please enter your date of birth</small>                                    
                                            </div>                                
                                        </div>
                                    </template>
                                    <template #footer>
                                        <hr />
                                        <div class="lzds-center p-mt-1 p-mb-4">
                                            <Button icon="pi pi-times" label="Back" class="p-button-secondary" @click="back"/>
                                            <NextButton :loading="loading" style="margin-left: .5em" />
                                        </div>
                                    </template>                        
                                </Card>
                            </BlockUI>
                        </div>
                    </div>
                </form>
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
import TopBar from '../components/TopBar'
import NextButton from '../components/NextButton'

import Card from 'primevue/card/sfc'
import Button from 'primevue/button/sfc'
import RadioButton from 'primevue/radiobutton/sfc'
import InputText from 'primevue/inputtext/sfc'
import Dropdown from 'primevue/dropdown/sfc'
import BlockUI from 'primevue/blockui/sfc'

import { useForm, useField } from 'vee-validate'

export default {
    components: {
        LayoutWrapper,
        Footer,
        TopBar,
        Card,
        Button,
        RadioButton,
        InputText,
        Dropdown,
        NextButton,
        BlockUI  
    },
    setup() {

        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const toast = useToast()

        const studentStatus = 'Regular'

        store.dispatch('selections/INIT')
        store.dispatch('students/INIT')    

        watch(
            () => store.state.students.student.id,
            (data, prevData) => {
                router.push('/student/info')
            }
        )

        const init = {
            initialValues: {
                // lrn: null,
                // birthday: null,
                lrn: '101070110017',
                birthday: '2006-10-19',                
            }
        }        

        const { setValues, handleSubmit, resetForm } = useForm(init);
        
        function validateField(value) {
            if (!value) {
                return "This field is required";
            }
            return true;
        }

        const { value: lrn, errorMessage: lrnError } = useField('lrn',validateField);    
        const { value: birthday, errorMessage: birthdayError } = useField('birthday',validateField);    
        
        const onSubmit = handleSubmit((values, actions) => {
            console.log(values)
            const { lrn, birthday } = values
            store.dispatch('students/QUERY_STUDENT', { lrn, birthday })
        })        

        const back = () => {
            router.push('/')
        }

        return {
            lrn,
            lrnError,
            birthday,
            birthdayError,
            back,
            onSubmit
        }

    },
    computed: {
        loading() {
            return this.$store.state.students.loading
        },
        blocked() {
            return this.$store.state.students.loading
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
<template>
    <LayoutWrapper>
        <div class="layout-main">
            <div class="lzds-width p-mx-auto">
                <form @submit="onSubmit">
                    <Card>
                        <template #title>
                            <p class="p-text-center">Retrieve your Student Information</p>
                            <hr />                            
                        </template>
                        <template #content>
                            <div class="p-fluid p-formgrid p-grid">
                                <div class="p-field p-col-6">
                                    <label class="p-text-uppercase">Learner Reference Number</label>
                                    <InputText type="text" v-model="lrn" :class="{'p-invalid': lrnError}" />
                                    <small class="p-error" v-if="lrnError">Please enter your Learner Reference Number</small>                                    
                                </div>
                                <div class="p-field p-col-6">
                                    <label class="p-text-uppercase">Date of birth</label>
                                    <InputText type="text" v-model="lrn" :class="{'p-invalid': lrnError}" />
                                    <small class="p-error" v-if="lrnError">Please enter your date of birth</small>                                    
                                </div>                                
                            </div>
                        </template>
                        <template #footer>
                            <div class="lzds-center p-mt-2 p-mb-4">
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
import { useRoute } from 'vue-router'
import { useToast } from "primevue/usetoast"
import { ref, watch } from 'vue'

import LayoutWrapper from '../components/LayoutWrapper'
import Footer from '../components/Footer'

import Card from 'primevue/card/sfc'
import Button from 'primevue/button/sfc'
import RadioButton from 'primevue/radiobutton/sfc'
import InputText from 'primevue/inputtext/sfc'
import Dropdown from 'primevue/dropdown/sfc'

import { useForm, useField } from 'vee-validate'

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
        const route = useRoute()
        const toast = useToast()

        const studentStatus = 'Regular'

        const init = {
            initialValues: {
                lrn: null
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
        
        const onSubmit = handleSubmit((values, actions) => {
            console.log(values)
            // const { student } = values
            // store.dispatch('students/STUDENT', student)
        })        

        const back = () => {
            router.push('/')
        }

        return {
            lrn,
            lrnError,
            back,
            onSubmit
        }

    }
}
</script>

<style scoped>

    .lzds-width {
        width: 40%;
    }

    @media only screen and (max-width: 1200px) {
        .lzds-width {
            width: 50%
        }
    }

    @media only screen and (max-width: 1024px) {
        .lzds-width {
            width: 50%
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
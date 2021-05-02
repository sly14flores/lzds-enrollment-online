<template>
    <LayoutWrapper>
        <TopBar />
        <div class="layout-main">
            <div class="lzds-width p-mx-auto">
                <form @submit="onSubmit">
                    <div class="p-grid">
                        <div class="p-col-8 p-offset-2">
                            <BlockUI :blocked="loading">
                                <Card>
                                    <template #title>
                                        <p class="p-text-center">Pay using Paypal</p>
                                        <hr />                            
                                    </template>
                                    <template #content>
                                        <div>
                                            <div class="p-d-flex p-jc-center">
                                                <div class="p-text-normal p-name">Enrollment Reference Number</div>
                                            </div>
                                            <div class="p-d-flex p-jc-center">
                                                <div class="p-text-bold p-total-number">{{payment.enrollee_rn}}</div>
                                            </div>                                            
                                        </div>
                                        <div class="p-mt-4">
                                            <div class="p-d-flex p-jc-center">
                                                <div class="p-text-normal p-name">Amount to pay</div>
                                            </div>
                                            <div class="p-d-flex p-jc-center">
                                                <div class="p-text-bold p-total-number">{{totalAmountToPay}}</div>
                                            </div>                                            
                                        </div>                                         
                                        <div class="p-mt-5">
                                            <div class="p-d-flex p-jc-center">
                                                <div class="p-text-normal p-name p-mr-4 p-ml-4">Click on Paypal.Me below to pay</div>
                                            </div>
                                        </div>
                                        <div class="p-mt-5">
                                            <div class="p-text-center">
                                                <Button label="Paypal.Me" class="p-button-warning" @click="paypal"/>
                                            </div>
                                        </div>                                        
                                        <div class="p-mt-4">
                                            <hr />
                                            <div class="p-d-flex p-jc-center">
                                                <div class="p-text-normal p-name p-mr-4 p-ml-4">If you have already paid submit your paypal payment reference number now</div>
                                            </div>
                                            <div class="p-fluid p-formgrid p-grid">
                                                <div class="p-field p-col p-mt-3">
                                                    <label class="p-text-center p-text-bold p-d-block">Paypal Reference Number</label>
                                                    <InputText type="text" v-model="payment_reference_number" :class="{'p-invalid': payment_reference_numberError}" />
                                                    <small class="p-error" v-if="payment_reference_numberError">Paypal reference number is required</small>                                                
                                                </div>
                                            </div>
                                            <div class="p-d-flex p-jc-center">
                                                <NextButton :loading="loading" :label="'Submit'" />
                                            </div>
                                        </div>
                                        <div class="p-mt-6">
                                            <div class="p-d-flex p-jc-center">
                                                <div class="p-text-bold p-total-number">Thank You!</div>
                                            </div>
                                        </div>                                        
                                    </template>
                                    <template #footer>
                                        <div class="lzds-center p-mt-1 p-mb-4">
                                            <p class="p-text-italic">We have also sent you a link of this instructions in you email for future reference</p>
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
import { computed, ref } from 'vue'

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

import { useForm, useIsFormValid, useField } from 'vee-validate'

import { apiUrl } from '../url.js'
import axios from 'axios'
import route from '../library/route'

const PAYPAL_REF_NO = `${apiUrl}/payment/paypal/:uiid`
const submitRefno = (payload) => {
    const { uiid, paypal_refno } = payload
    const url =  route(PAYPAL_REF_NO, { uiid }) 
    return axios.put(url, {paypal_refno})
}

export default {
    components: {
        LayoutWrapper,
        Footer,
        Card,
        Button,
        RadioButton,
        InputText,
        Dropdown,
        BlockUI,
        TopBar,
        NextButton,
    },    
    setup() {

        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        const toast = useToast()

        const uiid = route.params.uiid
        store.dispatch('enrollments/PAYMENT_INFO',{ uiid })           
        
        const payment = computed(() => {
            return {
                ...store.state.enrollments.payment
            }
        })

        function numberWithCommas(x) {
            if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            else return 0
        }

        const totalAmountToPay = computed(() => {
            return `Php ${numberWithCommas(store.state.enrollments.payment.total_amount_to_pay)}`
        })         

        const init = {
            initialValues: {
                payment_reference_number: null
            }
        }

        const {  handleSubmit } = useForm(init);

        function validateField(value) {
            if (!value) {
                return "This field is required";
            }
            return true;
        }        
        
        const loading = ref(false)
        const onSubmit = handleSubmit((values, actions) => {
            console.log(values)
            const { payment_reference_number } = values

            loading.value = true
            submitRefno({uiid: uiid, paypal_refno: payment_reference_number}).then(response => {
                console.log(response)
                loading.value = false
                router.push('/refno/success')
                // toast.add({severity:'success', summary: 'Notification', detail:'Your enrollment information has been updated. Thank you!', life: 3000});
            }).catch(error => {
                loading.value = false
                toast.add({severity:'error', summary: 'Alert', detail:'Something went wrong. Please try again', life: 3000});                
            })         

        })
        
        const { value: payment_reference_number, errorMessage: payment_reference_numberError } = useField('payment_reference_number',validateField);

        const paypal = () => {
            window.open('https://www.paypal.com/paypalme/lzds','_blank')
        }

        return {
            loading,
            payment,
            totalAmountToPay,
            payment_reference_number,
            payment_reference_numberError,
            onSubmit,
            paypal
        }

    },
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
    .paypal{
        width: 80%;
    }
    .p-name{
        font-size: 16px;
    }
    .p-total-number{
        font-size: 20px;
    }
    .button {
        display: inline-block;
        border-radius: 4px;
        background-color: #42bfe6;
        border: none;
        color: #FFFFFF;
        text-align: center;
        font-size: 15px;
        padding: 10px;
        width: auto;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
    }
    .button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }
    .button span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }
    .button:hover span {
        padding-right: 25px;
    }
    .button:hover span:after {
        opacity: 1;
        right: 0;
    }

</style>
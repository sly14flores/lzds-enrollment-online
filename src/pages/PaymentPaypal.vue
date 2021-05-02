<template>
    <LayoutWrapper>
        <TopBar />
        <div class="layout-main">
            <div class="lzds-width p-mx-auto">
                <form>
                    <div class="p-grid">
                        <div class="p-col-8 p-offset-2">
                            <BlockUI :blocked="false">
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
                                                <div class="p-text-bold p-total-number">LZDS20210002</div>
                                            </div>                                            
                                        </div>
                                        <div class="p-mt-4">
                                            <div class="p-d-flex p-jc-center">
                                                <div class="p-text-normal p-name">Amount to pay</div>
                                            </div>
                                            <div class="p-d-flex p-jc-center">
                                                <div class="p-text-bold p-total-number">LZDS20210002</div>
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
                                                <NextButton :loading="false" :label="'Submit'" />
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
// import { useRouter } from 'vue-router'
// import { useRoute } from 'vue-router'
// import { useToast } from "primevue/usetoast"
import { computed } from 'vue'

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
        
        const payment = computed(() => {
            return {

            }
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
        
        const onSubmit = handleSubmit((values, actions) => {
            console.log(values)
            const { payment_reference_number } = values

        })
        
        const { value: payment_reference_number, errorMessage: payment_reference_numberError } = useField('payment_reference_number',validateField);

        const paypal = () => {
            window.open('https://www.paypal.com/paypalme/lzds','_blank')
        }

        return {
            payment,
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
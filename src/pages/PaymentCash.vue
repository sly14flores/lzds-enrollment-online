<template>
    <LayoutWrapper>
        <TopBar />
        <div class="layout-main">
            <div class="lzds-width p-mx-auto">
                <form>
                    <div class="p-grid">
                        <div class="p-col-8 p-offset-2">
                            <BlockUI :blocked="false">
                                <Card class="p-text-center">
                                    <template #title>
                                        <p class="p-text-center">Cash Payment</p>
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
                                                <div class="p-text-normal p-name">Please visit Lord of Zion Divine School for your payment</div>
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
import { useRoute } from 'vue-router'
// import { useToast } from "primevue/usetoast"
import { computed } from 'vue'

import LayoutWrapper from '../components/LayoutWrapper'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'

import Card from 'primevue/card/sfc'
import Button from 'primevue/button/sfc'
import RadioButton from 'primevue/radiobutton/sfc'
import InputText from 'primevue/inputtext/sfc'
import Dropdown from 'primevue/dropdown/sfc'
import BlockUI from 'primevue/blockui/sfc'

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
        BlockUI  
    },    
    setup() {

        const store = useStore()
        const route = useRoute()

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

        return {
            payment,
            totalAmountToPay
        }

    },
}
</script>

<style scoped>

    .lzds-width {
        width: 70%;
    }

    @media only screen and (max-width: 1200px) {
        .lzds-width {
            width: 70%
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
    .p-name{
        font-size: 16px;
    }
    .p-total-number{
        font-size: 20px;
    }
    .hl {
        border: 1px solid red;
    }

</style>
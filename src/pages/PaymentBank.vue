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
                                        <p class="p-text-center">Bank Deposit</p>
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
                                        <div class="p-mt-4">
                                            <hr />
                                            <div class="p-d-flex p-jc-center">
                                                <div class="p-text-normal p-name">Please deposit your payment to any of the following bank accounts:</div>
                                            </div>
                                        </div>
                                        <div class="p-grid">
                                            <div class="p-lg-6 p-md-12 p-sm-12">
                                                <div class="p-mt-4">
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-text-bold" style="font-size: 18px">CHINA BANK SAVINGS</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block">Account Name</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">
                                                        <span class="p-d-block p-text-bold">Lord of Zion Divine School</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">
                                                        <span class="p-d-block">Account Number</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">
                                                        <span class="p-d-block p-text-bold">619-90200-7040</span>
                                                    </div>                                                                                      
                                                </div>
                                                <div class="p-mt-4">
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-text-bold" style="font-size: 18px">LAND BANK</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block">Account Name</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">
                                                        <span class="p-d-block p-text-bold">Lord of Zion Divine School SHSVP</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">
                                                        <span class="p-d-block">Account Number</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">
                                                        <span class="p-d-block p-text-bold">02-01239052</span>
                                                    </div>                                                                                      
                                                </div>                                               
                                            </div>
                                            <div class="p-lg-6 p-md-12 p-sm-12">
                                                <div class="p-mt-4">
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-text-normal p-name">Send your proof of payment to any of the ff:</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-mt-2">LZDS office Facebook Page</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-text-bold">@lordofzion.divineschool</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-text-italic">via private message (messenger)</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-mt-2">LZDS email</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-text-bold">lordofziondivineschool@gmail.com</span>
                                                    </div>                                                                                                                                                                                                                                                 
                                                </div>
                                                <div class="p-mt-4">
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-text-normal p-name">Follow the format indicated below:</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-mt-2"><i class="pi pi-check" style="fontSize: .8rem"></i>&nbsp;Complete Name of Student</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-mt-1"><i class="pi pi-check" style="fontSize: .8rem"></i>&nbsp;Enrollment Reference Number</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-mt-1"><i class="pi pi-check" style="fontSize: .8rem"></i>&nbsp;Amount</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block"><i class="pi pi-check" style="fontSize: .8rem"></i>&nbsp;Date of Payment</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-mt-1"><i class="pi pi-check" style="fontSize: .8rem"></i>&nbsp;Name of Bank</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-mt-1"><i class="pi pi-check" style="fontSize: .8rem"></i>&nbsp;Name of Parent/Guardian</span>
                                                    </div>
                                                    <div class="p-d-flex p-jc-center">                                                
                                                        <span class="p-d-block p-mt-1"><i class="pi pi-check" style="fontSize: .8rem"></i>&nbsp;Attachment of picture or screenshot of your proof of payment</span>
                                                    </div>                                                                                                                                                                                                                                                                                                                                                                                                               
                                                </div>                                               
                                            </div>
                                        </div>
                                        <div class="p-mt-4">
                                            <hr />
                                            <div class="p-d-flex p-jc-center">
                                                <div class="p-text-normal p-name">We will be posting payments and release the official receipt after verification and from the time it is acknowledge</div>
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
import Divider from 'primevue/divider/sfc';

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
        BlockUI,
        Divider
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
        width: 90%;
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
    .p-total-number {
        font-size: 20px;
    }
    .hl {
        border: 1px solid red;
    }

</style>
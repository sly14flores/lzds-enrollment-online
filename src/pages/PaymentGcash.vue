<template>
    <LayoutWrapper>
        <div class="layout-main">
            <div class="lzds-width p-mx-auto">
                <form>
                    <div class="p-grid">
                        <div class="p-lg-8 p-sm-12 p-offset-2">
                            <BlockUI :blocked="false">
                                <Card>
                                    <template #title>
                                        <p class="p-text-center">Pay using Gcash</p>
                                        <hr />                            
                                    </template>
                                    <template #content>
                                        <div class="p-grid">
                                            <div class="p-lg-5 p-sm-12">
                                                <img src="../assets/payment/gcash.jpg" class="gcash" />
                                            </div>
                                            <div class="p-lg-7 p-sm-12">
                                                <div class="p-grid">
                                                    <div class="p-lg-12 p-mb-3">
                                                        <div class="p-text-normal p-name">Reference Number</div>
                                                        <div class="p-text-bold p-total-number">101070110017</div>
                                                    </div>
                                                </div>
                                                <div class="p-grid">
                                                    <div class="p-lg-12 p-mb-3">
                                                        <div class="p-text-normal p-name">Name of Student</div>
                                                        <div class="p-text-bold p-total-number">Juan Dela Cruz</div>
                                                    </div>
                                                </div>
                                                <div class="p-grid">
                                                    <div class="p-lg-12">
                                                        <div class="p-text-normal p-name">Total amount</div>
                                                        <div class="p-text-bold p-total-number">9,209</div>
                                                     </div>
                                                </div>
                                                <hr />
                                                <div class="p-grid">
                                                    <div class="p-lg-12">
                                                        <div class="p-text-italic p-mb-2">Gcash info</div>
                                                        <div class="p-text-normal p-name">Account Name</div>
                                                        <div class="p-text-bold p-total-number">Frederick Q. Tria</div>
                                                    </div>
                                                     <div class="p-lg-12">
                                                        <div class="p-text-normal p-name">Number</div>
                                                        <div class="p-text-bold p-total-number">09190017567</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                    <template #footer>
                                        <div class="lzds-center p-mt-1 p-mb-4">

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
        Card,
        Button,
        RadioButton,
        InputText,
        Dropdown,
        BlockUI  
    },    
    setup() {

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
    .gcash{
        width: 80%;
    }
    .p-name{
        font-size: 16px;
    }
    .p-total-number{
        font-size: 20px;
    }

</style>
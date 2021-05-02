<template>
    <LayoutWrapper>
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
                                        <div class="p-grid">
                                            <div class="p-lg-5 p-sm-12">
                                                <img src="../assets/payment/paypal.png" class="paypal" />
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
                                            </div>
                                        </div>
                                    </template>
                                    <template #footer>
                                        <div class="lzds-center p-mt-1 p-mb-4">
                                            <a href=""><button class="button p-ml-2" style="vertical-align:middle"><span>Pay</span></button></a>
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
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
                                        <p class="p-text-center">Payment</p>
                                        <hr />                            
                                    </template>
                                    <template #content>
                                        <div class="p-grid">
                                            <div class="p-lg-12 p-sm-12">
                                                <div class="p-grid">
                                                    <div class="p-lg-12 p-mb-3">
                                                        <div class="p-text-normal p-name">Reference Number</div>
                                                        <div class="p-text-bold p-total-number">101070110017</div>
                                                    </div>
                                                </div>
                                                <div class="p-grid">
                                                    <div class="p-lg-4 p-mb-3">
                                                        <div class="p-text-normal p-name">Name of Student</div>
                                                        <div class="p-text-bold p-total-number">Juan Dela Cruz</div>
                                                    </div>
                                                    <div class="p-lg-4 p-mb-3">
                                                        <div class="p-text-normal p-name">Birthdate</div>
                                                        <div class="p-text-bold p-total-number">June 10, 2006</div>
                                                    </div>
                                                    <div class="p-lg-4 p-mb-3">
                                                        <div class="p-text-normal p-name">Gender</div>
                                                        <div class="p-text-bold p-total-number">Male</div>
                                                    </div>
                                                </div>
                                                <div class="p-grid">
                                                    <div class="p-lg-4 p-mb-3">
                                                        <div class="p-text-normal p-name">Parent/Guardian</div>
                                                        <div class="p-text-bold p-total-number">Two Dela Cruz</div>
                                                    </div>
                                                    <div class="p-lg-4 p-mb-3">
                                                        <div class="p-text-normal p-name">Relationship</div>
                                                        <div class="p-text-bold p-total-number">Father</div>
                                                    </div>
                                                    <div class="p-lg-4 p-mb-3">
                                                        <div class="p-text-normal p-name">Contact Number</div>
                                                        <div class="p-text-bold p-total-number">0925689854</div>
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
    .p-name{
        font-size: 16px;
    }
    .p-total-number{
        font-size: 20px;
    }

</style>
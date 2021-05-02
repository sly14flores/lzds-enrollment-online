<template>
    <LayoutWrapper>
        <TopBar />
        <div class="layout-main">
            <div class="lzds-width p-mx-auto" style="margin-top: -15%">
                <div class="p-grid p-text-center">
                    <div class="p-col-8 p-offset-2">
                        <p style="color: #fff; font-size: 14px">Your enrollment information has been updated</p>
                        <hr />
                        <h1 style="color: #fff">Thank You!</h1>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </LayoutWrapper>
</template>

<script>

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
        NextButton        
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
        .gcash {
            width: 50%
        }        
    }

    @media only screen and (max-width: 1024px) {
        .lzds-width {
            width: 80%
        }
        .gcash {
            width: 60%
        }        
    }

    @media only screen and (max-width: 768px) {
        .lzds-width {
            width: 100%
        }
        .gcash {
            width: 80%
        }         
    }

    @media only screen and (max-width: 480px) {
        .lzds-width {
            width: 100%
        }
        .gcash {
            width: 80%
        }           
    }

    @media only screen and (max-width: 360) {
        .lzds-width {
            width: 100%
        } 
        .gcash {
            width: 90%
        }           
    }

    @media only screen and (max-width: 320) {
        .lzds-width {
            width: 100%
        }
        .gcash {
            width: 90%
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
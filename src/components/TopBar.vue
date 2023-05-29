<template>
    <div class="layout-topbar">
        
        <div class="p-grid">
            <div class="p-col-9 p-md-9">
                <img src="/images/lzds-logo-small.png" class="logo" />
                <p class="p-text-size">Online Enrollment System</p>
            </div>
            <div class="p-col-3 p-md-3">
                <p class="sy">SY: {{current_sy}}</p>
            </div>
        </div>
        
    </div>
</template>

<script>

import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    setup() {

        const store = useStore()

        store.dispatch('CURRENT_SY')

        const current_sy = computed(() => {
            return {...store.state.current_sy}
        })

        const _sy = '2023'

        return {
            current_sy
        }

    }
}

</script>

<style scoped>
    .logo {
        width: 90px;
        position: absolute;
        top: 0;
        margin-top: 1px;
    }
    .p-text-size {
        color: #000; 
        margin-left: 100px; 
        font-size: 1.5rem
    }
    .sy{
        color: #000;
        font-size: 1.5rem;
        text-align: right;
    }
    @media only screen and (max-width: 600px) {
        .p-text-size {
            color: #000; 
            margin-left: 100px; 
            font-size: 13px
        }
        .sy {
            color: #000;
            font-size: 13px;
            text-align: right;
        }
    }
</style>
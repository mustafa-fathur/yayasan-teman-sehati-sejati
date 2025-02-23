<script>
import Navbar from './partials/Navbar.vue'
import Footer from './partials/Footer.vue'

export default {
    components: {
        Navbar,
        Footer
    }
    
}
</script>

<template>
    <div>
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>
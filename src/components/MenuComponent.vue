<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">HOME</router-link>
            </li>
            <li>
                <router-link to="/cine">CINE</router-link>
            </li>
            <li>
                <router-link to="/musica">MUSICA</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuComponent"
    }
</script>

<style>
    ul#menu li{
        display: inline
    }
</style>
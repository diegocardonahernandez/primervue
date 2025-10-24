<template>
    <div id="nav">
        <ul id="menu">
            <li>
                <router-link class="link" to="/directivas">Directivas | </router-link>
            </li>
             <li>
                <router-link class="link" to="/ciclovida">Ciclo de Vida |</router-link>
            </li>
            <li>
                <router-link class="link" to="/">HOME |</router-link>
            </li>
            <li>
                <router-link class="link" to="/cine">CINE |</router-link>
            </li>
            <li>
                <router-link class="link" to="/musica">MUSICA |</router-link>
            </li>
            <li>
                <router-link class="link" to="/parimpar">PAR O IMPAR</router-link>
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

    ul{
        list-style-type: none;
    }

    #menu li{
        display: inline;
        margin: 0.2em;
    }

    .link{
        text-decoration: none;
        color: black;
        font-size: 1.1em;
    }

</style>
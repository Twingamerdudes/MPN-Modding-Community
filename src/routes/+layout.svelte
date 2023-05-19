<script>
    import "./app.css"
    import "../components/Navbar.svelte"
	import Navbar from "../components/Navbar.svelte";
</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Gemunu+Libre:wght@300;400;700;800&display=swap" rel="stylesheet">
</svelte:head>
<div class="navbar">
    <Navbar></Navbar>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<main>
    <slot></slot>
</main>
<style>
    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
    }
</style>
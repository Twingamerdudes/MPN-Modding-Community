<script>
    import logo from '$lib/images/Logo.webp';
</script>
<div class="Navbar">
    <img src={logo} class="Logo" alt="Madness Combat Project Nexus Logo">
    <h1><a href="/">Modding Community</a></h1>
</div>
<style>
    .Navbar {
        display: flex;
        align-items: center;
        background-color: #141414;
        color: #ffffff;
        font-family: 'Gemunu Libre', sans-serif;
        font-weight: 700;
        font-size: 2em;
        padding: 0.5em;
        position: fixed; /* Fixed positioning */
        top: 0; /* Position at the top */
        left: 0; /* Position at the left */
        width: 100%; /* Fill the entire width of the screen */
    }
    .Logo {
        width: 10em;
        margin-right: 0.5em;
        transform: translateY(-1.2em);
    }
    a{
        color: #ffffff;
        text-decoration: none;
        font-size: 50px;
        margin: 0;
        white-space: nowrap;
    }
    h1{
        transition: all 0.2s ease-out;
    }
    h1:hover{
        transform: scale(1.05);
    }
</style>
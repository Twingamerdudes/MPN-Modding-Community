<script>

</script>

<h1>NG+</h1>
<div class="links">
    <a href="/articles/NEM/NG+">Article</a>
    <a href="/articles/NEM/NG+/Discussion">Discussion</a>
</div>
<div class="content">
    <h2>Introduction to NG+</h2>
    <p>NG+ or New Game Plus is a feature of NEM that allows for the modification of maps.</p>
    <p>It was included in NEM v53 along with the new story campaign created by <a href="/articles/DarkSignal">DarkSignal</a>.</p>
    <h2>How it works</h2>
    <p>NG+ uses JSON files to inject custom data into maps.</p>
    <p>M:PN maps are comprised of data injectors that inject characters, interactives, lockers, and etc. into the map.</p>
    <p>NG+ uses this to its advantage by overriding the data injectors before a part of the map is loaded.</p>
    <p>NG+ can also write map templates for the user to modify by searching for this injectors and writing them to a json file.</p>
    <h2>Notes</h2>
    <p>NG+ does have it limitations like how it cannot edit all objects, and how it can't create new rooms.</p>
    <p>Some mods like <a href="articles/Lua-For-NEM">Lua for NEM</a> have added new features to NG+ like the ability to modify the position, rotation, and scale of the injectors</p>
</div>
<style>
    .links{
        text-align: center;
    }
    .links a{
        font-size: 15px;
        margin: 0;
        padding: 0;
        margin-left: 5px;
        margin-right: 5px;
    }
    h1{
        text-align: center;
        font-size: 50px;
        white-space: nowrap;
        margin-bottom: 0;
    }
    .content{
        margin-top: 20px;
        margin-left: 10%;
        margin-right: 10%;
        background-color: #242424;
        padding: 1em;
        border: 5px solid #333333;
    }
</style>
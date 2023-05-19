<script>
    import dossier from '$lib/images/Dossier.png';
</script>

<h1>Dossier</h1>
<div class="links">
    <a href="/articles/Dossier">Article</a>
    <a href="/articles/Dossier/Discussion">Discussion</a>
</div>
<div class="content">
    <h2>Introduction to Dossier</h2>
    <p>Dossier is a tool made by DarkSignal that allows easier writing of NEM Mods.</p>
    <p>It mostly specializes in JSON editing and has features for auto completion.</p>
    <p>Dossier had started production in summer of 2019 and was officially released on November of 2019</p>
    <p>One year later it was repurposed for NEM Modding on the 17th of Augest, 2020</p>
    <div class="image">
        <img src={dossier} alt="Dossier home page">
        <p class="caption">Dossier home page</p>
    </div>
    <h2>Installation</h2>
    <p>Download Dossier from it's <a href="https://drive.google.com/file/d/1o2IyZLc5Psh6reOKZh-Gu7b5eGQU2E8B/view">google drive</a> and extract it</p>
    <p>Run the exe, that's it.</p>
    <h2>Notes</h2>
    <ul>
        <li>Dossier saves files in it's db, you must drag the files from there into NEM</li>
        <li>As of 5/19/2023 Dossier is outdated and does not support map making or custom factions that the new NEM has.</li>
    </ul>
    <div class="sources">
        <h2>Sources</h2>
        <p>DarkSignal (thanks for answering my questions)</p>
        <a href="https://darksignal.newgrounds.com/news/post/1110099">Newgrounds announcement of Dossier conversion to NEM</a>
    </div>
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
    .sources{
        margin-top: 20px;
        margin-bottom: 0;
        font-size: 10px;
    }
    .sources a,
    .sources p{
        margin-top: 0;
        font-size: 10px;
    }

    .caption{
        font-size: 15px;
    }

    .image{
        background-color: #333333;
        padding: 20px;
        text-align: center;
        width: 1000px;
    }
</style>
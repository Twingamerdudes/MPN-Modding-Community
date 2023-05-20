<script>
    function getDate(){
        let date = new Date()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let year = date.getFullYear()
        return month + "/" + day + "/" + year
    }
</script>

<h1>NEM</h1>
<div class="links">
    <a href="/articles/NEM">Article</a>
    <a href="/articles/NEM/Discussion">Discussion</a>
</div>

<div class="content">
    <h2>What is NEM</h2>
    <p>NEM is a tool made by XDefault and <a href="/articles/DarkSignal">DarkSignal</a> that allows modders to create their own characters, origins, etc. As well as the ability to replace maps.</p>
    <p>NEM was started by XDefault in late 2019 and has been getting constant updates as of {getDate()}.</p>
    <p>XDefault has also added freecam, keybinds, and has prototyped a unity scene editor for NEM. He also prototyped the orginal system for custom characters.</p>
    <p>In 2/19/2020 DarkSignal would start working on NEM</p>
    <p>DarkSignal would soon make it so that json files where used to store custom stuff instead of txt files.</p>
    <p>Soon DarkSignal would expand the prototype to work for origins, factions, etc.</p>
    <p>The most recent version of NEM is v53 which added NG+ along with custom factions.</p>
    <h2>Installation</h2>
    <p>To install NEM go to it's <a href="https://drive.google.com/drive/folders/1COW73fbzlPJStjU-nJ1SMbNf8_SdW_Fm">google drive</a> and download the most recent build.</p>
    <p>Once have you haved downloaded the zip, extract it.</p>
    <p>Then go inside of it and drag the Custom Stuff's folder into M:PN's data directory.</p>
    <p>Then you can drag the files from the managed folder into M:PN's managed folder.</p>
    <p>If everything worked you should see Not Enough Madness (version) in the bottom right of the main menu.</p>
    <h2>Libaries using NEM</h2>
    <p>Soon after NEM was made tools were created that allowed you to use NEM to it's fullest potential.</p>
    <p>Some examples are:</p>
    <ul>
        <li><a href="/articles/Dossier">Dossier</a></li>
        <li><a href="/articles/Lua-For-NEM">Lua for NEM</a></li>
    </ul>
    <h2>Modders who use NEM</h2>
    <p>Since NEM is popular within the community, lots of modders have used NEM in their projects. Here are some notable examples:</p>
    <ul>
        <li>YellowAud</li>
        <li>madness interactive</li>
        <li>Twingamerdudes</li>
        <li>Squishy McGronts</li>
        <li>Madyln</li>
    </ul>
    <h2>Random facts</h2>
    <ul>
        <li>NEM used to use txt to process custom content into the game before switching to JSON.</li>
        <li>Getting json files that could be read by dossier orginally required running a java program that would read the games data to get certain info. It was removed in version 50 of NEM and has been replaced by the FileReader Class.</li>
        <li>Both creators were beta-testers for M:PN allowing them to start production of the mod before the game was fully released!</li>
    </ul>
    <div class="sources">
        <h2>Sources</h2>
        <p>DarkSignal (thanks for answering my questions).</p>
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
    .sources p{
        margin-top: 0;
        font-size: 10px;
    }
</style>
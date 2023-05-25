<script>
    import NGGUI from '$lib/images/NG+GUI.png';
</script>

<h1>NG+ GUI</h1>
<div class="links">
    <a href="/articles/NEM/NG+GUI">Article</a>
    <a href="/articles/NEM/NG+GUI/Discussion">Discussion</a>
</div>
<div class="content">
    <h2>Introduction to NG+ GUI</h2>
    <p>NG+ GUI is made by Twingamerdudes that is meant to provide a GUI for editing NG+ maps.</p>
    <h2>History</h2>
    <p>After NEM v53 released, dossier was not updated alongside it because of the burden that would cause.</p>
    <p>This caused Twingamerdudes to make a GUI editor for NG+ so that people don't have to edit NG+ JSON.</p>
    <p>The editor was orginally going to be a 3D Editor similar to Unity but was scrapped as he realized that NG+ didn't have support for transforms (position, rotation, and scale values).</p>
    <p>The editor then was going to be a Python Tkinker app but after a short bit, he decided to switch to C# WPF as tkinker was to hard to with for him.</p>
    <p>In May 21st, 2023, Twingamerdudes released the editor.</p>
    <h2>Installation</h2>
    <p>First download and extract the zip from the <a href="https://github.com/Twingamerdudes/NGPlus-Editor/releases/tag/1.0.0">downloads</a> page.</p>
    <p>Then run the exe in the extracted folder. If you encounter any errors, download the <a href="https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-7.0.5-windows-x64-installer">Dot NET 7.0.5 Desktop Runtime</a>.</p>
    <div class="image">
        <img src={NGGUI} alt="NG+ GUI Start Screen">
        <p class="caption">NG+ GUI Start Screen.</p>
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

    .caption{
        font-size: 15px;
    }

    .image {
        background-color: #333333;
        padding: 20px;
        text-align: center;
        max-width: 100%;
    }
    .image img{
        max-width: 100%;
    }
</style>
<script>
    let articles = ["/articles/NEM", "articles/NEM/StatCard_API", "/articles/Dossier", "/articles/Lua-For-NEM"]
    function formatArticle(article){
        let articleName = article.split("/")[2]
        let articlePath = article
        articleName = articleName.replaceAll("-", " ")
        return {name: articleName, path: articlePath}
        
    }
    function formatAllArticles(articles){
        let formattedArticles = []
        for(let i = 0; i < articles.length; i++){
            formattedArticles.push(formatArticle(articles[i]))
        }
        return formattedArticles
    }
</script>

<h1>Home</h1>
<div class="content">
    <p>Welcome fellow modder, here you will find resources to modding M:PN</p>
    <p>Check out some of most useful articles here:</p>
    <ul>
        {#each formatAllArticles(articles) as article}
            {#if article.name == "StatCard_API"}
                <ul>
                    <li><a href={article.path}>{article.name}</a></li>
                </ul>
            {:else}
                <li><a href={article.path}>{article.name}</a></li>
            {/if}
            <br>
        {/each}
    </ul>
    <p>Or you can check out all of our <a href="/articles/viewall">Articles</a></p>
    <p>We also have our own <a href="/discussion">forum</a> where you can chat with other people!</p>
</div>
<style>
    h1{
        text-align: center;
        font-size: 50px;
        white-space: nowrap;
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
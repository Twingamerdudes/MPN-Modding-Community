<script>
    let articles = ["/articles/NEM", "articles/NEM/StatCard_API", "/articles/Dossier", "/articles/Lua-For-NEM", "/articles/Project-Reclamation"]
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

<h1>Articles</h1>
<div class="content">
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
<script>
    export let data;
</script>

<h1>General Discussion</h1>
<p>Talk about M:PN Modding here!</p>
<p><b>Beware of impersonators, if someone says they are XDefault, DarkSignal, etc. chances are, they aren't.</b></p>
<div class="content">
    <form action="#" method="post">
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <input type="submit" value="Send">
    </form>
    {#if data.messages != null}
        {#each data.messages.messages.slice().reverse() as message}
            <div class="message">
                <p>{message.user}: {message.message}</p>
            </div>
        {/each}
    {:else}
            <p>No messages :(</p>
    {/if}
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
    p{
        text-align: center;
    }
    
    b{
        font-size: 20px;
    }
    .content{
        margin-top: 20px;
        margin-left: 10%;
        margin-right: 10%;
        background-color: #242424;
        padding: 1em;
        border: 5px solid #333333;
    }

    .message{
        margin-top: 1em;
    }

    form{
        display: flex;
        flex-direction: column;
    }

    textarea{
        resize: none;
        margin-bottom: 1em;
        background-color: #141414;
        border: none;
        border-radius: 5px;
        color: white;
        font-family: 'Gemunu Libre', sans-serif;
        padding: 5px;
    }

    textarea:focus {
        outline: none;
    }

    input[type="submit"]{
        width: 100px;
        align-self: center;
        background-color: #141414;
        border: none;
        border-radius: 5px;
        color: white;
        padding: 10px;
    }
</style>
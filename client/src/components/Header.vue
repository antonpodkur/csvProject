<template>
    <!-- <div class="header">
        <div class="logo">
            <a href="/">Home</a>
        </div>
        <div class="route-links">
            <a href="/add">Add table</a>
            <a href="/find">Find in table</a>
        </div>
    </div> -->
    <div class="header">
        <div class="inner-header">
            <div class="logo-container">
                <h1><a href="/">HOME</a></h1>
            </div>
            <ul class="navigation">
                <a href="/add"><li>Add</li></a>
                <a href="/find"><li>Find</li></a>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',

}
</script>

<style scoped>
    /* .header{
        display: flex;
        background: green;
        width: 90%;
        margin: 0 auto;
        height: 2em;
        justify-items: center;
        border: 5px none transparent;
    }

    .header .logo {
        text-align: left;
        flex: 2;
    }

    .header .route-links {
        flex: 1;
    }

    .header .route-links a {
        padding: 0 1em 0 1em;
    } */

    .header {
        margin: 0;
        padding: 0;
        width: 90%;
        height: 80px;
        background-color: #101010;
        margin: 0 auto;
    }

    .inner-header {
        width: 70%;
        height: 100%;
        display: block;
        margin: 0 auto;
        list-style: none;
    }

    .logo-container {
        height: 100%;
        display: table;
        float: left;
    }
    
    .logo-container h1{
        color: white;
        height: 100%;
        display: table-cell;
        vertical-align: middle;
        font-size: 32px;
    }

    .logo-container h1 a{
        color: white;
    }

    .navigation {
        margin-top: 0;
        float: right;
        height: 100%;
    }

    .navigation a {
        height: 100%;
        display: table;
        float: left;
        padding: 0px 20px;
    }

    .navigation a li {
        color: white;
        display: table-cell;
        vertical-align: middle;
    }

    .navigation a:last-child{
        padding-right: 0;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
        text-decoration: none;
    }

</style>

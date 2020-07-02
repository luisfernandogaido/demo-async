<!doctype html>
<html>
<?php head('index.css') ?>
<body>
<main>
    <h1>Demo Async</h1>
    <div class="botoes mesmo-tamanho">
        <a class="button" href="callbacks/index.php">Callbacks</a>
        <a class="button" href="promises/index.php">Promises</a>
        <a class="button" href="async-await/index.php">Async/await</a>
    </div>
</main>
<script type="module" src="<?= SITE ?>/core/js.js"></script>
<script type="module" src="index.js"></script>
</body>
</html>
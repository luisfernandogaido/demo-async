<!doctype html>
<html>
<?php head('index.css') ?>
<body>
<main>
    <h1>Async/await</h1>
    <div class="botoes mesmo-tamanho">
        <button id="b-timeout">Timeout</button>
        <button id="b-funcionarios">Funcionários (ajax)</button>
        <button id="b-folha-pagamento">Folha de pagamento (ajax)</button>
        <a class="button" href="../index.php">Voltar</a>
    </div>
</main>
<script type="module" src="<?= SITE ?>/core/js.js"></script>
<script type="module" src="index.js"></script>
</body>
</html>
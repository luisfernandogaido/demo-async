<?php
function raiz($dir): string
{
    return str_replace('\\', '/', $dir);
}

function site(): string
{
    return $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] .
        str_replace($_SERVER['DOCUMENT_ROOT'], '', RAIZ);
}

function head(string $cssFile)
{
    include RAIZ . '/core/head.html.php';
}

function d($v): void
{
    $printr = print_r($v, true);
    if (php_sapi_name() === 'cli') {
        echo "$printr\n";
    } else {
        $out = <<< HTML
            <br>
            <pre>
            $printr;
            </pre>
        HTML;
        echo $out;
    }
}

function dd($v): void
{
    d($v);
    exit;
}

function printJson($ret): void
{
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($ret, JSON_PRETTY_PRINT);
}
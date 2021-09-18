
# @dh-scripts/run

[Použití v anglickém jazyce (Readme in English)](https://github.com/hezky/dh-scripts-run/blob/master/README.md)

Devstack základní sada vývojářských nástrojů.

## Detail

### skript build
Kompilace babel kódu do ecmascriptu nad adresářem "src/js/". Zkompilovaný kód je přesunut do adresáře "lib/js/".

### skript clean
Smazání adresářů "div/", "lib/".

### skript eslint
Spuštění statické analýzy kódu nástrojem eslint nad adresáři "src/js/", "test/".

### skript devel
Spuštění příkladu.

### skript prepublishOnly
Skript životního cyklu prepublishOnly. Spouští se jen při příkazu "npm publish". Provedení skriptu před tím než je spuštěno samotné "npm publish" Aktuální skript spustí skripty "clean" a "build".

### skript test
Spuštění testů nad adresářem "src/js/".

## Použití

Do svého projektu nainstalujte balíček **@dh-scripts/run**.
V adresáři projektu spusťte příkaz:
``` javascript
$ npm install --save @dh-scripts/run
```

Do konfiguračního souboru **package.json** přidejte následující:
``` javascript
{
  ...
  "scripts": {
    "build": "dh-run build",
    "clean": "dh-run clean",
    "eslint": "dh-run eslint",
    "prepublishOnly": "dh-run prepublishOnly",
    "test": "dh-run test"
  },
  ...
}
```

Spuštění lze provést příkazem **npm run [skript]**.

## License
[MIT](https://choosealicense.com/licenses/mit/)

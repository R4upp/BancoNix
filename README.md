# Transações Banco Nix

## Executar projeto

```bash
npm update
```

```bash
http-server -o
```

## Filtros

**iniciarAPartir**
Inicializa a lista a partir do índice informado.
```javascript
$scope.numeros = [1,2,3,4,5,6,7];
```
```html
<tr ng-repeat="numero in numeros| iniciarAPartir: 5">
	{{ numero }}
</tr>
```
Resultado:
```html
<tr> 6 </tr>
<tr> 7 </tr>
```

**intervalo**
Funciona como se fosse um for. Repete X vezes onde X é o valor informado.
```javascript
$scope.iteracao = 3;
```
```html
<tr ng-repeat="index in [] | intervalo: iteracao ">
	{{ index }}
</tr>
```
Resultado:
```html
<tr> 1 </tr>
<tr> 2 </tr>
<tr> 3 </tr>
```

## Diretivas
**datainfo**
```html
<datainfo  data-label="Nome" ng-model="obj.nome"></datainfo>
```
resultado:
```html
<md-input-container class="md-block flex-gt-sm md-input-has-value" flex-gt-sm="">
	<label>Nome</label>
	<input class="ng-pristine ng-untouched ng-valid md-input ng-not-empty" value="Vader" aria-invalid="false" style="">
</md-input-container>
```
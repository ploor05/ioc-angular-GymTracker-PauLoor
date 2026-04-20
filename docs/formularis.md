# Formularis Reactius i Validacions

## Validacions síncrones
- `minLength(2)`: el terme ha de tenir almenys 2 caràcters.
- `maxLength(50)`: límit màxim de 50 caràcters.

## Validació asíncrona: codiDisponibleValidator
- Simula una consulta a l'API amb un retard de 500 ms.
- Si no hi ha resultats, retorna `{ sensResultats: true }`.
- Mostra un indicador de "Validant..." mentre està pendent.

## Debounce
- El formulari emet la cerca automàticament després de 400 ms sense escriure.
- Evita crides innecessàries a l’API.

# Serveis del projecte

En aquest projecte utilitzo dos serveis principals: un per carregar els elements del catàleg i un altre per gestionar els preferits i les notes.

## 1. ElementService

Aquest servei s’encarrega d’obtenir els elements del catàleg. Encara que en el projecte fem servir dades mock, està pensat com si fos un servei HTTP real.

Què gestiona:
- Estat de càrrega (carregant)
- Errors (error)
- Llista d’elements (elements)

Mètode principal:
- obtenirPopulars(): simula una crida HTTP i actualitza els signals.

Estats possibles:
- Carregant
- Error
- Èxit (elements carregats)

## 2. PreferitsService

Aquest servei controla tota la lògica dels preferits i els desa a localStorage. També gestiona les notes de cada element (Exercici 5).

Què guarda:
- id
- name
- value
- popular
- notes (array de strings)

Mètodes principals:
- afegirPreferit(element): afegeix un preferit
- eliminarPreferit(id): elimina un preferit
- esPreferit(id): comprova si un element està marcat
- totalPreferits(): retorna el total
- actualitzarNotes(id, notes): desa les notes del FormArray

Persistència:
- Carrega i desa automàticament a localStorage amb la clau "preferits-cataleg".

## Resum

- ElementService gestiona la càrrega d’elements i els estats.
- PreferitsService gestiona preferits, notes i persistència.
- Les notes formen part de l’Exercici 5 i es guarden juntament amb cada element.

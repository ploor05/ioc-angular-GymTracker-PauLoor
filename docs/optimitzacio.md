# Optimització — OnPush i Virtual Scroll (Exercici 4)

Aquest document descriu les optimitzacions aplicades al projecte per millorar el rendiment utilitzant:

- Estratègia de detecció de canvis **OnPush**
- Virtualització de llistes amb **Angular CDK (ScrollingModule)**

---

## 1. Components amb ChangeDetectionStrategy.OnPush

S’han triat dos components presentacionals perquè compleixen aquestes característiques:

- Reben dades a través de `@Input()`
- No tenen lògica complexa interna
- Renderitzen informació visual sense modificar estat global

### ✔ Component 1: `ElementCardComponent`

Motiu:
- És un component purament presentacional.
- Rep un element per `@Input()`.
- Amb OnPush només es renderitza quan l’objecte canvia de referència.

**Captura aquí**

---

### ✔ Component 2: `DetallComponent`

Motiu:
- Mostra informació d’un element seleccionat.
- No modifica dades, només les mostra.
- OnPush evita renders innecessaris quan no hi ha canvis.

**Captura aquí**

---

## 2. Virtualització amb Angular CDK

S’ha aplicat virtualització al catàleg principal per millorar el rendiment en llistes grans.

### ✔ Configuració utilitzada

- Mòdul importat: `ScrollingModule`
- Directiva utilitzada: `*cdkVirtualFor`
- Contenidor: `<cdk-virtual-scroll-viewport>`
- `itemSize`: 120 px (alçada aproximada de cada targeta)
- Nombre d’elements: **50+ elements** (requeriment de l’enunciat)

### ✔ Beneficis

- Només es renderitzen els elements visibles al viewport.
- Reducció dràstica de memòria i càlcul de canvi.
- Millora notable en scroll i fluïdesa.

### ✔ Captura del llistat virtualitzat

**Captura aquí**

---

## 3. Conclusió

Amb l’ús combinat de:

- **OnPush** → menys renders innecessaris  
- **Virtual Scroll** → renderització eficient de llistes grans  

l’aplicació millora significativament el rendiment i compleix tots els requisits de l’exercici 4.


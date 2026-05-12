# GymTracker — Aplicació Angular

Aplicació desenvolupada com a part de la UF4 del mòdul de Desenvolupament d’Interfícies.  
Permet consultar un catàleg d’exercicis, veure’n el detall i gestionar preferits.

---

## 1. Descripció del projecte

L’aplicació mostra un catàleg d’elements (exercicis) amb vista de detall i secció protegida amb login.  
Inclou optimitzacions com **OnPush** i **Virtual Scroll** per millorar el rendiment.

---

## 2. Mapa de rutes

| Path | Component | Accés |
|------|-----------|--------|
| `/` | CatalegComponent | Públic |
| `/detall/:id` | DetallComponent | Públic |
| `/login` | LoginComponent | Públic |
| `/preferits` | PreferitsComponent | Privat (requereix login) |

---

## 3. Instruccions d’execució en local

```bash
git clone [URL-del-repositori]
cd ioc-angular-GymTracker-PauLoor
npm install
ng serve

# Navegació i rutes

## Mapa de rutes
| Path | Component | Accés |
|------|------------|-------|
| /cataleg | CatalegPage | Públic |
| /cerca | Cerca | Públic |
| /detall/:id | Detall | Públic |
| /preferits | Preferits | Privat |
| /login | Login | Públic |
| ** | — | Públic |

## Configuració
S’ha definit `provideRouter(routes)` a `app.config.ts` i s’ha afegit `<router-outlet>` al `AppComponent`.  
Els enllaços de navegació utilitzen `routerLink` i `routerLinkActive` per marcar la ruta activa.

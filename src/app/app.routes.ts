import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'memory-leak',
    loadComponent: () =>
      import('./pages/memory-leak-example/memory-leak-example.component').then(
        (x) => x.MemoryLeakExampleComponent
      ),
  },
  {
    path: 'providers',
    loadComponent: () =>
      import(
        './pages/dependency-providers/dependency-providers.component'
      ).then((x) => x.DependencyProvidersComponent),
  },
  {
    path: 'tokens',
    loadComponent: () =>
      import(
        './pages/lightweight-injection-tokens/lightweight-injection-tokens.component'
      ).then((x) => x.LightweightInjectionTokensComponent),
  },
  {
    path: 'content',
    loadComponent: () =>
      import('./pages/content-projection/content-projection.component').then(
        (x) => x.ContentProjectionComponent
      ),
  },
  {
    path: 'patterns',
    loadComponent: () =>
      import('./pages/patterns/examples.component').then(
        (x) => x.ExamplesComponent
      ),
  },
  {
    path: 'forms',
    loadComponent: () =>
      import('./pages/page-forms/page-forms.component').then(
        (x) => x.PageFormsComponent
      ),
  },
  {
    path: 'dry',
    loadComponent: () =>
      import('./pages/dry/dry.component').then((x) => x.DryComponent),
  },
];

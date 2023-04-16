var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/modules/admin/admin-routing.module.ts","module":"AdminRoutingModule","children":[{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"","component":"AdminComponent","children":[{"path":"home","component":"HomeComponent"},{"path":"categories","component":"CategoriesComponent"},{"path":"books","component":"BooksComponent"},{"path":"authors","component":"AuthorsComponent"}],"canActivate":["AuthGuard","RoleGuard"],"data":{"allowedRoles":["admin"]}}],"kind":"module"},{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"endless_books","pathMatch":"full"},{"path":"endless_books","loadChildren":"./modules/shared/shared.module#SharedModule","canActivate":["HomeGuardGuard"]},{"path":"admin","loadChildren":"./modules/admin/admin.module#AdminModule","canActivate":["AuthGuard","RoleGuard"],"data":{"allowedRoles":["admin"]}},{"path":"user","loadChildren":"./modules/user/user.module#UserModule","canActivate":["AuthGuard","RoleGuard"],"data":{"allowedRoles":["user"]},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/user/user-routing.module.ts","module":"UserRoutingModule","children":[{"path":"","component":"UserComponent"},{"path":"categories","component":"CategoriesComponent","canActivate":["AuthGuard"]},{"path":"books","component":"AllBooksComponent","canActivate":["AuthGuard"]},{"path":"authors","component":"AllAuthorsComponent","canActivate":["AuthGuard"]},{"path":"categories/:id","component":"GetBooksByCategoryIdComponent","canActivate":["AuthGuard"]},{"path":"**","component":"NotFoundComponent"}],"kind":"module"}],"module":"UserModule"}]},{"path":"**","component":"NotFoundComponent"}],"kind":"module"},{"name":"routes","filename":"src/app/modules/shared/shared-routing.module.ts","module":"SharedRoutingModule","children":[{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"","component":"SharedComponent","children":[{"path":"home","component":"HomeComponent","canActivate":["HomeGuardGuard"]},{"path":"login","component":"LoginComponent","canActivate":["HomeGuardGuard"]},{"path":"register","component":"RegisterComponent","canActivate":["HomeGuardGuard"]}]}],"kind":"module"}]}
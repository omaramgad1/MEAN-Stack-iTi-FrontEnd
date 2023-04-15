'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mean-stack-i-ti-front-end documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-0467bcbdc1d35037d3053512a870d431a565860778f0baa30a52be4c0a6bc677c7743d85df9843a8ab5629d05415c6c8cd589598a7ac628e772ea49391c584d9"' : 'data-target="#xs-components-links-module-AdminModule-0467bcbdc1d35037d3053512a870d431a565860778f0baa30a52be4c0a6bc677c7743d85df9843a8ab5629d05415c6c8cd589598a7ac628e772ea49391c584d9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-0467bcbdc1d35037d3053512a870d431a565860778f0baa30a52be4c0a6bc677c7743d85df9843a8ab5629d05415c6c8cd589598a7ac628e772ea49391c584d9"' :
                                            'id="xs-components-links-module-AdminModule-0467bcbdc1d35037d3053512a870d431a565860778f0baa30a52be4c0a6bc677c7743d85df9843a8ab5629d05415c6c8cd589598a7ac628e772ea49391c584d9"' }>
                                            <li class="link">
                                                <a href="components/AddEditBookDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddEditBookDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddEditCategoryDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddEditCategoryDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BooksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-aa59e4b6b494b25b1b8e439bf5247ccc4b34ae61b31863223161cc1a013cdc4d42693e9af33f2067c27890b28ccbfd0f04fe2742b742f0c4bd547f6085e66bd5"' : 'data-target="#xs-components-links-module-AppModule-aa59e4b6b494b25b1b8e439bf5247ccc4b34ae61b31863223161cc1a013cdc4d42693e9af33f2067c27890b28ccbfd0f04fe2742b742f0c4bd547f6085e66bd5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-aa59e4b6b494b25b1b8e439bf5247ccc4b34ae61b31863223161cc1a013cdc4d42693e9af33f2067c27890b28ccbfd0f04fe2742b742f0c4bd547f6085e66bd5"' :
                                            'id="xs-components-links-module-AppModule-aa59e4b6b494b25b1b8e439bf5247ccc4b34ae61b31863223161cc1a013cdc4d42693e9af33f2067c27890b28ccbfd0f04fe2742b742f0c4bd547f6085e66bd5"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-a49c8a7e8de996c7cb0da455515c80e7043de1c0aa89f99658c82189ad80db9847d7f8068eb936b1842a9ba864662e625b153db4bbc881c2697cd696769316de"' : 'data-target="#xs-components-links-module-SharedModule-a49c8a7e8de996c7cb0da455515c80e7043de1c0aa89f99658c82189ad80db9847d7f8068eb936b1842a9ba864662e625b153db4bbc881c2697cd696769316de"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-a49c8a7e8de996c7cb0da455515c80e7043de1c0aa89f99658c82189ad80db9847d7f8068eb936b1842a9ba864662e625b153db4bbc881c2697cd696769316de"' :
                                            'id="xs-components-links-module-SharedModule-a49c8a7e8de996c7cb0da455515c80e7043de1c0aa89f99658c82189ad80db9847d7f8068eb936b1842a9ba864662e625b153db4bbc881c2697cd696769316de"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainNavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainNavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SharedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharedComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedRoutingModule.html" data-type="entity-link" >SharedRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-c000b11af05a0f7b553765139c69c0e86ae9375d5992520f698bf998ad04067d97d3a4c987b43ff6408426fda3c65144ee98fd2b495b016404066b895ba4408d"' : 'data-target="#xs-components-links-module-UserModule-c000b11af05a0f7b553765139c69c0e86ae9375d5992520f698bf998ad04067d97d3a4c987b43ff6408426fda3c65144ee98fd2b495b016404066b895ba4408d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-c000b11af05a0f7b553765139c69c0e86ae9375d5992520f698bf998ad04067d97d3a4c987b43ff6408426fda3c65144ee98fd2b495b016404066b895ba4408d"' :
                                            'id="xs-components-links-module-UserModule-c000b11af05a0f7b553765139c69c0e86ae9375d5992520f698bf998ad04067d97d3a4c987b43ff6408426fda3c65144ee98fd2b495b016404066b895ba4408d"' }>
                                            <li class="link">
                                                <a href="components/AllAuthorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllAuthorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllBooksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllBooksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GetBooksByCategoryIdComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetBooksByCategoryIdComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PhotoDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhotoDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CategoriesComponent-1.html" data-type="entity-link" >CategoriesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent-1.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarComponent-1.html" data-type="entity-link" >NavbarComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ConfirmDialogModel.html" data-type="entity-link" >ConfirmDialogModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomValidators.html" data-type="entity-link" >CustomValidators</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthorsService.html" data-type="entity-link" >AuthorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BooksService.html" data-type="entity-link" >BooksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoreService.html" data-type="entity-link" >CoreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/HomeGuardGuard.html" data-type="entity-link" >HomeGuardGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Author.html" data-type="entity-link" >Author</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/carouselImage.html" data-type="entity-link" >carouselImage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
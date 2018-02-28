import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';


export const appRoutes: Routes = [
    {
        path: 'books',
        component: BookComponent,
        data: { title: 'Book List' }
    },
    {
        path: 'book-details/:id',
        component: BookDetailsComponent,
        data: { title: 'Book Details' }
    },
    {
        path: 'book-create',
        component: BookCreateComponent,
        data: { title: 'Create Book' }
    },
    {
        path: 'book-edit/:id',
        component: BookEditComponent,
        data: { title: 'Edit Book' }
    },
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    }
];

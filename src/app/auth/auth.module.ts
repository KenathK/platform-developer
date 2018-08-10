import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {MatInputModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import {AuthService} from "./auth.service";
import * as fromAuth from './auth.reducer';
import { AuthGuard } from './auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        RouterModule.forChild([{path: '', component: LoginComponent}]),
        StoreModule.forFeature('auth', fromAuth.authReducer),
        EffectsModule.forFeature([AuthEffects]),
        SharedModule
    ],
    declarations: [LoginComponent],
    exports: [
        LoginComponent
    ]
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                AuthService,
                AuthGuard
            ]
        }
    }
}

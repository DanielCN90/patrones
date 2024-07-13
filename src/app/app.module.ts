import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './patrones/intro/intro.component';
import { ArraysComponent } from './arrays/arrays.component';
import { SingletonComponent } from './patrones/singleton/singleton.component';
import { StrategyComponent } from './patrones/strategy/strategy.component';
import { ObserverComponent } from './patrones/observer/observer.component';
import { DecoratorComponent } from './patrones/decorator/decorator.component';
import { BuilderComponent } from './patrones/builder/builder.component';
import { StateComponent } from './patrones/state/state.component';
import { BridgeComponent } from './patrones/bridge/bridge.component';
import { FactoryComponent } from './patrones/factory/factory.component';
import { AdapterComponent } from './patrones/adapter/adapter.component';
import { MediatorComponent } from './patrones/mediator/mediator.component';
import { PrototypeComponent } from './patrones/prototype/prototype.component';
import { ChainOfResponsabilityComponent } from './patrones/chain-of-responsability/chain-of-responsability.component';
import { CommandComponent } from './patrones/command/command.component';
import { MementoComponent } from './patrones/memento/memento.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ArraysComponent,
    SingletonComponent,
    StrategyComponent,
    ObserverComponent,
    DecoratorComponent,
    BuilderComponent,
    StateComponent,
    BridgeComponent,
    FactoryComponent,
    AdapterComponent,
    MediatorComponent,
    PrototypeComponent,
    ChainOfResponsabilityComponent,
    CommandComponent,
    MementoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

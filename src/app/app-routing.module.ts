import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './patrones/intro/intro.component';
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

const routes: Routes = [{
  path:'intro',
  component:IntroComponent
},{
  path:"singleton",
  component:SingletonComponent
},{
  path:"strategy",
  component:StrategyComponent
},{
  path:"observer",
  component:ObserverComponent
},{
  path:"decorator",
  component:DecoratorComponent
},{
  path:"builder",
  component:BuilderComponent
},{
  path:"state",
  component:StateComponent
},{
  path:"bridge",
  component:BridgeComponent
},{
  path:"factory",
  component:FactoryComponent
},{
  path:"adapter",
  component:AdapterComponent
},{
  path:"mediator",
  component:MediatorComponent
},{
  path:"prototype",
  component:PrototypeComponent
},{
  path:"chain",
  component:ChainOfResponsabilityComponent
},{
  path:"command",
  component:CommandComponent
},{
  path:"memento",
  component:MementoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from "./pages/contact/contact.component";
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from "./pages/home/home.component";
import { JoinUsComponent } from "./pages/join-us/join-us.component";
import { LeadershipComponent } from "./pages/leadership/leadership.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "events", component: EventsComponent },
  { path: "leadership", component: LeadershipComponent },
  { path: "joinus", component: JoinUsComponent },
  { path: "contact", component: ContactComponent },

  // otherwise redirect to home
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

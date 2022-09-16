import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";

export const App = () => (
  <div className="app" data-testid="application">
    <Header />
    <Content />
  </div>
);

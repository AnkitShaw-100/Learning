import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactForm />
      </main>
    </div>
  );
}

export default App;

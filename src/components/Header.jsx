import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img className="img" src={logo} alt="Investment Calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

export default function Header() {
    const randomWord = reactDescriptions[genRandomInt(2)]
  
    return (
      <header>
        <h1>BalanceBites</h1>
        <p>
          Healthy food fuels our bodies and minds, promoting overall well-being and vitality.
        </p>
      </header>
    );
  }
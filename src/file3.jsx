export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

 export function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
      </div>
    );
  }
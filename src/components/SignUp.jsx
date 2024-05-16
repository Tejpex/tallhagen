

export const SignUp = () => {

  return (
    <div className="sign-up-box">
      <h2>Anmäl dig här:</h2>
      {/*<a href="https://docs.google.com/forms/d/e/1FAIpQLSdQZgv9U3MadRw3ljhFnQ0j7nVXV0jUGOdxvwkpF5effyt6CQ/viewform?usp=sf_link">*/}
        <button className="button">
          {" "}
          <img className="crab" src="/crab.png" alt="Icon of a crab" />
          Ta mig till anmälan
        </button>
      {/*</a>*/}
      <p>Anmälan är stängd!</p>
    </div>
  )
}

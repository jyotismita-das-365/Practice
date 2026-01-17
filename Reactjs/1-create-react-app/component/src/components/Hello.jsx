function Hello() {

  let myName = 'Jyotismita';
  let fullName = () => {
    return 'Jyotismita Das';
  }

  return <h1>
    Hello This is the future speaking. I am your future friend {myName} <br /> {fullName()}
  </h1>
}

export default Hello;
import Input from "./Input";

const FullInput = ({ touched, errors,...props}) => {
  return (<> {touched && errors && <p>{errors}</p>}<Input {...props}></Input></>)
}

export default FullInput
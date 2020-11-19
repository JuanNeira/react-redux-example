const Button = (props) => {

  const style = {
    'minWidth': '100px',
    'height': '30px',
    'margin': '25px',
    'color': 'orange',
    'fontSize': '18px',
    'backgroundColor': 'white',
    'border': '1px solid orange',
    'borderRadius': '5px',
    'outline': 'none',
    'cursor': 'pointer',
  };

  return (
    <button style={style} onClick={props.click}>{props.text}</button>
  );
}

export default Button;
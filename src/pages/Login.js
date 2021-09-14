import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  useRef,
} from 'react';
//import { useHistory } from 'react-router-dom';

//import Header from '../Layout/Header';
//import Home from '../HomePage/Home';
import classes from './Login.module.css';
import Button from './Button';
import Card from './Card';
import AuthContext from '../store/auth-context';
import Input from '../form elements/Input';

const usernameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val === 'root' };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value === 'root'};
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val === 'root'};
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value === 'root' };
  }
  return { value: '', isValid: false };
};

const Login = () => {
  //const [enteredUsername, setEnteredUsername] = useState('');
  //const [enteredPassword, setEnteredPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const ctx = useContext(AuthContext);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  // const name = 'root';
  // const pass = 'root';
  // let history = useHistory();

  useEffect(() => {
    //console.log('EFFECT RUNNING');

    return () => {
      //console.log('EFFECT CLEANUP');
    };
  }, []);

  const { isValid: usernameIsValid } = usernameState;
  const { isValid: passwordIsValid } = passwordState;

  const validateUsernameHandler = () => {
    dispatchUsername({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      //console.log('Checking form validity!');
      setFormIsValid(usernameIsValid && passwordIsValid);
    }, 500);

    return () => {
      //console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [usernameIsValid, passwordIsValid]);

  const onUsernameChangeHandler = (event) => {
    dispatchUsername({ type: 'USER_INPUT', val: event.target.value });
  };

  const onPasswordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //console.log('Hi');
    // if (enteredUsername === name && enteredPassword === pass) {
    //   console.log('Hi');
    //   ctx.onLogIn();
    //   //history.push('/home');
    // }
    if (formIsValid) {
      ctx.onLogIn(usernameState.value, passwordState.value);
    } else if (!usernameIsValid) {
      usernameInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler} className={classes.input}>
        <label className={classes.login}>Log In</label>
        <label htmlFor='username' className={classes.label}>
          Username
        </label>
        <Input
          ref={usernameInputRef}
          id='username'
          type='text'
          isValid={usernameIsValid}
          value={usernameState.value}
          onChange={onUsernameChangeHandler}
          onBlur={validateUsernameHandler}
        ></Input>
        <label htmlFor='password' className={classes.label}>
          Password
        </label>
        <Input
          ref={passwordInputRef}
          id='password'
          type='password'
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={onPasswordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        <Button type='submit'>LogIn</Button>
      </form>
    </Card>
  );
};

export default Login;
